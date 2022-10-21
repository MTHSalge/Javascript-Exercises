let saldo = 0;
let escolha;
let valorAdicionado;

do {
  escolha = Number(
    prompt(
      `Dinheiro disponível: ${saldo}, digite: \n1-) Depósito\n2-) Saque \n3-) Finalizar.`
    )
  );
  if (escolha >= 1 && escolha <= 3) {
    switch (escolha) {
      case 1:
        do {
          valorAdicionado = parseFloat(prompt("Quanto deseja depositar?"));
        } while (isNaN(valorAdicionado));
        saldo = saldo + valorAdicionado;
        break;
      case 2:
        valorRetirado = parseFloat(prompt("Quanto deseja sacar?"));
        while (valorRetirado > saldo) {
          valorRetirado = prompt(
            "Valor inválido. Insira um valor menor ou igual ao seu saldo."
          );
        }
        saldo = saldo - valorRetirado;
        break;
      case 3:
        alert("Finalizando...");
        break;
    }
  } else {
    alert("Escolha inválida.");
  }
} while (escolha != 3);
