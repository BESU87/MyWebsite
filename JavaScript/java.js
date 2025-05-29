const form = document.getElementById("studentform");
const nameInput = document.getElementById("Student");
const listItem = document.getElementById("studentList");

const form2= document.getElementById("nameOf");
const nameInput2 = document.getElementById("namel");
const listColor = document.getElementById("color");
const listItem1 = document.getElementById("colors")


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

form2.addEventListener("submit", function(e){e.preventDefault();

    const color =listColor.value.trim();
    const name2 = nameInput2.value.trim();
    const greet =document.getElementById("Greeting");

    greet.innerHTML=`Hello, ${name2} your favorite color is ${color}`;
    const li = document.createElement("li");
    li.textContent = color;
    listItem1.appendChild(li);

    nameInput2.value="";
    listColor.value="";

})


let product = {

    productName: "laptop",
    quantity : 50,
    price:15000,

}

var pro =document.getElementById("dis");

let display = [product.productName, product.price,product.quantity]; 
console.log(display);


for(var i=0; i < display.length; i++){
    let li =document.createElement("li");
    li.textContent = display[i];
    pro.appendChild(li);
  }

