'use strict';
(function() {

function MainController($scope, $http, socket,toaster) {
  var self = this;
  this.awesomeThings = [];
  $scope.user =  {
    text : '',
    langue: {}
  }
  $http.get('/api/things').then(function(response) {
    self.awesomeThings = response.data;
    socket.syncUpdates('thing', self.awesomeThings);
  });
  $http.get('/api/languages').then(function(response) {
    $scope.languages = response.data;
    $scope.user.langue = $scope.languages[0]
  });
  $scope.correct = function (value){
    console.log("MODE CORRECTION")
    $http.post('/api/detects', {
      input: $scope.user.text,
      ouput: $scope.user.langue.id
    }).then(function(res) {
          $scope.result = $scope.user.langue.label;
          toaster.pop('success', ": D", "Thanks for your contribution !");


    });
  }

  $scope.submit = function() {
    console.log("MODE DETECTION")
    $http.post('/api/detects', {
      input: $scope.user.text,
      ouput: null
    }).then(function(res) {
      console.log(res.data[0].label);
        if(res.data[0].label.length > 0)
          $scope.result = res.data[0].label;
        else {
          $scope.result = "NOT FOUND";
        }
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
