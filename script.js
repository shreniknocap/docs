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

// Check if the user is on MacOS
var isMacOS = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

// Print a message to the console based on the device
if (isMacOS) {
    console.log("On MacOS");
} else {
    console.log("Not on MacOS");
}

console.log("Hello world");
