var navIcon        = document.querySelector('.nav-icon');
var navSpan        = document.querySelectorAll('.nav-icon span');
var navWrapper     = document.querySelector('.nav-wrapper');
var navDisplay     = document.querySelector('.nav-display ul');
var navH1          = document.querySelector('.nav-display h1');
var aboutWrapper   = document.querySelector('.about-wrapper');
var introWrapper   = document.querySelector('.intro-wrapper');
var skillsWrapper  = document.querySelector('.skills-wrapper');
var projectWrapper = document.querySelector('.projects-wrapper');


navIcon.addEventListener('click', function() {

  navIcon.classList.toggle('active-nav-icon');
  navWrapper.classList.toggle('active-nav');
  navDisplay.classList.toggle('active-nav');
  navH1.classList.toggle('active-nav');
  aboutWrapper.classList.toggle('active-wrapper');
  introWrapper.classList.toggle('active-wrapper');
  skillsWrapper.classList.toggle('active-wrapper');
  projectWrapper.classList.toggle('active-wrapper');
  navSpanTransform();

})

window.addEventListener('scroll', function() {

  var top_distance = document.body.scrollTop;

  console.log(top_distance)

  navIcon.style.top = top_distance + 15 + 'px';

})

// Cycless through each span of the nav icon
function navSpanTransform(){
  for(var i = 0; i < navSpan.length; i++) {
    navSpan[i].classList.toggle('active-span');
  }
}
