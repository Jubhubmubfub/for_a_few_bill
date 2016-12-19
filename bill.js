//write a code that starts with a value.
//double that value and print it every increment of the loop
//when you reach 30 days or loop increments, log the final amount
// if you reach 10,000, log a message
// how many days until 1 billion?
// how many days until inifinity?

var reward = .005;
// var day = 1;
// while (day < 31){
//   if (reward > 10000){
//     console.log("You've already got more than $10k on day " + day + "1!");
//     reward*=2;
//     continue;
//   }
//   reward *= 2;
//   console.log("Day " + day + ": $" + reward );
//   day++;
// }
var x = 0;
for (var day = 1; day < 31; day++){
  if (reward >= 10000 && x === 0){
    console.log("You've made over $10,000 by day " + (day-1)  + "!");
    x++;
  }
  reward *= 2;
  console.log("Day " + day + ": $" + reward)
}
