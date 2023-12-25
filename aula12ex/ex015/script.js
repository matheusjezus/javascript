function verificar() {
    var data = new Date()
    var ano = data.getFullYear() // vai pegar o ano completo (com 4 dígitos)
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) // Number(fano.value) já está fazendo a conversão do valor inserido de String para Number
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'foto-menino.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-m.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-homem.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero ='Mulher'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'foto-menina.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-f.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-mulher.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idosa.jpg')
            }
        }
        
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>`
        res.appendChild(img)
    }
}