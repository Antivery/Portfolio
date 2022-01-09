$(() => {
    $('#send').click((event) =>{
        event.preventDefault();
        addMessages({name:"Anthony", message:"hi"})
    })
         
    getMessages()
})

function addMessages(message){
    $("#message-div").append(`<h3>${message.message}</h3> <p>${message.name}</p>`)
}

function getMessages(){
$.get("http://localhost:3000/messages",(data) =>{
    data.forEach(addMessages)
});


}