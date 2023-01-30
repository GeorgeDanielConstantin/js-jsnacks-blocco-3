const N = parseInt(prompt("Numero"));

let i = 0;

while (i < N) {
  const numbers = [];

  const myArray = Math.floor(Math.random() * 10) + 1;

  for (let i = 0; i < myArray; i++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    numbers.push(randomNumber);
  }
  console.log(numbers);
  i++;
}
