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
