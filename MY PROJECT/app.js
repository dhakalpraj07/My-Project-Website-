let cart = [];

function addToCart(itemName, itemPrice) {
  cart.push({ name: itemName, price: itemPrice });
  console.log('Added to cart:', itemName, itemPrice);
  console.log('Current cart:', cart);
}
