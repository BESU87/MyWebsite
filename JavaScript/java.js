const form = document.getElementById("studentform");
const nameInput = document.getElementById("Student");
const listItem = document.getElementById("studentList");


let sutdents = [];

form.addEventListener("submit", function(e){ e.preventDefault();

    const name =nameInput.value.trim();

    if (name !== ""){
    sutdents.push(name);

    const li = document.createElement("li");
    li.textContent = name;
    listItem.appendChild(li);
    
    nameInput.value="";

}

})