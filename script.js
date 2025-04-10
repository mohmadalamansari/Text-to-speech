// Select the textarea and button by their IDs
const textarea = document.querySelector("#text-input");
const button = document.querySelector("#speak-btn");

// Function to convert text to speech
const textToSpeech = () => {
    const synth = window.speechSynthesis; // Built-in speech API
    const text = textarea.value.trim();   // Get and clean text input

    if (text === "") {
        alert("Please enter some text!");
        return;
    }

    const utterance = new SpeechSynthesisUtterance(text); // Create utterance
    synth.speak(utterance); // Speak the text
};

// Add event listener to the button
button.addEventListener("click", textToSpeech);
