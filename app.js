const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good Morning Boss...");
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon Master...");
    } else {
        speak("Good Evening Sir...");
    }
}

window.addEventListener('load', () => {
    speak("Initializing JARVIS...");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});

function takeCommand(message) {
    if (message.includes('hey') || message.includes('hello')) {
        speak("Hello Sir, How May I Help You?");
    }if (message.includes("what is your name") || message.includes("who are you")) {
        speak("I am JARVIS, your personal voice assistant at your service.");
    
    } else if (message.includes("who made you") || message.includes("who created you")) {
        speak("I was created by jeevitha with a passion for technology.");

    }else if (message.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    } else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...");
    } else if (message.includes("open facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...");
    } else if (message.includes("open chatgpt")) {
        window.open("https://chat.openai.com", "_blank");
        speak("Opening ChatGPT...");
     } else if (message.includes("open gmail")) {
        window.open("https://mail.google.com", "_blank");
        speak("Opening Gmail...");
    } else if (message.includes("open reddit")) {
        window.open("https://www.reddit.com", "_blank");
        speak("Opening Reddit...");
    } else if (message.includes("open stackoverflow")) {
        window.open("https://stackoverflow.com", "_blank");
        speak("Opening Stack Overflow...");
    } else if (message.includes("open github")) {
        window.open("https://github.com", "_blank");
        speak("Opening GitHub...");
    } else if (message.includes("open amazon")) {
        window.open("https://www.amazon.com", "_blank");
        speak("Opening Amazon...");
    } else if (message.includes("tell me a story")) {
        const stories = [
          "Once upon a time, in a land far away, a brave soul embarked on an extraordinary adventure.",
          "Long ago, in a small village, an unexpected hero emerged to bring hope and joy.",
          "In a mystical forest, magical creatures gathered under the starlight to share ancient secrets."
        ];
        const story = stories[Math.floor(Math.random() * stories.length)];
        speak(story);
    }else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what I found on the internet regarding " + message;
        speak(finalText);
    } else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank");
        const finalText = "This is what I found on Wikipedia regarding " + message;
        speak(finalText);
    } else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        const finalText = "The current time is " + time;
        speak(finalText);
    } else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
        const finalText = "Today's date is " + date;
        speak(finalText);
    } else if (message.includes('calculator')) {
        window.open('Calculator:///');
        const finalText = "Opening Calculator";
        speak(finalText);
    } else if (message.includes("open chrome")) {
        window.open("https://www.chrome.com", "_blank");
        speak("Opening Chrome...");
    
    } else if (message.includes("weather")) {
        window.open("https://www.google.com/search?q=weather", "_blank");
        speak("Here is the weather update for your location.");
    
    } else if (message.includes("news")) {
        window.open("https://news.google.com/", "_blank");
        speak("Here are the latest news updates.");
    
    } else if (message.includes("joke")) {
        const jokes = [
          "Why don’t skeletons fight each other? Because they don’t have the guts!",
          "Why did the math book look sad? Because it had too many problems.",
          "Why don’t scientists trust atoms? Because they make up everything!"
        ];
        const joke = jokes[Math.floor(Math.random() * jokes.length)];
        speak(joke);
    
    } else if (message.includes("motivation") || message.includes("quote")) {
        const quotes = [
          "The only way to do great work is to love what you do. - Steve Jobs",
          "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
          "Believe you can and you're halfway there. - Theodore Roosevelt"
        ];
        const quote = quotes[Math.floor(Math.random() * quotes.length)];
        speak(quote);
    
    } else if (message.includes("play music") || message.includes("open spotify")) {
        window.open("https://open.spotify.com/", "_blank");
        speak("Opening Spotify for you.");
    
    } else if (message.includes("shutdown") || message.includes("restart")) {
        speak("I'm sorry, but I can't perform system shutdown or restart directly.");
    }else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on Google";
        speak(finalText);
    }
}
