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
    // Function to find and click an h2 element with specified text
    function clickTab(title) {
        var h2s = document.querySelectorAll('h2');
        for (var i = 0; i < h2s.length; i++) {
            if (h2s[i].textContent.trim() === title) {
                h2s[i].click();
                break;
            }
        }
    }

    // Check if the user is on an iOS device
    var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    // Click the appropriate tab based on the device
    if (isIOS) {
        clickTab('iOS'); // Click the iOS tab
    } else {
        clickTab('Desktop'); // Click the Desktop tab
    }
});

console.log("Hello world");
