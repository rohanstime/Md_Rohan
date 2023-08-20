////////////
var dform1 = document.getElementById("dform1");
var dform2 = document.getElementById("dform2");
var dform3 = document.getElementById("dform3");
var dform4 = document.getElementById("dform4");
var dform5 = document.getElementById("dform5");

var dnext1 = document.getElementById("dnext1");
var dnext2 = document.getElementById("dnext2");
var dnext3 = document.getElementById("dnext3");
var dnext4 = document.getElementById("dnext4");
var dback1 = document.getElementById("dback1");
var dback2 = document.getElementById("dback2");
var dback3 = document.getElementById("dback3");
var dback4 = document.getElementById("dback4");


dnext1.onclick = function(){
  dform1.style.left = "-1050px";
  dform2.style.left = "0px";
}
dback1.onclick = function(){
  dform1.style.left = "0px";
  dform2.style.left = "1050px";
}


dnext2.onclick = function(){
  dform2.style.left = "-1050px";
  dform3.style.left = "0px";
}

dback2.onclick = function(){
  dform2.style.left = "0px";
  dform3.style.left = "1050px";
}

dnext3.onclick = function(){
  dform3.style.left = "-1050px";
  dform4.style.left = "0px";
}

dback3.onclick = function(){
  dform3.style.left = "0px";
  dform4.style.left = "1050px";
}

dnext4.onclick = function(){
  dform4.style.left = "-1050px";
  dform5.style.left = "0px";
}

dback4.onclick = function(){
  dform4.style.left = "0px";
  dform5.style.left = "1050px";
}