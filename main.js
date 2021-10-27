const nav_links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");

const back_button = document.querySelector("button.back");
const next_button = document.querySelector("button.next");

window.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "ArrowLeft":
      window.scrollBy(-window.innerWidth, 0);
      break;

    case "ArrowRight":
      window.scrollBy(window.innerWidth, 0);
      break;
    case "ArrowUp":
      window.scrollBy(-window.innerWidth, 0);
      break;
    case "ArrowDown":
      window.scrollBy(window.innerWidth, 0);
      break;
  }
});

back_button.addEventListener("click", ()=>{
  window.scrollBy(-window.innerWidth, 0);
})
next_button.addEventListener("click", ()=>{
  window.scrollBy(window.innerWidth, 0);
})


for (i = 0; i < nav_links.length; i++) {
  nav_links[i].onclick = function () {
    var f = document.querySelector("nav ul li > a.active");
    if (f) {
      f.classList.remove("active");
    }
    this.classList.add("active");
  };
}



window.addEventListener('scroll',()=>{
  let current = '';
  sections.forEach( section => {
    const sectionLeft = section.offsetLeft;
    if(scrollX >= sectionLeft*0.6){
      current = section.getAttribute('id');
    }
  });
  nav_links.forEach( li =>{
    li.classList.remove('active');
    if(li.classList.contains(current)) li.classList.add("active");
  });
  
})
