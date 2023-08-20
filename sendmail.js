var nav2 = document.querySelector(".nav-bar2");

var nav10 = document.querySelector(".navbar10");



function mynavs(){
  nav2.classList.add("shownav2");
  nav2.style.transform = "translateY(0px)";
  nav10.classList.add("shownav10");
  nav10.style.transform = "translateY(0px)";
}
function removerall(){
  nav2.classList.remove("shownav2");
  nav2.style.transform = "translateY(100px)";
  nav10.classList.remove("shownav10");
  nav10.style.transform = "translateY(100px)";
}




/*
function sendEmail(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "edummy600@gmail.com",
    Password : "wlzcfkoryzuliili",
    To : 'edummy600gmail.com',
    From : document.getElementById("email").value,
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert("done")
);
}



*/





/*function sendEmail(){
  
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "edummy600@gmail.com",
    Password : "edummy600600",
    To : "edummy600@gmail.com",
    From : document.getElementById("email").value,
    Subject : "My subject",
    Body : "none",
    
}).then(
  message => alert("done")
);
  
  
  
}

*/

/*

Body : "Name : " + document.getElementById("name").value + "<br> Email : " + document.getElementById("email").value + "<br> Subject : " + document.getElementById("subject").value + "<br> tx : " + document.getElementById("tx").value


*/