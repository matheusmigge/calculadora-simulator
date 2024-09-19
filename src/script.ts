let display: HTMLInputElement = document.getElementById('display') as HTMLInputElement;
let buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.btn');
let clearButton: HTMLButtonElement = document.getElementById('clear') as HTMLButtonElement;
let equalsButton: HTMLButtonElement = document.getElementById('equals') as HTMLButtonElement;

let currentInput: string = '';

// Adiciona o valor dos botões ao visor da calculadora
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value')!;
    currentInput += value;
    display.value = currentInput;
  });
});

// Limpa o visor e a entrada
clearButton.addEventListener('click', () => {
  currentInput = '';
  display.value = '';
});

// Executa a operação ao clicar em "="
equalsButton.addEventListener('click', () => {
  try {
    // Apenas avalia a expressão se for válida
    if (currentInput.trim() !== '') {
      currentInput = eval(currentInput);
      display.value = currentInput;
    }
  } catch (error) {
    // Exibe "Erro" no visor e reseta o estado
    display.value = 'Erro';
    currentInput = '';
  }
});
