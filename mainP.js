let navbar = document.querySelector(".navbar");
let navlinks = document.querySelector(".nav-links");

function aboutme() {
    window.location.href = "./aboutme.html";
}

function megaproject() {
    window.location.href = "./megaproject.html";
}

function games() {
    window.location.href = "./games.html";
}

function miniproject() {
    window.location.href = "./miniproject.html";
}

function instagram() {
    window.location.href = "https://www.instagram.com/crystall_god_like/";
}

function gmail() {
    alert("codewithabhay11@gmail.com");
}

function discord() {
    alert("updating soon");
}

let link = document.querySelector(".link");
function toggle() {
    let navbar = document.querySelector(".navbar");
    let navlinks = document.querySelector(".nav-links");
    
    navlinks.classList.toggle("navl-tog");
    navbar.classList.toggle("navb-tog");
   
    



}




