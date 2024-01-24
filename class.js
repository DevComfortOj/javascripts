// console.log("Hello world");
// let name = "comfort";
// console.log(name);
// name = "Abiola";
// console.log(name);
// let age = 57;
// let  newAge = 13;
// let percentage = (newAge /age);
// console.log(percentage);
// let mystring= "hi";
// let otherstring= "hello";
// let num= 31;
// let bol= true;
// let undefindedvariable;
// let emptyvariable;
// console.log(mystring);
// console.log(num);
// console.log(otherstring);
// console.log(backtick);
// console.log(bol);
// console.log(undefindedvariable);
// console.log(emptyvariable)

//srting method
let string="javascript"
firstletter = string[0];
console.log(firstletter);
console.log(string.length);
console.log(string.length-1);
console.log(string.toUpperCase());
console.log(string.toLowerCase());

let text = "programming";
console.log(text.substring(1,4));
console.log(text.substr(1,4));

let day = "30 Days of javascript";
console.log(day.split());
console.log(day.split(" "));

console.log(day.includes("Days"));
console.log(day.includes("java"));
console.log(day.includes("script"));

let title = "javascript";
let lastIndex = title.length-1;
console.log(title.charAt(lastIndex));
console.log(title.indexOf("j"));
console.log(title.replace("javascript","Asabeneh"));
console.log(day.replace("days ","months"));

// Assignment operators 
let numOne = 5;
let numTwo = 4;
let sum = numOne + numTwo;
let diff = numOne - numTwo;
let mult = numOne * numTwo;
let div = numOne / numTwo;
let reminder = numOne % numTwo;
let powerof = numOne ** numTwo;
console.log(sum,diff,mult,reminder,powerof);


// comparison operators
let first = 3;
let second = 2;
console.log(first > second);
console.log(first < second);
console.log(first = second);
console.log(first === second);
console.log(first !== second);
console.log(first <= second);

console.log("3" == 3);
console.log("3" === 3);

// console.log()
console.log(1 == true);
console.log(0 == true);
console.log(0 == false);
console.log(0 === false);


// Logical operators
let check = 4 > 3 && 10 > 5;
let see = 4 > 3 && 5 > 10;
let numThree = 4 < 3 && 5 < 4;
// true and true = true
// true and false = false
//false and false = false
console.log(check,see);

let compare = 4 > 3 || 10 > 5;
let valve = 4 > 3 || 10 < 5;
let answer = 4 < 3 || 10 < 5;
console.log(compare,valve,answer);

// Negation operators
let negate = ! (4 < 3);
let result = !true;
console.log(result,negate);

// Increment and Decrement operators
let count = 20;
console.log(count++);
console.log(++count);
let num = 20;
num--;
//console.log(--num);
//console.log(num--);
console.log(num);

// Ternary operators
let isMan = true;
isMan ? console.log("Yes he is a man"):
console.log("No,he is not a man");


// symbol operators
const mySymbol = Symbol()
console.log(mySymbol)
const newSymbol = Symbol("hi")
console.log(newSymbol);

//concatenation operator
const love = "i love";
const sentence = love+day;
console.log(sentence);


const backtickSentence = `${love} studying ${day}`;
console.log(backtickSentence);
const myArray =["Rukaya","Marvellous","Grace","Munirah"];
console.log(myArray);
myArray[0]="salamat";
console.log(myArray);


//Math operators
const four=4;
console.log(Math.sqrt(four));
console.log(Math.pow(4,2));
console.log(Math.PI);
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random() * 1);
console.log(Math.max(3,4,9,0));

// console.log(Math.floor());
console.log(Math.floor(Math.random() * 10 + 1));
const PI= Math.PI
console.log(Math.floor(PI));
console.log(Math.abs(PI));
console.log(Math.ceil(PI));
console.log(Math.round(PI));
console.log(Math.sin(PI));




