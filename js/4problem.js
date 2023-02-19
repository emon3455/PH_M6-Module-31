/*
Write an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the result
*/

const findMax = (ar1,ar2)=>{

    const newArray = [...ar1 , ...ar2];
    return Math.max(...newArray);

}

const result = findMax([10,20,30,40,50],[60,70,80,90,99]);
console.log(result);
