const startButton = document.querySelector("#start");
const output = document.querySelector("#output");

startButton.addEventListener("click", function() {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      output.innerHTML += "FizzBuzz ";
    } else if (i % 3 === 0) {
      output.innerHTML += "Fizz ";
    } else if (i % 5 === 0) {
      output.innerHTML += "Buzz ";
    } else {
      output.innerHTML += i + " ";
    }
  }
});