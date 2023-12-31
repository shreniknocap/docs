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

var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

// Print a message to the console based on the device
if (isIOS) {
    console.log("On iOS");
} else {
    console.log("Not on iOS");
}


console.log("Hello world");
