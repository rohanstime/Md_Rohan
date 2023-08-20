var pross1 = document.getElementById("pross1");
var pross2 = document.getElementById("pross2");
var pross3 = document.getElementById("pross3");
var pross4 = document.getElementById("pross4");


var nextt1 = document.getElementById("nextt1");
var nextt2 = document.getElementById("nextt2");
var backk1 = document.getElementById("backk1");
var backk2 = document.getElementById("backk2");
var nextt3 = document.getElementById("nextt3");
var backk3 = document.getElementById("backk3");
var nextt4 = document.getElementById("nextt4");
var backk4 = document.getElementById("backk4");




nextt1.onclick = function(){
  pross1.style.left = "-450px";
  pross2.style.left = "0px";
}
backk1.onclick = function(){
  pross1.style.left = "0px";
  pross2.style.left = "450px";
}
nextt2.onclick = function(){
  pross2.style.left = "-450px";
  pross3.style.left = "0px";
}
backk2.onclick = function(){
  pross2.style.left = "0px";
  pross3.style.left = "450px";
}
nextt3.onclick = function(){
  pross3.style.left = "-450px";
  pross4.style.left = "0px";
}
backk3.onclick = function(){
  pross3.style.left = "0px";
  pross4.style.left = "450px";
}
nextt4.onclick = function(){
  pross4.style.left = "-450px";
  pross5.style.left = "0px";
}
backk4.onclick = function(){
  pross4.style.left = "0px";
  pross5.style.left = "450px";
}
