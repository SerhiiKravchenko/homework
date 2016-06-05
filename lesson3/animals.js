'use strict';
var headsValue = prompt("Enter count of heads");
var legsValue = prompt("Enter count of legs");
if (headsValue && legsValue){
    alert(animals(headsValue,legsValue));
}


function animals(heads, legs) {
    var cows = (legs-heads*2)/2;
    var chickens = heads - cows;
    return [chickens, cows];
}
