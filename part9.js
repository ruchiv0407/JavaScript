let p=document.querySelector("p");
p.addEventListener("mouseenter",function(){
    console.log("para was clicked");
});
let div=document.querySelector(".box");
div.addEventListener("click",function(){
    console.log("mouse inside div");
});