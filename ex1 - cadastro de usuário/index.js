let firstName;
let lastName;
let fieldOfStudy;
let yearOfBirth;
let age;

firstName = prompt("Digite seu primeiro nome:");
lastName = prompt("Digite seu sobrenome:");
fieldOfStudy = prompt("Digite seu campo de estudo:");
yearOfBirth = prompt("Digite seu ano de nascimento");

// Pegando o ano atual
const date = new Date();
const currentYear = date.getFullYear();
age = currentYear - yearOfBirth;

alert(
  "Seu nome completo é: " +
    firstName +
    " " +
    lastName +
    "\nCampo de Estudo: " +
    fieldOfStudy +
    "\nSua idade: " +
    age
);
