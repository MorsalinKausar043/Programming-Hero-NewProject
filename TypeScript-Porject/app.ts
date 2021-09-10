// string site

const firstName: string = "Morsalin";
const lastName: string = "Kausar";
const age: number = 20;
const hobby: string[] = ['programming', 'football', 'cricket'];
console.log(`myname is ${firstName} ${lastName} . I am ${age} years old . My favorite and hobby is ${hobby[0]}..!`);

// object site 

interface person{
    name: string,
    age: number,
    cls: string,
    hobby: string,
    future:string
};

const Man: person = {
    name: "Morsalin Kausar",
    age: 20,
    cls: "diploma 5th semester",
    hobby: "programming",
    future: "best Programmer"
};

// const { name , age, cls , hobby , future} = Man;

console.log(`my name is ${Man.name} . I am ${Man.age} . I read in class ${Man.cls} . My Most Favorite hobby is ${Man.hobby} and My future plan is ${Man.future}..!`)