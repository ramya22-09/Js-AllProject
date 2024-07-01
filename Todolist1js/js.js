/*let inputele =document.createElement("input");
inputele.type="checkbox";
inputele.id="mybox1";
document.body.appendChild(inputele);
let label1=document.createElement("label");
label1.setAttribute("for", "mybox1");
label1.textContent="postgraduted";
document.body.appendChild(label1);*/

let ull=document.getElementById("todoitemscontanier");

let addtodobutton=document.getElementById("addtodobutton");

let todolist=[
    {
        text:"learn php",
          uniqueNo:1
    },
    {
        text:"learn sql",
        uniqueNo:2
    },
    {
        text:"learn dbms",
        uniqueNo:3
    }

    
];










  function onTodoStatusChange(checkboxid , labelid){
    let checkboxelement=document.getElementById(checkboxid);
    
    let labelelement=document.getElementById(labelid);
    labelelement.classList.toggle("checked");
  /*  if(checkboxelement.checked === true){
        labelelement.classList.add("checked");
    }
    else{
        labelelement.classList.remove("checked");
    } */
}

function createAppendTodo(todo){
    let checkboxid="checkbox" + todo.uniqueNo;
    let labelid="label"+ todo.uniqueNo;
let ele1=document.createElement("li");
ele1.classList.add("todoitemcontanier","d-flex","flex-row");
ull.appendChild(ele1);
let input1=document.createElement("input");
input1.type="checkbox";
input1.id=checkboxid;


input1.onclick=function(){
    onTodoStatusChange(checkboxid , labelid);
};


ele1.appendChild(input1);
let labelcontanier=document.createElement("div");
labelcontanier.classList.add("label1bg","d-flex","flex-row");
ele1.appendChild(labelcontanier);
let label1=document.createElement("label");
label1.htmlFor=checkboxid;
label1.textContent=todo.text;
label1.id=labelid;
labelcontanier.appendChild(label1);
let deletecontanier=document.createElement("div");
deletecontanier.classList.add("deletebox1");
labelcontanier.appendChild(deletecontanier);
}
//createAppendTodo( todolist[0]);
//createAppendTodo( todolist[1])
//createAppendTodo( todolist[2]);

function onAddTodo(){
    let todosCount=todoList.length;
    todosCount=todosCount+1;
    let userinputelement=document.getElementById("todouserinput");
    let userinputvalue= userinputelement.value;
    
    let newTodo={
      text:userinputvalue,
      uniqueNo:todosCount
    };
    createAppendTodo(newTodo);
    userinputelement.value=" ";

    
}
addtodobutton.onclick=function(){
    onAddTodo();
}
for (let eachTodo of todolist){
    createAppendTodo(eachTodo );

}



  


