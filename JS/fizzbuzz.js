//ciclo for con 100 numeri
let getFizzBuzz = function () {
  for (let i = 1; i <= 100; i++) {
    //verifico che sia multiplo di 3 e 5

    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
      // output: FizzBuzz
      const fizzbuzz = document.getElementById("fizzbuzz");
      fizzbuzz.innerHTML += `${i} è FIZZBUZZ <br>`;

      //verifico che sia multiplo di 3
    } else if (i % 3 == 0) {
      console.log("Fizz");
      // output: Fizz
      const fizz = document.getElementById("fizz");
      fizz.innerHTML += `${i} è FIZZ <br>`;

      //verifico che sia multiplo di 5
    } else if (i % 5 == 0) {
      console.log("Buzz");
      // output: Buzz
      const buzz = document.getElementById("buzz");
      buzz.innerHTML += `${i} è BUZZ <br>`;
    }
  }
};
// richimao la funzione
getFizzBuzz();
