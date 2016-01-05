/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Language from '../api/language/language.model';
import Detect from '../api/detect/detect.model';


Detect.find({}).removeAsync()
  .then(function() {
    Detect.create(
      {
          "ouput" : 40,
          "freq" : [ 
              {
                  "label" : "h",
                  "value" : 0.0086490939044481
              }, 
              {
                  "label" : "e",
                  "value" : 0.1649505766062603
              }, 
              {
                  "label" : "u",
                  "value" : 0.0679571663920923
              }, 
              {
                  "label" : "r",
                  "value" : 0.0739291598023064
              }, 
              {
                  "label" : "s",
                  "value" : 0.0827841845140033
              }, 
              {
                  "label" : "v",
                  "value" : 0.0207990115321252
              }, 
              {
                  "label" : "o",
                  "value" : 0.0512767710049423
              }, 
              {
                  "label" : "n",
                  "value" : 0.0619851729818781
              }, 
              {
                  "label" : "m",
                  "value" : 0.0304777594728171
              }, 
              {
                  "label" : "z",
                  "value" : 0.0032948929159802
              }, 
              {
                  "label" : "p",
                  "value" : 0.0317133443163097
              }, 
              {
                  "label" : "l",
                  "value" : 0.0619851729818781
              }, 
              {
                  "label" : "i",
                  "value" : 0.0739291598023064
              }, 
              {
                  "label" : "a",
                  "value" : 0.0881383855024712
              }, 
              {
                  "label" : "d",
                  "value" : 0.0376853377265239
              }, 
              {
                  "label" : "c",
                  "value" : 0.0247116968698517
              }, 
              {
                  "label" : "t",
                  "value" : 0.0611614497528830
              }, 
              {
                  "label" : "b",
                  "value" : 0.0088550247116969
              }, 
              {
                  "label" : "q",
                  "value" : 0.0113261943986820
              }, 
              {
                  "label" : "g",
                  "value" : 0.0084431630971993
              }, 
              {
                  "label" : "j",
                  "value" : 0.0070016474464580
              }, 
              {
                  "label" : "f",
                  "value" : 0.0115321252059308
              }, 
              {
                  "label" : "x",
                  "value" : 0.0037067545304778
              }, 
              {
                  "label" : "y",
                  "value" : 0.0032948929159802
              }, 
              {
                  "label" : "w",
                  "value" : 0.0002059308072488
              }, 
              {
                  "label" : "k",
                  "value" : 0.0002059308072488
              }
          ]
      }
      );
  });


