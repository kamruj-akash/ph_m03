const price = 500;
const age = 70;
const student = true;

if (price >= 500) {
  const discount15 = (price * 15) / 100;
  const payAmount = price - discount15;
  console.log(payAmount);
} else if (price >= 400) {
  const discount10 = (price * 10) / 100;
  const payAmount = price - discount10;
  console.log(payAmount);
} else if (price >= 300) {
  const discount5 = (price * 5) / 100;
  const payAmount = price - discount5;
  console.log(payAmount);
} else if (price >= 250 || student == true) {
  console.log("tui somonayok, tore kichu dewa lagbena!!");
} else {
  console.log(price);
}

// -------------------------------------

if (age <= 12) {
  console.log("sona babu tomar tk dewa lagbena");
} else if (age >= 65) {
  console.log("dada apni onek kosto kore aschen, apnar tk dewa lagbena dada!!");
} else if (student == true) {
  const discount = (price * 50) / 100;
  payAmount = price - discount;
  console.log(payAmount);
} else {
  console.log(price + "tk de hala, tui pura tk dia jaa");
}
