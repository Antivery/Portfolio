// Show active on nav when scrolling

const highlightNavItem = () => {
    const elem = document.querySelector('.highlight')
    const homeSection = document.querySelector('#home-section')
    const bioSection = document.querySelector('#bio-section')
    const servicesSection = document.querySelector('#services-section')
    const portfolioSection = document.querySelector('#portfolio-section')
    const contactSection = document.querySelector('#contact-section')
    let scrollPos = window.scrollY
    console.log(scrollPos);

if( scrollPos < 532){
    homeSection.classList.add('highlight')
    bioSection.classList.remove('highlight')
    servicesSection.classList.remove('highlight')
    portfolioSection.classList.remove('highlight')
    contactSection.classList.remove('highlight')
    return;
}else if (scrollPos < 1216){
    bioSection.classList.add('highlight')
    homeSection.classList.remove('highlight')
    servicesSection.classList.remove('highlight')
    contactSection.classList.remove('highlight')
    portfolioSection.classList.remove('highlight')
    return;
}
else if (scrollPos < 2100){
   servicesSection.classList.add('highlight')
    bioSection.classList.remove('highlight')
    portfolioSection.classList.remove('highlight')
    homeSection.classList.remove('highlight')
    contactSection.classList.remove('highlight')
    return;
}

else if(scrollPos < 3268){
    portfolioSection.classList.add('highlight')
    servicesSection.classList.remove('highlight')
    contactSection.classList.remove('highlight')
    homeSection.classList.remove('highlight')
    bioSection.classList.remove('highlight')
    return;
}
else if(scrollPos > 3308){
    contactSection.classList.add('highlight')
    portfolioSection.classList.remove('highlight')
    homeSection.classList.remove('highlight')
    servicesSection.classList.remove('highlight')
    bioSection.classList.remove('highlight')
    return;
}
if(elem){
    elem.classList.remove('highlight')
}


    // allow to find scrren positon to help keep nav items active
    
    console.log(scrollPos);
}
 window.addEventListener('scroll', highlightNavItem);
 window.addEventListener('click', highlightNavItem );

 document.querySelector('.contact-form').addEventListener('submit',submitForm);
 
//  function submitForm(e){
//     e.preventDefault();

//     let  name = document.querySelector('#name').value;
//     let  email =document.querySelector('.email').value;
//     let  phoneNumber = document.querySelector('.phone-number').value;
//     let  message = document.querySelector('#message').value;

//     saveContactInfo(name, email, phoneNumber,message);

//     document.querySelector('.contact-form').reset();
//  }

 

 