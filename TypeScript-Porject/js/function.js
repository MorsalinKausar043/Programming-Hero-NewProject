"use strict";
// common es5 function
function addMoney(num1, num2) {
    return num1 + num2; // function value return 
}
;
const addMoneys = addMoney(2, 3);
console.log(addMoneys);
function subMoney(num3, num4) {
    console.log(num3 - num4); //showthe value
}
;
subMoney(20, 2);
// use arrow function on type script 
const multiMoney = (num5, num6) => num5 * num6;
const multiMoneys = multiMoney(4, 6);
console.log(multiMoneys);
const diviMoney = (num7, num8) => console.log(num7 / num8);
diviMoney(30, 5);
