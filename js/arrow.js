// normall function
function add(first,second){
    return first+second;
}

// anonimas function :(j function ar nam nai)
const add1 = function(first,second){
    return first + second;
}

// arrow function:
const sum = (first, second) => first+second;


// no parameter arrow function:
const printing = ()=> "Hellow world";
const result1 = printing();
console.log(result1);

// single parameter arrow function:

// Way-1
const double = (num) => num*2;
const result2 = double(2);
console.log(result2);

// way-2:
const square = num => num*num;
const result3 = square(5);
console.log(result3);


// multi line arro function
const calculate = (num1,num2)=>{

    let sum = num1 + num2;
    let square = sum * sum;
    let devide = square/2;

    return devide;
}

const result4 = calculate(2,4);
console.log(result4);