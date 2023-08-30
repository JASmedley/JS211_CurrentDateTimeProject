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
const function1 = (num) =>{
  const convertToString = num.toString()
  document.getElementById("function1").innerHTML = convertToString;
  console.log(num.toString())
};

// 2. Write a JavaScript program to convert a string to the number.
const function2 = (string) =>{
  const convertToInt = parseInt(string)
  document.getElementById("function2").innerHTML = convertToInt;
  console.log(parseInt(string))
};

// 3. Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  const function3 = (whatIsIt) =>{
    const getType = (typeof whatIsIt)
    document.getElementById("function3").innerHTML = getType;
    console.log(typeof whatIsIt)
  };
  
  
// 4. Write a JavaScript program that adds 2 numbers together.
const function4 = (num1, num2)=> {
  const addNumbers = (num1 + num2)
  document.getElementById("function4").innerHTML = addNumbers
  console.log(num1 + num2)
};

// 5. Write a JavaScript program that runs only when 2 things are true.
const function5 =  (thing1, thing2)=> {
  const twoTrue = (thing1 && thing2)
  document.getElementById("function5").innerHTML = twoTrue

  if(thing1 && thing2){
    console.log(true)
  }
}

// 6. Write a JavaScript program that runs when 1 of 2 things are true.
const function6 = (thing1, thing2) =>{
  const oneTrue = (thing1 || thing2)
  document.getElementById("function6").innerHTML = oneTrue

  if(thing1 || thing2){
    console.log(true) }
}

// 7. Write a JavaScript program that runs when both things are not true.  

const function7 = (thing1, thing2) => {
  const twoFalse = (thing1 === false && thing2 === false)
  document.getElementById("function7").innerHTML = twoFalse

  if(thing1 === false && thing2 === false){
    console.log("The statements are both false: "+true)
  }
}
