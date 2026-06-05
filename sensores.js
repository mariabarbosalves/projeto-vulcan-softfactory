function verificarTemperatura(temperaturas) {

    const LIMITE_TEMPERATURA = 70;

    let soma = 0;

    for (let i = 0; i < temperaturas.length; i++) {
        soma += temperaturas[i];
    }

    let media = soma / temperaturas.length;

    if (media > LIMITE_TEMPERATURA) {
        return "Ligar Resfriamento";
    } else {
        return "Temperatura Normal";
    }
}

module.exports = verificarTemperatura;