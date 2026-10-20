//AssQ1
let arr = [7, 9, 0, -2];
let n = 3;
let ans = arr.slice(0, n);
console.log(ans);
//AssQ2
let Arr = [7,9,0,-2];
let N= 3;
let Ans = arr.slice(1,n+1);
console.log(Ans);
//AssQ3
let str = prompt("please enter a string");
if(str.length == 0) {
console.log("string is empty");
} else {
console.log("string is not empty");
}

//AssQ4
let Str = "ApNaCoLlEgE";
let i = 3;
if(Str[i] == Str[i].toLowerCase()) {
console.log("character is lowercase");
} else {
console.log("character is not lowercase");
}

//AssQ5
let str1 = prompt("please enter a string");
console.log("original string",str1);
//console.log(`original string = ${str}`);
console.log("string without spaces", str1.trim());
//console.log(`string without spaces = ${str.trim()}`);

//AssQ6
let arr1=[1,98,-8,"ruchi"];
let item=7;
if (arr1.indexOf(item)!=-1) {
    console.log("element exist");
}
else {
    console.log("element does not exist");
}