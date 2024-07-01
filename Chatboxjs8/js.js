let chatcontanier=document.getElementById("chatContanier");
let userinput=document.getElementById("userinput");
let msgbtn=document.getElementById("sendMsgBtn");
let array=["hi","hey","how can i help you","have a good day","if you need any help"]
let i=0;
function enterMsg(){
    let entervalue=userinput.value;
    let para=document.createElement("p");
    para.classList.add("msg-to-chatbot","msg-to-chatbot-contanier");
    para.textContent=entervalue;
    chatcontanier.appendChild(para);
    userinput.value=" "
    reply();
}
    
function reply(){
    let para2=document.createElement("p");
    para2.classList.add("msg-to-chatbotl","msg-to-chatbot-contanierl");
    para2.textContent=array[i];
    if(i<=array.length){
        i=i+1;
    }
    chatcontanier.appendChild(para2);

}

msgbtn.onclick=function(){
    enterMsg();
}