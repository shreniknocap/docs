// Check if the user is on MacOS
var isMacOS = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

// Print a message to the console based on the device
if (isMacOS) {
    console.log("On MacOS");
} else {
    console.log("Not on MacOS");
}


document.addEventListener('DOMContentLoaded', function() {
    // Function to hide or show elements by id
    function displayElement(id, show) {
        var element = document.getElementById(id);
        if (element) {
            element.style.display = show ? 'block' : 'none'; // Use 'block', 'flex', 'grid' or other as per your design
        }
    }

    // Check if the user is on an iOS device
    var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    // Show or hide divs based on the device
    if (isIOS) {
        displayElement('ios-tab', true);      // Show iOS tab
        displayElement('desktop-tab', false); // Hide Desktop tab
    } else {
        displayElement('ios-tab', false);     // Hide iOS tab
        displayElement('desktop-tab', true);  // Show Desktop tab
    }
});


console.log("Hello world");
