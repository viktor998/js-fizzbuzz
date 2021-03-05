var num =[];
var multipliTre =[];
var multipliCinque =[];
var multipliTreCinque =[];

for (var i = 1; i < 100 + 1; i++ ) {
    
    if (i%3 == 0){
        multipliTre.push(i)
    }
    if (i%5 == 0){
        multipliCinque.push(i)
    }
    if (i%3 == 0 && i%5 == 0){
        multipliTreCinque.push(i)
    }
    num.push(i);
}


for (let i = 0; i < num.length; i++) {

    for (let j = 0; j < multipliTre.length; j++) {
        if(num[i] == multipliTre[j]){
            num[i] = "Fizz"
        }
        if(num[i] == multipliCinque[j]){
            num[i] = "Buzz"
        }
        if(num[i] == multipliTreCinque[j]){
            num[i] = "FizzBuzz"
        }
        
    }
    console.log(num[i]);
    
}
