let multiply= function(x,y){
    console.log(x*y);
}
let multiplytwo= multiply.bind(this,2);
multiplytwo(5);
let multiplynine= multiply.bind(this,2,9);
multiplynine(5);

let mult= function (x){
    return function(y){
        console.log(x*y);
    }
}
 let mult2=mult(2);
 mult2(3);
 