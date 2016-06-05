'use strict'

var firstCondition = [];
var secondCondition = [];

for (var i=0; i<100; i++){
    if ((i+1)%3==0 && !((i+1)%5==0)) {
        firstCondition[i]="Fizz"
    }else if ((i+1)%5==0 && !((i+1)%3==0)) {
        firstCondition[i]="Buzz"
    } else {
        firstCondition[i]=i+1;
    }
}
for (var i=0; i<100; i++){
    if ((i+1)%3==0 || (i+1)%5==0) {
        secondCondition[i]="FizzBuzz"
    } else {
        secondCondition[i]=i+1;
    }
}

console.log(firstCondition);
console.log(secondCondition);