/*  */

const botaoSubmit = document.querySelector('[data-calcular]')
botaoSubmit.addEventListener('click', () => {

    const dataInicial = document.querySelector('[data-inicial]')
    const valor1 = dataInicial.value
    const dataFinal = document.querySelector('[data-final]')
    const valor2 = dataFinal.value

    console.log('As datas inseridas foram' + ' ' + valor1 + ' e ' + valor2);
})