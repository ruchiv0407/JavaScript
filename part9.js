let btns= document.querySelectorAll("button");
for (btn of btns) {
btn.addEventListener("click",sayHello);
btn.addEventListener("click",sayName);
//btn.addEventListener("dblclick",function(){
  //  console.log("You double click me");
//});
}

function sayHello(){
    alert("Helllooo!!");
}
function sayName(){
    alert("apna college!!");
}