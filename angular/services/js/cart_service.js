angular.module('servicesApp')
.service('CartService', function CartService() {
  var cartItems = [];

  this.getCartItems = function() {
    return cartItems;
  };

  var findItem = function (items, id) {
    // search for pies
    // return true or false
  }

  this.addToCart = function(item, qty) {
    // if pie is already in cart
    if (findItem(???, ???)) {
      // increase the qty
    } else { /* add it to the cart */ }
    cartItems.push({
      id: item.id,
      name: item.name,
      cost: item.cost,
      qty: qty
    });
  };

  this.removeFromCart = function(item, qty) {
    // remove items from cart
  }

  this.getCartTotal = function() {

  }

  return this;
});
