/* Exercise 1 
    function calculateNumbers(num1, num2) {
    const total = num1 + num2;
    const difference = num1 - num2;

    console.log(`The total of ${num1} and ${num2} is: ${total}`);
    console.log(`The difference between ${num1} and ${num2} is: ${difference}`);
}

let num1 = 10;
let num2 = 5;

calculateNumbers(num1, num2); */

// Exercise 3

/* function calculateTotalPrice(price) {
    const taxRate = 0.07; // 7% tax
    const taxAmount = price * taxRate;
    const totalPrice = price + taxAmount;

    console.log(`The original price is: $${price.toFixed(2)}`);
    console.log(`The tax amount (7%) is: $${taxAmount.toFixed(2)}`);
    console.log(`The total price after tax is: $${totalPrice.toFixed(2)}`);
}

const itemPrice = 100;
calculateTotalPrice(itemPrice); */

// Exercise 4

/* function displayFullName(firstName, lastName) {
    const fullName = `${firstName} ${lastName}`;
    console.log(`The user's full name is: ${fullName}`);
}

const firstName = "Millisa";
const lastName = "Gaietto";

displayFullName(firstName, lastName); */

// Exercise 5

/* let inventory = 100;

const itemsSold = 15;
inventory -= itemsSold;

const newStock = 20;
inventory += newStock;

console.log(`The final inventory count is: ${inventory}`); */

// Exercise 6

const originalPrice = 120;
const taxRate = 0.10; 
const discountRate = 0.15; 

const priceWithTax = originalPrice + (originalPrice * taxRate);

const finalPrice = priceWithTax - (priceWithTax * discountRate);

console.log(`Price with tax: $${priceWithTax.toFixed(2)}`);
console.log(`Final price after discount: $${finalPrice.toFixed(2)}`);
