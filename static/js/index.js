
ScrollReveal({
    // reset:true,
    distance:"60px",
    duration:500,
    delay:500
});
ScrollReveal().reveal('.mainHeading ',{duration:1500});
ScrollReveal().reveal('.ourDevice',{duration:500,delay:700});
ScrollReveal().reveal('.block',{duration:1200,delay:200,origin:'left'});
ScrollReveal().reveal('.pickMe',{duration:700,origin:"left"});
ScrollReveal().reveal('.pickmeImg',{duration:1200});
ScrollReveal().reveal('.containerLeft',{duration:700,delay:700,origin:"left"});
ScrollReveal().reveal('.containerRight',{duration:700,delay:700,origin:"right"});
ScrollReveal().reveal('.desc',{delay:500,duration:700});


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
