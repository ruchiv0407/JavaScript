//spread with arrays
let odd=[1,3,57,5,9,11];
let even=[2,4,6,8];
let arr=[...odd,...even];
console.log(arr);
//spread with object
let obj={
    name:"ruhi",
    age:7,
}
let arr1={...obj,marks:88};
console.log(arr1);