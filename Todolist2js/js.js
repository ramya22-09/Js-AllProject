 
 let unorderlistele=document.getElementById("unorderlist")
 let savebutton=document.getElementById("savetodobutton");

savebutton.onclick=function(){
 localStorage.setItem("todolist",JSON.stringify(todoList));
};
function gettodolistfromlocalstorage(){
  let stringifiedtodolist=localStorage.getItem("todolist");
  let parsetodolist=JSON.parse(stringifiedtodolist);
  if(parsetodolist=== null){
    return[];

  }
  else{
    return parsetodolist;
  }
}
 let todoList=gettodolistfromlocalstorage();
 
     
 /*let todoList=[
    {
        text:"learn html",
        uniqueno:1
    },
    {
        text:"learn css",
        uniqueno:2
    },
    {
        text:"learn js",
        uniqueno:3
    }
 ]*/  

       function onTodoStatusChange(checkboxid,labelid,todoId){
        let checkboxele=document.getElementById(checkboxid);
        let labelele=document.getElementById(labelid);
      /* if(checkboxele.checked===true){
        labelele.classList.add("visible");
       }
       else{
        labelele.classList.remove("visible");
       }*/
       labelele.classList.toggle("visible");
       ///////////for isChecked//////////////////
        let todoobjectindex=todoList.findIndex(function(eachTodo){
          let eachtodoId ="todo"+eachTodo.uniqueno;
          if(eachtodoId===todoId){
            return true;
          }
          else{
            return false;
       }});
       console.log(todoobjectindex);
          let todoObject=todoList[todoobjectindex];
          console.log(todoObject)

          // if(todoObject.isChecked=== true){
          //   todoObject.isChecked=false;
          // }
          // else{
          //   todoObject.isChecked=true;
          // }


       
       
      }


     function createAndAppendTodo(item){
      let todoId="todo"+todoList.uniqueno;
        let checkboxid="checkbox"+item.uniqueno;
        let labelid="label" +item.uniqueno;

   let todoelement=document.createElement("li");
   todoelement.classList.add("d-flex","flex-row");   
   todoelement.id=todoId;  
   unorderlistele.appendChild(todoelement);
 let inputele=document.createElement("input");
inputele.type="checkbox";
inputele.id=checkboxid;
todoelement.appendChild(inputele);
inputele.onclick=function(){
    onTodoStatusChange(checkboxid,labelid,todoId);
}

let labelcontanier=document.createElement("div");
labelcontanier.classList.add( "labelcontanier","d-flex","flex-row");
todoelement.appendChild(labelcontanier);
let labelelement=document.createElement("label");
labelelement.setAttribute("for",checkboxid);
labelelement.textContent=item.text;
labelelement.id=labelid;
labelcontanier.appendChild(labelelement)
     }

     for(let ele of todoList){
        createAndAppendTodo(ele);

     }
     let todosCount=todoList.length;
    function onAddTodo(){
        let userinputelement=document.getElementById("userinput");
        let userinputvalue=userinputelement.value;
      if( userinputvalue===""){
        alert("enter valid input");
        return;
      }


        todosCount=todosCount+1;
        let newTodo={
          text:userinputvalue,
          uniqueno:todosCount,
          isChecked:false
          

        };
        todoList.push(newTodo);
        createAndAppendTodo(newTodo);
      
        userinputelement.value=" ";

    }



     let addtodobutton=document.getElementById("addtodobutton");
     addtodobutton.onclick=function(){
        onAddTodo();
     }
    