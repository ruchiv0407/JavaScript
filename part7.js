//for each
let arr=[1,2,3,4,5];
function print (el) {
    console.log(el);
}
arr.forEach(print);
//map
let students=[{
    name:"ruhi",
    marks:95,
},
{
    name:"harsh",
    marks:90,
},
{
    name:"alok",
    marks:98.2,
},
];
let gpa=students.map((el)=> {
    return el.marks/10;
});
console.log(gpa);
//filter
let nums=[1,2,3,4,8,9,10,11,14];
let ans=nums.filter((el)=> {
    return el%2==0;//all even no. stores
});
console.log(ans);
//every
let Ans=[1,2,3,4].every((el)=>(el%2==0));
console.log(Ans);
let Ansodd=[1,5,3,].every((el)=>(el%2!=0));
console.log(Ansodd);
//some
let Ans1=[1,2,3,4].some((el)=>(el%2==0));
console.log(Ans1);
//reduce
let num=[1,2,3,4];
let finVal=num.reduce((res,el)=>{
console.log(res);
return res+el;
 });
console.log(finVal);