var navIcon        = document.querySelector('.nav-icon');
var navSpan        = document.querySelectorAll('.nav-icon span');
var navWrapper     = document.querySelector('.nav-wrapper');
var navLinks       = document.querySelectorAll('.nav-display a');
var navDisplay     = document.querySelector('.nav-display ul');
var navH1          = document.querySelector('.nav-display h1');
var aboutWrapper   = document.querySelector('.about-wrapper');
var introWrapper   = document.querySelector('.intro-wrapper');
var skillsWrapper  = document.querySelector('.skills-wrapper');
var projectWrapper = document.querySelector('.projects-wrapper');
var footerWrapper  = document.querySelector('.footer-wrapper');
var aboutDisplay   = document.querySelector('.about-display');
var projects       = document.querySelectorAll('.thumb a');
var thumb          = document.querySelector('.thumb');
var linkLocation;
var projectArray;


// NavIcon Click Events
navIcon.addEventListener('click', function() {

  navToggleAll();
  navSpanTransform();

});



// Functions being called //
  randomNum(32);
  tadaRandom();



// ON SCROLL FUNCTIONS
window.addEventListener('scroll', function(event) {
  var body_top = $(window).scrollTop();
  var projects_top = projectWrapper.offsetTop;
  var about_top = aboutWrapper.offsetTop;

  // Sets the scroll location that will activate the function
  if(body_top >= projects_top - 400) {
    projectTransform();
  }
  if(body_top >= about_top - this.innerHeight / 2) {
    aboutDisplayTransform();
  }


  event.preventDefault();
  event.stopPropagation();
})

//*********************************************
// FUNCTIONS
//*********************************************


// Cycles through each span of the nav icon
function navSpanTransform(){
  for(var i = 0; i < navSpan.length; i++) {
    navSpan[i].classList.toggle('active-span');
  }
}

// Cycles through each project in the projects section and slides the projects in from the left
function projectTransform() {
  for(var i = 0; i < projects.length;i++) {
    (function(i) {
      setTimeout(function(){
        projects[i].classList.add('active-thumb');
      }, 300 * (i+1));
    })(i)
  }
}

function aboutDisplayTransform(){
  aboutDisplay.classList.add('display-slide');
}

// Generates an array of random number who's length is set by num -- This code should probably be refactored.
function randomNum(num){
  projectArray = [];

  for(var i = 0; i < num; i++) {
    var randomProject = Math.floor((Math.random() * 8) + 1);
    projectArray.push(randomProject);
  }
  return(projectArray);
}

// Cycles through each project and attaches an animation to them.
function tadaRandom() {
    for(var i = 0; i < 32; i++) {
      (function(i) {
        setTimeout(function(){
          projects[projectArray[i]].classList.toggle('tada-thumb');
        }, 5000 * (i+1));
      })(i);
    }
}

// Scroll down navIcon
function navIconScrollTop(){
  var top_distance = document.body.scrollTop;
  // Moves nav icon down on scroll
  navIcon.style.top = top_distance + 15 + 'px';
}

function navToggleAll() {
  navIcon.classList.toggle('active-nav-icon');
  navWrapper.classList.toggle('active-nav');
  navDisplay.classList.toggle('active-nav');
  navH1.classList.toggle('active-nav');
  aboutWrapper.classList.toggle('active-wrapper');
  introWrapper.classList.toggle('active-wrapper');
  skillsWrapper.classList.toggle('active-wrapper');
  projectWrapper.classList.toggle('active-wrapper');
  footerWrapper.classList.toggle('active-wrapper');
}

// Get Elements distance from top of page
function getElementDistance(elem) {
  var location = 0;
  if (elem.offsetParent) {
      do {
        location += elem.offsetTop;
        elem = elem.offsetParent;
      } while (elem);
  }
  return location >= 0 ? location : 0;
}

// hello


//*********************************************
// Jquery
//*********************************************

// JQuery is subsituting for the javascript I can't do without it. :/
$(document).ready(function() {

  $('.nav-display a').click(function(event) {

    if (this.getAttribute('name') === 'link1') {
      $('html,body').animate({
          scrollTop: $('.intro-wrapper').offset().top},
          1000);
    } else if (this.getAttribute('name') === 'link2') {
      $('html,body').animate({
          scrollTop: $('.about-wrapper').offset().top},
          1000);
    } else if (this.getAttribute('name') === 'link3') {
      $('html,body').animate({
          scrollTop: $('.skills-wrapper').offset().top},
          1000);
    } else {
      $('html,body').animate({
          scrollTop: $('.projects-wrapper').offset().top},
          1000);
    }

    event.preventDefault();
    event.stopPropagation();

    // When a navigation link is click the following function close the navigation menuu on small screens
    navToggleAll();
    navSpanTransform();
  });


})
