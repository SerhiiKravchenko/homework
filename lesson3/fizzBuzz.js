'use strict'

var arr = [];

for (var i=0; i<100; i++){
    if ((i+1)%3==0){
		if ((i+1)%5==0){
			arr[i]="FizzBuzz"
		}else{arr[i]="Fizz"}
		
    }else if ((i+1)%5==0) {
        arr[i]="Buzz"
    } else {
        arr[i]=i+1;
    }
}


console.log(arr);
