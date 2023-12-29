
/*

function soma(n1, n2) {  
    return n1 + n2
}

console.log(soma(2)) //como ficou faltando informar o parâmetro n2 o resultado apresentado será NaN(Not a Number), pois 2 + undefined (atribuição passada para n2 após a chamada da função sem informar um valor) fica nesse estado.

*/

function soma(n1=0, n2=0) {  //=0 é um parâmetro opcional onde, se na chamada não for definido algum valor para n1 e n2, eles vão receber por padrão o valor informado após o (=)
    return n1 + n2
}

console.log(soma(2)) // Vai apresentar o resultado 2 pois 2 + 0 (valor atribuído à n2 visto que não informado um parâmetro para ele na chamada da ação ) foi o cálculo realizado.
