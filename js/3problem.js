/*
Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
*/

const calculations = (numbers)=>{

    let square = [];

    // Square each array element
    for (const number of numbers) {
        const sqr = number * number;
        square.push(sqr);
    }

    //Calculate the sum of the squared elements
    let sum=0;
    for (const num of square) {
        sum =sum + num;
    }

    return (sum/square.length);

}

const result = calculations([1,2,3,4]);
console.log(result);