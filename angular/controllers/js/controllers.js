angular.module('testApp')
.controller('TestController', function TestController($scope) {
  $scope.name = 'I am a test string';

  $scope.testFunc = function() {
    console.log('Test function running');
  };
})
.controller('PieController', function PieController($scope) {
  $scope.pies = [];

  $scope.addPie = function(pieName) {
    $scope.pies.push(pieName);
    $scope.pie = '';
  };
})
.controller('ThronesController', function ThronesController($scope) {
  $scope.characters = [
    {
      name: 'Cersei Lannister', isAlive: true,
      hasKilled: [],
      house: 'Lannister'
    },
    {
      name: 'Jon Snow',
      isAlive: true,
      hasKilled: [],
      house: 'Stark'
    },
    {
      name: 'Ned Stark',
      isAlive: true,
      hasKilled: [],
      house: 'Stark'
    },
    {
      name: 'Daenarys Targaryen',
      isAlive: true,
      hasKilled: [],
      house: 'Targaryen'
    },
    {
      name: 'Khal Drogo',
      isAlive: true,
      hasKilled: [],
      house: 'Dothraki'
    },
    {
      name: 'Robert Baratheon',
      isAlive: true,
      hasKilled: [],
      house: 'Baratheon',
      hasThrone: true
    }
  ];

  $scope.alive = [];
  $scope.dead = [];
  $scope.throneSitter = {};

  $scope.getCurrentThroneSitter = function() {
    $scope.throneSitter = $scope.characters.filter(function(chara) {
      return chara.hasThrone;
    })[0];
  };

  $scope.getAlive = function () {
    $scope.alive = $scope.characters.filter(function(chara) {
      return chara.isAlive;
    });
  };

  $scope.getDead = function () {
    $scope.dead = $scope.characters.filter(function(chara) {
      return !chara.isAlive;
    });
  };

  $scope.killCharacter = function (target, killer) {

  };

  $scope.usurpCharacter = function() {
    // change chara.hasThrone here
  };
});
