
var books=[["The Hunger Games", "Suzanne Collins",43.65,"capa1.jpg"],
            ["The Fault in Our Stars","John Green",10.0,"capa2.jpg"],
            ["The Hobbit","J. R. R. Tolkien",41.99,"capa3.jpg"],
            ["Harry Potter and the Sorcerer's Stone","J.K. Rowling",53.86,"capa4.jpg"],
            ["Jaws","Peter Benchley",64.90,"tuba.png"],
            ["It: A Coisa","Stephen King",34.90,"it.jpg"],
            ["Dracula","Bram Stoker",34.90,"drac.jpg"],
            ["Edgar Allan Poe: Medo Clássico Vol. 1","Edgar Allan Poe",64.90,"ed.jpg"]
            ];
function openBook(id){
  //alert("Abrindo pagina do livro "+books[id][0]);
  window.open("book.html");
}
function addBook (id,name,author,price,img_src) {
  // create a new div element
  const newDiv = document.createElement("div");
  newDiv.innerHTML="<div class='product-card' onclick='openBook("+id+")''> "+
   "<img class='product-img' src='img/"+img_src+"'>"+
   "<img class='stars' id='#review-stars'src='img/5stars.png'>"+
   "<h2 class='product-title'>"+name+"</h2>"+
   "<p>"+author+"</p><h3>R$ "+price+"</h3></div>";


  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("category-div");
  currentDiv.appendChild(newDiv);
}
for(var i=0;i<20;i++){
  //var book=books[Math.floor(Math.random()*4)]; 
   let id=0;
  let book=books[id];
addBook(id,book[0], book[1],(Math.random()*40+20).toFixed(2),book[3]);
}