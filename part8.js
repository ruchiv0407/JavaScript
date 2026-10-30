//Q1
let button=document.createElement("button");
let input=document.createElement("input");
button.innerText="Click me";
document.querySelector("body").append(input);
document.querySelector("body").append(button);

//Q2
button.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");

//Q3
let btn = document.querySelector("#btn");

//Q4
let h1=document.createElement("h1");
h1.innerText="DOM Practice";
h1.classList.add("h1");
document.querySelector("body").append(h1);

//Q5
let para=document.createElement("p");
para.innerHTML="Apna College<b>Delta</b> Practice";//We use innerHTML
document.querySelector("body").append(para);
