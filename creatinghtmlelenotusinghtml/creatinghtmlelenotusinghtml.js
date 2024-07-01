let h1element=document.createElement("h1")
h1element.textContent="web technologies";

let contanier=document.getElementById('mycontanier');
contanier.appendChild(h1element);
//document.body.appendChild(h1element);
let btn=document.createElement("button");
btn.textContent="change heading";
contanier.appendChild(btn);
  btn.onclick= function(){
    h1element.textContent="hello ramya";
    h1element.classList.add("heading");
    
      
}
 let removebtn=document.createElement("button");
 removebtn.textContent="change color"
 contanier.appendChild(removebtn);
  removebtn.onclick=function(){
    h1element.classList.remove("heading");
 }