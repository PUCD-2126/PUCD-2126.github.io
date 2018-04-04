// Comments are declared like this

// Types
var notDefined;
var someNull = null;
var someNaN = 0/0;
var someString = 'hello';
var someNum = 42;
var someFloat = 25.3;
var foobarbas = true;

// Data structures
var someObject = { aKey: 'a'};
var someArray = [ 2, 5, 8, true, false, 10.4, 'hi'];


// scope
// privately declared function
var someFunction = function() {
  
  var someString = 'hello2';
  var myvalueisforty3 = 43;
  
  return someString + myvalueisforty3;
}

// publicly declared / globally accessible
function anotherFunction() {

  this.innerFunction = function() {
    console.log('innerFunction\'s this value', this);
  }
  
  console.log(this)
  
  this.innerFunction.call({});
  return 'a string';
}

// arrow functions
// var arrowFunction = () => {
//   return 'i am an arrow function.';
// }


// console.log(anotherFunction.call({}));




// variables
var num = 1;
const immutable = { num: 1 };
let mutable = 1;

num = 2;

immutable.num = 3;
console.log(num, immutable)