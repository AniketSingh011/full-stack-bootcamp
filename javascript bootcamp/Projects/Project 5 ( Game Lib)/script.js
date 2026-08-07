// ==============================
// DAY 11 PROJECT - SHOPPING CART
// ==============================

// Products

const products = [

{
name:"Laptop",
price:60000
},

{
name:"Mouse",
price:1000
},

{
name:"Keyboard",
price:2500
}

];

// DOM

const productDiv = document.getElementById("products");

const totalText = document.getElementById("total");

// Function

const displayProducts = (items = [])=>{

productDiv.innerHTML="";

let total=0;

items.forEach(product=>{

const {name,price}=product;

total+=price;

productDiv.innerHTML+=`

<div class="card">

<h2>${name}</h2>

<p>Price : ₹${price}</p>

</div>

`;

});

totalText.textContent=`Total : ₹${total}`;

};

// First Display

displayProducts(products);

// Add Product

document.getElementById("addProduct").addEventListener("click",()=>{

const newProduct={

name:"Headphones",

price:3500

};

const updatedProducts=[...products,newProduct];

displayProducts(updatedProducts);

});