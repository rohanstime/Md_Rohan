var pop2 = document.querySelector(".desknav");

function mypop(){
  pop2.classList.add("opendesknav");
  pop2.style.transform = "translateX(0)";
}

function mypop2(){
  pop2.classList.remove("opendesknav");
  pop2.style.transform = "translateX(-300px)";
}


