document.addEventListener("DOMContentLoaded", function() { // fetching the header.html into any index.html file with header-container id
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
});

document.addEventListener("DOMContentLoaded", function() { // fetching the footer.html into any index.html file with footer-container id
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
});

