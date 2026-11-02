let div=document.querySelector("div");
let ul=document.querySelector("ul");
let li=document.querySelector("li");

div.addEventListener("click", function(){
    console.log("div clicked");
});
ul.addEventListener("click", function(event){
    event.stopPropagation(); // Prevent event bubbling
    console.log("ul clicked");
});
li.addEventListener("click", function(event){
    event.stopPropagation(); // Prevent event bubbling
    console.log("li clicked");
});