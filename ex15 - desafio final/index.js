let listaVagas = [];

function menu() {
  opcao = Number(
    prompt(
      "Escolha uma das opções: \n1) Listar vagas disponíveis\n2) Criar nova vaga\n3) Visualizar uma vaga\n4) Inscrever candidato em uma vaga\n5) Excluir vaga\n6) Encerrar"
    )
  );
}

function mostrarVagas() {
  let descVaga = "";
  if (listaVagas === undefined) {
    alert("Sem vagas no momento. Tente novamente mais tarde.");
  } else {
    listaVagas.forEach(function (vaga, i) {});
  }
}

do {
  menu();
  switch (opcao) {
    case 1:
      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
      break;
    case 5:
      break;
    case 6:
      alert("Encerrando sistema...");
      break;
    default:
      alert("Opção inválida. Tente novamente.");
      break;
  }
} while (opcao != 6);
