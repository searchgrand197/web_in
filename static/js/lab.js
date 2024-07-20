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
ScrollReveal().reveal('.a',{duration:1200,delay:700,origin:'bottom'})
ScrollReveal().reveal('.b',{duration:1200,delay:900,origin:'bottom'})
ScrollReveal().reveal('.c',{duration:1200,delay:1100,origin:'bottom'})
ScrollReveal().reveal('.d',{duration:1200,delay:1300,origin:'bottom'})
ScrollReveal().reveal('.title',{duration:1200,delay:1500,origin:'left'})
