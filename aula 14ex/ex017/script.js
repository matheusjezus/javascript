function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value) 
        let c = 1
        tab.innerHTML ='' // comando para limpar a área de tabuada antes de mostrar a tabuada
        while (c <= 10) {
            let item = document.createElement('option') // Criando um elemento (option) pelo Javascript, ver comentários da linha 20-22 no documento HTML deste exercício.
            item.text = `${n} x ${c} = ${n*c}` // parte de dentro(conteúdo) do option
            item.value = `tab${c}` // importante para o PHP por exemplo para saber qual foi o item da tabuada que foi selecionado.
            tab.appendChild(item) // adicionar um elemento filho, para que o conteúdo apareça
            c++
        }
    }
   
    
}