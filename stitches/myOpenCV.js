   const canvas = document.getElementById('patternCanvas');
        const ctx = canvas.getContext('2d');
        const hiddenTemplateCanvas = document.getElementById('hiddenTemplateCanvas');
        const tCtx = hiddenTemplateCanvas.getContext('2d');
        const detectedCanvas = document.getElementById('detectedCanvas');
const detectedCtx = detectedCanvas.getContext('2d');

        let bgImage = null;
        let placedSymbols = []; 
        let detectedSymbols = [];
       let currentSymbol = 'chain';
        let symbolSize = 30;
        let showBackground = true;
        let openCvReady = false;
     

  /*      // Dina SVG-mallar
        const SVG_TEMPLATES = {
            ch: `<svg xmlns="http://w3.org" viewBox="0 0 100 100"><ellipse cx="50" cy="50" rx="40" ry="20" fill="none" stroke="black" stroke-width="8"/></svg>`,
            sc: `<svg xmlns="http://w3.org" viewBox="0 0 100 100"><path d="M20,20 L80,80 M80,20 L20,80" fill="none" stroke="black" stroke-width="8"/></svg>`
        };*/

        const loadedSvgImages = {};

    
       function preloadSVGs() {
    maskar.forEach(element => {
        const svgString = element.svg_g;

        if (!svgString) {
            console.warn("Ingen SVG hittades för:", element);
            return;
        }

        const svgBlob = new Blob(
            [svgString],
            { type: 'image/svg+xml;charset=utf-8' }
        );

        const url = URL.createObjectURL(svgBlob);
        const img = new Image();

        img.onload = () => {
            loadedSvgImages[element.desc] = img;

            URL.revokeObjectURL(url);

            drawEverything();
        };

        img.onerror = () => {
            console.error(
                "Kunde inte ladda SVG:",
                element.desc
            );

            URL.revokeObjectURL(url);
        };

        img.src = url;
    });
}
        canvas.width = 800; canvas.height = 600;

        document.getElementById('imageLoader').addEventListener('change',
             function(e) {
            const reader = new FileReader();
            reader.onload = function(event) {
                bgImage = new Image();
                bgImage.onload = function() {
                    canvas.width = bgImage.width; canvas.height = bgImage.height;
                     detectedCanvas.width = bgImage.width;
    detectedCanvas.height = bgImage.height;
                    placedSymbols = []; // Nollställ mönster
                    detectedSymbols = [];
                     detectedCtx.clearRect(
        0,
        0,
        detectedCanvas.width,
        detectedCanvas.height
    );

                    drawEverything();
                }
                bgImage.src = event.target.result;
            }
          reader.readAsDataURL(e.target.files[0]);
        });

        document.getElementById('sizeSlider').addEventListener('input', (e) => symbolSize = parseInt(e.target.value));
        document.getElementById('toggleBg').addEventListener('change', (e) => { showBackground = e.target.checked; drawEverything(); });

        // Klicka för att sätta den FÖRSTA symbolen (Mallen för OpenCV)
        canvas.addEventListener('mousedown', function(e) {
            if (!bgImage) return; 
            const rect = canvas.getBoundingClientRect();
            const x = (e.clientX - rect.left) * (canvas.width / rect.width);
            const y = (e.clientY - rect.top) * (canvas.height / rect.height);

            // Vi sparar symbolen
           placedSymbols.push({ x: x, y: y, type: currentSymbol, 
            size: symbolSize,   rotation: 0 });
           //const svgImg = loadedSvgImages[target.type];


           
           drawEverything();
        });

        // ====================================================
        // OPENCV AUTOMATISK TEMPLATE MATCHING ALGORITM
        // ====================================================
