// Check if the user is on MacOS
var isMacOS = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

// Print a message to the console based on the device
if (isMacOS) {
    console.log("On MacOS");
} else {
    console.log("Not on MacOS");
}


document.addEventListener('DOMContentLoaded', function() {
    function toggleDisplay(elementId, shouldDisplay) {
        var element = document.getElementById(elementId);
        if (element) {
            element.style.display = shouldDisplay ? 'block' : 'none';
        }
    }

    var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isIOS) {
        toggleDisplay('ios-tab', true);      // Show iOS tab
        toggleDisplay('desktop-tab', false); // Hide Desktop tab
    } else {
        toggleDisplay('ios-tab', false);     // Hide iOS tab
        toggleDisplay('desktop-tab', true);  // Show Desktop tab
    }
});



console.log("Hello world");
