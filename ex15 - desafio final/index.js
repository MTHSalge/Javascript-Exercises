const jobsList = [];

// Switch case 1
function showAvaiableJobs() {
  if (jobsList.length > 0) {
    const jobsText = jobsList.reduce(function (finalText, job, index) {
      finalText += `${index + 1}. `;
      finalText += job.name;
      finalText += ` (${job.applicant.length} candidatos)\n`;
      return finalText;
    }, "");
    alert(`Vagas disponíveis:\n${jobsText}`);
  } else {
    alert("Nenhuma vaga disponível no momento.");
  }
}

// Switch case 2
function newJob() {
  const name = prompt("Informe o nome da vaga:");
  const description = prompt("Informar descrição da vaga:");
  const deadline = prompt("Qual a data limite para a vaga? (DD/MM/AA)");
  const confirmation = confirm(
    `As informações estão corretas?\nNome: ${name}\nDescrição: ${description}\nData limite: ${deadline}`
  );

  if (confirmation) {
    const newJob = {
      name,
      description,
      deadline,
      applicant: [],
    };
    jobsList.push(newJob);
    alert("Vaga criada com sucesso!");
  } else {
    alert("Operação cancelada, voltando ao menu.");
  }
}

// Switch case 3
function showJobs() {
  const index =
    Number(prompt("Informe o indice da vaga que deseja visualizar:")) - 1;

  if (index >= jobsList.length || index < 0) {
    alert("Indice inválido!");
    return;
  }

  const job = jobsList[index];

  const applicantText = job.applicant.reduce(function (finalText, applicant) {
    return finalText + "\n - " + applicant;
  }, "");

  alert(
    `Vaga nº ${index}\nNome: ${job.name}\nDescrição: ${job.description}\nData limite: ${job.deadline}\nQuantidade de candidatos: ${job.applicant.length}\nCandidatos inscritos: ${applicantText} `
  );
}

// Switch case 4
function enrollApplicant() {
  const applicant = prompt("Informe o nome do candidato(a)");
  const index =
    Number(
      prompt("Informe o indice da vaga que deseja inscrever o candidato:")
    ) - 1;
  const job = jobsList[index];

  const confirmation = confirm(
    `Deseja inscrever o candidato ${applicant} na vaga ${index}?\nNome: ${job.name}\nDescrição: ${job.description}\nData limite: ${job.deadline}`
  );

  if (confirmation) {
    job.applicant.push(applicant);
    alert("Inscrição realizada com sucesso!");
  } else {
    alert("Operação cancelada, voltando ao menu.");
  }
}

// Switch case 5
function deleteJob() {
  const index = prompt("Informe o indice da vaga que deseja excluir:");
  const job = jobsList[index];

  const confirmation = confirm(
    `Tem certeza que deseja excluir a vaga ${index}\nNome: ${job.name}\nDescrição: ${job.description}\nData limite: ${job.deadline}?`
  );

  if (confirmation) {
    jobsList.splice(index, 1);
    alert("Vaga excluída com sucesso!");
  } else {
    alert("Cancelando operação, voltando ao menu.");
  }
}

function menu() {
  const opcao = prompt(
    "Bem-vindo! Selecione uma das opções:\n1) Listar vagas disponíveis\n2) Criar nova vaga\n3) Exibir uma vaga\n4) Inscrever candidato\n5) Excluir vaga\n6) Encerrar"
  );
  return Number(opcao);
}

function exec() {
  let opcao;

  do {
    opcao = menu();

    switch (opcao) {
      case 1:
        showAvaiableJobs();
        break;
      case 2:
        newJob();
        break;
      case 3:
        showJobs();
        break;
      case 4:
        enrollApplicant();
        break;
      case 5:
        deleteJob();
        break;
      case 6:
        alert("Encerrando...");
        break;
      default:
        alert("Opção inválida. Digite novamente.");
        break;
    }
  } while (opcao != 6);
}

exec();