document.getElementById('scanBtn').addEventListener('click', function () {

    console.log(bgImage, placedSymbols, openCvReady);

    if (!bgImage || placedSymbols.length === 0 || !openCvReady) {
        alert("Ladda upp en bild och klicka ut minst en symbol på mönstret som referens först!");
        return;
    }

    // ---------------------------------------------------------
    // REFERENSSYMBOL
    // ---------------------------------------------------------

    const target = placedSymbols[placedSymbols.length - 1];

    // Klipp ut referensbilden från ORIGINALBILDEN
    hiddenTemplateCanvas.width = target.size;
    hiddenTemplateCanvas.height = target.size;

    tCtx.clearRect(
        0,
        0,
        target.size,
        target.size
    );

    tCtx.drawImage(
        bgImage,
        target.x - target.size / 2,
        target.y - target.size / 2,
        target.size,
        target.size,
        0,
        0,
        target.size,
        target.size
    );

    // ---------------------------------------------------------
    // OPEN CV
    // ---------------------------------------------------------

    let src = cv.imread(canvas);

    let originalTemplate = cv.imread(hiddenTemplateCanvas);

    const threshold =
        parseFloat(
            document.getElementById('thresholdSlider').value
        ) / 100;

    console.log("Match threshold:", threshold);

    // ---------------------------------------------------------
    // ROTATIONSOMRÅDEN
    //
    // Först testar vi var 10:e grad.
    //
    // -90, -80, -70 ... 0 ... +70, +80, +90
    //
    // Det är mycket snabbare än att testa varje grad.
    // ---------------------------------------------------------

    const angles = [];

    for (let angle = -90; angle <= 90; angle += 10) {
        angles.push(angle);
    }

    // Här sparas bästa träffen för varje position.
    //
    // key = position på bilden
    // value = bästa score + rotation
    //
    const bestMatches = new Map();

    // ---------------------------------------------------------
    // ROTERA EN TEMPLATE
    // ---------------------------------------------------------

    function createRotatedTemplate(source, angle) {

        // Vi behöver extra plats eftersom en kvadrat som roteras
        // annars kan klippas i hörnen.

        const size = source.rows;

        const rotatedSize =
            Math.ceil(size * Math.SQRT2);

        const padding =
            Math.floor((rotatedSize - size) / 2);

        let padded = new cv.Mat();

        cv.copyMakeBorder(
            source,
            padded,
            padding,
            padding,
            padding,
            padding,
            cv.BORDER_REPLICATE
        );

        const center = new cv.Point(
            padded.cols / 2,
            padded.rows / 2
        );

        const rotationMatrix =
            cv.getRotationMatrix2D(
                center,
                angle,
                1
            );

        let rotated = new cv.Mat();

        cv.warpAffine(
            padded,
            rotated,
            rotationMatrix,
            new cv.Size(
                padded.cols,
                padded.rows
            ),
            cv.INTER_LINEAR,
            cv.BORDER_REPLICATE
        );

        padded.delete();
        rotationMatrix.delete();

        return rotated;
    }

    // ---------------------------------------------------------
    // SKANNA ALLA ROTATIONER
    // ---------------------------------------------------------

    for (const angle of angles) {

        console.log("Testar rotation:", angle);

        let rotatedTemplate =
            createRotatedTemplate(
                originalTemplate,
                angle
            );

        let dst = new cv.Mat();

        cv.matchTemplate(
            src,
            rotatedTemplate,
            dst,
            cv.TM_CCOEFF_NORMED
        );

        const templateWidth =
            rotatedTemplate.cols;

        const templateHeight =
            rotatedTemplate.rows;

        // -----------------------------------------------------
        // HITTA ALLA MATCHNINGAR FÖR DENNA ROTATION
        // -----------------------------------------------------

        for (let row = 0; row < dst.rows; row++) {

            for (let col = 0; col < dst.cols; col++) {

                const score =
                    dst.data32F[
                        row * dst.cols + col
                    ];

                if (score < threshold) {
                    continue;
                }

                // Centrum för matchningen
                const matchX =
                    col + templateWidth / 2;

                const matchY =
                    row + templateHeight / 2;

                // -------------------------------------------------
                // Gruppera träffar som ligger på samma symbol.
                //
                // Vi använder en ruta ungefär lika stor som
                // originalsymbolen.
                // -------------------------------------------------

                const gridX =
                    Math.round(
                        matchX / target.size
                    );

                const gridY =
                    Math.round(
                        matchY / target.size
                    );

                const key =
                    `${gridX},${gridY}`;

                // -------------------------------------------------
                // Spara bara den BÄSTA rotationen för positionen
                // -------------------------------------------------

                const previous =
                    bestMatches.get(key);

                if (
                    !previous ||
                    score > previous.score
                ) {

                    bestMatches.set(key, {
                        x: matchX,
                        y: matchY,
                        score: score,
                        rotation: angle
                    });
                }
            }
        }

        rotatedTemplate.delete();
        dst.delete();
    }

    // ---------------------------------------------------------
    // KONVERTERA MATCHNINGAR TILL detectedSymbols
    // ---------------------------------------------------------

    detectedSymbols = [];

    bestMatches.forEach(match => {

        detectedSymbols.push({
            x: match.x,
            y: match.y,
            type: target.type,
            size: target.size,
            rotation: match.rotation,
            score: match.score
        });

        console.log(
            "Hittad symbol:",
            Math.round(match.x),
            Math.round(match.y),
            "rotation:",
            match.rotation,
            "score:",
            match.score.toFixed(3)
        );
    });

    // ---------------------------------------------------------
    // FRIGÖR OPEN CV-MINNE
    // ---------------------------------------------------------

    originalTemplate.delete();
    src.delete();

    // ---------------------------------------------------------
    // VISA RESULTATET
    // ---------------------------------------------------------

    drawEverything();

    alert(
        "Skanning klar! Hittade " +
        detectedSymbols.length +
        " symboler."
    );
});

