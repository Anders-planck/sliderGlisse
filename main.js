const burger = document.querySelector('.burger');
const visto = document.querySelector('.menu');
burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    visto.classList.toggle('show');
})

const burger2 = document.querySelector('.burger2');

burger2.addEventListener('click', () => {
    burger2.classList.toggle('active');
})