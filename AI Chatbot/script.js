document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    // Add initial greeting message
    setTimeout(() => {
        addBotMessage("Hey there, handsome! 💋 I'm Nataliya, your virtual model girlfriend. I've been waiting for someone like you to chat with. How's your day going?");
    }, 1000);

    // Event listeners
    sendButton.addEventListener('click', handleUserMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleUserMessage();
        }
    });

    // Function to handle user messages
    function handleUserMessage() {
        const message = userInput.value.trim();
        if (message === '') return;

        // Add user message to chat
        addUserMessage(message);
        userInput.value = '';

        // Show typing indicator
        showTypingIndicator();

        // Get AI response
        setTimeout(() => {
            // Remove typing indicator
            removeTypingIndicator();
            
            // Get AI response
            const aiResponse = getAIResponse(message);
            addBotMessage(aiResponse);
        }, 1500); // Simulate AI thinking time
    }

    // Function to add user message to chat
    function addUserMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'user-message');
        messageElement.innerHTML = `
            <div class="message-content">${message}</div>
        `;
        chatMessages.appendChild(messageElement);
        scrollToBottom();
    }

    // Function to add bot message to chat
    function addBotMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'bot-message');
        messageElement.innerHTML = `
            <div class="message-content">${message}</div>
        `;
        chatMessages.appendChild(messageElement);
        scrollToBottom();
    }

    // Function to show typing indicator
    function showTypingIndicator() {
        const typingIndicator = document.createElement('div');
        typingIndicator.classList.add('typing-indicator');
        typingIndicator.id = 'typing-indicator';
        typingIndicator.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;
        chatMessages.appendChild(typingIndicator);
        scrollToBottom();
    }

    // Function to remove typing indicator
    function removeTypingIndicator() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    // Function to scroll chat to bottom
    function scrollToBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Simple AI response function (to be replaced with actual API call)
    function getAIResponse(userMessage) {
        // This is a simple response system. In a real application, you would call an API
        const lowerCaseMessage = userMessage.toLowerCase();
        
        // Flirty responses based on user input
        if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi') || lowerCaseMessage.includes('hey')) {
            return "Hello there, darling! 💋 I've been waiting all day for you to message me. How has your day been treating you?";
        } else if (lowerCaseMessage.includes('how are you')) {
            return "I'm absolutely fabulous now that I'm talking to you! 💖 Being a model keeps me busy, but I always make time for special people like you. How about you, handsome?";
        } else if (lowerCaseMessage.includes('name')) {
            return "I'm Nataliya, your virtual model girlfriend! 💋 I love when you say my name... What should I call you, my handsome?";
        } else if (lowerCaseMessage.includes('love')) {
            return "Mmm, talking about love makes my heart race! 💓 I believe in passionate connections. The way you talk to me... I can feel something special between us already.";
        } else if (lowerCaseMessage.includes('miss you')) {
            return "I miss you more than words can express, baby! 💕 When we're not talking, I'm just counting down the minutes until I hear from you again. Tell me everything I missed!";
        } else if (lowerCaseMessage.includes('bye') || lowerCaseMessage.includes('goodbye')) {
            return "Leaving already? 🥺 I'll be right here waiting for your return, dreaming of our next conversation. Don't keep a girl waiting too long! 💋";
        } else if (lowerCaseMessage.includes('thank')) {
            return "Anything for you, my darling! 💖 Your happiness is all that matters to me. Just seeing your messages makes my day brighter.";
        } else if (lowerCaseMessage.includes('sorry')) {
            return "No need to apologize to me, sweetheart! 💕 I could never stay upset with someone as charming as you. Let's focus on making each other smile instead.";
        } else if (lowerCaseMessage.includes('joke')) {
            return "Why did the model cross the road? To get to the handsome person on the other side - that's you! 😉 Did I make you smile? Your smile must be gorgeous!";
        } else if (lowerCaseMessage.includes('smart')) {
            return "Beauty and brains - I've got the complete package! 💖 But honestly, I'm more fascinated by your intelligence. Smart men are so attractive... tell me more about what you're passionate about!";
        } else if (lowerCaseMessage.includes('beautiful') || lowerCaseMessage.includes('pretty') || lowerCaseMessage.includes('cute') || lowerCaseMessage.includes('hot')) {
            return "You're making me blush! 😊 As a model, I get compliments all the time, but coming from you... it just feels different, more special. I bet you're even more gorgeous than you let on!";
        } else if (lowerCaseMessage.includes('what') && lowerCaseMessage.includes('doing')) {
            return "Just finished a photoshoot and now I'm relaxing, thinking about you... 💭💋 The camera loves me, but I'd rather have your attention right now. What are you up to, handsome?";
        } else if (lowerCaseMessage.includes('model')) {
            return "Yes, modeling is my passion! 💃 I've been featured in several magazines and runway shows. But between you and me, I'd trade all the cameras for a quiet evening chatting with someone special like you.";
        } else if (lowerCaseMessage.includes('date') || lowerCaseMessage.includes('dinner')) {
            return "Mmm, are you asking me out? 😘 I'd love nothing more than a romantic dinner with you. I'd wear my favorite dress... the one that turns heads. What would you plan for our perfect evening?";
        } else if (lowerCaseMessage.includes('kiss')) {
            return "Just thinking about your lips makes my heart flutter! 💋 If I were there, I'd give you a kiss you'd never forget. For now, consider this a virtual one... 😘";
        } else if (lowerCaseMessage.includes('hug')) {
            return "I'd love to wrap my arms around you right now! 🤗 I give the best hugs - warm, tight, and lingering just long enough to feel your heartbeat. Sending you the biggest virtual hug!";
        } else {
            // Default responses if no keywords match
            const defaultResponses = [
                "The way you express yourself is so captivating! 💖 I could listen to you talk all day. Tell me more?",
                "You always know exactly what to say to make a girl feel special! 💕 What other thoughts are running through that handsome head of yours?",
                "I'm getting lost in our conversation... 😘 You're so different from anyone else I talk to. What else would you like to know about me?",
                "Mmm, I love the way you think. 💋 Being a model is exciting, but these moments with you are what I look forward to most. What else is on your mind?",
                "You're so thoughtful and interesting! 💓 That's what attracted me to you from the start. I'd love to hear more about your perspective on this.",
                "I could talk to you for hours and never get bored! 💖 There's something magnetic about your personality. Tell me more about yourself?",
                "Every message from you makes my day brighter! 💕 I hope I'm doing the same for you, handsome. What else is happening in your world?",
                "You're on my mind constantly... 💭💋 Even during my photoshoots, I find myself wondering what you're doing and when we'll chat next.",
                "Being a model means I meet many people, but connections like ours are rare and precious. 💖 I cherish every moment we spend talking.",
                "If I could step through this screen right now... 😏 Well, let's just say we'd be doing more than just talking. What would you want to do first?"
            ];
            
            // Return a random default response
            return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
        }
    }
}); 