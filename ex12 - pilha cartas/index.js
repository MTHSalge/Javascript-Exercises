let deck = [];
let opcao;

do {
  cards = "";
  for (i = 0; i < deck.length; i++) {
    cards += `Posição ${i + 1} está a ${deck[i]}`;
  }
  opcao = Number(
    prompt(
      "Cartas que estão no baralho: \n" +
        cards +
        "\n\nSelecione uma das opções abaixo:\n" +
        "1)Adicionar Carta\n2)Puxar Carta\n3)Sair"
    )
  );
  switch (opcao) {
    case 1:
      newCard = prompt("Qual o nome da carta a ser adicionada?");
      deck.unshift(newCard);
      alert(`Adicionado ${newCard} ao topo do baralho.`);
      break;
    case 2:
      if (deck.length === 0) {
        alert("Não há cartas no baralho.");
      } else {
        alert(`Removendo a carta ${deck[0]} do topo do baralho.`);
        deck.shift();
      }
      break;
    case 3:
      alert("Encerrando...");
      break;
    default:
      alert("Opção inválida.");
      break;
  }
} while (opcao !== 3);
