//test here - https://rithmschool.github.io/function-timer-demo/
//slow one
// counting Operations  => 5n+2 (5 times of n operations) + 2 (static operation)

// function addUpTo(n) {
//     let total = 0;
//     for (let i = 1; i <= n; i++) {
//       total += i;
//     }
//     return total;
//   }

//fast one
// counting Operations  => 3
  function addUpTo(n) {
    return n * (n + 1) / 2;
  }
  
  var time1 = performance.now();
  let answer=addUpTo(1000000000);
  var time2 = performance.now();
  console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)


  console.log(answer)
/**
 * problem of time
    different machines will record different times
    same machines will record different times
    for really fast or slow algorithm,we can't compare them each other easily.
 */
  