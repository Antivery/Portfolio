
$(() => {
 // email submission
    $('#send').click((event) =>{
        event.preventDefault();

        const nameFeild = document.querySelector('#name').value.trim()
        const emailFeild = document.querySelector('#e-mail').value.trim()
        const phoneFeild = document.querySelector('#phoNo').value.trim()
        const msgFeild = document.querySelector('#message').value.trim()

        var contactForm = 
        { 
            name:nameFeild,
            email:emailFeild,
            phoneNumber: phoneFeild,
            message: msgFeild
        }
        console.log(contactForm)
        postContactForm(contactForm)
        document.getElementById("contact-form").reset()

    })
    getContactForm()
})

//  function addContactForm(contactForm){
//      $("#message-div").append(`<h3>${contactForm.email}</h3> <p>${contactForm.name}</p> <p>${contactForm.phoneNumber}</p> <p>${contactForm.message}</p>`)
//  }

function getContactForm(contactForm){
$.get("portfolio-env.eba-xjnhsbcc.us-east-1.elasticbeanstalk.com/",(data) =>{
    data.forEach(contactForm)
})

}

function postContactForm(contactForm){
    $.post("https://portfolio-env.eba-xjnhsbcc.us-east-1.elasticbeanstalk.com/",contactForm)}
    



