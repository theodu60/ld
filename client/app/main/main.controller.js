'use strict';
(function() {

function MainController($scope, $http, socket, toaster,$translate,$filter) {
    $scope.tradLang = [
        {id: 0, code: 'en'},
        {id: 1, code: 'fr'},
        {id: 2, code: 'zh'},
    ]
    
    var dynTrad = []
    dynTrad['fr'] = {
        thx: "Merci pour votre participation !",
        api : {
            'Operation completed successfully': 'Requête ok',
            'Invalid API key': 'Clef API invalide',
            'Blocked API key': 'Clef API bloqué',
            'Exceeded the daily limit on the number of requests': 'Limite journalière de requêtes dépassée',
            'Exceeded the daily limit on the amount of translated text': 'Limite journalière de nombre de caractères traduits dépassée',
            'Exceeded the maximum text size': 'Limite de texte dépassée',
            'The text cannot be translated': 'Le texte ne peut pas être traduit',
            'The specified translation direction is not supported': 'Le language à traduire n\'est pas supporté'
        }
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
        }
    }
    dynTrad['zh'] = {
        thx: "谢谢你的贡献!",
        api : {
            'Operation completed successfully': '行动成功完成',
            'Invalid API key': '无效的单亲家庭的关键',
            'Blocked API key': '封锁旅客信息系统的关键',
            'Exceeded the daily limit on the number of requests': '超过了每日限额的请求数量',
            'Exceeded the daily limit on the amount of translated text': '超过了每日限额的译文',
            'Exceeded the maximum text size': '超过了最大限度的案文的规模',
            'The text cannot be translated': '该案文不能被翻译',
            'The specified translation direction is not supported': '在规定的翻译方面没有支持'
        }
    }

    $scope.translated = function(p) {
      return $filter('translate')(p.code);
    }

    $scope.user =  {
        text : '',
        langue: {},
        langueWebsite: $scope.tradLang[0]
    };
    
    $scope.changeLanguage = function (key) {
        $translate.use(key);
    };

    $http.get('/api/languages').then(function(response) {
        $scope.languages = response.data;
        $scope.user.langue = $scope.languages[0]
        $scope.user.langue2 = $scope.languages[0]

    });
    
    $scope.correct = function (){
        $http.post('/api/detects', {
            input: $scope.user.text,
            ouput: $scope.user.langue2.id
        }).then(function() {
            $scope.lang_origine = $scope.user.langue2.code;
            $scope.result = $scope.user.langue2.code;
            toaster.pop('success', ": D", dynTrad[$scope.user.langueWebsite.code].thx);
        });
    };
    
    $scope.submit = function() {
        $http.post('/api/detects', {
            input: $scope.user.text,
            ouput: null
        }).then(function(res) {
            if(res.data[0].code != "Not found")
                $scope.lang_origine = res.data[0].code;
            $scope.result_trad = null;
            $scope.result = res.data[0].code;
        });
    };
    
    $scope.translation = function(lang_trad) {
          var text = $scope.user.text.replace(" ", "+");
          $scope.lang_title = $scope.user.langue.code;
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
