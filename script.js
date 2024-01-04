
var isMacOS = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

if (isMacOS) {
    console.log("On MacOS");
} else {
    console.log("Not on MacOS");
}


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



function adjustTabsForDevice() {
    var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var iosTab = document.getElementById('ios-tab');
    var desktopTab = document.getElementById('desktop-tab');

    if (iosTab && desktopTab) {
        iosTab.style.display = isIOS ? 'block' : 'none';
        desktopTab.style.display = isIOS ? 'none' : 'block';
    } else {
        console.log('One or both tabs not found.');
    }
}


function clickTab(title) {
    var h2s = document.querySelectorAll('h2');
    for (var i = 0; i < h2s.length; i++) {
        if (h2s[i].textContent.trim() === title) {
            h2s[i].click();
            break;
        }
    }
}

function changeTab(){

    var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    
    if (isIOS) {
        clickTab('iOS'); 
    } else {
        clickTab('Desktop'); 
    }
}




document.addEventListener('click', function() {
    setTimeout(adjustTabsForDevice, 500);
});
document.addEventListener('click', function() {
    setTimeout(changeTab, 500);
});
