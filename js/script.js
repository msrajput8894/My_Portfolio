// console.log("hello world");


// set current year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;



//making mobile navigation work.

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function(){


  headerEl.classList.toggle("nav-open")

});


//working sticky navigation


const sectionHomeEl = document.querySelector(".section-Home");

const obs = new IntersectionObserver(function(entries){
  const ent = entries[0];
  console.log(ent);
  if(ent.isIntersecting === false){

    document.body.classList.add('sticky');
  }
  if(ent.isIntersecting === true){

    document.body.classList.remove('sticky');
  }

  
},
{

  //in the viewport
  root: null,
  threshold:0,
  rootMargin: '-80px',

});
obs.observe(sectionHomeEl);


///////////////////////////////////////////////////////// Smooth Scrolling Animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll Back to the top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behaviour: "smooth",
      });

    //scroll to other links

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behaviour: "smooth" });
    }

    //close mobile navigation
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});
