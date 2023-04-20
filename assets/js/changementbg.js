var whatBgIsActive = 1;

document.addEventListener("scroll", (event) => {
    scrollpos = window.scrollY;


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

    console.log(scrollpos)
});