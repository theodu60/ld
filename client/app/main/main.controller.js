'use strict';
(function() {

function MainController($scope, $http, socket) {
  var self = this;
  this.awesomeThings = [];

  $http.get('/api/things').then(function(response) {
    self.awesomeThings = response.data;
    socket.syncUpdates('thing', self.awesomeThings);
  });


        $http.post('/api/detects', {
          input: "heures vous ne me verrez plus. Je me suis assuré d’une place dans une automobile qui me conduira d’abord à Thann. Il mit la main sur des lettres et des papiers, entassés à l’angle de la table. — Tout est prêt. Madame Ehrsam se recula. — Alors je n’ai qu’à me retirer. Joseph lui barra le chemin de la porte. — Non, maman. Rien ne me fera céder, mais je tiens au contraire, à vous expliquer ;… je voulais le faire ;… vous m’avez prévenu. Elle demeura devant lui, les bras le long du corps, les paupières baissées, immobile. — Explique donc. J’ai déjà souffert par toi : ce ne sera qu’un peu plus. – 390 – — Demain, je serai en France, mais, demain aussi, partira d’Alsace, pour le ministère du Commerce, un dossier… — La pétition, oui, je sais : continue… — Parfaitement, d’autres pièces encore. Des amis exposeront de vive voix au ministre les raisons graves qui font que notre fabrique ne peut être privée de ses deux chefs à la fois. Puisque je m’engage, je demande que Pierre soit mis en congé renouvelable. Le ministre de la Guerre ne refusera pas cette demande très bien motivée, très appuyée. Il y a des précédents. Et voilà pourquoi je vous ai dit que vous ne resteriez pas seule : Pierre vous reviendra. — S’il y consent. — Il y consentira… Lui, il a rempli son devoir envers la France : il a fait, sans y être obligé, dix-sept mois de campagne ; en se retirant de l’armée, il offre un remplaçant. Et moi, j’offre à mon frère, à celle qui, j’espère, sera sa femme bientôt, le bonheur de vivre ici, près de vous… — Le bonheur qui ne t’a pas suffi ! — Vous êtes dure pour moi ! Vous êtes mère jusqu’à l’injustice. — Qu’as-tu encore à dire ? — Que c’est à vous qu’il appartient de faire entendre raison à mon frère. De moi, il n’accepterait pas le sacrifice que je fais. Mais quand j’aurai quitté Masevaux, et que personne ne saura où me retrouver, il prendra son parti d’être heureux. Vous aurez, pour l’y décider, l’éloquence toutepuissante de mademoiselle de Clairépée. Un regard de ses yeux, et il cédera, cet indomptable. – 391 – — Tu connais mal ces cœurs-là. — Ne leur parlez pas avant ce soir ; le plus tard possible. Quand la nuit descendra, je ne serai plus qu’un voyageur inconnu dans un compartiment trop plein ; je n’aurai même plus de nom… Pourrai-je vous écrire ? Êtes-vous si fâchée contre moi que vous deviez rester sans nouvelles ? La mère releva les paupières qu’elle avait tenues baissées, et quand elle vit que son fils souffrait, elle lui jeta les bras autour du cou, et elle pleura. Pourtant, ils ne se dirent plus rien. Secouée par les sanglots, madame Ehrsam s’écarta doucement de Joseph, le repoussant d’un geste de ses deux mains dressées, qu’elle inclinait en mesure pour faire entendre : « Laisse-moi ; je n’ai plus de force ; n’ajoute rien. » Elle essuya ses yeux, et regarda l’angle de sa maison, à travers les vitres. Un sourire triste, un de ces sourires de misère qui marquent la royauté de l’âme qu’on croyait abattue, tira un peu vers la terre les lèvres silencieuses, et le visage fut éclairé d’une petite aube. Résignation ? souvenir du temps meilleur ? image passant de Pierre et de Marie qu’elle allait revoir ? Elle ouvrit la porte du bureau des employés, salua, cette fois, obligeamment ceux qui la reconnurent, et alla s’asseoir à sa place depuis cinq ans demeurée vide, à gauche du poêle, dans le salon rouge orné de fleurs d’hiver et de feuillages. Le déjeuner fut bien ordonné, comme l’avait été le dîner de la veille ; la conversation plus aisée encore et plus cordiale, entre les mêmes convives. Madame Ehrsam faisait effort, pour ne pas laisser voir la douleur et la crainte qui grandissaient en elle, à mesure que l’heure approchait où l’un de – 392 – ceux qui étaient là allait se lever. Elle seule, avec lui, savait qu’il ne reviendrait pas. Elle seule, par instants, songeait, le regard perdu dans le rêve. Deux fois, Pierre avait demandé : « Qu’avez-vous, maman ? Êtes-vous triste ? Oh ! ce n’est pas le jour. Demain, peut-être aurez-vous le droit de l’être. Et encore ? Qui sait ? Ne soyez pas triste, maman. » Et il se remettait à causer, tout haut, avec la jeune femme dont le mari se battait en Champagne. Marie de Clairépée, placée près de Joseph, l’interrogeait sur les forêts des Vosges, sur l’Hartmannswillerkopf que l’artillerie allemande battait depuis la veille ; sur le pèlerinage de Huppach, et sur la chapelle près de laquelle, après le déjeuner, elle devait passer. Joseph, aussi calme en apparence que de coutume, répondait avec la précision qui était dans sa manière. Il regardait Marie, attentivement il l’écoutait, et, comme il riait à toute parole qu’elle disait, la pointe d’or de sa barbe remuait audessus de son col. Ayant tourné la tête vers la pendule, il devint songeur tout à coup. Deux heures allaient sonner. Les convives se levèrent de table, et Anna servit le café dans le salon. Mademoiselle de Clairépée était debout, près de la fenêtre ; elle regardait le terrain vague, les bâtiments de la fabrique, des cimes de montagnes par delà la vallée. Celui qui allait partir s’approcha d’elle, et dit tout bas : — Vous avez entendu Pierre, hier soir et ce matin comme il parle bien, n’est-ce pas ? — Mon père et moi, en Provence, nous l’écoutions avec plaisir. – 393 – — Il est instruit, il devine les choses qu’il ne sait pas, il est enthousiaste… — Oh ! oui ! — Et si bon ! Quand nous nous sommes retrouvés, hier, nous étions pleinement heureux, comme des enfants, oui, mademoiselle, dans ce temps de douleur, comme des enfants ! Moi qui suis gauche, timide, vous le voyez bien… — De moins en moins. — C’est vrai, avec vous je n’aurais plus peur bientôt… Je voudrais vous dire : Pierre est tout à fait admirable, presque digne de vous. Tournée vers lui, elle souriait, et le sourire disait : « Vous êtes un cœur profond, vous aussi ; je régnerais par amour dans cette maison, si je voulais. » — Mademoiselle, épousez mon frère, et venez habiter ici… Je dois parler pour lui en ce moment, parce que je ne puis vous accompagner au Buchberg. Il faut que j’aille à Thann, et ailleurs… Ce sont mes adieux… — Déjà ? — Mais je ferai pour vous deux une chose qui me coûte un peu… Vous l’apprendrez bientôt… Si vous daignez un jour être ma sœur, vous penserez que ç’a été le premier cadeau de noces. Sans attendre qu’elle lui répondît, il s’approcha de Pierre, lui répéta qu’une affaire urgente l’appelait dans la vallée de Thann, lui serra la main, salua l’amie de la place du Marché, puis, venant à sa mère, qui était près du poêle, il l’embrassa longuement. Tout le monde avait fait silence. – 394 – Madame Ehrsam emmena son fils dans l’antichambre. Elle ne fut pas absente plus d’une minute. Mais, quand elle reparut, ses joues étaient aussi pâles ",
          ouput: null
        })
        .then(function(res) {
          console.log("ok")
        })

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
