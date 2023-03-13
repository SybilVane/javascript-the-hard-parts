/* CHALLENGE 1 */

function sayHowdy() {
  console.log('Howdy');
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log('Partnah');
}

// After thinking it through, uncomment the following line to check your guess!
// testMe(); // what order should these log out? Howdy or Partnah first?

/* CHALLENGE 2 */

function delayedGreet() {
  setTimeout(() => console.log('welcome'), 3000);
}

// delayedGreet(); // should log (after 3 seconds): welcome

/* CHALLENGE 3 */

function helloGoodbye() {
  console.log("hello");
  setTimeout(() => {
    console.log("goodbye")
  }, 3000)
}

// helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye

/* CHALLENGE 4 */

function brokenRecord() {
  setInterval(() => console.log('Hi again'), 1000)
}

// brokenRecord(); // should log (every second): hi again

/* CHALLENGE 5 */

function limitedRepeat() {

  let counter = 5;

  const logAndCount = () => {
    console.log('hi for now');
    counter--;
    if (counter <= 0) clearInterval(intervalID);
  }

  let intervalID = setInterval(logAndCount, 1000);
}

// limitedRepeat(); // should log (every second, for 5 seconds): hi for now

/* CHALLENGE 6 */

function everyXsecsForYsecs(func, interval, duration) {

  const intervalInSecs = interval * 1000
  const durationInSecs = duration * 1000

  let intervalID = setInterval(func, intervalInSecs)

  setTimeout(() => clearInterval(intervalID), durationInSecs)
}

// function theEnd() {console.log('This is the end!');}
// everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!

/* CHALLENGE 7 */

function delayCounter(target, wait) {
  return () => {
    let spacingTime = wait
    for (let i = 1; i <= target; i++) {
      setTimeout(() => console.log(i), spacingTime)
      spacingTime += wait
    }
  }
}

// const countLogger = delayCounter(3, 1000)
// countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3

/* CHALLENGE 8 */

function promised(value) {
  return new Promise(resolve =>
    setTimeout(() => resolve(value), 2000))
}

// const createPromise = promised('wait for it...');
// createPromise.then((val) => console.log(val));
// will log "wait for it..." to the console after 2 seconds

/* CHALLENGE 9 */

class SecondClock {
  constructor(cb) {
    this.cb = cb;
    this.seconds = 0;
    this.timerId = null;
  }

  start() {
    this.timerId = setInterval(() => {
      this.seconds++;
      if (this.seconds === 60) {
        this.seconds = 1;
      }
      this.cb(this.seconds);
    }, 1000);
  }

  reset() {
    clearInterval(this.timerId);
    this.seconds = 0;
  }
}

// const clock = new SecondClock((val) => { console.log(val) });
// console.log("Started Clock.");
// clock.start();
// setTimeout(() => {
//     clock.reset();
//     console.log("Stopped Clock after 6 seconds.");
// }, 6000);

/* CHALLENGE 10 */

function debounce(callback, interval) {
  // ADD CODE HERE
}

// function giveHi() { return 'hi'; }
// const giveHiSometimes = debounce(giveHi, 3000);
// console.log(giveHiSometimes()); // -> 'hi'
// setTimeout(function() { console.log(giveHiSometimes()); }, 2000); // -> undefined
// setTimeout(function() { console.log(giveHiSometimes()); }, 4000); // -> undefined
// setTimeout(function() { console.log(giveHiSometimes()); }, 8000); // -> 'hi'

