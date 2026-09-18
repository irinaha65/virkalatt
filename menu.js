 
    // Hämta elementen från HTML
const sidebar = document.getElementById("sidebar");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

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
    td1.innerHTML =
      `<svg preserveAspectRatio="xMidYMid meet" class="symbolIcon" viewBox="-76.8 -76.8 665.6 665.6" fill="#000"
    style="display: block; box-sizing: content-box; background: rgb(255, 255, 255); width: 23px; height: 23px;">
    <g style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5">
        ` +
      element.svg +
      `
    </g>
</svg>`
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
    })
    .catch(function (err) {
      console.error('Ett fel uppstod:', err)
      output.innerHTML = '<p>Ett fel uppstod vid hämtning av dokumentet.</p>'
    })
    

   window.location = "#output";
}

 visaMaskar ();

