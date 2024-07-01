
let RecipeObj={
    title:"Tomato Pasta",
    imgsrc:"https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    arr:["pasta","oil","onions","salt","tomato pasta","sauce","cheese"]
}


let headcon=document.getElementById("headingcontanier");
let heading=document.createElement("h1");
heading.textContent=RecipeObj.title;
heading.classList.add("heading");
headcon.appendChild(heading);

let imgcon=document.getElementById("imgcontanier");
let imagee=document.createElement("img");
console.log(imgcon);
imagee.setAttribute("src", RecipeObj.imgsrc);
imagee.classList.add("imageee");
imgcon.appendChild(imagee);
 
let incrediants=document.getElementById("incredints");
incrediants.classList.add("bgcontanier1")
let unorder=document.getElementById("unorderlist");
console.log(unorder)
let list=document.createElement("li");
console.log(list)
for(element of RecipeObj.arr){
    let list=document.createElement("li");
     list.textContent=element;
     unorder.appendChild(list);
}
