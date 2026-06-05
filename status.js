const verificarMotor = require('./motor.js');
const verificarTemperatura = require('./sensores.js');

const velocidadeAtual = 60;
const aceleracao = 30;

const temperaturas = [65, 68, 72, 70, 69];

console.log("===== PROJETO VULCAN =====");

console.log(
    "Status do Motor:",
    verificarMotor(velocidadeAtual, aceleracao)
);

console.log(
    "Status dos Sensores:",
    verificarTemperatura(temperaturas)
);
