let num = [5, 8, 2, 9, 3]
//índices: 0, 1, 2, 3, 4
num.push(1) //colocar o valor 1 no array num sem precisar definir uma chave.
num.sort() //organiza os valores em ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O segundo valor do vetor é ${num[1]}`)
let pos = num.indexOf(9)
if (pos == -1){ // se retornar -1, significa que o JS procurou e não encontrou o valor informado no num.index() em nenhum dos índices do array (num)
    console.log('O valor não foi encontrado!')
}else {
    console.log(`O valor está na posição ${pos}`)
}
