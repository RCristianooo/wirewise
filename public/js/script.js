let sendBtn = document.getElementById('sendBtn');
let textbox = document.getElementById('textbox');
let chatContainer = document.getElementById('chatContainer');
let user = {message:""};

let arrayOfPossibleMsg = [
    {message: "hi", response: "Hello there!"},
    {message: "how are you?", response: "I am a bot, please ask me questions electrical related!"},
    {message: "what is your name?", response: "I'm Wirewise, a chatbot!"},
    {message: "what is an afci?", response: "An AFCI is an arc-fault circuit interruptor and its job is to stop electric flow when an “arc” or surge is detected. This would happen if wires are damaged. Typically, AFCI’s come in the form of circuit breakers and are installed in newer electrical panels. AFCI’s protect bedroom circuits in most cases."},
    {message: "what is a gfci?", response: "A GFCI is kind of like an AFCI. However, GFCI are for ground faults. This means the electric current takes a different path other than what is in the circuit. For instance, if an appliance malfunctions and then shocks a person. A GFCI in that case, would sense the different path of electric current and stop electric flow or “trip”."},
    {message: "is a panel safe?", response: "This is kind of a loaded question to answer as Wirewise chatbot. You should pay attention about your electrical panel for better insight."},
    {message: "why are the lights flickering?", response: "If you lights are not LED bulbs, this can be because they have a loose connection somewhere. Either from the socket, in the panel, or in the wiring. If you do have LED bulbs and your lights are flickering, this is mostly due to the bulbs themselves. I would recommend replacement. A lot of times brand new homes have LED bulbs that flicker because they are cheaper bulbs."},
    {message: "why do my breakers keep tripping?", response: "Breakers can trip simply because they are worn out/older. However, they could also be tripping because of an underlying problem with a wire or an appliance. Check the circuit and appliances the breaker is on to see if that could be the root of the issue. In most cases, breakers are cheap and just have to be replaced overtime."},
    {message: "why is my dimmer switch hot?", response: "Dimmer switches use more electricity inside the switch so it’s normal they are warm or a little hot. Any switch however, that is over 130 degrees Fahrenheit should be replaced!"},
    {message: "why are my outlets not working?", response: "Outlets can stop working because of they are on a switch, they are simply broken, the wiring is bad, or the breaker has tripped. You should test the breaker and other bedroom switches first, and then try replacing the outlet. Furthermore, understand that outlets are typically on a circuit. Therefore, if a circuit is interrupted before any outlets, all of the other outlets/power down the circuit will stop operating."},
    {message: "is there a difference between a fuse and circuit breaker?", response: "They both perform the same function, disrupting the flow of electricity when a fault is sensed. A fuse will have to be replaced once it has tripped, whereas a circuit breaker won’t need replacement. It is for this reason that circuit breakers are more commonly used."},
    {message: "what does short circuit mean?", response: "When a wire carrying an electrical current comes into contact with the grounded conductor wire, or the equipment ground wire, excessive heat is created. If you see sparks in your electrical panel, you’ve likely witnessed a short circuit."},
    {message: "are all circuits properly grounded", response: "Yes, all circuits should be properly grounded to prevent electrical shocks and ensure the safety of the electrical system. Proper grounding involves connecting all metal parts of electrical equipment to the earth ground, which provides a path for fault currents to flow safely to the ground."},
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
    // if (userMsg == "hello"){
    //     chatbotMsg = "Hello";
    // } else if (userMsg == "how are you?") {
    //     chatbotMsg = "I am a Chatbot! Ready to answer any of your burning questions!";
    // } 
    if (userMsg.length > 5 || userMsg == "hi") {
        let result = arrayOfPossibleMsg.filter(val => val.message.includes(userMsg.toLowerCase()));

        if(result.length > 0){
            let response = result[0].response;
            chatbotMsg = response;
        } else {
            chatbotMsg = "Please send another different message."
        }
    } else {
        chatbotMsg = "Please send a different message."
    }

    let msgElement = document.createElement('div');

    msgElement.innerHTML = "<span> Chatbot: </span>"+
                            "<span>" +chatbotMsg+ "</span>";


    setTimeout(() => {
        msgElement.animate([{easing:"ease-in", opacity:0.4}, {opacity:1}], {duration:1000})
        chatContainer.appendChild(msgElement);
    }, 2000);   
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