var cartItems = [];

function addToCart(itemName) {
    cartItems.push(itemName);
    updateCartCount();
}

function updateCartCount() {
    var cartCount = document.getElementById('cart-count');
    cartCount.textContent = cartItems.length;
}

function displayCartItems() {
    var cartContent = document.getElementById('cart-content');
    cartContent.innerHTML = ''; // Clear previous content
    cartItems.forEach(function(item) {
        var listItem = document.createElement('li');
        listItem.textContent = item;
        cartContent.appendChild(listItem);
    });
}

document.getElementById('cart-link').addEventListener('click', displayCartItems);
