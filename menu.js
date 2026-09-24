 
    // Hämta elementen från HTML
const sidebar = document.getElementById("sidebar");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
 // Spara en kopia av ursprungstexten så att vi kan återställa den vid ny sökning
        const contentContainer = document.getElementById('maskar');
        const originalHTML = contentContainer.innerHTML;
        const searchInput = document.getElementById('searchBox');
// Denna funktion tar bort alla gamla <mark>-taggar och återställer texten
function clearHighlights(container) {
    const marks = container.querySelectorAll('mark');
    marks.forEach(mark => {
        const parent = mark.parentNode;
        parent.replaceChild(document.createTextNode(mark.textContent), mark);
        parent.normalize(); // Smälter samman splittrade textnoder
    });
}

// Denna funktion går igenom alla textnoder och sätter in <mark>-taggar
function highlightTextNodes(node, regex) {
    // Om det är en textnod och den inte är tom
    if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== '') {
        const matches = node.nodeValue.match(regex);
        
        if (matches) {
            const parent = node.parentNode;
            // Hoppa över om vi redan är inuti en mark-tagg eller i skript/stilar
            if (parent.tagName === 'MARK' || parent.tagName === 'SCRIPT' || parent.tagName === 'STYLE') return;

            const fragments = document.createDocumentFragment();
            let lastIndex = 0;

            // Ersätt texten med en blandning av text och <mark>-element
            node.nodeValue.replace(regex, function(match, offset) {
                // Lägg till texten före matchningen
                fragments.appendChild(document.createTextNode(node.nodeValue.substring(lastIndex, offset)));
                
                // Skapa och lägg till <mark>-elementet
                const markElement = document.createElement('mark');
                markElement.textContent = match;
                fragments.appendChild(markElement);

                lastIndex = offset + match.length;
                return match;
            });

            // Lägg till eventuell resterande text efter sista matchningen
            fragments.appendChild(document.createTextNode(node.nodeValue.substring(lastIndex)));
            
            // Ersätt den gamla rena textnoden med vårt nya fragment
            parent.replaceChild(fragments, node);
        }
    } else {
        // Om det är ett element, gå djupare ner i strukturen (rekursion)
        for (let i = 0; i < node.childNodes.length; i++) {
            highlightTextNodes(node.childNodes[i], regex);
            // Justera indexet om trädstrukturen ändrades under körningen
            if (node.childNodes[i].tagName === 'MARK') i++; 
        }
    }
}

// Lyssna på Enter-tryck
searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        
        // 1. Ta alltid bort gamla markeringar först
        clearHighlights(contentContainer);
        
        const searchTerm = searchInput.value.trim();
        
        // 2. Om rutan inte är tom, kör den säkra sökningen
        if (searchTerm !== '') {
            // Undvik att krascha om användaren skriver specialtecken som . ? * + ( ) [ ]
            const escapedTerm = searchTerm.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
            const regex = new RegExp(escapedTerm, 'gi');
            
            highlightTextNodes(contentContainer, regex);
        }
           // 3. Hitta den allra första gula markeringen på sidan
            const firstMatch = contentContainer.querySelector('mark');
            
            if (firstMatch) {
                // Scrolla mjukt så att det första elementet hamnar i mitten av skärmen
                firstMatch.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
    }
});
    
let goback = document.createElement("div"); 
goback.id = "goback";
goback.innerHTML = '<img src="back-arrow.png" alt="Back Arrow" id="backArrow">';
// Öppna panelen när man klickar på öppna-knappen
openBtn.addEventListener("click", () => {
  sidebar.classList.add("open");
});

// Stäng panelen när man klickar på stäng-knappen
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("open");
});
let table = document.getElementById('maskar')
let output = document.getElementById('output')
function visaMaskar () {
  maskar.forEach(element => {
    let tr = document.createElement('tr')
    let td1 = document.createElement('td')
    if(element.svg_g){td1.innerHTML =element.svg_g}
    else{
    let width = 23
    if(element.width){
      width = element.width
    }
    td1.innerHTML =
      `<svg preserveAspectRatio="xMidYMid meet" class="symbolIcon" viewBox="-76.8 -76.8 665.6 665.6" fill="#000"
    style="display: block; box-sizing: content-box; background: rgb(255, 255, 255); width:`
    +width+`px; height: 23px;">
    <g style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;
    stroke-linejoin:round;stroke-miterlimit:1.5">


        ` +
      element.svg +
      `
    </g>
</svg>`}
    tr.appendChild(td1)
    let td2 = document.createElement('td')
    td2.innerHTML = element.abbr
    tr.appendChild(td2)
    let td3 = document.createElement('td')
    td3.innerHTML = element.name
    tr.appendChild(td3)   
       goback.addEventListener("click", function (event) {

                        event.preventDefault();


                       
                    });
    tr.addEventListener('click', () => {
      showDesc( element.desc + '.docx')
         goback.addEventListener("click", function (event) {

                        event.preventDefault();


                        showDesc(element.desc + '.docx');
                    });
    })
    table.appendChild(tr)
  })
}
function showDesc (doc) {
  fetch('maskar/' + doc )
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Kunde inte hämta filen: ' + response.statusText)
      }
      return response.arrayBuffer()
    })
    .then(function (arrayBuffer) {
      return mammoth.convertToHtml({ arrayBuffer: arrayBuffer })
    })
    .then(function (result) {
      output.innerHTML = result.value
      // Hitta alla länkar i det konverterade dokumentet
            var links = output.querySelectorAll("a");

            links.forEach(function (link) {

                var href = link.getAttribute("href");

                if (!href) {
                    return;
                }

                // Om länken går till ett Word-dokument
                if (href.toLowerCase().endsWith(".docx")) {

                    link.addEventListener("click", function (event) {

                        event.preventDefault();

                        // Ta bort eventuell sökväg
                        var filnamn = href.split("/").pop();

                        showDesc(filnamn);
                    });
                }
            });
output.appendChild(goback);

             // 1. Hämta modal-elementen från HTML
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('expandedImg');
    const closeBtn = document.querySelector('.modal-close');

    // 2. Hämta alla bilder på sidan (eller specifika, t.ex. '.gallery img')
    const images = document.querySelectorAll('img:not(#expandedImg)');

    // 3. Loopa igenom varje bild och lägg till click-event
    images.forEach(img => {
      if (img.id === 'backArrow') return; // Hoppa över backArrow-bilden
        img.style.cursor = 'pointer'; // Gör så att muspekaren blir en hand
        
        img.addEventListener('click', () => {
            modal.style.display = 'flex';     // Visa modalen (centrerat med flex)
            modalImg.src = img.src;           // Sätt modalens bild till samma som den klickade
            modalImg.alt = img.alt;           // Kopiera även alt-texten för tillgänglighet
        });
    });

    // 4. Stäng modalen när man klickar på krysset (X)
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // 5. Stäng modalen om man klickar utanför själva bilden (på bakgrunden)
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    })
    .catch(function (err) {
      console.error('Ett fel uppstod:', err)
      output.innerHTML = '<p>Ett fel uppstod vid hämtning av dokumentet.</p>'
    })
    

   window.location = "#output";
}

 visaMaskar ();
 

