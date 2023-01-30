let min = parseInt(prompt("Valore minimo"));
let max = parseInt(prompt("Valore massimo"));

if (min !== isNaN && max !== isNaN && min < max) {
  let numberOutput = Math.floor(Math.random() * max - min + 1) + min;
  console.log(numberOutput);
  alert(numberOutput);
} else {
  alert("Valori non validi");
}
