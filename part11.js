async function greet() {
    return "Hello, World!";
    throw "some random error";   //throw keyword is used to throw an error. 
    return abc(); // this will throw an error because abc is not defined
}
console.log(greet()); 
greet()
.then((result) => {
    console.log("promise was resolved")
    console.log(result);
})
.catch((err) => {
    console.log("promise was rejected:",err);
    console.log(err);
});


//arrow async function

let demo = async () => {
    return 5;
}
console.log(demo());