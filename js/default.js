//  function with default parameter:(if we provided parameter then it will take the given and if we do ne provide parameter it will take the default parameter);

function add(num1=0 , num2=0){
    let sum = num1+num2;
    return sum;
}

console.log(add(10,10));
console.log(add(10,0));
console.log(add(0,20));
console.log(add(0,0));


function fullname(first,last="Mia"){
    let fullname = first + " " + last;
    return fullname;
}

console.log(fullname("Emon"));
console.log(fullname("Emon","Hossain"));


