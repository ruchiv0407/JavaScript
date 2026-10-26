//Q1
const square=(n)=> (n*n);
console.log(square(4));
//Q2
let id=setInterval(()=> {
    console.log("hello world");
},2000);
setTimeout(()=> {
    clearInterval(id);
    console.log("clear interval ran")
},10000);