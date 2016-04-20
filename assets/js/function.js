var navIcon    = document.querySelector('.nav-icon');
var navSpan    = document.querySelectorAll('.nav-icon span');
var navWrapper = document.querySelector('.nav-wrapper');
var navDisplay = document. querySelector('.nav-display');


navIcon.addEventListener('click', function() {

  navIcon.classList.toggle('active-nav-icon');
  navWrapper.classList.toggle('active-nav');
  navDisplay.classList.toggle('active-nav');
  navSpanTransform();

})

function navSpanTransform(){
  for(var i = 0; i < navSpan.length; i++) {
    navSpan[i].classList.toggle('active-span');
  }
}
