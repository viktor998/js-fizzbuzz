var num =[];
var multipliTre =[];
var multipliCinque =[];
var multipliTreCinque =[];
var minVal = document.getElementById("min");
var maxVal = document.getElementById("max");
var btn = document.getElementById("btnSub");
var myList = document.getElementById("List");

btn.addEventListener('click', function (e) {
    var value1 =0;
    var value2 =0;
    value1 = parseFloat(minVal.value);
    value2 = parseFloat(maxVal.value);
    
    
    for (var i = value1; i < value2 + 1; i++ ) {
        
        if (i%3 == 0){
            multipliTre.push(i);
        }
        if (i%5 == 0){
            multipliCinque.push(i);
        }
        if (i%3 == 0 && i%5 == 0){
            multipliTreCinque.push(i);
        }
        num.push(i);
    }
    console.log(num.length);

    for (let i = 0; i < num.length; i++) {
 

        for (let j = 0; j < num.length; j++) {
            if(num[i] == multipliTre[j]){
                num[i] = "Fizz";
            }
            if(num[i] == multipliCinque[j]){
                num[i] = "Buzz";
            }
            if(num[i] == multipliTreCinque[j]){
                num[i] = "FizzBuzz";
            }
            
        }
        // console.log(num[i]);
        myList.innerHTML += '<li>' + num[i]+'</li>';
        
    }
    
})





