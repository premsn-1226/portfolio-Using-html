const ham = document.querySelector('.hamburger');
const navlinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const li = document.querySelector('.nav-links li a');

ham.addEventListener("click",() => {
    navlinks.classList.toggle('open');
    links.forEach(link =>{
        link.classList.toggle("fa"); 
    })
    
    
});




var current = document.getElementById('default');

  function highlite(el)
  {
     if (current != null)
     {
         current.className = "";
     }
     el.className = "highlite";
     current = el;
  }
