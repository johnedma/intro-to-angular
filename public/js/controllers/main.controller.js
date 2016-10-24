(function() {
  angular.module('intro') //getter syntax
  .controller('MainController', MainController);

  MainController.$inject = ['$scope']; //what tools the main controller function needs

  function MainController($scope){ //scope is our bridge to the DOM
    console.log("Now main controlling...");
    $scope.person = 'Bob';
    $scope.letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    $scope.saySurprise = saySurprise;

    function saySurprise(person){
      // $scope.person = 1; //don't do this
      alert('Hey '+ person + '... there is a clown behind you!');
    }
  }
}());
