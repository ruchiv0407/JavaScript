//Array References
let arr=['a','b','c'];
console.log(arr);
let arrcopy=arr;
console.log(arr==arrcopy);
console.log(arr===arrcopy);
console.log(arr.push('d'));
//same changes in both array
console.log(arr);
console.log(arrcopy);
console.log(arrcopy.pop('d'));
console.log(arr);
console.log(arrcopy);
//different changes
arrcopy=['a','b','c'];
console.log(arrcopy);
console.log(arr.push('d'));
console.log(arr);
console.log(arrcopy);

