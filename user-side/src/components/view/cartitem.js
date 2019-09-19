const cartItems = [];

export function addToCart(subcatID) {
    cartItems.push(subcatID);
}

export function getItemsInCart() {
    return cartItems;
}
