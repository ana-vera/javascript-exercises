var fizz = false
var buzz = false


for (i=1; i<100; i++){
     
    if (i%3==0) {fizz = true}
    if (i%5==0) {buzz = true}


    if (fizz && buzz) {console.log("FIZZBUZZ")}
    else if (fizz){console.log("FIZZ")}
    else if (buzz){console.log("BUZZ")}
    else {console.log(i)}

    
    fizz = false
    buzz = false
    }

