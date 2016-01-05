'use strict';
(function() {

function MainController($scope, $http, socket) {
  var self = this;
  this.awesomeThings = [];

  $http.get('/api/things').then(function(response) {
    self.awesomeThings = response.data;
    socket.syncUpdates('thing', self.awesomeThings);
  });
  $scope.text = "";
  $scope.submit = function() {
    console.log($scope.text);
    $http.post('/api/detects', {
      input: $scope.text,
      ouput: null
    }).then(function(res) {
          console.log(res);
          $scope.result = res.statusText;
          console.log($scope.result);
        });
  };

  this.addThing = function() {
    if (self.newThing === '') {
      return;
    }
    $http.post('/api/things', { name: self.newThing });
    self.newThing = '';
  };

  this.deleteThing = function(thing) {
    $http.delete('/api/things/' + thing._id);
  };

  $scope.$on('$destroy', function() {
    socket.unsyncUpdates('thing');
  });
}

angular.module('ldApp')
  .controller('MainController', MainController);

})();
