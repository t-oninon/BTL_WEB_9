const navs = document.querySelectorAll('.nav-item');

let haha = 0;
for (let i = 0; i < navs.length; i++) {
    navs[i].onclick = function() {
        for (nav of navs) {
            nav.classList.remove('active'); 
        }
        navs[i].classList.add('active');
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
