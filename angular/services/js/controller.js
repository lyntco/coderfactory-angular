angular.module('servicesApp')
.controller('ServiceController', function ServiceController($scope, TestService){
  $scope.log = TestService.logAThing;
});

// WE DONT WANT THIS:
// CartService.cartItems = ['ALL THE THINGS'];
