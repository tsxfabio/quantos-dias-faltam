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

const diffDatas = () => {

    const dataFinal = document.querySelector('[data-final]')
    valor = dataFinal.value

    const prazo1 = moment(valor).subtract(30, 'days') //Prazo para prorrogação do período de execução;
    console.log(prazo1.format('DD/MM/YYYY'))

    const prazo2 = moment(valor).subtract(60, 'days') //Prazo para solicitar readequação;
    console.log(prazo2.format('DD/MM/YYYY'))

    const prazo3 = moment(valor).add(60, 'days') //Prazo para entregar a Prestação de Contas Final;
    console.log(prazo3.format('DD/MM/YYYY'))

    const prazo4 = moment(valor).add(120, 'days') //Prazo para solicitar transferência de Saldo Remanescente;
    console.log(prazo4.format('DD/MM/YYYY'))

}

const prazosList = () => {

    const prazos = document.createElement('li')

    prazos.classList.add('prazos-conteudo')

    const conteudo = `<p class="prazos-conteudo">Sua data limite para solicitar prorrogação do Período de Execução é ${prazo1}.</p>
    <p class="prazos-conteudo"> Sua data limite para solicitar Readequação do Plano de Trabalho é ${prazo2}.</p>
    <p class="prazos-conteudo"> Sua data limite para entregar a Prestação de Contas Final é ${prazo3}.</p>
    <p class="prazos-conteudo"> Sua data limite para solicitar Transferência do Saldo Remanescente é ${prazo4}.</p>`
}

botaoSubmit.addEventListener('click', registraDatas)
botaoSubmit.addEventListener('click', diffDatas)