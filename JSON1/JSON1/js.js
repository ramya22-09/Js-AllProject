let contanier=document.getElementById("jsoncontanier");

/////////////// converting js array to json array ////////
let array=["Hero","Honda","Bajaj"]
let jsele=JSON.stringify(array);
let para=document.createElement("p");
para.textContent=jsele;
contanier.appendChild(para);

///////////////converting js object to json obj///////////////
let person ={
    name:"ramya",
    age:25,
    gender:"male"
}
let jsperson=JSON.stringify(person);
let para1=document.createElement("p");
para1.textContent=jsperson;
contanier.appendChild(para1);
//////////////// converting js array object to json obj///////////
let arr1=[
    {
        name:"ramya",
        age:22
    },
    {
        name:"lavanya",
        age:23
    },
    {
        name:"jaya",
        age:19
    }
]                                                                                       
let jsperson1=JSON.stringify(arr1);
let para2=document.createElement("p");
para2.textContent=jsperson1;
contanier.appendChild(para2);