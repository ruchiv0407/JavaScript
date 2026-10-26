//PQ1
let arr=[10,20,30];
let ans=arr.every((el)=>el%10==0);
console.log(ans); 
//PQ2
let min=arr.reduce((min,el)=> {
    if(min<el) {
        return min;
    } else {
        return el;
    }
});
console.log(min);