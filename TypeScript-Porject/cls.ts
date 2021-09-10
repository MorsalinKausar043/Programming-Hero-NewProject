class student {
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    };

    getData():number|string {
        return `my name is ${this.name} and i am ${this.age}.!`
    }
}

const data = new student("morsalin", 20);
console.log(JSON.stringify(data));