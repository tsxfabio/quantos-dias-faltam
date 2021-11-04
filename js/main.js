/*  */

const botaoSubmit = document.querySelector('[data-calcular]')


const registraDatas = (evento) => {

    evento.preventDefault()
}

const diffDatas = () => {

    const dataFinal = document.querySelector('[data-final]')
    valor = dataFinal.value

    const prazo1 = moment(valor).subtract(30, 'days') //Prazo para prorrogação do período de execução;
    const prazo1format = prazo1.format('DD/MM/YYYY')

    const prazo2 = moment(valor).subtract(60, 'days') //Prazo para solicitar readequação;
    const prazo2format = prazo2.format('DD/MM/YYYY')

    const prazo3 = moment(valor).add(60, 'days') //Prazo para entregar a Prestação de Contas Final;
    const prazo3format = prazo3.format('DD/MM/YYYY')

    const prazo4 = moment(valor).add(120, 'days') //Prazo para solicitar transferência de Saldo Remanescente;
    const prazo4format = prazo4.format('DD/MM/YYYY')

    // Necessário arrumar função posteriormente

    const prazos = document.createElement('li')

    prazos.classList.add('prazos-conteudo')

    const conteudo = `<p class="prazos-conteudo">Sua data limite para solicitar prorrogação do Período de Execução é ${prazo1format}.</p>
    <p class="prazos-conteudo"> Sua data limite para solicitar Readequação do Plano de Trabalho é ${prazo2format}.</p>
    <p class="prazos-conteudo"> Sua data limite para entregar a Prestação de Contas Final é ${prazo3format}.</p>
    <p class="prazos-conteudo"> Sua data limite para solicitar Transferência do Saldo Remanescente é ${prazo4format}.</p>`

    prazos.innerHTML = conteudo

    const listaPrazos = document.querySelector('[data-prazos-lista]')
    listaPrazos.appendChild(prazos)

}

botaoSubmit.addEventListener('click', registraDatas)
botaoSubmit.addEventListener('click', diffDatas)
/* botaoSubmit.addEventListener('click', prazosList) */