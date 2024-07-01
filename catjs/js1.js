

 function styles(){
   
   document.getElementById("headingElement").textContent="hi ramya";
document.getElementById("headingElement").style.color="blue"

}
function offbtn(){
  document.getElementById("catimg").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
  document.getElementById("switchedbtn").textContent="Swich Off";
  document.getElementById("on-btn").style.backgroundColor="green";
  document.getElementById("off-btn").style.backgroundColor="#cbd2d9";

  document.getElementById("bulbImg").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
}
function onbtn(){
  document.getElementById("catimg").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
  document.getElementById("switchedbtn").textContent="Swich On";
  document.getElementById("off-btn").style.backgroundColor="red";
  document.getElementById("on-btn").style.backgroundColor="#cbd2d9";
  document.getElementById("bulbImg").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
}
  


