var slide1 = document.getElementById("slide1");
var uparrow = document.getElementById("uparrow");
var downarrow = document.getElementById("downarrow");

let x = 0;

uparrow.onclick = function(){
  if(x > "-1050"){
    x = x - 350;
    slide1.style.top = x + "px";
  }
  
}
downarrow.onclick = function(){
  if(x < 0){
    x = x + 350;
    slide1.style.top = x + "px";
  }
  
}
