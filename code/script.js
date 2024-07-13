document.addEventListener("DOMContentLoaded", function() { // starts when page loads
    fetch('addons/header.html') // fetching the header.html into any index.html file with header-container id
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        })
});

document.addEventListener("DOMContentLoaded", function() { // starts when page loads
    fetch('addons/footer.html') // fetching the header.html into any index.html file with header-container id
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
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

document.addEventListener("DOMContentLoaded", function() { // calls function on page load
    let cookieColor = getCookie("color-mode"); // sets cookieColor var to getCookie function return for the cookie "color-mode"
    const html = document.querySelector('html'); // selects the <html> element and assigns it to the constant variable html
    if (cookieColor === "dark") { // if cookieColor (so from cookie browser data) is "dark", sets the 'color-mode' attribute of the <html> element to 'dark
        html.setAttribute('color-mode', 'dark');
    } 
    if (cookieColor === "light") { // if cookieColor is "light", sets the 'color-mode' attribute of the <html> element to 'light'
        html.setAttribute('color-mode', 'light');
    } 
});

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
