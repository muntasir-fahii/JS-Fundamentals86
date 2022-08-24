// ====Ans:1==== //

// PART-A (01) //

// =Type conversion= Type conversion in Javascript is the process of converting data of one type to another.

//=Type coercion= Type coercion means conversion of a datatype to another automatically or implicitly.

// PART-1 (02) //

// Difference between UNDEFINED and NULL type:

// undefined:It means a variable declared, but no value has been assigned a value. and NUll Whereas, null in JavaScript is an assignment value. You can assign it to a variable.

//======Ans:2====== //

// a)

//
function number(num1, num2) {
  const sum = num1 + num2;
  return sum;
}

console.log(number(10, 20));

function evenNumber(number) {
  if (number % 2 === 0) {
    return `${number} is an even number.`;
  } else {
    return `${number} is an odd number.`;
  }
}

console.log(evenNumber(21));
