let wordscontanier=document.getElementById("wordsContanier");
let errormsg=document.getElementById("errormsg");
let addbtn=document.getElementById("addBtn");
let userentered=document.getElementById("userinput");
let array=["hi","ramya","madhu","kiran","welcome","awesome","brilliant","great","extradionary"];
for(let i in array){
    let a=Math.ceil(Math.random()*40);
    let pixel=a+"px";
    let para=document.createElement("h1");
    para.textContent=array[i];
     para.style.fontSize=pixel;
     wordscontanier.appendChild(para);
     
}


addbtn.onclick=function(){
    AddingWords();
}
function AddingWords(){
    let entervalue=userentered.value;
    let i=Math.ceil(Math.random()*100);
    let pixel=i+"px";
     if(entervalue!==""){
     let para=document.createElement("span");
     para.textContent=entervalue;
     para.style.fontSize=pixel;
     
     wordscontanier.appendChild(para);
     userentered.value="";
     }
     else{
        errormsg.textContent="please enter a value";
     }
    }


