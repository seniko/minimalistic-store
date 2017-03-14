removeItems();
function removeItems() {

    var bagContainer = document.getElementsByClassName("bag-container")[0];
    var buyNowBtn = document.getElementById("buy-now");
    var emptyBagBtn = document.getElementById("empty-bag");
    var totalCost = document.getElementById("total-cost");

    buyNowBtn.addEventListener("click", buyNowHandler);

    function buyNowHandler() {
        while (bagContainer.firstChild) {
            bagContainer.removeChild(bagContainer.firstChild);
        }
        bagContainer.innerHTML = "Thank you for your purchase";
        totalCost.innerHTML = "&pound; 0.00";

        localStorage.removeItem("priceValue");
        localStorage.removeItem("amountValue");
        window.scrollTo(0, 0);
        bagIndicate();
    }

    emptyBagBtn.addEventListener("click", emptyBagHandler);

    function emptyBagHandler() {

        while (bagContainer.firstChild) {
            bagContainer.removeChild(bagContainer.firstChild);
        }
        bagContainer.innerHTML = "Your shopping bag is empty. Use <a href='2_catalog.html' style='color: #000; font-weight: bold'>Catalog</a> to add new items";

        buyNowBtn.removeEventListener("click", buyNowHandler);
        totalCost.innerHTML = "&pound; 0.00";

        localStorage.removeItem("priceValue");
        localStorage.removeItem("amountValue");
        window.scrollTo(0, 0);
        bagIndicate();
    }

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

    var totalCost = document.getElementById("total-cost");
    var priceIndicator = document.getElementById("price-indicator");
    var amountIndicator = document.getElementById("amount-indicator");

    if (localStorage.priceValue == undefined) {
        priceIndicator.innerHTML = "";
        totalCost.innerHTML = "&pound; 0.00";
    } else {
        priceIndicator.innerHTML = " &pound;" + Number(localStorage.priceValue).toFixed(2);
        totalCost.innerHTML = " &pound;" + Number(localStorage.priceValue).toFixed(2);
    }

    if (localStorage.amountValue == undefined) {
        amountIndicator.innerHTML = "";
    } else {
        amountIndicator.innerHTML = " (" + Number(localStorage.amountValue) + ")";
    }
}

