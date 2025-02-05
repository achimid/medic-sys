function getSendElement(text) {
    return `<div class="row msg_container base_sent">
        <div class="col-md-10 col-xs-10">
            <div class="messages msg_sent">
                <p>${text}</p>
                <time datetime="2009-11-13T20:00">Timothy • 51 min</time>
            </div>
        </div>
        <div class="col-md-2 col-xs-2 avatar">
            <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg"
                class=" img-responsive" style="max-width: 50px">
        </div>
    </div>`
}

function getReceivedElement(text) {
    return `
    <div class="row msg_container base_receive">
        <div class="col-md-2 col-xs-2 avatar">
            <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg"
                class=" img-responsive " style="max-width: 50px">
        </div>
        <div class="col-md-10 col-xs-10">
            <div class="messages msg_receive">
                <p>${text}</p>
                <time datetime="2009-11-13T20:00">Timothy • 51 min</time>
            </div>
        </div>
    </div>
    `
}

function scrollDiv() {
    var elem = document.getElementsByClassName('msg_container_base')[0]
    elem.scrollTop = elem.scrollHeight
}

function sendMessage() {
    const message = $('#btn-input').val()
    const json = { message, _ID }

    fetch("/api/v1/chat", 
        {
            method: "POST", 
            body: JSON.stringify(json),
            headers: {'Content-Type':'application/json'}, 
        })
        .then(() => {
            $('#btn-input').val('')
            $('.msg_container_base').append(getSendElement(message))
        })
        .then(scrollDiv)
}

function checkReceiveMessage() {
    fetch(`/api/v1/chat/${_ID}`)
    .then(data => {
        data.json().then(messages => messages.map(m => $('.msg_container_base').append(getReceivedElement(m))))
    })
    .then(scrollDiv)
}

function initMessage() {
    $('.msg_container_base').append(getReceivedElement('Olá, tudo bem? Eu sou um assistente de assuntos médicos, como posso te ajudar?'))
}

$(document).ready(function(){
    initMessage()

    setInterval(checkReceiveMessage, 2000)
    $('#btn-chat').click(sendMessage)

    $('#btn-input').keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13') sendMessage()
    });
})

const _ID = Math.random().toString(36).substr(2, 9)