let sendBtn = document.getElementById('sendBtn');
let textbox = document.getElementById('textbox');
let chatContainer = document.getElementById('chatContainer');
let user = {message:""};


function sendMsg(userMsg){
    let msgElement = document.createElement('div');
    msgElement.style.textAlign = "right";
    msgElement.style.margin = "10px"

    msgElement.innerHTML = "<span> You: </span>"+
                          "<span>" +userMsg+ "</span>";

    chatContainer.appendChild(msgElement);
}

function chatbotResponse(userMsg){
    let msgElement = document.createElement('div');

    msgElement.innerHTML = "<span> Chatbot: </span>"+
                            "<span>" +userMsg+ "</span>"
    chatContainer.appendChild(msgElement)
}


sendBtn.addEventListener('click', function(e){
    let userMsg = textbox.value;
    
    if(userMsg == ""){
        alert('Please type in a message');
    } else {
        let userMsgTxt = userMsg.trim();
        user.message = userMsgTxt;
        textbox.value = "";
        sendMsg(userMsgTxt);
        chatbotResponse(userMsgTxt);
    }
})