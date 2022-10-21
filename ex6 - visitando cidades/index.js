let visitouCidade;
let nomeCidade = "";
let cidadesVisitadas = [];
let countCidades = 0;

const nomeTurista = prompt("Qual é o seu nome?");
visitouCidade = confirm("Você já visitou alguma cidade?");

while (visitouCidade == true) {
  nomeCidade = prompt("Qual o nome da cidade que você visitou?");
  cidadesVisitadas.push(nomeCidade);
  countCidades++;
  visitouCidade = confirm("Deseja adicionar mais alguma cidade?");
}

if (countCidades === 0) {
  alert(`${nomeTurista} não visitou nenhuma cidade.`);
} else {
  alert(
    `O turista ${nomeTurista} visitou um total de ${countCidades} cidade(s), das quais:\n${cidadesVisitadas}`
  );
}
