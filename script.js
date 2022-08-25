// JS fundamentals

//console.log()

console.log("assalamu alaikum");
console.log(12);
console.log(true);
console.log(null);

//variables
//let
let love = "sharuu" + " " + "fahii";
console.log(love);

//const

const here = "i am";
console.log(here);

//camel case

const firstName = "muntasir";
console.log(firstName);
//typeof
console.log(typeof here);

const number = 20;

console.log(number ** 3);

// conditional or control stracture

const programmer = "HTML,CSS AND JS";
if (programmer === "HTML,CSS AND JS") {
  console.log("you are a programmer 😎");
} else {
  console.log("you are not a programer! 😑");
}

//multiple condition

const money = 500;
const mustafa = 400;
const needForSpeed = 450;
const ludo = 600;
const snake = 700;

if (money > mustafa) {
  console.log(`${mustafa} tk diye mustafa khelbo`);
} else if (money > needForSpeed) {
  console.log(`${needForSpeed} tk diye NFS khelbo`);
} else if (money < ludo) {
  console.log(`${ludo} tk diye ludo khelte parbo na.`);
} else if (money < snake) {
  console.log(`${snake} tk diye snake khelte parbo na.`);
}

//type conversion and coercion

const birthYear = 1988;
console.log(birthYear + 10);

//equality operator

const equalNumber = 10;

if (equalNumber == 10) {
  console.log("its my money");
}

const equalNumber2 = "10";

if (equalNumber2 === 10) {
  console.log("it is my money");
} else {
  console.log("it is not my money");
}

// promt

//const favNumber = Number(prompt("What's your fav number?"));
//console.log(favNumber);

//const favNumber2 = prompt("What's your fav num?");
//console.log(favNumber2);

//nested condition

const age = 16;
const birthCertificate = true;
const NID = false;

if (age === 18) {
  if (birthCertificate) {
    if (NID) {
      console.log(`your ${age} is applicable for visa. 📃`);
    }
  }
} else if (age !== 18) {
  if (birthCertificate) {
    console.log(
      `your age ${age} you are not applicable for this job. but you can try later with NID and passport.`
    );
  }
}

// & or && ||

const license = true;
const training = true;
const passport = true;
if (license && training) {
  console.log("you can drive");
}
