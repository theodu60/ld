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
      sq: 'Albanian',
      en: 'English',
      ar: 'Arabic',
      hy: 'Armenian',
      az: 'Azerbaijan',
      af: 'Afrikaans',
      eu: 'Basque',
      be: 'Belarusian',
      bg: 'Bulgarian',
      bs: 'Bosnian',
      cy: 'Welsh',
      vi: 'Vietnamese',
      hu: 'Hungarian',
      ht: 'Haitian (Creole)',
      gl: 'Galician',
      nl: 'Dutch',
      el: 'Greek',
      ka: 'Georgian',
      da: 'Danish',
      he: 'Yiddish',
      id: 'Indonesian',
      ga: 'Irish',
      it: 'Italian',
      is: 'Icelandic',
      es: 'Spanish',
      kk: 'Kazakh',
      ca: 'Catalan',
      ky: 'Kyrgyz',
      zh: 'Chinese',
      ko: 'Korean',
      la: 'Latin',
      lv: 'Latvian',
      lt: 'Lithuanian',
      mg: 'Malagasy',
      ms: 'Malay',
      mt: 'Maltese',
      mk: 'Macedonian',
      mn: 'Mongolian',
      de: 'German',
      no: 'Norwegian',
      fa: 'Persian',
      pl: 'Polish',
      pt: 'Portuguese',
      ro: 'Romanian',
      ru: 'Russian',
      sr: 'Serbian',
      sk: 'Slovakian',
      sl: 'Slovenian',
      sw: 'Swahili',
      tg: 'Tajik',
      th: 'Thai',
      tl: 'Tagalog',
      tt: 'Tatar',
      tr: 'Turkish',
      uz: 'Uzbek',
      uk: 'Ukrainian',
      fi: 'Finish',
      fr: 'French',
      hr: 'Croatian',
      cs: 'Czech',
      sv: 'Swedish',
      et: 'Estonian',
      ja:  'Japanese'
    });
    $translateProvider.translations('fr', {
      TITLE: 'Langue trouvée : ',
      WRONG: 'Mauvaise langue ? Aidez nous à améliorer notre application !',
      SELECT: 'Selectionner la langue : ',
      CORRECT: 'Corriger',
      ANALYSE: 'Analyser',
      TRANSLATION: 'Traduire',
      sq: 'Albanais',
      en: 'Anglais',
      ar: 'Arabe',
      hy: 'Arménien',
      az: 'L\'azerbaïdjan',
      af: 'Afrikaans',
      eu: 'Basque',
      be: 'Biélorusse',
      bg: 'Bulgare',
      bs: 'Bosniaque',
      cy: 'Gallois',
      vi: 'Vietnamien',
      hu: 'Hongrois',
      ht: 'Haïtienne (Créole)',
      gl: 'Galicien',
      nl: 'Néerlandais',
      el: 'Grec',
      ka: 'Géorgien',
      da: 'Danois',
      he: 'Yiddish',
      id: 'Indonésien',
      ga: 'Irlandais',
      it: 'Italien',
      is: 'Islandais',
      es: 'Espagnol',
      kk: 'Kazakh',
      ca: 'Catalan',
      ky: 'Kirghize',
      zh: 'Chinois',
      ko: 'Coréen',
      la: 'Latine',
      lv: 'Letton',
      lt: 'Lituanien',
      mg: 'Malgache',
      ms: 'Malais',
      mt: 'Maltais',
      mk: 'Le macédonien',
      mn: 'Mongol',
      de: 'Allemand',
      no: 'Norvégien',
      fa: 'Persan',
      pl: 'Polonais',
      pt: 'Portugais',
      ro: 'Roumain',
      ru: 'Russe',
      sr: 'Le serbe',
      sk: 'Slovaque',
      sl: 'Slovène',
      sw: 'Swahili',
      tg: 'Tadjik',
      th: 'Thai',
      tl: 'Tagalog',
      tt: 'Tatar',
      tr: 'Turc',
      uz: 'Ouzbek',
      uk: 'Ukrainien',
      fi: 'Finition',
      fr: 'Français',
      hr: 'Croate',
      cs: 'Tchèque',
      sv: 'Suédois',
      et: 'Estonien',
      ja: 'Japonais'
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
