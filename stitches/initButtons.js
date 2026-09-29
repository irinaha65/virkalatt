   let symbolButtons = document.querySelectorAll('.symbol-btn');
function visaMaskar() {
        symbolButtons.forEach(btn => {
            btn.innerHTML=maskar.find(m => m.desc === btn.getAttribute('data-symbol')).svg_g;
            btn.addEventListener('click', function() {
                symbolButtons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                currentSymbol = this.getAttribute('data-symbol');
            });
        });
    }