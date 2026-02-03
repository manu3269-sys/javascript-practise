// const query = document.querySelector
// ("#content p");
// console.log(query);
// query.textContent="jindh hsgsf sjhkfhsdh ad hdk"

// //querySelectorAll 
// const query2 = document.querySelector("p");
// console.log(query2,"query");

// for (let i=0 ;i<subHeading.length;i++){
//     query2[i].textContent="shsbf shdfkfhsf jvksdh"
// }

const paragraph = document.getElementsByTagName("p");

for(let i=0;i<paragraph.length;i++){
    if(i%2===0){
        paragraph[i].style.color="blue"
    }
    else{
        paragraph[i].style.color="green"
    }
}

console.log(paragraph)