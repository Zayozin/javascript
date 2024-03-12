function começar() {
    let nini = parseInt(document.getElementById('nini').value); // converte para número inteiro
    let nfim = parseInt(document.getElementById('nfim').value);
    let npasso = parseInt(document.getElementById('npasso').value);
    let res = document.getElementById('res');

    res.innerHTML = '';

    if (isNaN(nini) || isNaN(nfim) || isNaN(npasso) || nini === '' || nfim === '' || npasso === '') {
        window.alert('[ERRO] Insira novos dados e tente novamente.');
    } else if (nini >= nfim) {
        window.alert('[ERRO] O valor inicial deve ser menor que o valor final.');
    } else if (npasso <= 0) {
        window.alert('[ERRO] O passo deve ser maior que zero.');
    } else {
        while (nini <= nfim) {
            res.innerHTML += `${nini} &#x27A1; `;
            nini += npasso; // Abreviação para nini = nini + npasso;
        }
    
        res.innerHTML += '&#x1F3C1;';
    }
}
