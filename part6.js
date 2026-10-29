//Q1
const arravg=(arr)=> {
    let sum=0;
    for (let i=0;i<arr.length;i++) {
     sum+=arr[i];
    } return sum/arr.length;
}
let arr=[2,2];
console.log(arravg(arr));

//Q2
const isEven=(n) => {
    if(n%2==0){
        console.log("even");
    } else {
        console.log("not even");
    }
}
isEven(9);
//Q3
const object = {
message: "Hello, World!",
logMessage() {
console.log(this.message);
}
};
setTimeout(object.logMessage, 1000);
//Q4
let length = 4;
function callback() {
console.log(this.length);
}
const object1 = {
length: 5,
method(callback) {
callback();
},
};
object1.method(callback, 1, 2);