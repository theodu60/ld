'use strict';
(function() {

function MainController($scope, $http, socket, toaster,$translate) {
  $scope.tradLang = [
    {id: 0, code: 'en'},
    {id: 1, code: 'fr'},
  ]
  $scope.user =  {
    text : '',
    langue: {},
    langueWebsite: $scope.tradLang[0]
  };
  $scope.changeLanguage = function (key) {
    $translate.use(key.code);
  };
  $http.get('/api/languages').then(function(response) {
    $scope.languages = response.data;
  });

  $scope.correct = function (){
    console.log("MODE CORRECTION correct");
    $http.post('/api/detects', {
      input: $scope.user.text,
      ouput: $scope.user.langue2.id
    }).then(function() {
        console.log($scope.user.langue2.label);
        $scope.lang_origine = $scope.user.langue2.code;
        $scope.result = $scope.user.langue2.label;
        toaster.pop('success', ": D", "Thanks for your contribution !");
    });
  };

  $scope.submit = function() {
    console.log("MODE DETECTION submit");
    $http.post('/api/detects', {
      input: $scope.user.text,
      ouput: null
    }).then(function(res) {
        if(res.data[0].label != "Not Found") {
          $scope.lang_origine = res.data[0].code;
        }
      $scope.result_trad = null;
      $scope.result = res.data[0].label;
    });
  };

  $scope.translation = function(lang_trad) {
    console.log("translation");
    var text = $scope.user.text.replace(" ", "+");
    $scope.lang_title = $scope.user.langue.label;
    $http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20160105T142037Z.acb0d58429100cf0.f0b456919f6f9505be214b6e040fed51b1b2ed42&text=' + text + "&lang=" + $scope.lang_origine + "-" + lang_trad, {
    }).then(function(res) {
      $scope.result_trad = res.data.text[0];
    }).catch(function(error) {
      $scope.result_trad = "";
      toaster.pop('error', ":(", error.data.message);

    })
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

  $scope.hideResult = function(){
    $scope.result = null;
  }
}

angular.module('ldApp')
  .controller('MainController', MainController);

})();
