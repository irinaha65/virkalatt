const canvas = document.getElementById('crochetCanvas');
const ctx = canvas.getContext('2d');

// --- INSTÄLLNINGAR FÖR TYGET ---
const maskBredd = 36;  // Bredden på varje V-maska
const maskHojd = 30;   // Höjden på varje V-maska
const radAvstand = 16; // VIKTIGT: Mindre än höjden så att raderna överlappar varandra nedåt!
const kolAvstand = 32; // Mindre än bredden så att maskorna går omlott i sidled
let img = new Image();
let url;
function createImage(element) {
    let svgString = getSVG(element);

    // 1. Rensa bort eventuella trasiga xmlns och lägg till den exakta korrekta strängen
    if (!svgString.includes('xmlns="http://w3.org"')) {
        // Ta bort felaktiga varianter om de råkat skapas tidigare
        svgString = svgString.replace(/xmlns="[^" ]*"/, '');
        // Lägg till den korrekta namnrymden
        svgString = svgString.replace('<svg', '<svg xmlns="http://w3.org"');
    }

    console.log("Validerad SVG-sträng:", svgString);

    // 2. Skapa ett bildobjekt
    const img = new Image();

    img.onload = function () {
        console.log("Bilden har laddats perfekt!");

        // 3. Rita ut på canvas (använd dina egna canvas-variabler här)
        // ctx.drawImage(img, 0, 0);

        // Städa upp objekt-URL:en ur minnet
        URL.revokeObjectURL(img.src);
    };

    img.onerror = function (err) {
        console.error("Inladdning misslyckades. Kontrollera SVG-strukturen.", err);
    };

    // 4. Skapa Blob och tilldela källa
    const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    img.src = url;
}

// Funktion som ritar en klassisk virkad "V-maska"
function ritaMaska(x, y) {

    // 4. Skapa ett bildobjekt och sätt källan

    img.onload = function () {
        // 5. Rita på canvas när bilden har laddats
        ctx.drawImage(img, x, y, maskBredd, maskHojd);

        // Frigör minne från objekt-URL:en
        URL.revokeObjectURL(url);
    };

}

// --- 1. RITA STYCKET (NERIFRÅN OCH UPP) ---
let startX = 40;
let startY = 220; // Vi börjar lingo ner på canvasen
let antalRader = 4;
let antalKolumner = 12;
let startXicon = 40;
let startYicon = 40;
/*allaMaskar.forEach(element => {


    console.log(`Ritar maska ${element.name} på position 
                (${startXicon}, ${startYicon})`);
    ritaMaska(startXicon, startYicon, element);

    startXicon += 50;
    if (startXicon > canvas.width - 50) {
        startXicon = 40;
        startYicon += 50;
    }
});*/
let table = document.getElementById('maskar')
function visaSymbols() {
    allaMaskar.forEach(element => {

        let td1 = document.createElement('div')
        td1.innerHTML = getSVG(element)
        td1.addEventListener('click', () => {
            console.log(`Ritar maska ${element.name} `);
            createImage(element);
        })
        table.appendChild(td1)



    })
}
visaSymbols();
// 2. Lyssna efter klick på canvasen
canvas.addEventListener('click', function (event) {
    console.log(img);
    // Kontrollera att bilden har hunnit laddas in innan vi ritar
    if (!img.complete) return;

    // 3. Räkna ut exakt var musen är *inuti* canvasen
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // 4. Rita bilden
    // Alternativ A: Placerar bildens övre vänstra hörn där du klickar

    ritaMaska(mouseX - maskBredd / 2, mouseY - maskHojd / 2);
});