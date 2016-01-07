'use strict';

angular.module('ldApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'toaster',
  'ngAnimate',
  'pascalprecht.translate'
])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider,$translateProvider) {
    $urlRouterProvider
      .otherwise('/');
    $translateProvider.translations('en', {
      TITLE: 'Language found : ',
      WRONG: 'Wrong language ? Help us to improve our application !',
      SELECT: 'Select the correct language : ',
      CORRECT: 'Correct it',
      ANALYSE: 'Analyse',
      TRANSLATION: 'Translate',
      fr: 'French'
    });
    $translateProvider.translations('fr', {
      TITLE: 'Langue trouvée : ',
      WRONG: 'Mauvaise langue ? Aidez nous à améliorer notre application !',
      SELECT: 'Selectionner la langue : ',
      CORRECT: 'Corriger',
      ANALYSE: 'Analyser',
      TRANSLATION: 'Traduire',
      fr: 'Français'
    });
  $translateProvider.preferredLanguage('en');
    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');
  })

  .factory('authInterceptor', function($rootScope, $q, $cookies, $injector) {
    var state;
    return {
      // Add authorization token to headers
      request: function(config) {
        config.headers = config.headers || {};
        if ($cookies.get('token')) {
          config.headers.Authorization = 'Bearer ' + $cookies.get('token');
        }
        return config;
      },

      // Intercept 401s and redirect you to login
      responseError: function(response) {
        if (response.status === 401) {
          (state || (state = $injector.get('$state'))).go('login');
          // remove any stale tokens
          $cookies.remove('token');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }
    };
  })

  .run(function($rootScope, $state, Auth) {
    // Redirect to login if route requires auth and the user is not logged in
    $rootScope.$on('$stateChangeStart', function(event, next) {
      if (next.authenticate) {
        Auth.isLoggedIn(function(loggedIn) {
          if (!loggedIn) {
            event.preventDefault();
            $state.go('login');
          }
        });
      }
    });
  });
