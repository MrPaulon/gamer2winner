var whatBgIsActive = 1;
var navIsActive = true;
var lastposition = 0;
var canChangeNav = true;
var scrollActive = false;


function canChange() {
    setTimeout(() => {
        canChangeNav = true;
    }, "1000");
}

document.addEventListener("scroll", (event) => {
    scrollpos = window.scrollY;

    //console.log(scrollpos);


    // Button to Top

    if (scrollpos > 500 && !scrollActive) {
        document.getElementById('retrunTop').style.display = "block";
        document.getElementById('retrunTop').style.animation="btn-apparition-top ease 0.5s";
        setTimeout(() => {
            document.getElementById('retrunTop').style.display = "block";
        }, "10");
        setTimeout(() => {
            scrollActive = true;
        }, "490");
    } else {
        if (scrollpos < 500 && scrollActive) {
            document.getElementById('retrunTop').style.animation="btn-disparition-top ease 0.5s";
            setTimeout(() => {
                document.getElementById("retrunTop").style.display = "none";
                scrollActive = false;
            }, "490");
        }
    }


    // Animation Monitor


    var monitorMargin = document.getElementById("monitor").offsetTop;
    var px = scrollpos/2000;
    
    if (scrollpos > 3450) {
        if (lastposition < scrollpos && monitorMargin < 500) {
            var newTop = monitorMargin + px;
            document.getElementById("monitor").style.top = ""+newTop+"px";
        } else {
            if (monitorMargin > 340) {
                var newTop = monitorMargin - px;
                document.getElementById("monitor").style.top = ""+newTop+"px";
            }
        }
    }


    // Aparition menu top


    if (lastposition < scrollpos && navIsActive && canChangeNav) {
        canChangeNav = false;
        document.getElementById('nav').style.animation="disparition-top ease 0.5s";
        setTimeout(() => {
            document.getElementById('nav').style.display = "none";
        }, "490");
        navIsActive = false;
        canChange()
    } else {
        if (lastposition > scrollpos && !navIsActive && canChangeNav) {
            canChangeNav = false;
            document.getElementById('nav').style.animation="apparition-top ease 0.5s";
            setTimeout(() => {
                document.getElementById('nav').style.display = "inline-flex";
            }, "10");
            setTimeout(() => {
                navIsActive = true;
            }, "490");
            canChange()
        }
    }



    lastposition = scrollpos;


    // Changement de Bg
     
    if (scrollpos > 1250 && whatBgIsActive!= 2) {
        document.getElementById("backgroundimg").src = "assets/img/rainbow62.gif";
        document.getElementById("backgroundimg").style.filter = "grayscale(0.4) blur(2px)"
        whatBgIsActive = 2;
    } else {
        if (scrollpos < 1250 && whatBgIsActive!=1) {
            document.getElementById("backgroundimg").src = "assets/img/bg3.gif";
            document.getElementById("backgroundimg").style.filter = "grayscale(0.9) blur(2px)"
            whatBgIsActive = 1;
        }
    }
});