'use strict';
(function() {

function MainController($scope, $http, socket, toaster,$translate) {
    $scope.tradLang = [
        {id: 0, code: 'en'},
        {id: 1, code: 'fr'},
    ]
    
    var dynTrad = []
    dynTrad['fr'] = {
        thx: "Merci pour votre participation !",
        api : {
            'Operation completed successfully': 'Requete ok',
            'Invalid API key': 'Cle API invalide',
            'Blocked API key': 'Cle API bloque',
            'Exceeded the daily limit on the number of requests': 'Operation completed successfully',
            'Exceeded the daily limit on the amount of translated text': 'Operation completed successfully',
            'Exceeded the maximum text size': 'Operation completed successfully',
            'The text cannot be translated': 'Operation completed successfully',
            'The specified translation direction is not supported': 'Operation completed successfully'
        },
        notFound: 'Non trouvée'
    }
    dynTrad['en'] = {
        thx: "Thanks for your contribution !",
        api : {
            'Operation completed successfully': 'Operation completed successfully',
            'Invalid API key': 'Invalid API key',
            'Blocked API key': 'Blocked API key',
            'Exceeded the daily limit on the number of requests': 'Exceeded the daily limit on the number of requests',
            'Exceeded the daily limit on the amount of translated text': 'Exceeded the daily limit on the amount of translated text',
            'Exceeded the maximum text size': 'Exceeded the maximum text size',
            'The text cannot be translated': 'The text cannot be translated',
            'The specified translation direction is not supported': 'The specified translation direction is not supported'
        },
        notFound: 'Not found'
    }
    
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
        $http.post('/api/detects', {
            input: $scope.user.text,
            ouput: $scope.user.langue2.id
        }).then(function() {
            console.log($scope.user.langue2.label);
            $scope.lang_origine = $scope.user.langue2.code;
            $scope.result = $scope.user.langue2.label;
            toaster.pop('success', ": D", dynTrad[$scope.user.langueWebsite.code].thx);
        });
    };
    
    $scope.submit = function() {
        $http.post('/api/detects', {
            input: $scope.user.text,
            ouput: null
        }).then(function(res) {
            if(res.data[0].label != dynTrad[$scope.user.langueWebsite.code].notFound)
                $scope.lang_origine = res.data[0].code;
            $scope.result_trad = null;
            $scope.result = res.data[0].label;
        });
    };
    
    $scope.translation = function(lang_trad) {
          var text = $scope.user.text.replace(" ", "+");
          $scope.lang_title = $scope.user.langue.label;
          $http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20160105T142037Z.acb0d58429100cf0.f0b456919f6f9505be214b6e040fed51b1b2ed42&text=' + text + "&lang=" + $scope.lang_origine + "-" + lang_trad, {}).then(function(res) {
            $scope.result_trad = res.data.text[0];
            }).catch(function(error) {
                $scope.result_trad = "";
                toaster.pop('error', ":(", dynTrad[$scope.user.langueWebsite.code].api[error.data.message]);
            })
    };
    
    $scope.hideResult = function(){
        $scope.result = null;
    }
}

angular.module('ldApp')
    .controller('MainController', MainController);

})();
