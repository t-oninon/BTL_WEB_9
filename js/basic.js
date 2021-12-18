const chooses = document.querySelectorAll('.choose__item');

for (let i = 0; i < chooses.length; i++) {
    chooses[i].onclick = function() {
        for (choose of chooses) {
            choose.classList.remove('it'); 
        }
        chooses[i].classList.add('it');
    };
}


const menu = document.querySelector('.header__menu');
let isclose = true;
menu.addEventListener('click', () => {
    if(isclose) {
        document.querySelector('.header__nav').style.display = 'block';
        isclose = false;
    } else {
        document.querySelector('.header__nav').style.display = 'none';
        isclose = true;
    }
});

const a = document.querySelector('.header__nav');
// a.style.display = 'none';



// const lazyLoads = document.querySelectorAll('.upContent');



// window.onscroll = function() {
//     for (item of lazyLoads) {
//         item.style.display = 'block ';
//     }
// };