// document.getElementById("myInput")
// nameInput.addEventListener("change",()=>{
//     document.getElementById("output").textContent="change dectected";
//     console.log (nameInput.value);
// })

const myForm = document.getElementById("myForm");
const nameInput = document.getElementById("myInput");
const courseInput = document.getElementById("course");
const output = document.getElementById("output");

myForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value;
    const course = courseInput.value;

    console.log(name, course);
    output.textContent = name + " " + course;
});

