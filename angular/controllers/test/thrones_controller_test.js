describe('ThronesController', function() {
  beforeEach(module('testApp'));
  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('$scope.characters', function() {
    it('sets the characters in an array', function (){
      var $scope = {};
      var controller = $controller('ThronesController', {$scope: $scope});
      expect($scope.characters).toEqual();
    });
  });
});
