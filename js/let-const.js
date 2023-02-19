// let is re assign able
// const cannot be re assign

// let and const both are block scope:

let names = "emon";

// it is possible for let to re assign:
names = "elina";


const name = "emon";

// this is not possible it will give you error:
//name="Emon Mia";


// we cannot re assign const variable but we can update const variable
const number = [12,20,30];

// this is possible 
number.push(40); // we can push,pop,add delete element but cannot reassign
console.log(number);

const student = {
    name: "Emon",
    cgpa: 3.82
}

// this is possible
student.cgpa = 3.85;
console.log(student);


