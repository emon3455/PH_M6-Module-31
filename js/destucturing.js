// object destructuring:
const student = {
    name: "Emon",
    age: 21,
    cgpa: 3.82,
    location: "Mohakhali"
};

// we can directly access the property of the object by using same name:
const {name,location} = student;
console.log(name); // Emon
console.log(location); // Mohakhali



// array destructuring:
const number = [10,20,30,40,50];

const [first, second] = number;
console.log(first,second); // 10 20


// advance distucturing using function:
function getName(){

    return ["Emon","Sumon"];
}

const [name1 , name2] = getName();
console.log(name1 , name2); // Emon Sumon

