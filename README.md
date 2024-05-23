This is just a space odyssee. And a secret hacking tool to bring down LernSax Servers. :) 

preview: [https://previewhtml.github.io/?url=https%3A%2F%2Fraw.githubusercontent.com%2Fzecjonathan%2Fspace-odyssey%2Fmain%2Fcode%2Findex.html](https://htmlpreview.github.io/?https://raw.githubusercontent.com/zecjonathan/space-odyssey/main/code/index.html) (braucht zeit, nachdem github geupdated wurde)

# Dynamic Header and Footer Loader

This repository contains code to dynamically load header and footer content into HTML files using JavaScript fetch API.

## Description

The code in this repository allows you to include separate header and footer HTML files into your main HTML document. This is achieved by using JavaScript to fetch the content of the header and footer files asynchronously when the page loads, and then inject them into designated containers within the main HTML file.

## Files

- `header.html`: Contains the HTML code for the header section of the webpage.
- `footer.html`: Contains the HTML code for the footer section of the webpage.
- `index.html`: The main HTML file where the header and footer content will be injected. Also any other html's.
- `script.js`: JavaScript file responsible for fetching and injecting the header and footer content into the main HTML file.

## How It Works

When the main HTML file (`index.html`) is loaded in the browser, the JavaScript code in `script.js` fetches the contents of `header.html` and `footer.html`. Once fetched, the content is injected into the respective `<div>` containers with the IDs `header-container` and `footer-container`.

