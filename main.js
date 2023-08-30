// ***************************
//          PART ONE
// ***************************
// EXAMPLE: Write a JavaScript program to display the current day and time, start with:
const displayDate = () => {
  const currentDate = new Date()
  document.getElementById("display-element").innerHTML = currentDate
};

console.log(new Date)
 

// 1. Write a JavaScript program to convert a number to a string.
let function1 = function(num){
  let convertToString = num.toString()
  document.getElementById("function1").innerHTML = convertToString;
  console.log(num.toString())
};

// 2. Write a JavaScript program to convert a string to the number.
let function2 = function(string){
  let convertToInt = parseInt(string)
  document.getElementById("function2").innerHTML = convertToInt;
  console.log(parseInt(string))
};

// 3. Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  let function3 = function(whatIsIt){
    let getType = (typeof whatIsIt)
    document.getElementById("function3").innerHTML = getType;
    console.log(typeof whatIsIt)
  };
  
  
// 4. Write a JavaScript program that adds 2 numbers together.
let function4 = function(num1, num2) {
  let addNumbers = (num1 + num2)
  document.getElementById("function4").innerHTML = addNumbers
  console.log(num1 + num2)
};

// 5. Write a JavaScript program that runs only when 2 things are true.
let function5 = function (thing1, thing2) {
  let twoTrue = (thing1 && thing2)
  document.getElementById("function5").innerHTML = twoTrue

  if(thing1 && thing2){
    console.log(true)
  }
}

// 6. Write a JavaScript program that runs when 1 of 2 things are true.
let function6 = function (thing1, thing2) {
  let oneTrue = (thing1 || thing2)
  document.getElementById("function6").innerHTML = oneTrue

  if(thing1 || thing2){
    console.log(true) }
}

// 7. Write a JavaScript program that runs when both things are not true.  

let function7 = function (thing1, thing2) {
  let twoFalse = (thing1 === false && thing2 === false)
  document.getElementById("function7").innerHTML = twoFalse

  if(thing1 === false && thing2 === false){
    console.log("The statements are both false: "+true)
  }
}
