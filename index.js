

function problem1(){
  let firstNumber = 23;
  let secondNumber = 97;
  let myInt = firstNumber+secondNumber; 
  document.getElementById("answer1").innerHTML= "The answer is " + myInt;
}

function problem2(){
  let firstNumber = 7;
  let lastNumber = 12;

  
  let myInt = (((lastNumber-firstNumber)+1)/2) * (lastNumber+firstNumber); 
  document.getElementById("answer2").innerHTML= "The answer is " + myInt;
}

function problem3(){
  let myInt = (4+6+9)/77; 
  document.getElementById("answer3").innerHTML= "The answer is " + myInt.toFixed(5);
}

function problem4(){
  
  let a = 10;
  console.log(a);
  9*a;
  let b=7*a;
  console.log(b);

}

function problem5(){
  const max = 57;
  const actual = max - 13;
  const percentage = actual/max;
  let myInt = percentage; 
  document.getElementById("answer5").innerHTML= "The answer is " + myInt;
}

const max = 57;
  const actual = max - 13;
  const percentage = actual/max;
console.log(percentage);




problem1();
problem2();
problem3();
problem4();
problem5();