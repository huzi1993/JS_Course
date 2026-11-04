let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;


console.log(parseInt(Math.min(a, b, c, d)));

console.log(a *( parseInt(b))/2);

console.log(parseInt(d));
console.log(Math.trunc(d));
console.log(Math.floor(d));
console.log(d.toFixed());

console.log((parseInt(b)/Math.ceil(d)).toFixed(2).toString());


console.log(Math.ceil(parseInt(b)/Math.ceil(d)));



