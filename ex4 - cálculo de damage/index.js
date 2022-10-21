let danoDeAtaque;
// Variáveis Personagem Um
let personagemUm;
let poderDeAtaque;

// Variáveis Personagem Dois
let personagemDois;
let pontosDeVida;
let poderDeDefesa;
let escudoDisponivel;
let vidaAposDano;

// Input personagem um
personagemUm = prompt("Digite o nome do personagem que irá atacar:");
poderDeAtaque = prompt("Digite seu poder de ataque:");

// Input personagem dois
personagemDois = prompt("Digite o nome do personagem que irá defender:");
pontosDeVida = prompt("Digite a quantidade de pontos de vida:");
poderDeDefesa = prompt("Digite seu poder de defesa:");
escudoDisponivel = confirm("O personagem possui escudo?");

// Transformar as strings em float
let poderDeAtaqueFloat = parseFloat(poderDeAtaque);
let pontosDeVidaFloat = parseFloat(pontosDeVida);
let poderDeDefesaFloat = parseFloat(poderDeDefesa);

if (poderDeAtaqueFloat > poderDeDefesaFloat && !escudoDisponivel) {
  danoDeAtaque = poderDeAtaqueFloat - poderDeDefesaFloat;
  vidaAposDano = pontosDeVidaFloat - danoDeAtaque;
} else if (poderDeAtaqueFloat > poderDeDefesaFloat && escudoDisponivel) {
  danoDeAtaque = (poderDeAtaqueFloat - poderDeDefesaFloat) / 2;
  vidaAposDano = pontosDeVidaFloat - danoDeAtaque;
} else if (poderDeAtaqueFloat < poderDeDefesaFloat) {
  danoDeAtaque = 0;
  vidaAposDano = pontosDeVidaFloat - danoDeAtaque;
}

alert(
  "O " +
    personagemUm +
    " infrigiu " +
    danoDeAtaque +
    " de dano de ataque ao " +
    personagemDois +
    " e está com " +
    vidaAposDano +
    " pontos de vida"
);
