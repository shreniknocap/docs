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
        console.log('Content of the div:', testDiv.textContent);
    } else {
        console.log('Div with ID "test" not found.');
    }
});


console.log("Hello world");
