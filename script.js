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
    // Function to find an h2 with a specific title and click its parent li
    function clickParentLiOfH2WithTitle(title) {
        var h2s = document.querySelectorAll('h2');
        for (var i = 0; i < h2s.length; i++) {
            if (h2s[i].textContent.trim() === title) {
                // Assuming the li is the direct parent of the h2
                var parentLi = h2s[i].parentElement;
                if (parentLi && parentLi.classList.contains('cursor-pointer')) {
                    parentLi.click();
                    return;
                }
            }
        }
    }

    // Check if the user is on an iOS device
    var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    // Click the appropriate li based on the device
    if (isIOS) {
        clickParentLiOfH2WithTitle('iOS'); // Try to click the iOS li
    } else {
        clickParentLiOfH2WithTitle('Desktop'); // Try to click the Desktop li
    }
});

console.log("Hello world");
