
// spread operator means ... (3 dot)

const number = [10,20,30,40,50];
console.log(number);
console.log(...number);

// if we want to only store the value of number array:
const num1 = [...number];
console.log(num1);

// we can also add and combined new array:
const num2 = [999,202, ...number , 888];
console.log(num2);


