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





// Get reference to the button and the paragraph element
const speakButton = document.getElementById('speakButton');
const storyParagraph = document.querySelector('.story');

// Function to speak text using Text-to-Speech API
function speakText(text) {
    // Replace with your preferred Text-to-Speech API endpoint
    const apiUrl = 'https://api.texttospeech.com/speak';

    // Example using fetch to send text to TTS API (replace with actual API usage)
    fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify({ text: text }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        // Handle response from API (if needed)
        console.log('Text sent to API for speech synthesis');
    }).catch(error => {
        console.error('Error sending text to API:', error);
    });
}

// Event listener for button click
speakButton.addEventListener('click', () => {
    const textToSpeak = storyParagraph.textContent;
    speakText(textToSpeak);
    alert(textToSpeak)
});
