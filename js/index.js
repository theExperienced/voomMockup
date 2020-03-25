const header = document.querySelector('.header');

const nav = document.querySelector('.nav');
const navInput = document.querySelector('.nav__input');
const navToggle = document.querySelector('.nav__toggle');

const contact = document.querySelector('.contact');
const contactNag = document.querySelector('.contact-nag');


if (window.innerWidth >= 1000 ) {
    /////////SLIDER

    const slideHolder = document.querySelector('.slider__slide-holder');

    var tl = new TimelineMax();

    const func = () => {
        tl.restart(true);
    }
    tl.to(slideHolder, 1, {x: "-=100vw", delay: 5, ease: Power1.easeOut}).to(slideHolder, 1, {x: "-=100vw", onComplete: func, delay: .05, ease: Power1.easeOut}, "+=5");


    /////////INTERSECTION OBSERVERS

    
    const headerObserver = new IntersectionObserver(([header]) => {
        console.log(header)
        if (header.intersectionRatio > 0) {
            contactNag.classList.remove('visible');
        } else {
            contactNag.classList.add('visible');
            console.log('out of view');
        }
        
    });

    headerObserver.observe(header, {threshhold: 1});

    const contactObserver = new IntersectionObserver(([contactSection]) => {
        if (contactSection.intersectionRatio > 0) {
            contactNag.classList.remove('visible');
        } else {
            contactNag.classList.add('visible');
        }
    });

    contactObserver.observe(contact, {threshhold: 0});
}else {
    navInput.addEventListener('click', e => {
        e.stopPropagation();
    });

    document.addEventListener('click', e => {
        if (navInput.checked && e.target !== nav){//&& e.target !== nav) {
            console.group(e.target, 'clicked')
            navInput.checked = false;
        }
    });
}
