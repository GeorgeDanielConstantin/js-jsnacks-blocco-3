let numeroIniziale = parseInt(prompt("Primo numero"));
let array = [];
let inputNumber = 0;

array.push(numeroIniziale);

do {
  numeroIniziale = inputNumber;
  inputNumber = parseInt(prompt("Numero successivo"));
  if (inputNumber > numeroIniziale) {
    array.push(inputNumber);
  } else {
    alert("Il numero è inferiore al precedente");
  }
} while (numeroIniziale < inputNumber);

console.log(array);
