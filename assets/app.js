setTimeout(function fade () {
    const wrapper = document.querySelector('.wrapper');
    wrapper.classList.add('fade')

    window.addEventListener('load', fade);
}, 1000);



let btnMobile = document.getElementById('btn-mobile');

function menuAct(event) {
if (event.type === 'touchstart') event.preventDefault();
const nav = document.getElementById('nav');
nav.classList.toggle('active');
}
// btnMobile.addEventListener('click', menuAct);
// btnMobile.addEventListener('touchstart', menuAct);


var speedTop = {
    distance: '-30px',
    duration: 1700,
    delay: 600,
    origin: 'top'
};

var speedmin = {
    distance: '-10px',
    duration: 1400,
    delay: 400
};

window.sr = ScrollReveal({ reset: true });


sr.reveal('.text-01, .itens-01, .zap, .itens-02', speedTop, {delay: 500, origin:'top',});