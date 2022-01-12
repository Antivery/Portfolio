$(() => {

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
    })

    getContactForm()
})


function addContactForm(contactForm){
    $("#message-div").append(`<h3>${contactForm.email}</h3> <p>${contactForm.name}</p> <p>${contactForm.phonNumber}</p> <p>${contactForm.message}</p>`)
}

function getContactForm(){
$.get("http://localhost:3000/contactForm",(data) =>{
    data.forEach(addContactForm)
})

}


function postContactForm(contactForm){
    $.post("http://localhost:3000/contactForm",contactForm)}