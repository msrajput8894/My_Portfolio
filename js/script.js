// console.log("hello world");


// set current year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;



//making mobile navigation work.

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener('click', function(){


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