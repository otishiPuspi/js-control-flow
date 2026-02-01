// 1. Create a grading system (A, B, C, D, F)

let subjectMark = {
  chemistry : 78,
  biology : 80
}

function gradeCalculator(mark){
  if(mark >= 80 && mark <= 100){
    //console.log("grade:A+");
    return "A+";
  }
    else if(mark >= 70 && mark <= 79){
    //console.log("grade: A");
    return "A";
  }
  else if(mark <= 69 && mark >= 40){
    //console.log("grade: B");
    return "B";
  }

  else{
    //console.log("mark:F");
    return "F";
  }
}
for(let item in subjectMark){
  let mark = subjectMark[item]
  let grade = gradeCalculator(mark)
  console.log(`${item} : ${grade}`);
}


// 2. Create a traffic light system (red, yellow, green)
let lights = ["red","yellow","green"];
let time = [5000,4000,5000];
let index = 0;
function roadCrossing(){
  console.clear();
  console.log(lights[index]);
  setTimeout(roadCrossing,time[index]);
  index = (index + 1) % lights.length;
}
roadCrossing();


// 3. Create a leap year checker

let year = 2028;
if(year % 4 === 0 && year % 100 !== 0){
  console.log(`Year ${year} is a leap year.`);
}
else if(year % 400 === 0){
  console.log(`Year ${year} is a leap year.`);

}
else{
  console.log(`Year ${year} is not a leap year.`);
}

// 4. Create a BMI calculator with categories.
 function calculationBMI(weight,height){
  let result = weight/(height * height);
  console.log(`Your BMI is: ${result.toFixed(2)}`);
  
  if(result < 18){
    console.log("Underweight");
  }
  else if( result >= 18 && result <= 25){
    console.log("Normal");
  }
  else if(result > 25 && result <= 30){
    console.log("Overweight");
  }
  else{
    console.log("Obesity");
  }
}
calculationBMI(70,1.65);

// 5. Create a simple login system.
const adminUser = "admin";
const adminPass = "1234";
let user = "admin";
let userPass = "1244";

if(adminUser === user && adminPass === userPass){
  console.log("Login Successful");
}
else{
  console.log("Login fail.");
}