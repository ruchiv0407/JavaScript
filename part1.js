//AQ1
let num=50;
if (num % 10 ===0) {
    console.log("good");
} else {
console.log("bad");
}
//AQ2
let name = prompt("enter user's name");
let age = prompt("enter user's age");
alert(`${name} is ${age} years old`);
//AQ3
let quarter=2;
switch(quarter){
    case 1:
        console.log("January, February, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, August, September");
        break;
    case 4:
        console.log("October, November, December");
        break;
    default:
        console.log("Invalid quarter");
        break;
}
//AQ4
let str="apples";
if ((str[0] === "A"|| str[0] === "a") && str.length >5) {
    console.log("The string is golden");
}
else {
    console.log("The string is not golden");
}
//AQ5
let a= 10;
let b= 70;
let c= 30;
if (a>b) {
    if (a>c) {
        console.log("a is the largest");
    }
    else {
        console.log("c is the largest");
    }
}
else {
    if (b>c) {
        console.log("b is largest");
    }
    else {
        console.log("c is largest");
    }
}
//AQ6
let x=32;
let y=47852;
if ( (x%10) == (y%10)) {
    console.log("numbers have the same last digit");
}
else {
    console.log("numbers don't have the same last digit");
}
