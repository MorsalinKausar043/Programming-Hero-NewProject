// common es5 function

function addMoney(num1:number,num2:number):number {
    return num1 + num2; // function value return 
};

const addMoneys: number = addMoney(2, 3);
console.log(addMoneys);

function subMoney(num3: number, num4: number): void{
    console.log(num3 - num4); //showthe value
};

subMoney(20, 2);

// use arrow function on type script 

const multiMoney = (num5: number, num6: number): number => num5 * num6;
const multiMoneys: number = multiMoney(4, 6);
console.log(multiMoneys);

const diviMoney = (num7: number, num8: number): void => console.log(num7 / num8);
diviMoney(30,5)
