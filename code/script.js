fetch('addons/header.html') // Lädt header.html in eine index.html-Datei mit dem Element, das die ID header-container hat
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-container').innerHTML = data;
    });

fetch('addons/footer.html') // Lädt footer.html in eine index.html-Datei mit dem Element, das die ID footer-container hat
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-container').innerHTML = data;
    });

// Cookie x Color Mode Abfrage Start
let cookieColor = getCookie("color-mode"); // Speichert den Rückgabewert der getCookie-Funktion für das Cookie "color-mode" in der Variablen cookieColor
const html = document.querySelector('html'); // Wählt das <html>-Element aus und weist es der Konstante html zu
if (cookieColor === "dark") { // Wenn cookieColor "dark" ist, wird das Attribut 'color-mode' des <html>-Elements auf 'dark' gesetzt
    html.setAttribute('color-mode', 'dark');
} 
if (cookieColor === "light") { // Wenn cookieColor "light" ist, wird das Attribut 'color-mode' des <html>-Elements auf 'light' gesetzt
    html.setAttribute('color-mode', 'light');
} 
// Cookie x Color Mode Abfrage Ende

function getCookie(cname) { // Definiert eine Funktion zum Abrufen eines Cookies
    let name = cname + "="; // Setzt die Variable name auf den Funktionsparameter plus "="
    let decodedCookie = decodeURIComponent(document.cookie); // Holt alle gespeicherten Cookies des Browsers
    let ca = decodedCookie.split('%3B'); // Teilt alle Cookies anhand von ";" (%3B), um sie zu separieren
    for(let i = 0; i < ca.length; i++) { // Schleife durch alle Cookies
        let c = ca[i]; // Holt das aktuelle Cookie
        while (c.charAt(0) == ' ') { // Entfernt Leerzeichen oder andere ungewollte Zeichen am Anfang des Strings
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) { // Prüft, ob das Cookie mit dem gewünschten Namen übereinstimmt
            return c.substring(name.length, c.length); // Gibt die Daten des gewünschten Cookies zurück
        }
    }
    return ""; // Gibt einen leeren String zurück, falls kein Cookie gefunden wird
}

function toggleColorMode() { // Funktion (wird durch einen Button im Header aufgerufen und wechselt zwischen light und dark)
    const html = document.querySelector('html'); // Wählt das <html>-Element aus und weist es der Konstante html zu
    if (html.getAttribute('color-mode') === 'light') { // Wenn der aktuelle Farbmodus "light" ist
        html.setAttribute('color-mode', 'dark'); // Setzt das Attribut auf "dark"
        document.cookie = "color-mode=dark;max-age:31536000"; // Speichert den neuen Farbmodus als Cookie ab
    } else {
        html.setAttribute('color-mode', 'light'); // Setzt das Attribut auf "light"
        document.cookie = "color-mode=light;max-age:31536000"; // Speichert den neuen Farbmodus als Cookie ab
    }
}

// Klick-Event und Text aus Button und Story abfragen
const speakButton = document.getElementById('speakButton'); // Holt die Daten zum Button
const storyParagraph = document.querySelector('.story'); // Holt die Daten zur Story
speakButton.addEventListener('click', () => { // Führt die Funktion aus, wenn der Button gedrückt wird
    const textToSpeak = storyParagraph.textContent; // Holt den Text aus der Story
    speakText(textToSpeak); // Ruft die speakText-Funktion für den Text auf
});