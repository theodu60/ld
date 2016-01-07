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
  'pascalprecht.translate',
  'ngMaterial',
  'ngMessages'
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
      ENTERTEXTE: 'Enter text to analyze :',
      selectionTrad: 'Select language',
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
      ENTERTEXTE: 'Entrez le texte à analyser :',
      selectionTrad: 'Sélectionnez une langue',
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
$translateProvider.translations('zh', {
      TITLE: '语言 ：',
      WRONG: '错误的语言吗 ? 帮助我们改进我们的申请上',
      SELECT: '选择正确的措辞 ：',
      CORRECT: '正确的',
      ANALYSE: '分析一下',
      TRANSLATION: '翻译',
      ENTERTEXTE: '阿尔巴尼亚翻译',
      selectionTrad: '错误的语言吗',
      sq: '阿尔巴尼亚',
      en: '英文',
      ar: '阿拉伯文',
      hy: '亚美尼亚',
      az: '阿塞拜疆',
      af: '南非荷兰语',
      eu: '巴斯克',
      be: '白俄罗斯',
      bg: '保加利亚',
      bs: '波斯尼亚',
      cy: '威尔士',
      vi: '越南人',
      hu: '匈牙利',
      ht: '海地克里奥尔)',
      gl: '名加西亚',
      nl: '荷兰',
      el: '希腊',
      ka: '格鲁吉亚',
      da: '丹麦',
      he: '依地语',
      id: '印度尼西亚',
      ga: '爱尔兰人',
      it: '意大利人',
      is: '冰岛',
      es: '西班牙',
      kk: '哈萨克斯坦',
      ca: '加泰罗尼亚语',
      ky: '吉尔吉斯斯坦',
      zh: '中国人',
      ko: '韩国',
      la: '拉丁',
      lv: '拉脱维亚',
      lt: '立陶宛',
      mg: '马达加斯加',
      ms: '马来',
      mt: '马耳他',
      mk: '马其顿',
      mn: '蒙古',
      de: '德',
      no: '挪威',
      fa: '波斯',
      pl: '波兰',
      pt: '葡萄牙',
      ro: '罗马尼亚',
      ru: '俄罗斯',
      sr: '塞尔维亚',
      sk: '斯洛伐克',
      sl: '斯洛文尼亚',
      sw: '斯瓦希里语',
      tg: '塔吉克斯坦',
      th: '泰国',
      tl: '塔加路族语',
      tt: '在要吹奏完时鞑靼人的',
      tr: '土耳其',
      uz: '乌兹别克斯坦',
      uk: '乌克兰',
      fi: '完成',
      fr: '法语',
      hr: '克罗地亚',
      cs: '捷克',
      sv: '瑞典',
      et: '爱沙尼亚',
      ja: '日本人'
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
