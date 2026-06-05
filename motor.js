function verificarMotor(velocidadeAtual, aceleracao) {

    const LIMITE_VELOCIDADE = 100;

    let velocidadeFinal = velocidadeAtual + aceleracao;

    if (velocidadeFinal > LIMITE_VELOCIDADE) {
        return "ALERTA DE SOBRECARGA";
    } else {
        return "Sistema Seguro";
    }
}

module.exports = verificarMotor;