// scroll page activation color

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = ()=>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height= sec.offsetHeight;
        let id= sec.getAttribute('id');

        if(top >= offset && top <offset+height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id + ']').classList.add('active');

            });
        };
    });

};


// Scroll reveal 

ScrollReveal({
     reset: true,
     distance:'80px',
     duration:2000,
     delay:200

});

ScrollReveal().reveal('.home-content, .heading ,.about h3',{ origin: 'top' });
ScrollReveal().reveal('.home-image, .skills-container, .projects, .contact form,.footer-text p',{ origin: 'bottom' });
ScrollReveal().reveal('.about-img, .home-content h1, .skills p',{ origin: 'left' });
ScrollReveal().reveal('.about-content, .home-content p , .skills-container p',{ origin: 'right' });


// Typed JS

const typed = new Typed('.Texts',{
    strings: ['Software Developer','Graphics Designer','Frontend Developer','Blogger','Freelancer','Gamer','Youtuber'],
    typeSpeed:120,
    backSpeed:80,
    backDelay:1000,
    loop:true

});