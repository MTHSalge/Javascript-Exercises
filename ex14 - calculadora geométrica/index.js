let opcao;
let pi = 3.14;

// Funções gerais de funcionamento (menu, opção inválida e fechar programa)
function menu() {
  opcao = Number(
    prompt(
      "Selecione uma das opções:\n1)Área do triângulo\n2)Área do retângulo\n3)Área do quadrado\n4)Área do trapézio\n5)Área do círculo\n6)Encerrar programa"
    )
  );
}

function numInvalido() {
  alert("Número inválido, voltando ao menu.");
}

function closeProgram() {
  alert("Encerrando programa...");
}

// Funções matemáticas

function areaTriangulo(b, h) {
  let calc = (b * h) / 2;
  return alert(`A área do triângulo de base ${b} e altura ${h} é de ${calc} `);
}

function areaRetangulo(b, h) {
  let calc = b * h;
  return alert(`A área do retângulo de base ${b} e altura ${h} é de ${calc} `);
}

function areaQuadrado(l) {
  let calc = l ** 2;
  return alert(`A área do quadrado de lado ${l} é de ${calc} `);
}

function areaTrapezio(B, b, h) {
  let calc = (B + b) * (h / 2);
  return alert(`A área do trapézio é de ${calc} `);
}

function areaCirculo(pi, r) {
  let calc = pi * r ** 2;
  return alert(`A área do círculo de raio ${r} é de ${calc} `);
}

do {
  menu();
  switch (opcao) {
    case 1:
      var b = prompt("Digite o valor da base:");
      var h = prompt("Digite o valor da altura:");
      areaTriangulo(b, h);
      break;
    case 2:
      var b = prompt("Digite o valor da base:");
      var h = prompt("Digite o valor da altura:");
      areaRetangulo(b, h);
      break;
    case 3:
      var l = prompt("Digite o valor do lado:");
      areaQuadrado(l);
      break;
    case 4:
      var B = Number(prompt("Digite o valor da base maior:"));
      var b = Number(prompt("Digite o valor da base menor:"));
      var h = Number(prompt("Digite o valor da altura:"));
      areaTrapezio(B, b, h);
      break;
    case 5:
      var r = prompt("Digite o valor do raio:");
      areaCirculo(pi, r);
      break;
    case 6:
      closeProgram();
      break;
    default:
      numInvalido();
      break;
  }
} while (opcao != 6);
