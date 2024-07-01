   /**let p1=documenet.createElement("p");
p1.textContent="hi every one";
 let Mycontanier=document.getElementById("mycontanier");
 Mycontanier.appendChild(p1);



 let h1element=document.createElement("h1")
h1element.textContent="web technologies";

let contanier=document.getElementById('mycontanier');
contanier.appendChild(h1element);  **/


let mycontanier=document.getElementById("mycontanier");
console.log(mycontanier);
let h1element=document.createElement("h1")
h1element.textContent="web technologies";
mycontanier.appendChild(h1element);
let btn1=document.createElement("button");
btn1.textContent="about";
mycontanier.appendChild(btn1);
btn1.onclick= function(){
    p1.textContent="hello ramya";
}

let btn2=document.createElement("button");
btn2.textContent="Time to visit";
mycontanier.appendChild(btn2);
btn2.onclick=function(){
    p1.textContent="this the best place to visit in winter seasons entinong and very beautiful memory ";
}
 let btn3=document.createElement("button");
 btn3.textContent="Attractions";
 mycontanier.appendChild(btn3);
 btn3.onclick=function(){
    p1.textContent="when visit varanasi is very beaiutiful."
 }


let p1=document.createElement("p");
p1.textContent="";
mycontanier.appendChild(p1);


