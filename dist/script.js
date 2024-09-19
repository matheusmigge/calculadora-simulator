"use strict";
// Variável que armazena o valor atual do visor da calculadora
let valorVisor = '';
let reiniciarVisor = false;

function adicionarNumero(numero) {

    if (reiniciarVisor) {
        limparVisor();
    }

    reiniciarVisor = false;

    valorVisor += numero; // Adiciona o número ao valor atual do visor
    const visor = document.getElementById('visor'); // Obtém o campo do visor
    visor.value = valorVisor; // Atualiza o visor com o novo valor
}
function adicionarOperador(operador) {
    reiniciarVisor = false;

    valorVisor += operador; // Adiciona o operador ao valor atual do visor
    const visor = document.getElementById('visor'); // Obtém o campo do visor
    visor.value = valorVisor; // Atualiza o visor com o novo valor
}
function calcular() {
    reiniciarVisor = true;

    try {
        valorVisor = eval(valorVisor).toString(); // Avalia a expressão matemática e converte para string (string como operação em JSTS)
        const visor = document.getElementById('visor'); // Obtém o campo do visor
        visor.value = valorVisor; // Exibe o resultado no visor
    }
    catch (e) {
        const visor = document.getElementById('visor');
        visor.value = 'Erro'; // Exibe "Erro" caso a expressão seja inválida
        valorVisor = ''; // Limpa o valorVisor
    }
}
function limparVisor() {
    valorVisor = ''; // Limpa o valor armazenado
    const visor = document.getElementById('visor'); // Obtém o campo do visor
    visor.value = '0'; // Limpa o texto no visor
}
function apagarUltimoCaracter() {
    valorVisor = valorVisor.slice(0, -1); // Remove o último caractere do valorVisor
    const visor = document.getElementById('visor'); // Obtém o campo do visor
    visor.value = valorVisor; // Atualiza o visor com o novo valor
}
