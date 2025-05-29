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

};

function productC(pN, q, p){
    this.productName=pN;
    this.quantity=q;
    this.price=p;

}

productC.prototype.ExpDate = "22-02-2026";

var anotherDisplay = new productC("Acer",15,2500,"24/02/2025");
document.write(anotherDisplay.ExpDate+"\n");

//let product2=Object.create(product);


var pro =document.getElementById("dis");

let display = [product.productName, product.price,product.quantity]; 
console.log(display);


for(var i=0; i < display.length; i++){
    let li =document.createElement("li");
    li.textContent = display[i];
    pro.appendChild(li);
  }
//This an cout for java script or sout like java
document.write(product.productName);