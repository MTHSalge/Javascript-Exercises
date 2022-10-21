let firstNumber;
let secondNumber;
let soma;
let subtracao;
let divisao;
let multiplicacao;

firstNumber = prompt("Digite o primeiro número: ");
secondNumber = prompt("Digite o segundo número: ");

// Convertendo String para Float(Number)
let x = parseInt(firstNumber);
let y = parseInt(secondNumber);

// Cálculo Soma e Subtração
soma = x + y;
subtracao = x - y;

// Cálculo Divisão e Multiplicação
divisao = x / y;
multiplicacao = x * y;

alert(
  "Soma: " +
    soma +
    "\nSubtração: " +
    subtracao +
    "\nDivisão: " +
    divisao +
    "\nMultiplicação: " +
    multiplicacao
);
