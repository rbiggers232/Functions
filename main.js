

const printBoo = () => {
    //console.log('======');
    //console.log('Boo!');
    //console.log('======');
};

//printBoo();

// Write a function printSum that will console.log 
// the result of 10 + 10

const printSum = (add1, add2) => {
  return add1 + add2;
}
let sum = printSum(10, 10)
//console.log(sum)

// Write a function printTriangle that will print these pound signs to the console 
// (there are 5 console.logs inside the function):

const printTriangle = () => {
   //console.log('#');
   //console.log('##');
   //console.log('###');
   //console.log('####');
   //console.log('#####');
}
//printTriangle();

// Write a function printParameter that takes a parameter input. The function should simply console.log 
// the value of the input parameter.

const printParameter = (input) => {
  //console.log('This is the argument example ' + input);
}
//printParameter('Starlord');

// Write a function called minusOne that takes a parameter num. 
// Assuming the argument is a number, print the argument -1.
const minusOne = (num) => {
  //console.log(num - 1);
}
minusOne(10);
minusOne(100);
minusOne(Infinity);

// Write a function called getLastElement that takes a parameter arr.
// Invoke the function with an array as the argument.
// The function should print the last element within the array.

const getLastElement = (arr) => {
  //console.log(arr[arr.length - 1]);
}

getLastElement([1, 2, 3, 4, 5, 6]);       
getLastElement(['a', 'b', 'c']);          
getLastElement([[1, 2, 3], [4, 5, 6]]);

// Write a function makeSentence that takes three parameters and interpolates 
// them into a fully formed sentence

const makeSentence = (sum1, sum2, sum3) => {
  //console.log('oh boy, do ' + sum1 + ' ' + sum2 + ' ' + sum3 + ' or what?');
}

makeSentence('I', 'want', 'chimichangas');

// Write a function divideThreeNums that takes three parameters and prints the third parameter 
// divided by the result of the second parameter divided by the first.

const divideThreeNums = (num1, num2, num3) => {
  //console.log(num3 % num2 % num1);
}
divideThreeNums(10, 5, 2);
divideThreeNums(30, 2, 9);

// RETURN sends the value of your function immediately. 
// You can use return to terminate the function.

// Example: will the function return 0 or 1? (It won't return both)

const example = (input) => {
  if (input == "none") return 0;
  return 1;
}
//console.log(example('none'));
//console.log(example('two'));

// Write a function calculateArea that takes two parameters width 
// and length and multiplies them. This will give us the area of a rectangle.
// Invoke the function a couple of times with different arguments each time

const calculateArea = (width, length) => {
  return width * length;
}

//console.log(calculateArea(2, 3));
//console.log(calculateArea(16, 8));
//console.log(calculateArea(55, 0));

// Write a function that takes three parameters (numbers), 
// sums them, converts the sum into a string and returns the string (eg. "123")
// Use your google-fu to research converting a number into a string
// Invoke the function a couple of times with different arguments each time

const num = (2, 4, 6);
//const str = num.toString() => {
  //return str;
//}
//console.log()

// let bonusPoints = 50

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

// function myName() {
//     console.log(42)
// }

// myName()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function totalTime() {
//     let allOverTime = lap1 + lap2 + lap3
//     console.log(allOverTime)
// }
// totalTime()

// let lapsCompleted = 0

// function increment() {
//     lapsCompleted = lapsCompleted + 1
// }
// increment()
// increment()
// increment()

// console.log(lapsCompleted)

// const multiply = function(num1, num2) {
// 	return num1 * num2;
// }
// console.log(multiply(multiply(2, 3), multiply(9, 4)))

// const message = "hello there";

// console.log(message.toLocaleUpperCase())
// ^^^^^ .toUpper odoes not work on arrays

//  const letters = ['a', 'b', 'c', 'd'];
//  console.log(letters.join(''));
// ^^^^^^^ .join odoes not work on strings

// const str = 'doodly doo';
// console.log(str.toLocaleUpperCase())

// const text = 'the iron flask';
// console.log(text.split('').reverse().toString(''))

const alpha = "abcde";
    console.log(alpha.split('').reverse().toString())


