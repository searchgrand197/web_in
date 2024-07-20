const wsOption = document.getElementById('wsOption')
const popUp = document.getElementById('popUp')
const clsBtn = document.getElementById('clsBtn')
const background = document.getElementById('background')
var bool = false;
wsOption.addEventListener('click',function(){
    popUp.style.display = 'block';
    background.style.display = 'block';
})
clsBtn.addEventListener('click',function(){
    popUp.style.display = 'none';
    background.style.display = 'none';
})

ScrollReveal({
    // reset:true,
    distance:"60px",
    duration:500,
    delay:500
});
ScrollReveal().reveal('.heading',{duration:1200,delay:200,origin:'top'});

// ScrollReveal().reveal('.taglineContainer',{duration:1200,delay:200,origin:'right'})
// ScrollReveal().reveal('.tagline',{duration:1200,delay:500,origin:'bottom'})
// ScrollReveal().reveal('.prvHeading',{duration:1200,delay:200,origin:'left'})
ScrollReveal().reveal('.title',{duration:1200,delay:1500,origin:'left'})
ScrollReveal().reveal('#wwrContainer1',{duration:1200,delay:500,origin:'bottom'})
ScrollReveal().reveal('#wwrContainer2',{duration:1200,delay:700,origin:'bottom'})
ScrollReveal().reveal('#wwrContainer3',{duration:1200,delay:900,origin:'bottom'})





let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
    