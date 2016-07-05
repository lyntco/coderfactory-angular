angular.module('servicesApp')
.service('TestService', function(){
  this.something = 'test';
  this.logAThing = function(){
    console.log('hello');
  };
  return this;
});