Language.find({}).removeAsync()
  .then(function() {
    Language.create({"id":1,"code":"ab","label":"ABKHAZIAN"},{"id":2,"code":"aa","label":"AFAR"},{"id":3,"code":"af","label":"AFRIKAANS"},{"id":4,"code":"ak","label":"AKAN"},{"id":5,"code":"sq","label":"ALBANIAN"},{"id":6,"code":"am","label":"AMHARIC"},{"id":7,"code":"ar","label":"ARABIC"},{"id":8,"code":"hy","label":"ARMENIAN"},{"id":9,"code":"as","label":"ASSAMESE"},{"id":10,"code":"ay","label":"AYMARA"},{"id":11,"code":"az","label":"AZERBAIJANI"},{"id":12,"code":"ba","label":"BASHKIR"},{"id":13,"code":"eu","label":"BASQUE"},{"id":14,"code":"be","label":"BELARUSIAN"},{"id":15,"code":"bn","label":"BENGALI"},{"id":16,"code":"bh","label":"BIHARI"},{"id":17,"code":"bi","label":"BISLAMA"},{"id":18,"code":"bs","label":"BOSNIAN"},{"id":19,"code":"br","label":"BRETON"},{"id":20,"code":"bg","label":"BULGARIAN"},{"id":21,"code":"my","label":"BURMESE"},{"id":22,"code":"ca","label":"CATALAN"},{"id":23,"code":"ceb","label":"CEBUANO"},{"id":24,"code":"chr","label":"CHEROKEE"},{"id":25,"code":"co","label":"CORSICAN"},{"id":26,"code":"hr","label":"CROATIAN"},{"id":27,"code":"cs","label":"CZECH"},{"id":28,"code":"zh","label":"CHINESE"},{"id":29,"code":"zh-Hant","label":"CHINESET"},{"id":30,"code":"da","label":"DANISH"},{"id":31,"code":"dv","label":"DHIVEHI"},{"id":32,"code":"nl","label":"DUTCH"},{"id":33,"code":"dz","label":"DZONGKHA"},{"id":34,"code":"en","label":"ENGLISH"},{"id":35,"code":"eo","label":"ESPERANTO"},{"id":36,"code":"et","label":"ESTONIAN"},{"id":37,"code":"fo","label":"FAROESE"},{"id":38,"code":"fj","label":"FIJIAN"},{"id":39,"code":"fi","label":"FINNISH"},{"id":40,"code":"fr","label":"FRENCH"},{"id":41,"code":"fy","label":"FRISIAN"},{"id":42,"code":"gl","label":"GALICIAN"},{"id":43,"code":"lg","label":"GANDA"},{"id":44,"code":"ka","label":"GEORGIAN"},{"id":45,"code":"de","label":"GERMAN"},{"id":46,"code":"el","label":"GREEK"},{"id":47,"code":"kl","label":"GREENLANDIC"},{"id":48,"code":"gn","label":"GUARANI"},{"id":49,"code":"gu","label":"GUJARATI"},{"id":50,"code":"ht","label":"HAITIAN_CREOLE"},{"id":51,"code":"ha","label":"HAUSA"},{"id":52,"code":"haw","label":"HAWAIIAN"},{"id":53,"code":"iw","label":"HEBREW"},{"id":54,"code":"hi","label":"HINDI"},{"id":55,"code":"hmn","label":"HMONG"},{"id":56,"code":"hu","label":"HUNGARIAN"},{"id":57,"code":"is","label":"ICELANDIC"},{"id":58,"code":"ig","label":"IGBO"},{"id":59,"code":"id","label":"INDONESIAN"},{"id":60,"code":"ia","label":"INTERLINGUA"},{"id":61,"code":"ie","label":"INTERLINGUE"},{"id":62,"code":"iu","label":"INUKTITUT"},{"id":63,"code":"ik","label":"INUPIAK"},{"id":64,"code":"ga","label":"IRISH"},{"id":65,"code":"it","label":"ITALIAN"},{"id":66,"code":"jw","label":"JAVANESE"},{"id":67,"code":"ja","label":"JAPANESE"},{"id":68,"code":"kn","label":"KANNADA"},{"id":69,"code":"ks","label":"KASHMIRI"},{"id":70,"code":"kk","label":"KAZAKH"},{"id":71,"code":"kha","label":"KHASI"},{"id":72,"code":"km","label":"KHMER"},{"id":73,"code":"rw","label":"KINYARWANDA"},{"id":74,"code":"ku","label":"KURDISH"},{"id":75,"code":"ky","label":"KYRGYZ"},{"id":76,"code":"ko","label":"KOREAN"},{"id":77,"code":"lo","label":"LAOTHIAN"},{"id":78,"code":"la","label":"LATIN"},{"id":79,"code":"lv","label":"LATVIAN"},{"id":80,"code":"lif","label":"LIMBU"},{"id":81,"code":"ln","label":"LINGALA"},{"id":82,"code":"lt","label":"LITHUANIAN"},{"id":83,"code":"lb","label":"LUXEMBOURGISH"},{"id":84,"code":"mk","label":"MACEDONIAN"},{"id":85,"code":"mg","label":"MALAGASY"},{"id":86,"code":"ms","label":"MALAY"},{"id":87,"code":"ml","label":"MALAYALAM"},{"id":88,"code":"mt","label":"MALTESE"},{"id":89,"code":"gv","label":"MANX"},{"id":90,"code":"mi","label":"MAORI"},{"id":91,"code":"mr","label":"MARATHI"},{"id":92,"code":"mfe","label":"MAURITIAN_CREOLE"},{"id":93,"code":"mn","label":"MONGOLIAN"},{"id":94,"code":"na","label":"NAURU"},{"id":95,"code":"nr","label":"NDEBELE"},{"id":96,"code":"ne","label":"NEPALI"},{"id":97,"code":"no","label":"NORWEGIAN"},{"id":98,"code":"ny","label":"NYANJA"},{"id":99,"code":"oc","label":"OCCITAN"},{"id":100,"code":"or","label":"ORIYA"},{"id":101,"code":"om","label":"OROMO"},{"id":102,"code":"ps","label":"PASHTO"},{"id":103,"code":"nso","label":"PEDI"},{"id":104,"code":"fa","label":"PERSIAN"},{"id":105,"code":"pl","label":"POLISH"},{"id":106,"code":"pt","label":"PORTUGUESE"},{"id":107,"code":"pa","label":"PUNJABI"},{"id":108,"code":"qu","label":"QUECHUA"},{"id":109,"code":"rm","label":"RHAETO_ROMANCE"},{"id":110,"code":"ro","label":"ROMANIAN"},{"id":111,"code":"rn","label":"RUNDI"},{"id":112,"code":"ru","label":"RUSSIAN"},{"id":113,"code":"sm","label":"SAMOAN"},{"id":114,"code":"sg","label":"SANGO"},{"id":115,"code":"sa","label":"SANSKRIT"},{"id":116,"code":"sco","label":"SCOTS"},{"id":117,"code":"gd","label":"SCOTS_GAELIC"},{"id":118,"code":"sr","label":"SERBIAN"},{"id":119,"code":"crs","label":"SESELWA"},{"id":120,"code":"st","label":"SESOTHO"},{"id":121,"code":"sn","label":"SHONA"},{"id":122,"code":"sd","label":"SINDHI"},{"id":123,"code":"si","label":"SINHALESE"},{"id":124,"code":"ss","label":"SISWANT"},{"id":125,"code":"sk","label":"SLOVAK"},{"id":126,"code":"sl","label":"SLOVENIAN"},{"id":127,"code":"so","label":"SOMALI"},{"id":128,"code":"es","label":"SPANISH"},{"id":129,"code":"su","label":"SUNDANESE"},{"id":130,"code":"sw","label":"SWAHILI"},{"id":131,"code":"sv","label":"SWEDISH"},{"id":132,"code":"syr","label":"SYRIAC"},{"id":133,"code":"tl","label":"TAGALOG"},{"id":134,"code":"tg","label":"TAJIK"},{"id":135,"code":"ta","label":"TAMIL"},{"id":136,"code":"tt","label":"TATAR"},{"id":137,"code":"te","label":"TELUGU"},{"id":138,"code":"th","label":"THAI"},{"id":139,"code":"bo","label":"TIBETAN"},{"id":140,"code":"ti","label":"TIGRINYA"},{"id":141,"code":"to","label":"TONGA"},{"id":142,"code":"ts","label":"TSONGA"},{"id":143,"code":"tn","label":"TSWANA"},{"id":144,"code":"tr","label":"TURKISH"},{"id":145,"code":"tk","label":"TURKMEN"},{"id":146,"code":"ug","label":"UIGHUR"},{"id":147,"code":"uk","label":"UKRAINIAN"},{"id":148,"code":"ur","label":"URDU"},{"id":149,"code":"uz","label":"UZBEK"},{"id":150,"code":"ve","label":"VENDA"},{"id":151,"code":"vi","label":"VIETNAMESE"},{"id":152,"code":"vo","label":"VOLAPUK"},{"id":153,"code":"war","label":"WARAY_PHILIPPINES"},{"id":154,"code":"cy","label":"WELSH"},{"id":155,"code":"wo","label":"WOLOF"},{"id":156,"code":"xh","label":"XHOSA"},{"id":157,"code":"yi","label":"YIDDISH"},{"id":158,"code":"yo","label":"YORUBA"},{"id":159,"code":"za","label":"ZHUANG"},{"id":160,"code":"zu","label":"ZULU"});
  });
Thing.find({}).removeAsync()
  .then(function() {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    });
  });

User.find({}).removeAsync()
  .then(function() {
    User.createAsync({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(function() {
      console.log('finished populating users');
    });
  });
