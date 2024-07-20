


ScrollReveal({
    // reset:true,
    distance:"60px",
    duration:500,
    delay:500
});
ScrollReveal().reveal('.block',{duration:1200,delay:200,origin:'left'});

ScrollReveal().reveal('.taglineContainer',{duration:1200,delay:200,origin:'right'})
ScrollReveal().reveal('.tagline',{duration:1200,delay:500,origin:'bottom'})
ScrollReveal().reveal('.prvHeading',{duration:1200,delay:200,origin:'left'})
ScrollReveal().reveal('#currentOpportunityImg',{duration:1200,delay:200,origin:'bottom'})

ScrollReveal().reveal('#tilea',{duration:1200,delay:200,origin:'bottom'})
ScrollReveal().reveal('#tileb',{duration:1200,delay:250,origin:'bottom'})
ScrollReveal().reveal('#tilec',{duration:1200,delay:300,origin:'bottom'})
ScrollReveal().reveal('#tiled',{duration:1200,delay:350,origin:'bottom'})
ScrollReveal().reveal('#tilee',{duration:1200,delay:400,origin:'bottom'})
// ScrollReveal().reveal('#tile6',{duration:1200,delay:450,origin:'bottom'})
ScrollReveal().reveal('#tileImg',{duration:1200,delay:300,origin:'left'})
ScrollReveal().reveal('#tileContent',{duration:1200,delay:300,origin:'right'})

ScrollReveal().reveal('#offer1',{duration:1000,delay:200,origin:'bottom'})
ScrollReveal().reveal('#offer2',{duration:1000,delay:200,origin:'bottom'})
ScrollReveal().reveal('#offer3',{duration:1000,delay:200,origin:'bottom'})






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
    