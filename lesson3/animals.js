'use strict';
function animals(heads, legs) {
    var cows = (legs-heads*2)/2;
    var chickens = heads - cows;
    return [chickens, cows];
}
alert(animals(72,200));