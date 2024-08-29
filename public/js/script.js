let sendBtn = document.getElementById('sendBtn');
let textbox = document.getElementById('textbox');
let chatContainer = document.getElementById('chatContainer');
let user = {message:""};

let arrayOfPossibleMsg = [
    {message: "hi", response: "Hello there!"},
    {message: "how are you?", response: "I am a bot, please ask me questions electrical related!"},
    {message: "what is your name?", response: "I'm Wirewise, a chatbot!"},
]


function sendMsg(userMsg){
    let msgElement = document.createElement('div');
    msgElement.style.textAlign = "right";
    msgElement.style.margin = "10px"

    msgElement.innerHTML = "<span> You: </span>"+
                          "<span>" +userMsg+ "</span>";

    chatContainer.appendChild(msgElement);
}

function chatbotResponse(userMsg){

    let chatbotMsg = "";
    if (userMsg == "hello"){
        chatbotMsg = "Hello"
    } else if (userMsg == "how are you?") {
        chatbotMsg = "I am a Chatbot! Ready to answer any of your burning questions!"
    } else if (userMsg.length > 5) {
        let result = arrayOfPossibleMsg.filter(val => val.message.includes(userMsg.toLowerCase()));

        if(result.length > 0){
            let response = result[0].response;
            chatbotMsg = response;
        }
    }

    let msgElement = document.createElement('div');

    msgElement.innerHTML = "<span> Chatbot: </span>"+
                            "<span>" +chatbotMsg+ "</span>";

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