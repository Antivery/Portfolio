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
    })
    getContactForm()
})

// function addContactForm(contactForm){
//     $("#message-div").append(`<h3>${contactForm.email}</h3> <p>${contactForm.name}</p> <p>${contactForm.phoneNumber}</p> <p>${contactForm.message}</p>`)
// }

function getContactForm(){
$.get("http://localhost:3000/contactForm",(data) =>{
    data.forEach(addContactForm)
})

}

// instagram feed
function postContactForm(contactForm){
    $.post("http://localhost:3000/contactForm",contactForm)}

$(() =>{
    var MyFeed = new Instafeed({
        get: 'user',
        userid:'8459256871',
        limit: 9,
        template: '<div class="ig-container"> <img class="ig-feed-image" title="{{caption}}" src="{{image}}" /></div>',
        resolution: 'low_resolution',
        accessToken: 'IGQVJYbjJ0VS11SXNZAS21wQTZAlQTdCdnpBOTIxRVZAqTzloR1YyVkJ2RTY3OEdXRDhnRHJjYmhCeGlNRnJsRVVHLWV5QlEzNnBFRU1wMlBxSVJIUy1ZAUmVEWUJwZA0RPS0xmNkZALeFNKUU1LbTA0akpBawZDZD'
    });
    MyFeed.run();
})