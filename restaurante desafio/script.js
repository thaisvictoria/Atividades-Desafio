const totalAntesHH = choppAntesHH * quantAntesHH;
const totalDepoisHH = choppDepoisHH * quantDepoisHH;

const total = totalAntesHH + totalDepoisHH;

const taxaServico = 0.10 * total;

const finalTotal = total + taxaServico;


function calculatarTotal() {
    const choppAntesHH = parseFloat(document.getElementById('choppAntesHH').value);
    const quantAntesHH = parseInt(document.getElementById('quantAntesHH').value);
    const choppDepoisHH = parseFloat(document.getElementById('choppDepoisHH').value);
    const quantDepoisHH = parseInt(document.getElementById('quantDepoisHH').value);
}

const resultado = 
document.write(`Valor total antes do Happy Hour: R$ ${totalAntesHH.toFixed(2)}`)
document.write(`Valor total depois do Happy Hour: R$ ${totalDepoisHH.toFixed(2)}`)
document.write(`Taxa de Serviço: R$ ${taxaServico.toFixed(2)}`)
document.write(`Valor final a ser pago: R$ ${finalTotal.toFixed(2)}`)

document.getElementById('resultado').innerHTML;