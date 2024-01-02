// Check if the user is on MacOS
var isMacOS = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

// Print a message to the console based on the device
if (isMacOS) {
    console.log("On MacOS");
} else {
    console.log("Not on MacOS");
}


/* var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

var iosTab = document.getElementById('ios-tab');
var desktopTab = document.getElementById('desktop-tab');

if (iosTab && desktopTab) {
    if (isIOS) {
        iosTab.style.display = 'block';      // Show iOS tab
        desktopTab.style.display = 'none';   // Hide Desktop tab
    } else {
        iosTab.style.display = 'none';       // Hide iOS tab
        desktopTab.style.display = 'block';  // Show Desktop tab
    }
} else {
    console.log('One or both tabs not found');
} */

setInterval(function() {
    var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var iosTab = document.getElementById('ios-tab');
    var desktopTab = document.getElementById('desktop-tab');

    if (iosTab && desktopTab) {
        if (isIOS) {
            iosTab.style.display = 'block';      // Show iOS tab
            desktopTab.style.display = 'none';   // Hide Desktop tab
        } else {
            iosTab.style.display = 'none';       // Hide iOS tab
            desktopTab.style.display = 'block';  // Show Desktop tab
        }
    } else {
        console.log('One or both tabs not found.');
    }
}, 5000); // 5000 milliseconds equals 5 seconds




console.log("Hello world");
