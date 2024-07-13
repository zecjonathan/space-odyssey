document.addEventListener("DOMContentLoaded", function() { // ALL CODE IN HERE RUNNS AS SOON AS THE PAGE LOADS
    fetch('addons/header.html') // fetching the header.html into any index.html file with header-container id
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        })

    fetch('addons/footer.html') // fetching the header.html into any index.html file with header-container id
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })

    // cookie x color moder fetcher start
    let cookieColor = getCookie("color-mode"); // sets cookieColor var to getCookie function return for the cookie "color-mode"
    const html = document.querySelector('html'); // selects the <html> element and assigns it to the constant variable html
    if (cookieColor === "dark") { // if cookieColor (so from cookie browser data) is "dark", sets the 'color-mode' attribute of the <html> element to 'dark
        html.setAttribute('color-mode', 'dark');
    } 
    if (cookieColor === "light") { // if cookieColor is "light", sets the 'color-mode' attribute of the <html> element to 'light'
        html.setAttribute('color-mode', 'light');
    } 
    // cookie x color moder fetcher end
});

function getCookie(cname) { // sets function to get cookie 
    let name = cname + "="; // sets var name to function input and "="
    let decodedCookie = decodeURIComponent(document.cookie); // gets all browser saved cookies
    let ca = decodedCookie.split(';'); // splits all cookies by ";" so it has all cookies seperated
    for(let i = 0; i <ca.length; i++) { // loops through each cookie
        let c = ca[i]; // gets the item (cookie)
        while (c.charAt(0) == ' ') { // makes cookie data to string so removes the stuff around like spaces and ' '
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) { // checks if cookies matches name (so requested cookie data) get split position
            return c.substring(name.length, c.length); // returns requested cookie data
        }
    }
    return ""; // if no cookie found empty data
}

function toggleColorMode() { // states function (get called with button in header and toogles from light to dark)
    const html = document.querySelector('html'); // selects the <html> element and assigns it to the constant variable html
    if (html.getAttribute('color-mode') === 'light') { // if current color mode is light
        html.setAttribute('color-mode', 'dark'); // set attribute dark
        document.cookie = "color-mode=dark"; // push to browser cookie
    } else {
        html.setAttribute('color-mode', 'light'); // set attribute dark
        document.cookie = "color-mode=light"; // push to browser cookie
    }
}







// TEXT TO SPEECH CODE (COSTS ELEVENLABS CREDITS)
// 
// 
// <button id="speakButton">Speak</button> //put under story to start tts
// 
// // Function to speak text using Text-to-Speech Elevenlabs API
// function speakText(text) {
//     const options = { // creates opions string for api
//         method: 'POST',
//         headers: {
//           'xi-api-key': '4ae1090a96f455afee3d15a18f3249ae',
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             text: text,
//             model_id: "eleven_multilingual_v2",
//             voice_settings: {
//                 stability: 0.5,
//                similarity_boost: 0.75
//             }})
//       };
//       
//       fetch('https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM?enable_logging=true', options) // sends api request
//         .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.blob(); // Get the response as a blob
//     })
//     .then(blob => {
//         const url = window.URL.createObjectURL(blob); // Create a URL for the blob
// 
//         const audio = new Audio(url); // Create an Audio element
//         audio.controls = true; // Show controls like play, pause
//         audio.autoplay = true; // Autoplay the audio
//         audio.style.display = 'none'; // Hide the audio element
// 
//         document.body.appendChild(audio); // Append the Audio element to the document body
// 
//         audio.onended = () => { /// Clean up
//             document.body.removeChild(audio); // Remove the audio element once playback ends
//             window.URL.revokeObjectURL(url); // Revoke the blob URL
//         };
//     })
//     .catch(err => console.error('Error fetching or downloading file:', err));
// 
// // getting click and text string data from button and story
// const speakButton = document.getElementById('speakButton'); // gets button find data
// const storyParagraph = document.querySelector('.story'); // gets story find data
// speakButton.addEventListener('click', () => { // runs when button is pressed
//     const textToSpeak = storyParagraph.textContent; // gets string from story
//     speakText(textToSpeak); // calls speak function for text
// });