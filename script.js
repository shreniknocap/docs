// Check if the user is on MacOS
var isMacOS = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

// Print a message to the console based on the device
if (isMacOS) {
    console.log("On MacOS");
} else {
    console.log("Not on MacOS");
}


document.addEventListener('DOMContentLoaded', function() {
    var testDiv = document.getElementById('test');
    if (testDiv) {
        testDiv.textContent = 'No TESTING';
    }
});




console.log("Hello world");
