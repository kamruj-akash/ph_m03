// practice 02- free coke
const burgerPrice = 500;
const coke = true;
const freeCoke = "you will get a free coke";

if (burgerPrice >= 500) {
  const cokePrice = 0;
  const payAmount = burgerPrice + freeCoke;
  console.log(payAmount);
} else {
  const cokePrice = 30;
  const payAmount = burgerPrice + cokePrice;
  console.log(payAmount);
}

// BMI Calculator
const weight = 62;
const heightInMetter = 1.55448;
const heightForBmi = heightInMetter * heightInMetter;
const bmi = weight / heightForBmi;
const bmiMassage = "According to your BMI:";

if (bmi < 18.5) {
  console.log(bmiMassage + "you are underweight");
} else if (bmi <= 24.9) {
  console.log(bmiMassage + "you are normal");
} else if (bmi <= 29.9) {
  console.log(bmiMassage + "you are overweight");
} else {
  console.log(bmiMassage + "you are obese");
}

// Grade Calculator
const result = 55;
const resultMessage = "Your Grade is :";

if (result <= 90) {
  console.log(resultMessage + "A");
} else if (result <= 80) {
  console.log(resultMessage + "B");
} else if (result <= 70) {
  console.log(resultMessage + "C");
} else if (result <= 60) {
  console.log(resultMessage + "D");
} else {
  console.log(resultMessage + "F");
}

// nested-friend
const myScore = 80;
const friendScore = 30;

if (friendScore >= 80 && myScore >= 80) {
  console.log("let's go for a lunch 🍔");
} else {
  if (friendScore >= 60 && myScore >= 80) {
    console.log("bondhu good luck next time 👍");
  } else {
    if (friendScore >= 40 && myScore >= 80) {
      console.log("message unseen 👀");
    } else {
      if (friendScore < 40 && myScore >= 80) {
        console.log("block!!! 🚫");
      } else {
        console.log("...zzzz  😴");
      }
    }
  }
}

//ternary-number
const num1 = 50;
const num2 = 40;

num1 > num2 ? (numResult = num1 * 2) : (numResult = num1 + num2);
console.log(numResult);

//  bus fare calculator
const age = 70;
const student = false;
const free = "free ticket";
const ticketPrice = 800;

if (age <= 10) {
  console.log(free);
} else if (student) {
  const payTicketPrice = (ticketPrice * 50) / 100;
  console.log(payTicketPrice);
} else if (age >= 60) {
  const payTicketPrice = ticketPrice - (ticketPrice * 15) / 100;
  console.log(payTicketPrice);
} else {
  console.log(ticketPrice);
}
