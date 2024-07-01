let title=document.getElementById("moivetitle");
let para=document.getElementById("enteredtext");
let reviewcontanier=document.getElementById("reviewcontanier");



function Additionaldetails(){
    let titlevalue=title.value;
    let reviewdescrpition=para.value;
    if(titlevalue=="" && reviewdescrpition==""){
        alert("plese enter data");
    }else{
    
    let headinghh=document.createElement("h1");
   headinghh.textContent="Movie :" +titlevalue;
    reviewcontanier.appendChild(headinghh);
    let parades=document.createElement("p");
   parades.textContent="Description:" + reviewdescrpition;
    reviewcontanier.appendChild(parades);
    }
}
