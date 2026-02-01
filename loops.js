// 1. Print multiplication tables 1-10

function numTable(num){
  for(let i=1;i<=10;i++){
    console.log(`${num} x ${i} = ${num*i}`);
  }
}
console.log("The number table of 10 is:");
numTable(10);
console.log("    ");

// 2. Find factorial of a number

function factorial(num){
let result = 1;
for(let i=1;i<=num;i++){
  result *= i ;
}
return result;
}
let answer =  factorial(4);
console.log("Factoeial of 4 is:",answer);