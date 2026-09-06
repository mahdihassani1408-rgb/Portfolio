

const header = document.querySelector('.header');

window.addEventListener('scroll', () =>{
    if(window.scrollY > 50){
        header.classList.add('scrolled');
    }else{
        header.classList.remove('scrolled');
    }
});

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navMenu.querySelectorAll('a').forEach(link =>{
    link.addEventListener('click', () =>{
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () =>{
    let current = '';
    sections.forEach(section =>{
        const sectionTop = section.offsetTop - 100;
        if(window.scrollY >= sectionTop){
            current = section.getAttribute('id');
        }
    });


    navLinks.forEach(link =>{
        link.classList.remove('active');
        if(link.getAttribute('href') === `#${current}`){
        link.classList.add('active');
        }
    });

});

const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new  IntersectionObserver((entries) =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }
    });
}, {threshold: 0.15, once: true});

revealElements.forEach(el => revealObserver.observe(el));