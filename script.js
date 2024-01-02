
var isMacOS = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

if (isMacOS) {
    console.log("On MacOS");
} else {
    console.log("Not on MacOS");
}


setInterval(function() {
    var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var iosTab = document.getElementById('ios-tab');
    var desktopTab = document.getElementById('desktop-tab');

    if (iosTab && desktopTab) {
        if (isIOS) {
            iosTab.style.display = 'block';      
            desktopTab.style.display = 'none';   
        } else {
            iosTab.style.display = 'none';       
            desktopTab.style.display = 'block'; 
        }
    } else {
        console.log('One or both tabs not found.');
    }
}, 5000);
