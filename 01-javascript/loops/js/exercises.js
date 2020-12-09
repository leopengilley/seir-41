// # Exercises: for loops
//
// ## The even/odd reporter
//
// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

for (let n = 0; n <= 20; n++) {
  if (n % 2 === 0) {
    console.log(`${ n } is even`);
  } else {
    console.log(`${ n } is odd`);
  }
}

//
// ## Multiplication Tables
//
// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

for (let i = 0; i <= 10; i++) {
  console.log(`${ i } * 9 = ${ i * 9 }`);
}

// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10.
//
// ## The Grade Assigner
//
// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

const assignGrade = function (score) {
  if (score >= 80) {
    return 'A';
  } else if (score >= 70) {
    return 'B';
  } else if (score >= 60) {
    return 'C';
  } else if (score >= 50) {
    return 'D';
  } else {
    return 'F';
  }
};

     // init     // cond   // update
for (let s = 60; s <= 100; s++) {
  console.log( `For ${ s }, you got a ${ assignGrade(s) }` );
}

// let s = 60;
// while (s <= 100) {
//   console.log( `For ${ s }, you got a ${ assignGrade(s) }` );
//   s++;
// }
