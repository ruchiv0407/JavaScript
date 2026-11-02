let btn=document.querySelector("button");
let input=document.querySelector("input");
let ul=document.querySelector("ul");

btn.addEventListener("click", function(){
    let item=document.createElement("li");//to create a new list item
    item.textContent = input.value;//to set the text of the list item to the value of the input field

    let deleteBtn = document.createElement("button");//to create a delete button
    deleteBtn.innerText = "Delete";
    item.appendChild(deleteBtn);//to add the delete button to the list item

    ul.appendChild(item);//to add the new list item to the unordered list
    console.log("input value:", input.value);
    input.value = ""; // Clear the input field
});
ul.addEventListener("click", function(e){
    if(e.target.tagName === "BUTTON"){ // Check if the clicked element is a button
        let parent = e.target.parentElement;
        console.log("parent:", parent);
        parent.remove(); // Remove the parent list item when the delete button is clicked
    }});
