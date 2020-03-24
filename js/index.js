const header = document.querySelector('.header');

const contact = document.querySelector('.contact');
const contactNag = document.querySelector('.contact-nag');
// const foldNavDropItems = document.querySelectorAll('.fold__nav-drop-item');

// foldNavLinks.forEach((foldNavLink, index) => {
//     foldNavLink.addEventListener('mouseover', () => {
//         foldNavDropItems[index].classList.add('visible');
//     });
//     foldNavLink.addEventListener('mouseout', () => {
//         foldNavDropItems[index].classList.remove('visible');
//     });
// });

const slideHolder = document.querySelector('.slider__slide-holder');

var tl = new TimelineMax();

const func = () => {
    tl.restart(true);
    // tl.reverse();
    // tl.play();
}
tl.to(slideHolder, 1, {x: "-=100vw", delay: 5, ease: Power1.easeOut}).to(slideHolder, 1, {x: "-=100vw", onComplete: func, delay: .05, ease: Power1.easeOut}, "+=5");

// .to(slider, 1, {y: 50}).to(slider, 1, {opacity: 0});

// let myAnimation;

// const func = () => {
//     myAnimation.reverse();
//     myAnimation.play();
// };

// TweenMax.to(slider, 1, {x:"-=100vw", delay: 1});
// TweenMax.to(slider, 1, {x:"-=100vw", delay: 1});
// myAnimation.to(slider, 1, {x:"-=100vw", delay: 1});
// .to(slider, 1, {x:"-=100vw", onComplete: func});


// myAnimation.eventCallback("onComplete", , ["param1","param2"]);

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
