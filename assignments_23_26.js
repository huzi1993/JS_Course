
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// My Solutions
console.log("####################1####################"); 
console.log(1e5); // 100000
console.log(2e5/2); // 100000
console.log(2e5-1e5); // 100000
console.log(100*1000); // 100000
console.log(200000/2); // 100000
console.log(5e4 * 2); // 100000
console.log(10**5); // 100000
console.log(1e2*1e3); // 100000
console.log(50000+50000); // 100000
console.log(50000*2); // 100000

console.log("####################2####################"); 
console.log(Number.MIN_SAFE_INTEGER); // 9007199254740991

console.log("####################3####################"); 
console.log(Number.MAX_SAFE_INTEGER / Number.MAX_SAFE_INTEGER * 16); // 16

console.log("####################4####################"); 
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+(parseFloat(myVar).toFixed(2))); // 100.57

console.log("####################5####################"); 

let num = 10;

console.log((Number.isInteger(num))+(Number.isInteger(num))); // 2

let flt = 10.4;

console.log("####################6####################"); 

console.log(Math.floor(flt)); // 10  → التقريب للأسفل
console.log(Math.trunc(flt)); // 10  → حذف الجزء العشري
console.log(Math.round(flt)); // 10  → التقريب لأقرب عدد صحيح
console.log(parseInt(flt));   // 10  → تحويل النص/الرقم إلى عدد صحيح
console.log(~~flt);           // 10  → عملية NOT على مستوى البت مرتين

console.log("####################7####################"); 

console.log(Math.floor(Math.random()*5)); // 0 || 1 || 2 || 3 || 4