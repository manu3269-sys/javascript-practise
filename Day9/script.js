// const head= document.getElementById("heading")

// console.log(head.innerText)//it will only show the visible text
// console.log(head.textContent)//it will show all the including hidden text 
// console.log(head.innerHTML)//it will show all the text with its tag/element

// //DOM Modification 
// // Create a new element and set its content 
// const newParagraph = document.createElement("p");
// newParagraph.textContent = "this is a dynamically created paragraph.";

// //append the new element to the container 
// const container = document.getElementById("container");
// container.appendChild(newParagraph);

// const para = document.querySelector("#container p").remove();

//event handle 
function HandleClick(){
    document.getElementById("output").textContent = "button clicked!";
}
