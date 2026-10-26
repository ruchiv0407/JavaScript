let arr=[2,3,4,5,22,3,5];
//normal method
/*let max=-1;
for(let i=0;i<arr.length;i++) {
    if(arr[i]>max) {
        max=arr[i];
    } 
}
console.log(max);*/
let max=arr.reduce((max,el)=>
{
    if(el>max) {
        return el;
    } else {
        return max;
    }
});
console.log