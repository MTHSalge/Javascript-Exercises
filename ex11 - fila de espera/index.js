let addPaciente;
let queue = [];
let opcao;

do {
  let paciente = "";
  for (i = 0; i < queue.length; i++) {
    paciente += `${i + 1}º- ${queue[i]}\n `;
  }
  opcao = Number(
    prompt(
      "Lista de espera:\n" +
        paciente +
        "\nDigite as seguintes opções: \n1- Novo Paciente\n2-Consultar Paciente\n3- Sair"
    )
  );
  switch (opcao) {
    case 1:
      addPaciente = prompt("Digite o nome do novo paciente:");
      alert(`Sr. ${addPaciente} adicionado à fila.`);
      queue.push(addPaciente);
      break;
    case 2:
      if (queue.length === 0) {
        alert("Não há pessoas na fila!");
      } else {
        alert(`Atendendo o Sr. ${queue[0]}`);
        queue.shift();
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
