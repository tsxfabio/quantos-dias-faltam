/*  */

const botaoSubmit = document.querySelector('[data-calcular]')


const registraDatas = (evento) => {

    evento.preventDefault()

    const dataInicial = document.querySelector('[data-inicial]')
    const valor1 = dataInicial.value

    const dataFinal = document.querySelector('[data-final]')
    const valor2 = dataFinal.value

    const dataInicialFormata = moment(valor1).format('DD/MM/YYYY')
    const dataFinalFormatada = moment(valor2).format('DD/MM/YYYY')


    console.log('As datas inseridas foram' + ' ' + dataInicialFormata + ' e ' + dataFinalFormatada)

}

/* const diffDatas = () => {

    const dataFinal = document.querySelector('[data-final]')
    valor = dataFinal.value
    const prazo1 = moment(valor).subtract("30", "days") //Prazo para prorrogação do período de execução
    prazoFinal = prazo1.value
    console.log(prazoFinal)
} */

botaoSubmit.addEventListener('click', registraDatas)
/* botaoSubmit.addEventListener('click', diffDatas) */