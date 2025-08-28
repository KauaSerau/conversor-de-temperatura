//ir para página de escolha

function mudarPagina(){
    window.location.href = 'escolha.html'
}

//escolha das medidas

function salvarEscolhas(){
    //captura de valores
    const DE = document.getElementById('de').value
    const PARA = document.getElementById('para').value

    if(DE == 'null' || PARA == 'null'){
        window.alert('Selecione as temperaturas!')
        return
    }

    //salvar valores
    localStorage.setItem('de', DE)
    localStorage.setItem('para', PARA)

    //ir para a página 3
    window.location.href = 'calculo.html'
}


//calculo da conversão

function salvarValor(){
    const VALOR = document.getElementById('temperatura').value

    if(VALOR === ''){
        window.alert('Digite um valor válido!')
        return
    }

    localStorage.setItem('temperatura', VALOR)

    window.location.href = 'resultado.html'
}


//resultado da conversão

function calcularResultados(){

    let de = localStorage.getItem('de');
    let para = localStorage.getItem('para')
    let temperatura = parseFloat(localStorage.getItem('temperatura'))

    let resultado = 0

    if ( de === para ) {
        resultado = temperatura
    } else if (de === 'kelvin' && para === 'celsius') {
        resultado = temperatura - 273.15
    } else if (de === 'celsius' && para === 'kelvin') {
        resultado = temperatura + 273.15
    } else if (de === 'kelvin' && para === 'fahrenheit') {
        resultado = (temperatura - 273.15) * 1.8 + 32
    } else if (de === 'fahrenheit' && para === 'kelvin') {
        resultado = (temperatura - 32) * 5/9 + 273.15
    } else if (de === 'celsius' && para === 'fahrenheit') {
        resultado = temperatura * 1.8 + 32
    } else if (de === 'fahrenheit' && para === 'celsius') {
        resultado = (temperatura - 32) / 1.8
    } 


    document.getElementById('to').innerHTML = de
    document.getElementById('for').innerHTML = para
    document.getElementById('result').innerHTML = resultado.toFixed(2)  
}
