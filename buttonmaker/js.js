 let backgroundcolor=document.getElementById("bgcolor");
 let fontcolor=document.getElementById("fontcolor");
 let fontsize=document.getElementById("fontsize");
 let fontweight=document.getElementById("fontweight");
 let padding=document.getElementById("padding");
 let radius=document.getElementById("radius");
 let custombutton=document.getElementById("custombutton");
 function aplly1(){
   let  bg=backgroundcolor.value;
   let  fc=fontcolor.value;
   let   fs=fontsize.value;
   let fw=fontweight.value;
   let padding1= padding.value;
   let radius1= radius.value;
   custombutton.style.backgroundColor=bg;
   custombutton.style.color=fc;
   custombutton.style.fontSize=fs;
   custombutton.style.fontWeight=fw;
   custombutton.style.padding=padding1;
   custombutton.style.borderRadius=radius1;
   
 }