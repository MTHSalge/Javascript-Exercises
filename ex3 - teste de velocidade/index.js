let veiculoUm;
let veiculoDois;
let velocidadeUm;
let velocidadeDois;

veiculoUm = prompt("Digite o nome do primeiro veículo:");
veiculoDois = prompt("Digite o nome do segundo veículo:");
velocidadeUm = prompt("Digite a velocidade do primeiro veículo:");
velocidadeDois = prompt("Digite a velocidade do segundo veículo:");

velocidadeUmFloat = parseFloat(velocidadeUm);
velocidadeDoisloat = parseFloat(velocidadeDois);

if (velocidadeUmFloat > velocidadeDoisloat) {
  alert("O " + veiculoUm + " é mais rápido");
} else if (velocidadeDoisloat > velocidadeUmFloat) {
  alert("O " + veiculoDois + " é mais rápido");
} else if (velocidadeUmFloat === velocidadeDoisloat) {
  alert("A velocidade dos dois é igual!");
}
