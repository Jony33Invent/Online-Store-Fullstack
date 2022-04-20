
var books=[["The Hunger Games", "Suzanne Collins",43.65]];

function addBook (name,author,price) {
  // create a new div element
  const newDiv = document.createElement("div");
  newDiv.innerHTML="<div class='product-card'> "+
   "<img class='product-img' src='img/capa1.jpg'>"+
   "<img id='#review-stars'src='img/5stars.png'>"+
   "<h2 class='product-title'>"+name+"</h2>"+
   "<p>"+author+"</p><h3>R$ "+price+"</h3></div>";


  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("category-div");
  currentDiv.appendChild(newDiv);
}
for(var i=0;i<20;i++)
addBook("The Hunger Games", "Suzanne Collins",(Math.random()*40+20).toFixed(2));