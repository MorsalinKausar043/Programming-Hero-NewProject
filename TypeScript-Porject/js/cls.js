"use strict";
class student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    ;
    getData() {
        return `my name is ${this.name} and i am ${this.age}.!`;
    }
}
const data = new student("morsalin", 20);
console.log(JSON.stringify(data));
