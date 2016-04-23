var navIcon        = document.querySelector('.nav-icon');
var navSpan        = document.querySelectorAll('.nav-icon span');
var navWrapper     = document.querySelector('.nav-wrapper');
var navDisplay     = document.querySelector('.nav-display ul');
var navH1          = document.querySelector('.nav-display h1');
var aboutWrapper   = document.querySelector('.about-wrapper');
var introWrapper   = document.querySelector('.intro-wrapper');
var skillsWrapper  = document.querySelector('.skills-wrapper');
var projectWrapper = document.querySelector('.projects-wrapper');
var projects       = document.querySelectorAll('.thumb a');



// NavIcon Click Events
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



// Functions being called //
  randomNum(32);
  tadaRandom();



// ON SCROLL FUNCTIONS
window.addEventListener('scroll', function() {
  var top_distance = document.body.scrollTop;
  var thumb = document.querySelector('.thumb');
  var thumb_top = getElementDistance(thumb);
  console.log(thumb_top)

  // Moves nav icon down on scroll
  navIcon.style.top = top_distance + 15 + 'px';

  // Sets the scroll location that will activate the function
  if(top_distance >= thumb_top - 400) {
    projectTransform();
  }

})



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
  // var randomProject = [5, 3, 7, 2, 6, 1, 8, 4];
    for(var i = 0; i < 32;i++) {
      (function(i) {
        setTimeout(function(){
          projects[projectArray[i]].classList.toggle('tada-thumb');
        }, 5000 * (i+1));
      })(i);
    }
}





// Get window location from top of page
var position = window.OffsetTop;

// Get Elements distance from top of page
var getElementDistance = function (elem) {
  var location = 0;
  if (elem.offsetParent) {
      do {
        location += elem.offsetTop;
        elem = elem.offsetParent;
      } while (elem);
  }
  return location >= 0 ? location : 0;
}
