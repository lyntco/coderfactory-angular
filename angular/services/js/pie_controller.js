angular.module('servicesApp')
.controller('PieController', function PieController($scope, CartService) {
  $scope.menuItems = [
    {id: 1, name: 'meatpie', cost: 350},
    {id: 2, name: 'apple pie', cost: 250},
    {id: 3, name: 'blackbird pie', cost: 550},
    {id: 4, name: 'human pie', cost: 150},
    {id: 5, name: 'chocolate pie', cost: 650},
    {id: 6, name: 'shepard\'s pie', cost: 349},
    {id: 7, name: 'vegan pie', cost: 999949}
  ];

  $scope.cart = CartService.getCartItems();
  $scope.addToCart = function(pie, qty) {
    CartService.addToCart(pie, qty);

  }
});
