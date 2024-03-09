function calcular() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    var delta = (b * b) - (4 * a * c); 
    var res = document.getElementById('res');
    var res2 = document.getElementById('res2');

    res.innerHTML = `O valor de delta é: ${delta}`;
    
    if (a == 0) {
        window.alert('[ERRO!] O valor de "a" não pode ser igual a 0')
    }
    else if (delta < 0) {
        res2.innerHTML = `Não há soluções reais na equação pois: delta < 0`;
        
    }
    else if (delta == 0) {
        var x1 = (-b + delta**0.5) / (2 * a);
        res2.innerHTML = `O resultado é: ${x1}`;
        
    }
    else if (delta > 0) {
        var x1 = (-b + delta**0.5) / (2 * a);
        var x2 = (-b - delta**0.5) / (2 * a);
        res2.innerHTML = `Os resultados são: ${x1} e ${x2}`;
    }
}


