
$(() => {
 // email submission
    $('#send').click((event) =>{
        event.preventDefault();
        var contactForm = 
        { 
            name: $("#name").val(), 
            email: $("#e-mail").val(),
            phoneNumber: $("#phoNo").val(),
            message: $("#message").val()
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
$.get("http://localhost:3000/",(data) =>{
    data.forEach(contactForm)
})

}

function postContactForm(contactForm){
    $.post("http://localhost:3000/contactForm",contactForm)}
    



