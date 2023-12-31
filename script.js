// Find all div elements in the document
const divs = document.querySelectorAll('div');

// Loop through each div
divs.forEach(function(div) {
    // Check if the div contains the text 'Subscriptions'
    if (div.textContent === 'Subscriptions') {
        // Replace the content of the div with 'NotSubscription'
        div.textContent = 'NotSubscription';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isIOS) {
        document.getElementById('ios-tab').click(); // Open iOS tab
    } else {
        document.getElementById('desktop-tab').click(); // Open Desktop tab
    }
});

console.log("Hello world");
