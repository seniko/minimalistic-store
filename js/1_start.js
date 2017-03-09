var slideCounter = 0;
slideImg();

function slideImg() {
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideCounter++;
    if (slideCounter > slides.length) {
        slideCounter = 1;
    }
    slides[slideCounter - 1].style.display = "block";

    for (i = 0; i < dots.length; i++) {
        dots[i].style.backgroundColor = "#c8c8c8";
    }
    dots[slideCounter - 1].style.backgroundColor = "#f14a58";
    if (slideCounter == 3) {
        dots[2].style.backgroundColor = "#50c1e9";
    }
    setTimeout(slideImg, 3500);
}

mainMenu();
function mainMenu() {
    var menuButton = document.getElementsByClassName("menu-button")[0];
    var menu = document.getElementById("mobile-menu");

    menuButton.addEventListener("click", function () {
        menu.classList.toggle("open");
        menuButton.classList.toggle("close");
    });
}


bagIndicate();
function bagIndicate() {

    var priceIndicator = document.getElementById("price-indicator");
    var amountIndicator = document.getElementById("amount-indicator");

    if (localStorage.priceValue == undefined) {
        priceIndicator.innerHTML = "";
    } else {
        priceIndicator.innerHTML = " &pound;" + Number(localStorage.priceValue).toFixed(2);
    }

    if (localStorage.amountValue == undefined) {
        amountIndicator.innerHTML = "";
    } else {
        amountIndicator.innerHTML = " (" + Number(localStorage.amountValue) + ")";
    }
}