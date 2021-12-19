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

document.addEventListener('aos:in', ({ detail }) => {
    const counters = document.querySelectorAll('.number');

counters.forEach((counter) => {

let upNumber = 0;
    const updateCounter = () => {
        const target = +counter.getAttribute('data-number');
        const increment = target / 600;
        if (upNumber < target) {
            upNumber += increment;
            counter.innerText = `${Math.ceil(upNumber)}`;
            setTimeout(updateCounter, 1);
        } 
        else {
            counter.innerText = target;
        }
    };

    updateCounter();

})
});



AOS.init({
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    once: true, // whether animation should happen only once - while scrolling down
});

