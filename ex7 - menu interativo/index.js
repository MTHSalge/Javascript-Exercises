let escolha;

do {
  escolha = Number(
    prompt(
      "Escolha uma das opções: \n- 1) Débito\n- 2) Crédito\n- 3) Cheque Especial\n- 4) Empréstimo\n- 5) Encerrar"
    )
  );
  if (escolha >= 1 && escolha <= 5) {
    switch (escolha) {
      case 1:
        alert("Escolheu Débito.");
        break;
      case 2:
        alert("Escolheu Crédito.");
        break;
      case 3:
        alert("Escolheu Cheque Especial.");
        break;
      case 3:
        alert("Escolheu Cheque Especial.");
        break;
      case 4:
        alert("Escolheu Empréstimo.");
        break;
      case 5:
        alert("Encerrando...");
        break;
    }
  } else {
    alert("Escolha inválida.");
  }
} while (escolha !== 5);
