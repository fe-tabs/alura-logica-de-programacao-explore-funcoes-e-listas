alert("Boas vindas ao Jogo do Número Secreto!");

let secretNumber = 9;

let guess = prompt("Escolha um número entre 1 e 10: ");

if (guess == secretNumber) {
  alert(`Você acertou o número secreto: ${secretNumber}!`);
} else {
  alert(`Você errou! O número secreto não é ${guess}!`);
}