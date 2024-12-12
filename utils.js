

function createPhoneList(item) {
    const phoneList = document.createElement("div");
    phoneList.className = "phoneList";

    const phoneName = createPhoneName(item.title);
    const price = createPrice(item.price);
    const overButton = createOverButton(item);

    phoneList.appendChild(phoneName);
    phoneList.appendChild(price);
    phoneList.appendChild(overButton);

    return phoneList;
}



function createPrice(priceValue) {
    const price = document.createElement("div");
    price.className = "price";
    price.textContent = priceValue;

    return price;
}

function createOverButton(item) {
    const overButton = document.createElement("div");
    overButton.className = "over-button";

    const editButton = createEditButton(item);
    const buyButton = createBuyButton(item);

    overButton.appendChild(editButton);
    overButton.appendChild(buyButton);

    return overButton;
}

function createEditButton(item) {
    const editButton = document.createElement("button");
    editButton.className = "button-edit";
    editButton.textContent = "Edit";

    editButton.addEventListener("click", function () {
        const urlParams = new URLSearchParams({
            title: item.title,
            price: item.price
        }).toString();

        window.location.href = `addnewphone.html?${urlParams}`;
    });

    return editButton;
}

function createBuyButton(item) {
    const buyButton = document.createElement("button");
    buyButton.className = "button-buy";
    buyButton.textContent = "Buy";
    buyButton.id = item._id;

    buyButton.addEventListener("click", function () {
        updateCart(item);
        updateAmount();
    });

    return buyButton;
}

function updateCart(item) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = cart.find(function(cartItem) 
            {
                return cartItem._id === item._id;
            });


    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ _id: item._id, title: item.title, price: item.price, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("Cart updated:", cart);
}

function updateAmount() {
    let amount = localStorage.getItem("amount") ? parseInt(localStorage.getItem("amount")) : 0;
    amount++;
    localStorage.setItem("amount", amount);

    const phoneAmount = document.getElementById("amount");
    phoneAmount.textContent = amount;
}

function clearCart() {
    localStorage.removeItem("cart");
    console.log("Cart cleared");

    let amount = 0;
    localStorage.setItem("amount", amount);

    const phoneAmount = document.getElementById("amount");
    phoneAmount.textContent = amount;
}
