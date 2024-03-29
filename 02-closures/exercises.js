// CHALLENGE 1
function createFunction() {
  return () => console.log('hello')
}

// /*** Uncomment these to check your work! ***/
// const function1 = createFunction();
// function1(); // => should console.log('hello');

// CHALLENGE 2
function createFunctionPrinter(input) {
  return () => console.log(input)
}

// /*** Uncomment these to check your work! ***/
// const printSample = createFunctionPrinter('sample');
// printSample(); // => should console.log('sample');
// const printHello = createFunctionPrinter('hello');
// printHello(); // => should console.log('hello');

// CHALLENGE 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  return () => {
    counter++;
    console.log('counter', counter);
  }
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call. //1,2,3,1,4

// /*** Uncomment these to check your work! ***/
// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();

function addByX(x) {
  return (num) => {
    return num + x;
  }
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
// console.log(addByTwo(1)); // => should return 3
// console.log(addByTwo(2)); // => should return 4
// console.log(addByTwo(3)); // => should return 5

const addByThree = addByX(3);
// console.log(addByThree(1)); // => should return 4
// console.log(addByThree(2)); // => should return 5

const addByFour = addByX(4);
// console.log(addByFour(4)); // => should return 8
// console.log(addByFour(5)); // => should return 9

// CHALLENGE 4
function once(func) {

  let firstTime = true;
  let firstReturnVal

  return (input) => {
    if (firstTime) firstReturnVal = func(input)
    firstTime = false

    return firstReturnVal
  }
}

// /*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
// console.log(onceFunc(4));  // => should log 6
// console.log(onceFunc(10));  // => should log 6
// console.log(onceFunc(9001));  // => should log 6

// CHALLENGE 5
function after(count, func) {

  let counter = 0

  return () => {
    if (counter >= count) func()
    counter++

    return counter
  }
}

// /*** Uncomment these to check your work! ***/
const called = function () {
  console.log('hello')
};
const afterCalled = after(3, called);
// afterCalled(); // => nothing is printed
// afterCalled(); // => nothing is printed
// afterCalled(); // => 'hello' is printed

// CHALLENGE 6
function delay(func, wait) {
  return setTimeout(() => func(), wait)
}

// delay(()=> console.log('Hey'),3000)

// CHALLENGE 7
function rollCall(names) {
  let counter = names.length
  let current = 0
  return () => {
    if (current < counter) {
      console.log(names[current])
      current++
    } else {
      console.log('Everything accounted for')
    }
  }
}

// /*** Uncomment these to check your work! ***/
// const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
// rollCaller() // => should log 'Victoria'
// rollCaller() // => should log 'Juan'
// rollCaller() // => should log 'Ruth'
// rollCaller() // => should log 'Everyone accounted for'

// CHALLENGE 8
function saveOutput(func, magicWord) {
  const objectOfValues = {}
  return (input) => {
    if (input === magicWord) {
      return objectOfValues
    } else {
      objectOfValues[input] = func(input)
      return func(input)
    }
  }
}

// /*** Uncomment these to check your work! ***/
// const multiplyBy2 = function(num) { return num * 2; };
// const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
// console.log(multBy2AndLog(2)); // => should log 4
// console.log(multBy2AndLog(9)); // => should log 18
// console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }

// CHALLENGE 9
function cycleIterator(array) {
  let timesInvoked = -1
  return () => {
    timesInvoked++
    return array[timesInvoked % array.length]
  }
}

// /*** Uncomment these to check your work! ***/
// const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
// const getDay = cycleIterator(threeDayWeekend);
// console.log(getDay()); // => should log 'Fri'
// console.log(getDay()); // => should log 'Sat'
// console.log(getDay()); // => should log 'Sun'
// console.log(getDay()); // => should log 'Fri'

// CHALLENGE 10
function defineFirstArg(func, arg) {
  return (input) => {
    return func(arg, input)
  }
}

// /*** Uncomment these to check your work! ***/
// const subtract = function(big, small) { return big - small; };
// const subFrom20 = defineFirstArg(subtract, 20);
// console.log(subFrom20(5)); // => should log 15

// CHALLENGE 11
function dateStamp(func) {
  const now = Date.now()
  return (...args) => {
    return {date: now, output: func(args)}
  }
}

// /*** Uncomment these to check your work! ***/
// const stampedMultBy2 = dateStamp(n => n * 2);
// console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }

// CHALLENGE 12
function censor() {
  const objectStrings = {}
  return (firstStr, secondStr) => {
    if (!secondStr) {
      return Object.entries(objectStrings).reduce((acc, [key, value]) => acc.replace(key, value), firstStr)
    }
    objectStrings[firstStr] = secondStr
  }
}

// /*** Uncomment these to check your work! ***/
// const changeScene = censor();
// changeScene('dogs', 'cats');
// changeScene('quick', 'slow');
// console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'

// CHALLENGE 13
function createSecretHolder(secret) {
  let savedValue = secret
  return {
    getSecret() {
      return savedValue
    },
    setSecret(secret) {
      savedValue = secret
    }
  }
}

// /*** Uncomment these to check your work! ***/
// obj = createSecretHolder(5)
// console.log(obj.getSecret()) // => returns 5
// obj.setSecret(2)
// console.log(obj.getSecret()) // => returns 2

// CHALLENGE 14
function callTimes() {
  let timesCounter = 1
  return () => {
    return timesCounter++
  }
}

// /*** Uncomment these to check your work! ***/
let myNewFunc1 = callTimes();
let myNewFunc2 = callTimes();
// console.log(myNewFunc1()); // => 1
// console.log(myNewFunc1()); // => 2
// console.log(myNewFunc2()); // => 1
// console.log(myNewFunc2()); // => 2

// CHALLENGE 15
function roulette(num) {
  let timesSpun = 1
  return () => {
    if (timesSpun < num) {
      timesSpun++
      return 'spin'
    }
    if (timesSpun === num) {
      timesSpun++
      return 'win'
    }
    if (timesSpun > num) {
      timesSpun++
      return 'pick a number to play again'
    }

    return timesSpun
  }
}

// /*** Uncomment these to check your work! ***/
// const play = roulette(3);
// console.log(play()); // => should log 'spin'
// console.log(play()); // => should log 'spin'
// console.log(play()); // => should log 'win'
// console.log(play()); // => should log 'pick a number to play again'
// console.log(play()); // => should log 'pick a number to play again'

// CHALLENGE 16
function average() {
  const numArray = [];
  return (num) => {
    if (num) {
      numArray.push(num)
    }
    return numArray.reduce((acc, cur) => acc + cur / numArray.length, 0)
  }
}

// /*** Uncomment these to check your work! ***/
// const avgSoFar = average();
// console.log(avgSoFar()); // => should log 0
// console.log(avgSoFar(4)); // => should log 4
// console.log(avgSoFar(8)); // => should log 6
// console.log(avgSoFar()); // => should log 6
// console.log(avgSoFar(12)); // => should log 8
// console.log(avgSoFar()); // => should log 8

// CHALLENGE 17
function makeFuncTester(arrOfTests) {
  const arr = arrOfTests
  return (func) => {
    return arrOfTests.reduce((acc, cur) => func(cur[0]) === cur[1], false)
  }
}

// /*** Uncomment these to check your work! ***/
//  const capLastTestCases = [];
//  capLastTestCases.push(['hello', 'hellO']);
//  capLastTestCases.push(['goodbye', 'goodbyE']);
//  capLastTestCases.push(['howdy', 'howdY']);
//  const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
//  const capLastAttempt1 = str => str.toUpperCase();
//  const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
//  shouldCapitalizeLast(capLastAttempt1); // => should log false
//  shouldCapitalizeLast(capLastAttempt2); // => should log true

// CHALLENGE 18
function makeHistory(limit) {

  const historyArray = []

  return (string) => {
    if (string !== 'undo') {
      if (historyArray.length >= limit) historyArray.shift()
      historyArray.push(string)
      return `${string} done`
    }
    if (historyArray.length > 0) {
      const toBeDeleted = historyArray[historyArray.length - 1]
      historyArray.pop()
      return `${toBeDeleted} undone`
    }
    return 'nothing to undo'
  }
}

// /*** Uncomment these to check your work! ***/
//  const myActions = makeHistory(2);
//  console.log(myActions('jump')); // => should log 'jump done'
//  console.log(myActions('undo')); // => should log 'jump undone'
//  console.log(myActions('walk')); // => should log 'walk done'
//  console.log(myActions('code')); // => should log 'code done'
//  console.log(myActions('pose')); // => should log 'pose done'
//  console.log(myActions('undo')); // => should log 'pose undone'
//  console.log(myActions('undo')); // => should log 'code undone'
//  console.log(myActions('undo')); // => should log 'nothing to undo'

// CHALLENGE 19
function blackjack(array) {

}

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
// const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

// /*** PLAYER 1 ***/
// const i_like_to_live_dangerously = deal(4, 5);
// console.log(i_like_to_live_dangerously()); // => should log 9
// console.log(i_like_to_live_dangerously()); // => should log 11
// console.log(i_like_to_live_dangerously()); // => should log 17
// console.log(i_like_to_live_dangerously()); // => should log 18
// console.log(i_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
// const i_TOO_like_to_live_dangerously = deal(2, 2);
// console.log(i_TOO_like_to_live_dangerously()); // => should log 4
// console.log(i_TOO_like_to_live_dangerously()); // => should log 15
// console.log(i_TOO_like_to_live_dangerously()); // => should log 19
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

// /*** PLAYER 3 ***/
// const i_ALSO_like_to_live_dangerously = deal(3, 7);
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
