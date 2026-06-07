
$(() => {
    $('#contact-form').submit((event) => {
        event.preventDefault();

        const nameField = document.querySelector('#name').value.trim();
        const emailField = document.querySelector('#e-mail').value.trim();
        const phoneField = document.querySelector('#phoNo').value.trim();
        const msgField = document.querySelector('#message').value.trim();

        const contactForm = {
            name: nameField,
            email: emailField,
            phoneNumber: phoneField,
            message: msgField
        };

        console.log('Submitting contact form', contactForm);
        postContactForm(contactForm);
    });
});

function postContactForm(contactForm) {
    const url = `${window.location.origin}/`;
    $.post(url, contactForm)
        .done(() => {
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset();
        })
        .fail((jqXHR, textStatus, errorThrown) => {
            console.error('Contact form submit failed', textStatus, errorThrown, jqXHR.responseText);
            alert('Unable to send message right now. Please try again later.');
        });
}



