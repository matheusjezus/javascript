let num = [8, 1, 7, 4, 2, 9]

/*
MOSTRANDO VETORES NA TELA

FORMA PADRÃO
console.log(num) - 


FORMA NÃO IDEAL (imagina com 200 vetores por exemplo)
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])
console.log(num[5])

FORMA IDEAL
for (let pos=0; pos<num.length; pos++){ Vai incrementar pos + 1 enquanto a variável pos for menor que o tamanho do array (5 elementos)
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

//FORMA OTIMIZADA
for (let pos in num){ // (for)para cada (pos) na variável (num) { (executa)
    console.log(`A posição ${pos} tem o valor ${num[pos]}`) //mostra o índice (pos) e os valores contidos nos índices da variável composta (num)
}

/*Buscando valores dentro de um vetor
let num = [4, 5, 6, 7, 8]
num.indexOf(7) | vai me retornar o índice 3, que é onde o 7 está armazenado
num.indexOf(3) | vai me retornar -1, oque significa que o JS procurou e não encontrei o valor 3 em nenhum dos índices do array (num)
*/