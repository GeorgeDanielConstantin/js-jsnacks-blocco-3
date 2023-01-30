let numbers = [];

let somma = 0;
while (somma < 50) {
  const inputNumber = parseInt(prompt("Numero"));
  if (somma + inputNumber <= 50) {
    numbers.push(inputNumber);
    somma = somma + inputNumber;
  } else {
    alert("La somma è superiore a 50, tentare un con un valore inferiore");
  }
}

console.log(numbers);
