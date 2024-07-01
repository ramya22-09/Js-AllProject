let formdata={
    name:"",
    email:"",
    status:"Active",
    gender:"Male"
}


let warningmsg=document.getElementById("warningmes");

let username=document.getElementById("username");
let useremail=document.getElementById("useremail");
let warning=document.getElementById("warning");
username.addEventListener("change",function(event){
    
 if(event.target.value===""){
    warningmsg.textContent="Required*"
 }
 else{
     warningmsg.textContent=""
 }
 formdata.name=event.target.value ;

})
useremail.addEventListener("change",function(e){
    if(e.target.value===""){
        warning.textContent="Required*"
     }
     else{
         warning.textContent=""
     }
     formdata.email=e.target.value
    
     
    })
    ////////////////select ////////////////
    let selectel=document.getElementById("select");
    selectel.addEventListener("change",function(event){
        formdata.status=event.target.value ;
        

    })
    /////////////for radio buttons//////////////
    let maleele=document.getElementById("male");
    maleele.addEventListener("change",function(event){
           formdata.gender=event.target.value;
           
    })
    let femaleele=document.getElementById("female");
    femaleele.addEventListener("change",function(event){
           formdata.gender=event.target.value;
           
    })

    ////////////submit //////////////////
    let formid=document.getElementById("formid");
    formid.addEventListener("submit",function(event){
        submitForm(formdata);
    })
    function submitForm(formdata){
        let options={
            method:"POST",
            headers:{
                "content-type": "application/json",
                Accept:"application/json",
                

            },
            body: JSON.stringify(formdata)
        };
       let  url="https://gorest.co.in/public-api/users";
        fetch(url ,options)
        .then (function(response){
            return response.json();
        })
        .then(function (jsonData){
            console.log(jsonData);
        })
    }