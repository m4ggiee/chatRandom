var responses = ["Hello", "How are you?","nice","Jack Sparrow", "Sorry", ")","Nice to meet you", "Goodbye"];
var chatbox = document.getElementById('chatbox');
var userInput = document.getElementById('userInput');
var chatEnded = false;

userInput.addEventListener('keydown', function(e) { 
    if (e.key === 'Enter' && !chatEnded) {
        var userText = userInput.value;
        userInput.value = '';
        chatbox.innerHTML += '<p><strong>You:</strong> ' + userText + '</p>';
        if (userText.toLowerCase() === 'my watch has ended') {
            chatbox.innerHTML += '<p><strong>Browser:</strong> Goodbye!</p>';
            chatEnded = true;
            userInput.disabled = true;
        } else {
            setTimeout(function() {
                var randomResponse = responses[Math.floor(Math.random() * responses.length)];
                chatbox.innerHTML += '<p><strong>Browser:</strong> ' + randomResponse + '</p>';
                if (Math.random() < 0.1) { 
                    chatbox.innerHTML += '<p><strong>Browser:</strong> I have to go now. Goodbye!</p>';
                    chatEnded = true;
                    userInput.disabled = true;
                }
            }, Math.random() * 9000 + 1000);
        }
    }   
});