function drawEverything() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    if (bgImage && showBackground) {
        ctx.drawImage(bgImage, 0, 0);
    } else {
        ctx.fillStyle = '#fff';
        ctx.fillRect(
            0,
            0,
            canvas.width,
            canvas.height
        );
    }
// Automatiskt hittade symboler
detectedSymbols.forEach((sym) => {

    const svgImg = loadedSvgImages[sym.type];

    if (!svgImg) {
        return;
    }

    ctx.save();

    // Flytta koordinatsystemets origo till symbolens centrum
    ctx.translate(sym.x, sym.y);

    // Rotera
    ctx.rotate(sym.rotation * Math.PI / 180);

    // Rita symbolen centrerad
    ctx.drawImage(
        svgImg,
        -sym.size / 2,
        -sym.size / 2,
        sym.size,
        sym.size
    );

    ctx.restore();
});
    if (!bgImage) {
        return;
    }

    // Automatiskt hittade symboler
    ctx.drawImage(
        detectedCanvas,
        0,
        0
    );

    // Användarens referenssymbol
   placedSymbols.forEach((sym, index) => {

    const svgImg = loadedSvgImages[sym.type];

    if (!svgImg) {
        return;
    }

    ctx.save();

    ctx.translate(sym.x, sym.y);

    ctx.rotate((sym.rotation || 0) * Math.PI / 180);

    ctx.drawImage(
        svgImg,
        -sym.size / 2,
        -sym.size / 2,
        sym.size,
        sym.size
    );

    if (
        index === placedSymbols.length - 1 &&
        showBackground
    ) {
        ctx.strokeStyle = '#007bff';
        ctx.lineWidth = 3;

        ctx.strokeRect(
            -sym.size / 2 - 2,
            -sym.size / 2 - 2,
            sym.size + 4,
            sym.size + 4
        );
    }

    ctx.restore();
});
}
 // Export till PNG
document.getElementById('exportBtn').addEventListener('click', 
function() {const link = document.createElement('a');
link.download = 'ai-igenkant-virkmönster.png';link.href = canvas.toDataURL('image/png');
link.click();});
/*### Hur OpenCV-kodblocket fungerar under huven:
1. **`cv.imread()`**: Tar data från HTML5-canvasen och konverterar pixlarna till en OpenCV-matris (`Mat`) som algoritmerna kan förstå.
2. **`cv.matchTemplate(..., cv.TM_CCOEFF_NORMED)`**: Det magiska steget. Den "glider" din referenssymbol över hela bilden som ett förstoringsglas och beräknar en procentsats (0.0 till 1.0) för hur väl pixlarna stämmer överens.
3. **`dst.data32F`**: Läser ut resultatet från skanningen. Om poängen på en specifik koordinat är högre än värdet på din känslighets-slider (t.ex. `0.70`), räknas det som en träff.
4. **Minnesrensning (`.delete()`)**: Eftersom OpenCV är skrivet i C++ i botten rensar JavaScript inte minnet automatiskt för dessa objekt. Vi anropar därför `.delete()` i slutet av funktionen för att förhindra att webbläsaren kraschar eller blir långsam.

### Tips för bästa resultat:
* **Scan-känslighet:** Om bilden är *väldigt* suddig, sänk känsligheten (slidern) mot t.ex. `0.60`. Om appen hittar för många falska symboler på tomma ställen, höj känsligheten mot `0.80`.
* **Exakt beskärning:** När du klickar ut din första referenssymbol, försök att pricka så exakt i mitten av den suddiga symbolen som möjligt, och anpassa storleks-slidern så att rutan matchar symbolens storlek i diagrammet.

<FollowUp>
Vill du bygga ut OpenCV-skannern så att den även **testar att rotera mallen automatiskt** i bakgrunden (ifall virksymbolerna i ditt diagram är svängda i en cirkel)?
</FollowUp>*/
