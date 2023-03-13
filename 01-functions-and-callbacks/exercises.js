// Challenge 1
function addTwo(num) {

  return num + 2
}

// console.log('-> Challenge 1', addTwo(3), addTwo(10))

// Challenge 2
function addS(word) {
  return `${word}s`
}

// console.log('-> Challenge 2 ', addS('pizza'), addS('bagel'))

// Challenge 3
function map(array, callback) {

  const newArray = []

  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }

  return newArray
}

// console.log('-> Challenge 3 ', map([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {

  const newArray = []

  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }

  // console.log('-> Challenge 4 ', newArray)
}

// see for yourself if your forEach works!
forEach([1, 2, 3], addTwo)

// Challenge 5
function mapWith(array, callback) {

  const newArray = []

  forEach(array, el => newArray.push(callback(el)))

  return newArray;

}

// console.log('-> Challenge 5 ', mapWith([1, 2, 3], addTwo));

// Challenge 6
function reduce(array, callback, initialValue) {

  let acc = initialValue || 0;

  for (let i = 0; i < array.length; i++) {
    acc = callback(acc, array[i])
  }
  return acc
}

function add(a, b) {
  return a + b
}

// console.log('-> Challenge 6 ', reduce([1,2,3], add));

// Challenge 7
function intersection(arrays) {
  if (arrays.length === 0) {
    return [];
  }

  return arrays.reduce((acc, cur) => cur.filter((el) => acc.includes(el)));
}

//console.log('-> Challenge 7 ', intersection([[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]));
// should log: [5, 15]

// Challenge 8
function union(arrays) {
  return arrays.reduce((acc, cur) => {
    const newItems = cur.filter(el => !acc.includes(el));
    return acc.concat(newItems);
  }, []);
}

//console.log('-> Challenge 8 ', union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]));
// should log: [5, 10, 15, 88, 1, 7, 100]

// Challenge 9
function objOfMatches(array1, array2, callback) {
  const newObj = {}
  array1.map((el1) => array2.map((el2) => {
    if (callback(el1) === el2) newObj[el1] = el2
  }))
  return newObj
}

// function matchesCb(str) { return str.toUpperCase(); }
//console.log('-> Challenge 9 ', objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], matchesCb));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

// Challenge 10
function multiMap(arrVals, arrCallbacks) {
  const newObj = {}
  arrVals.map((elVal) => newObj[elVal] = arrCallbacks.map((elCb) => elCb(elVal)))
  return newObj
}

// console.log('-> Challenge 10 ', multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

// Challenge 11
function objectFilter(obj, callback) {

  const newObj = {}
  Object.entries(obj).map(([key, val]) => {
    if (val === callback(key)) newObj[key] = val
  })
  return newObj
}

//const cities = { London: 'LONDON', LA: 'Los Angeles', Paris: 'PARIS'};
//console.log('-> Challenge 11 ', objectFilter(cities, city => city.toUpperCase()))
// Should log { London: 'LONDON', Paris: 'PARIS'}

// Challenge 12
function majority(array, callback) {
  return array.map(el => callback(el)).filter(el => !!el).length > Math.floor(array.length / 2)
}

// const isArrayOdd = function(num) { return num % 2 === 1; };
// console.log('-> Challenge 12 ', majority([1, 2, 3, 4, 5], isArrayOdd)); // should log: true
// console.log('-> Challenge 12 ', majority([2, 3, 4, 5], isArrayOdd)); // should log: false

// Challenge 13
function prioritize(array, callback) {

  return array.filter(el => callback(el)).concat(array.filter(el => !callback(el)))

}

// const startsWithS = function(str) { return str[0] === 's' || str[0] === 'S'; };
// console.log('-> Challenge 13 ', prioritize( ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']

// Challenge 14
function countBy(array, callback) {
  const countObj = {}
  array.map(el => {
    const elReturnedByCb = callback(el)
    countObj.hasOwnProperty(elReturnedByCb) ? countObj[elReturnedByCb] += 1 : countObj[elReturnedByCb] = 1
  })
  return countObj
}

// console.log('-> Challenge 14 ', countBy([1, 2, 3, 4, 5], function(num) {
// if (num % 2 === 0) return 'even';
// else return 'odd';
// }));
// should log: { odd: 3, even: 2 }

// Challenge 15
function groupBy(array, callback) {
  const groupingObj = {}
  array.map(el => {
    const elReturnedByCb = callback(el)
    groupingObj.hasOwnProperty(elReturnedByCb) ? groupingObj[elReturnedByCb].push(el) : groupingObj[elReturnedByCb] = [el]
  })
  return groupingObj
}

