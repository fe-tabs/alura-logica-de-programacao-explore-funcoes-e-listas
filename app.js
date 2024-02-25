alert("Boas vindas ao Jogo do Número Secreto!");

let guess;
let guesses = 1;
let secretNumber = 9;

while (guess != secretNumber) {
  guess = prompt("Escolha um número entre 1 e 10: ");

  if (guess == secretNumber) {
    break;
  } else {
    if (guess > secretNumber) {
      alert(`Você errou! O número secreto é menor que ${guess}!`);
    } else {
      alert(`Você errou! O número secreto é maior que ${guess}!`);    
    }

    guesses++;
  }
}

alert(`
  Você acertou o número secreto: 
  ${secretNumber} em ${guesses} tentativa${(guesses > 1) ? 's' : ''}!
`);