mainMenu();
function mainMenu() {
    var menuButton = document.getElementsByClassName("menu-button")[0];
    var menu = document.getElementById("mobile-menu");

    menuButton.addEventListener("click", function () {
        menu.classList.toggle("open");
        menuButton.classList.toggle("close");
    });
}

photoSwitch();
function photoSwitch() {

var bigPic = document.getElementById("big-pic");

var smPic1 = document.getElementById("sm-pic-1");
var smPic2 = document.getElementById("sm-pic-2");
var smPic3 = document.getElementById("sm-pic-3");

var atr1 = smPic1.getAttribute("src");
var atr2 = smPic2.getAttribute("src");
var atr3 = smPic3.getAttribute("src");

smPic1.addEventListener("click", function () {
    bigPic.removeAttribute("src");
    bigPic.src = atr1;

    smPic1.setAttribute("style", "opacity:0.5");
    smPic2.removeAttribute("style");
    smPic3.removeAttribute("style");
});

smPic2.addEventListener("click", function () {
    bigPic.removeAttribute("src");
    bigPic.src = atr2;

    smPic2.setAttribute("style", "opacity:0.5");
    smPic1.removeAttribute("style");
    smPic3.removeAttribute("style");

});

smPic3.addEventListener("click", function () {
    bigPic.removeAttribute("src");
    bigPic.src = atr3;

    smPic3.setAttribute("style", "opacity:0.5");
    smPic1.removeAttribute("style");
    smPic2.removeAttribute("style");
});

}

addToBag();
function addToBag() {

    var addBtn = document.getElementById("add-to-bag");
    var price = +document.getElementById("price").innerHTML;
    var priceIndicator = document.getElementById("price-indicator");
    var amountIndicator = document.getElementById("amount-indicator");

    addBtn.addEventListener("click", function () {

        if (localStorage.priceValue) {
            localStorage.priceValue = Number(localStorage.priceValue) + price;
        } else {
            localStorage.priceValue = price;
        }
        priceIndicator.innerHTML = " &pound;" + Number(localStorage.priceValue).toFixed(2);


        if (localStorage.amountValue) {
            localStorage.amountValue = Number(localStorage.amountValue) + 1;
        } else {
            localStorage.amountValue = 1;
        }
        amountIndicator.innerHTML = " (" + Number(localStorage.amountValue) + ")";
    });

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