// const decimals = [1.3, 2.1, 2.4];
// const floored = function(num) { return Math.floor(num); };
// console.log('-> Challenge 15 ', groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

// Challenge 16
function goodKeys(obj, callback) {
  const goodArray = []
  Object.entries(obj).map(([key, value]) => {
    if (callback(value)) goodArray.push(key)
  })
  return goodArray
}

// const sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
// const startsWithBird = function(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
// console.log('-> Challenge 16 ', goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']

// Challenge 17
function commutative(func1, func2, value) {
  return func2(func1(value)) === func1(func2(value))
}

// const multBy3 = n => n * 3;
// const divBy4 = n => n / 4;
// const subtract5 = n => n - 5;
// console.log('-> Challenge 17 ', commutative(multBy3, divBy4, 11)); // should log: true
// console.log('-> Challenge 17 ', commutative(multBy3, subtract5, 10)); // should log: false
// console.log('-> Challenge 17 ', commutative(divBy4, subtract5, 48)); // should log: false

// Challenge 18
function objFilter(obj, callback) {

  const newObj = {}
  Object.entries(obj).map(([key, value]) => {
    if (value === callback(key)) newObj[key] = value
  })
  return newObj
}

// const startingObj = {};
// startingObj[6] = 3;
// startingObj[2] = 1;
// startingObj[12] = 4;
// const half = n => n / 2;
// console.log('-> Challenge 18 ', objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }

// Challenge 19
function rating(arrOfFuncs, value) {
  let numberOfTrue = 0

  arrOfFuncs.map(func => {
    if (func(value)) numberOfTrue += 1
  })

  return numberOfTrue * 100 / 4
}

// const isEven = n => n % 2 === 0;
// const greaterThanFour = n => n > 4;
// const isSquare = n => Math.sqrt(n) % 1 === 0;
// const hasSix = n => n.toString().includes('6');
// const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log('-> Challenge 19 ', rating(checks, 64)); // should log: 100
// console.log('-> Challenge 19 ', rating(checks, 66)); // should log: 75

// Challenge 20
function pipe(arrOfFuncs, value) {
  return arrOfFuncs.reduce((acc, func) => func(acc), value);
}

// const capitalize = str => str.toUpperCase();
// const addLowerCase = str => str + str.toLowerCase();
// const repeat = str => str + str;
// const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log('-> Challenge 20 ', pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'

// Challenge 21
function highestFunc(objOfFuncs, subject) {
  const arrayOfResults = Object.entries(objOfFuncs).map(([key, value]) => [key, value(subject)])
  const newObj = {}
  arrayOfResults.forEach(el => newObj[el[0]] = el[1])
  const highestResult = Object.values(newObj).reduce((acc, cur) => acc > cur ? acc : cur)
  const highestKeyValueArray = Object.entries(newObj).filter(([key, value]) => {
    if (value === highestResult) return key
  })
  return highestKeyValueArray[0][0]
}

// const groupOfFuncs = {};
// groupOfFuncs.double = n => n * 2;
// groupOfFuncs.addTen = n => n + 10;
// groupOfFuncs.inverse = n => n * -1;
// console.log('-> Challenge 21 ', highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
// console.log('-> Challenge 21 ', highestFunc(groupOfFuncs, 11)); //  should log: 'double'
// console.log('-> Challenge 21 ', highestFunc(groupOfFuncs, -20)); // should log: 'inverse'

// Challenge 22
function combineOperations(startVal, arrOfFuncs) {
  return arrOfFuncs.reduce((acc, func) => func(acc), startVal);
}

function add100(num) {
  return num + 100;
}

function addTen(num) {
  return num + 10;
}

function divByFive(num) {
  return num / 5;
}

function multiplyByThree(num) {
  return num * 3;
}

function multiplyByFive(num) {
  return num * 5;
}

// console.log('-> Challenge 22 ', combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60 -->
// console.log('-> Challenge 22 ', combineOperations(0, [divByFive, multiplyByFive, addTen])); // Should output 10

// Challenge 23
function myFunc(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return i;
    }
  }
  return -1;
}

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

function isOdd(num) {
  return (num % 2 !== 0);
}

// console.log('-> Challenge 23 ', myFunc(numbers, isOdd)); // Output should be 1
// console.log('-> Challenge 23 ', myFunc(evens, isOdd)); // Output should be -1

// Challenge 24
function myForEach(array, callback) {

  for (let i = 0; i < array.length; i++) {
    callback(array[i])
  }

}

let sum = 0;

function addToSum(num) {
  sum += num;
}

// const nums = [1, 2, 3];
// myForEach(nums, addToSum);
// console.log('-> Challenge 24 ', sum); // Should output 6
