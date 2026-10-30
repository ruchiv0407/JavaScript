let btn= document.querySelector("button");
console.dir(btn);
//btn.onclick function()={
//alert("btn was cliscked");
//}
function sayHello(){
    console.log("Helllooo!!");
}
btn.onclick=sayHello;