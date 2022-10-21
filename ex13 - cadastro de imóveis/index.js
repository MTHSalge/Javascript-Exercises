let opcao;
let imoveis = [];

do {
  opcao = Number(
    prompt(
      `Quantidade de imóveis cadastrados:\n${imoveis.length}\n\nDigite uma das seguintes opções:\n1) Salvar imóvel\n2)Ver imóveis cadastrados\n3)Sair`
    )
  );
  switch (opcao) {
    case 1:
      novoImovel = {};
      novoImovel.nome = prompt("Digite o nome do proprietário:");
      novoImovel.qtdQuartos = prompt("Digite a quantidade de quartos:");
      novoImovel.qtdBanheiros = prompt("Digite a quantidade de banheiros:");
      novoImovel.possuiGaragem = confirm("O imóvel possui garagem?");
      imoveis.push(novoImovel);
      break;
    case 2:
      for (i = 0; i < imoveis.length; i++) {
        alert(
          `${i + 1}º imóvel\nNome: ${imoveis[i].nome}\nQuantidade de quartos: ${
            imoveis[i].qtdQuartos
          }\nQuantidade de banheiros: ${
            imoveis[i].qtdBanheiros
          }\nPossui garagem: ${imoveis[i].possuiGaragem}`
        );
      }
      break;
    case 3:
      alert("Encerrando sistema...");
      break;
    default:
      alert("Número inválido.");
      break;
  }
} while (opcao !== 3);
