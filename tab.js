document.getElementById("a1").addEventListener("click", function() {

  document.querySelector("#tabcontent1").style.visibility = "visible";
  document.querySelector("#tabcontent2").style.visibility = "hidden";
  document.querySelector("#tabcontent3").style.visibility = "hidden";
  
  document.querySelector("#tabcontent1").style.transform = "translateX(0%)";
  document.querySelector("#tabcontent2").style.transform = "translateX(100%)";
  document.querySelector("#tabcontent3").style.transform = "translateX(-100%)";
  
  document.getElementById("a1").classList.add("myactives");
  
  document.getElementById("a2").classList.remove("myactives");
  
  document.getElementById("a3").classList.remove("myactives");
  
document.getElementById("a1").style.color = "#E63946";

});


//for tab 2

document.getElementById("a2").addEventListener("click", function() {

  document.querySelector("#tabcontent2").style.visibility = "visible";
  document.querySelector("#tabcontent1").style.visibility = "hidden";
  document.querySelector("#tabcontent3").style.visibility = "hidden";
  
  document.querySelector("#tabcontent2").style.transform= "translateX(0%)";
  document.querySelector("#tabcontent1").style.transform= "translateX(100%)";
  document.querySelector("#tabcontent3").style.transform = "translateX(100%)";
  
  
  document.getElementById("a2").classList.add("myactives");
  
  document.getElementById("a1").classList.remove("myactives");
  
  document.getElementById("a3").classList.remove("myactives");

  document.getElementById("a1").style.color = "#000";
  

});


//for tab 3

document.getElementById("a3").addEventListener("click", function() {

  document.querySelector("#tabcontent3").style.visibility = "visible";
  document.querySelector("#tabcontent2").style.visibility = "hidden";
  document.querySelector("#tabcontent1").style.visibility = "hidden";
  
  document.querySelector("#tabcontent3").style.transform = "translateX(0%)";
  
  document.querySelector("#tabcontent2").style.transform = "translateX(100%)";
  document.querySelector("#tabcontent1").style.transform = "translateX(100%)";
  
  document.getElementById("a3").classList.add("myactives");
  
  document.getElementById("a2").classList.remove("myactives");
  
  document.getElementById("a1").classList.remove("myactives");
  
  document.getElementById("a1").style.color = "#000";

});