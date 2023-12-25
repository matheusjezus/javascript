var agora = new Date() // Formatação pra data
var hora = agora.getHours() // pega a hora do calendário, considerando a hora local.
var min = agora.getMinutes() // pega os minutos.
console.log(`Agora são ${hora} horas e ${min} minutos.`)
if (hora < 12 && hora >= 5) {
    console.log('Bom dia!')
} else if (hora <= 18 && hora >= 12) {
    console.log('Boa tarde!')
} else if (hora <= 23 && hora > 18) {
    console.log('Boa noite!')
} else {
    console.log('Boa Madrugada!')
}