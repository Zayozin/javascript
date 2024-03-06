function verificar () {
    var num = document.getElementById('num')
    var data =  new Date()
    var ano = data.getFullYear()
    var res = document.getElementById('res')
  
    
    if (num.value.length == 0 || num.value > ano) {
        window.alert('Verifique os dados e tente novamente')
    }
    else {
        var sex = document.getElementsByName('check')
        var idade = ano - Number(num.value)
        var gen = ''
        if (sex[0].checked) {
            var gen = 'homem'
        } 
        else if (sex[1].checked) {
            var gen = 'mulher'
        }
        res.innerHTML = `Detectamos ${gen} com ${idade} anos`
    }
}