//write a code that starts with a value.
//double that value and print it every increment of the loop
//when you reach 30 days or loop increments, log the final amount
// if you reach 10,000, log a message
// how many days until 1 billion?
// how many days until inifinity?

var reward = .005;
var x = 0;
var day = 1;

while (reward < Infinity){
  if (reward >= 10000 && x === 0){
    console.log("You've made over $10,000 by day " + (day-1) + "!");
    x++;
  }
  if (day === 30){
    console.log("By Day 30, you've made $" + reward + "!");
  }
  reward *= 2;
  day++
}
console.log("You have reached infinity by day " + (day-1));
