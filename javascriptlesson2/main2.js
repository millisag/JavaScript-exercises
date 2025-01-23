//Exercise 1
/* console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("Hello"));
console.log(Boolean(42));
console.log(Boolean(null));
*/

// Exercise 2

/* const checkVotingEligibility = (age) => {
  if (age >= 18) {
    console.log("You are eligible to vote.");
  } else {
    console.log("You are not old enough to vote.");
  }
};

const userAge = 20;
checkVotingEligibility(userAge); */

// Exercise 3
/* const initialPrice = 150;
const discountRate = 0.2; 
const taxRate = 0.08; 

const discount = initialPrice * discountRate;

const priceAfterDiscount = initialPrice - discount;

const tax = priceAfterDiscount * taxRate;

const finalPrice = priceAfterDiscount + tax;

console.log(`Original Price: $${initialPrice.toFixed(2)}`);
console.log(`Discount: $${discount.toFixed(2)}`);
console.log(`Tax: $${tax.toFixed(2)}`);
console.log(`Final Price: $${finalPrice.toFixed(2)}`); */

// Exercise 4
/* const login = (username, password) => {
  if (username === "admin") {
    if (password === "password123") {
      console.log("Access granted!");
    } else {
      console.log("Incorrect password.");
    }
  } else {
    console.log("Unknown user.");
  }
};

const usernameInput = "admin"; 
const passwordInput = "password123"; 

login(usernameInput, passwordInput); */

// Exercise 5
 /* const checkDrivingEligibility = (personAge, hasLicense) => {
  if (personAge >= 18) {
    if (hasLicense) {
      console.log("You can drive.");
    } else {
      console.log("You need a license to drive.");
    }
  } else {
    console.log("You are not old enough to drive.");
  }
};

const personAge = 20; 
const hasLicense = true; 

checkDrivingEligibility(personAge, hasLicense); */ 

// Exercise 6

/* const isWeekend = true; 
const isHoliday = false; 

if (isWeekend || isHoliday) {
  console.log("You can relax today!");
} else {
  console.log("It's a workday.");
} */

// Exercise 7

/* function greet(name) {
  console.log(`Hello, ${name}! Welcome to JavaScript class.`);
}

greet("Millisa"); */

// Exercise 8
/* function square(number) {
  return number * number;
}

console.log("Square of 5:", square(5)); 
console.log("Square of 7:", square(7)); 
console.log("Square of 10:", square(10)); */

// Exercise 9
/* function calculateDiscount(price, discountRate = 0.1) {
  const discount = price * discountRate;
  const finalPrice = price - discount;

  console.log(`Discount: $${discount.toFixed(2)}`);
  console.log(`Final Price: $${finalPrice.toFixed(2)}`);
}

calculateDiscount(100);

calculateDiscount(200, 0.2); */

// Exercise 10
function calculateFinalPrice(price, discountRate = 0.15, taxRate = 0.08) {
  const discount = price * discountRate;
  const discountedPrice = price - discount;
  const tax = discountedPrice * taxRate;
  const finalPrice = discountedPrice + tax;

  console.log(`Original Price: $${price.toFixed(2)}`);
  console.log(`Discount: $${discount.toFixed(2)}`);
  console.log(`Tax: $${tax.toFixed(2)}`);
  console.log(`Final Price: $${finalPrice.toFixed(2)}`);
}

calculateFinalPrice(100);

calculateFinalPrice(250, 0.2, 0.1);