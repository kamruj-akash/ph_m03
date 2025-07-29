let price = 500;
const dalal = true;

// age >= 18 || dalal == true
//   ? console.log("vote tumi amare dao baba")
//   : console.log("bangir-put");

price = dalal === true ? (price > 1000 ? price / 2 : 0) : price + 100;

console.log(price);
