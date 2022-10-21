let word;
let reverseWord = "";

word = prompt("Informe um palavra:");

for (i = word.length - 1; i >= 0; i--) {
  reverseWord += word[i];
}

if (word === reverseWord) {
  alert(`${word} é um palíndromo`);
} else {
  alert(`Não é um palíndromo!\n${word} !== ${reverseWord}`);
}
