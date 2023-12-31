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


console.log("Hello world");
