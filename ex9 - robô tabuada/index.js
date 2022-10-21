let userNumber = Number(prompt("Digite o número a ser calculado:"));
let userMsg = "";

for (i = 1; i <= 20; i++) {
  userMsg += `${userNumber}x${i} = ${userNumber * i}\n `;
}

alert(userMsg);
