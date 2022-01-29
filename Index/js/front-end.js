  
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-nav');
 
const mobileMenuToggle = () =>{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    
};
menu.addEventListener('click', mobileMenuToggle);

console.log(mobileMenuToggle)

// Show active on nav when scrolling

const highlightNavItem = () => {
    const elem = document.querySelector('.highlight')
    const homeSection = document.querySelector('#home-section')
    const bioSection = document.querySelector('#bio-section')
    const servicesSection = document.querySelector('#services-section')
    const portfolioSection = document.querySelector('#portfolio-section')
    const contactSection = document.querySelector('#contact-section')
    let scrollPos = window.scrollY
   

if( scrollPos < 532){
    homeSection.classList.add('highlight')
    bioSection.classList.remove('highlight')
    servicesSection.classList.remove('highlight')
    portfolioSection.classList.remove('highlight')
    contactSection.classList.remove('highlight')
    return;
}else if (scrollPos < 1461){
    bioSection.classList.add('highlight')
    homeSection.classList.remove('highlight')
    servicesSection.classList.remove('highlight')
    contactSection.classList.remove('highlight')
    portfolioSection.classList.remove('highlight')
    return;
}
else if (scrollPos < 2278){
   servicesSection.classList.add('highlight')
    bioSection.classList.remove('highlight')
    portfolioSection.classList.remove('highlight')
    homeSection.classList.remove('highlight')
    contactSection.classList.remove('highlight')
    return;
}

else if(scrollPos < 3796){
    portfolioSection.classList.add('highlight')
    servicesSection.classList.remove('highlight')
    contactSection.classList.remove('highlight')
    homeSection.classList.remove('highlight')
    bioSection.classList.remove('highlight')
    return;
}
else if(scrollPos > 3796){
    contactSection.classList.add('highlight')
    portfolioSection.classList.remove('highlight')
    homeSection.classList.remove('highlight')
    servicesSection.classList.remove('highlight')
    bioSection.classList.remove('highlight')
    return;
}
if(elem){
    elem.classList.remove('highlight')
};
    // allow to find scrren positon to help keep nav items active
};

 window.addEventListener('scroll', highlightNavItem);
 window.addEventListener('click', highlightNavItem );
 


 