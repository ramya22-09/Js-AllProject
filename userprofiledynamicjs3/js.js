 /*   
 with out using object
 
 let bgcontanier=document.createElement("div");
bgcontanier.classList.add("bgc");
let heading=document.createElement("h1");
document.body.appendChild(bgcontanier);
let mdcontanier=document.createElement("div");
 //mdcontanier.classList.add("d-flex","flex-row","justify-content-center");
 bgcontanier.appendChild(mdcontanier);
let imge1=document.createElement("img");
imge1.setAttribute("src", "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png")
imge1.classList.add( "img1" ,"d-flex","flex-row","justify-content-center");
mdcontanier.appendChild(imge1);
let name1=document.createElement("h1");
name1.textContent="RAHUL ATTULURI";
name1.classList.add("namme")
mdcontanier.appendChild(name1);
let age1=document.createElement("p");
age1.textContent="25";
age1.classList.add("namme")
mdcontanier.appendChild(age1);*/
    
//with object
  let profileDetails={
    imgsrc:"https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name:"ramya kolli",
    age:25
  }
  
let bgelement=document.getElementById("profileContanier");
console.log(bgelement);
  let imge1=document.createElement("img");
  imge1.setAttribute("src", profileDetails.imgsrc);
  imge1.classList.add( "img1" ,"d-flex","flex-row","justify-content-center");
  bgelement.appendChild(imge1);
  let name1=document.createElement("h1");
  name1.textContent=profileDetails.name;
  name1.classList.add("namme");
  bgelement.appendChild(name1);
 let  smcontanier=document.createElement("div");
 smcontanier.classList.add("d-felx","flex-row","justify-content-center");
 bgelement.appendChild(smcontanier);
  let agee=document.createElement("p");
  agee.textContent="age:";
  agee.classList.add("namme");
  smcontanier.appendChild(agee);
let age1=document.createElement("p");
age1.textContent=profileDetails.age;
age1.classList.add("namme");
smcontanier.appendChild(age1);


