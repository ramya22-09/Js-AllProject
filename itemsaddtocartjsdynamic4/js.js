let contanierr=document.getElementById("maincontanier");
let headingg=document.createElement("h1");
headingg.textContent="Add to card";
contanierr.appendChild(headingg);
let text1=document.createElement("input");
text1.type="text";
text1.id="textinput";
contanierr.appendChild(text1);
let button1=document.createElement("button");
button1.textContent="Add";
button1.classList.add("button");
contanierr.appendChild(button1);
let inputvalue1=document.getElementById("textinput");

let headinggg=document.createElement("h2");
headinggg.textContent="My cart items";
contanierr.appendChild(headinggg);
//let unorderlist=document.createElement("ul");
//contanierr.appendChild(unorderlist);
  function onadd(){
    let list=document.createElement("li");
    list.textContent=text1.value;
    text1.value="";
  //  unorderlist.appendChild(list);
  contanierr.appendChild(list);

  }
  
  button1.onclick=function(){
    onadd();
  }
      
  let element=document.createElement("input");
  element.type="checkbox";
  element.id="checkboxid";
  contanierr.appendChild(element);
  let labelele=document.createElement("label");
  labelele.setAttribute("for","checkboxid");
  labelele.textContent="I am a label";
  
  contanierr.appendChild(labelele);
  checkboxid.onclick=function(){
  labelele.classList.toggle("checked");
  }
////////skills adding ////////////////////////

  let skillscon=document.getElementById("skillcontanier");
  let unorderlist1=document.createElement("ul");
  skillscon.appendChild(unorderlist1);

let array=[
  {
    text:"html",
    uniquenum:1
  },
  {
    text:"css",
    uniquenum:2
  },
  {
    text:"javascript",
    uniquenum:3
  }
]
 function  onchangeColor(Id,labbelid){
  let checkeddele=document.getElementById(Id);
  let labledelementt=document.getElementById(labbelid);
  labledelementt.classList.toggle("visible");
 }

    function createMakeSkill(todo){
  let listeleme=document.createElement("li");
  let Id="checkbox"+ todo.uniquenum;
  let labbelid="label"+ todo.uniquenum;
  listeleme.classList.add("d-flex","flex-row");
  unorderlist1.appendChild(listeleme);
  let inputelementt=document.createElement("input");
  inputelementt.type="checkbox";
  inputelementt.id=Id;
  inputelementt.onclick=function(){
    onchangeColor(Id,labbelid);
  }
  listeleme.appendChild(inputelementt);
  let labell=document.createElement("label");
  labell.setAttribute("for",Id);
  labell.id=labbelid;
  labell.textContent=todo.text;
  listeleme.appendChild(labell);
    }

    for( element of array){
      createMakeSkill(element);
    }
  /////////////// ordereditems //////////////
  let unorderelements=document.getElementById("unorderitemscontanier");
let arrayy=[
  {
    text:"chicken65",
    uniquen:1
  },
  {
    text:"veg Biryani",
    uniquen:2
  },
  {
    text:"paratha",
    uniquen:3
  }
]

 function  ondeleteele(labelledd){
    let deletedele=document.getElementById(labelledd);
    unorderelements.removeChild(deletedele);
  
  }
  buttonn=document.createElement("button");
  buttonn.textContent="Cancel";
//buttonn.id=labelledd;
  buttonn.onclick=function(){
    ondeleteele(labelledd );
  }
  buttonn.classList.add("button1");
  listele1.appendChild(buttonn);
  
  
 
  for(ele of arrayy){
    addElements(ele);
  }
  /////////////local storage//////////
  localStorage.setItem("name","lavanya");
  localStorage.setItem("gender","female");
  localStorage.setItem("age","24");



  let savebutton=document.getElementById("savebutton");
  let textareaa=document.getElementById("textareass");
  console.log(textareaa)
  savebutton.onclick=function(){
    let userinput=textareaa.value;
    localStorage.setItem("userinput2",userinput);
  }
    let ele1=localStorage.getItem("userinput2");
    if(ele1=== null){
      textareaa.value=" ";
    }else{
      textareaa.value=ele1;
    }
   



  function addElements(item){
    let labelledd="labell"+item.uniquen;
  let listele1=document.createElement("li");
  listele1.classList.add("d-flex","flex-row");
  listele1.id=labelledd;
  unorderelements.appendChild(listele1);
  let para=document.createElement("p");
  para.textContent=item.text;
  listele1.appendChild(para);
  }