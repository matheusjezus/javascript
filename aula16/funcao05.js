//RECURSIVIDADE = CALCULANDO FATORIAL  DE MANEIRA RECURSIVA (QUANDO UMA FUNÇÃO CHAMA ELA MESMA)

function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))
/*

1! = 1  fatorial de 1 é sempre 1
n! = n x (n-1)! fórmula para o fatorial de qualquer número

Ex:
5! = 5 x 4 x 3 x 2 x 1
5 = 5 x 4!


No caso a função se chama automaticamente enquanto (n) não for igual a 1, quando essa condição se torna verdadeira o sistema para o loop e inicia os retornos, podemos dizer a grosso modo que o sistema empilha as chamadas e quando (n) se torna 1 ele inicia o desempilhamento executando as multiplicações de cada retorno como no exemplo a baixo:
console.log(fatorial(5) )
chamada1 (n = 5 => n == 1? false => senão => 5 * fatorial(5 - 1))
chamado2 (n = 4 => n == 1? false => senão => 4 * fatorial(4 -1))
chamada3 (n = 3 => n == 1? false => senão => 3 * fatorial(3 -1))
chamada4 (n = 2 => n == 1? false => senão => 2 * fatorial(2 -1))
chamada5 (n = 1 => n == 1? true => então retorne 1)
retornou para a chamada4 (retorne 2 * retorno da chamada5(1))
retornou para a chamada3 (retorne 3 * retorno da chamada4(2))
retornou para a chamada2 (retorne 4 * retorno da chamada3(6))
retornou para a chamada1 (retorne 5 * retorno da chamada2(24))
retornou para o console.log(120)

literalmente faz uma função dentro da outra:

5 x 5-1 = 4 x 4-1 = 3 x 3-1 = 2 x 2-1 = 1 retorna
Aí sim ele começa a calcular
'Retorno' 1 x 2 = 2 x 3 = 6 x 4 = 24 x 5 = 120

*/



