const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
let i = 0;
let numeroCounter;

do {
  let numero = parseInt(prompt("Numero"));
  i++;
  if (numero == randomNumber) {
    alert(`Hai indovinato. Hai fatto ${i} tentativi`);
  } else if (numero < randomNumber) {
    alert("Hai scelto un numero minore");
  } else if (numero > randomNumber) {
    alert("Hai scelto un numero maggiore");
  }
  numeroCounter = numero;
} while (numeroCounter != randomNumber);
