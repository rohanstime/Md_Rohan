var fm1 = document.getElementById("fm1");
var fm2 = document.getElementById("fm2");
var fm3 = document.getElementById("fm3");


var nt1 = document.getElementById("nt1");
var nt2 = document.getElementById("nt2");
var bk1 = document.getElementById("bk1");
var bk2 = document.getElementById("bk2");




nt1.onclick = function(){
  fm1.style.left = "-450px";
  fm2.style.left = "0px";
  
}
bk1.onclick = function(){
  fm1.style.left = "0px";
  fm2.style.left = "450px";
  fm3.style.left = "450px";
}
nt2.onclick = function(){
  fm2.style.left = "-450px";
  fm1.style.left = "-450px";
  fm3.style.left = "0px";
  
}
bk2.onclick = function(){
  fm2.style.left = "0px";
  fm3.style.left = "450px";
  
}

