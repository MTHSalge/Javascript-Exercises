let numeroInput;
let numeroInputNumber;
let opcao;
let valorConvertido;

numeroInput = prompt("Insira o valor em metros:");
opcao = prompt(
  "Deseja converter para qual tipo de medida? (mm, cm, dm, dam, hm, km)"
);

numeroInputNumber = parseInt(numeroInput);

switch (opcao) {
  case "mm":
    valorConvertido = numeroInputNumber * 1000;
    break;
  case "cm":
    valorConvertido = numeroInputNumber * 100;
    break;
  case "dm":
    valorConvertido = numeroInputNumber * 10;
    break;
  case "dam":
    valorConvertido = numeroInputNumber / 10;
    break;
  case "hm":
    valorConvertido = numeroInputNumber / 100;
    break;
  case "km":
    valorConvertido = numeroInputNumber / 1000;
    break;
  default:
    alert("Opção não encontrada, por favor digite uma das alternativas.");
}

alert(`O valor convertido é de: ${valorConvertido} ${opcao}`);
