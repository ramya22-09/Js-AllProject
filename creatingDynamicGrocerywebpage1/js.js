let bgcontanier=document.createElement("div");
bgcontanier.classList.add("backgcontanier");
document.body.appendChild(bgcontanier);
let heading=document.createElement("h1");
heading.textContent="Grocery List";
heading.classList.add("headingstyle");
bgcontanier.appendChild(heading);

let unorderlist=document.createElement("ul");
unorderlist.classList.add("unorderlist1");
bgcontanier.appendChild(unorderlist);
let array=["milk","fish", "chicken","bread"]
for ( let element of array){
let listitem=document.createElement("li");
listitem.textContent=element;
unorderlist.appendChild(listitem);
}
let checkbox=document.createElement("input");
checkbox.type="checkbox";
checkbox.id="mybox";
bgcontanier.appendChild(checkbox);
let labelele=document.createElement("label");
labelele.setAttribute("for","mybox");
labelele.textContent="Need Home Delivey";
labelele.classList.add("labelstyle")
bgcontanier.appendChild(labelele);
let breackline=document.createElement("br");
bgcontanier.appendChild(breackline);
let button=document.createElement("button");
button.textContent="proceed to payment";
button.classList.add("btn","btn-primary");
bgcontanier.appendChild(button);
