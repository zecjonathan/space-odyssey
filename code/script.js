document.addEventListener("DOMContentLoaded", function() { // fetching the header.html into any index.html file with header-container id
    fetch('addons/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        })
});

document.addEventListener("DOMContentLoaded", function() { // fetching the footer.html into any index.html file with footer-container id
    fetch('addons/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
});

