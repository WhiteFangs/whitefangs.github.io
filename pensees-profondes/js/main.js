var STORIES_KEY = "stories_state";
var TRANSITION_DELAY = 500;

function shuffle(a) {
	var j, x, i;
	for (i = a.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		x = a[i];
		a[i] = a[j];
		a[j] = x;
	}
	return a;
}

function regender(text, isFeminine){
	if(isFeminine){
		return text.replace(/\(|\)/gi, "");
	}else{
		return text.replace(/\([^\)]+\)/gi, "");
	}
}

function getStories(){
	var storedStories = localStorage.getItem(STORIES_KEY);
	if(storedStories != null)
		return JSON.parse(storedStories);
	var realStories = [{
		steps: theGrandfather,
		title: {fr: "Le Grand-Père"},
		objects: [],
		bookTitle: {fr: "Le Livre des Regrets"},
		stepIndex: 0,
		beginning: {fr: "L'infirmier me fait entrer dans la chambre. Grand-Père est allongé dans un lit d'hôpital, autour de lui de nombreuses machines vibrent et clignottent. Il a les yeux fermés et inspire une tranquilité hors du commun. Le monsieur m'explique qu'il s'agit d'une de ses dernières volontés, qu'il m'a choisie moi, et commence à me parler de l'appareil. C'est étrange il me dit, comme dans un rêve, parfois il y aura des souvenirs, parfois juste de l'imagination qui se perd... Je comprends pas tout mais il me rassure, je n'ai qu'à me laisser porter au gré de l'esprit de Grand-Père.<br>Ok.<br>Je mets le casque sur ma tête. Il finit les derniers réglages et me signale que c'est prêt."},
		beginningAction: {fr: "J'entre dans l'esprit de Grand-Père"},
		firstIntro: {fr: "Je ne vois rien mais j'ai l'impression d'avancer. Ah... Il y a quelque chose qui se dessine... J'avance encore un peu"},
		continuing: {fr: "J'ai dû faire une pause. L'infirmier a été très compréhensif. Les souvenirs de Grand-Père ne sont pas très clair mais c'est intéressant. Je suis prête à reprendre..."},
		continueAction: {fr: "Replonger dans l'esprit de Grand-Père"},
		ending: {fr: "Je suis de retour dans la réalité. Je retire le casque, l'infirmier me parle mais je ne l'entends pas, encore enivrée par l'expérience et les souvenirs de Grand-Père, son imagination aussi. Il y avait ces visions d'un accident de train... Pourquoi n'en a-t-il jamais parlé ? Pas même à maman. Pourquoi voulait-il que je vois ça alors ? J'ai ressenti qu'il avait des doutes, ce n'était pas qu'un accident, quelqu'un a été condamné, et lui a été protégé par l'entreprise. Mais alors quelle serait sa responsabilité ? Est-ce qu'il me veut juge de cette situation ? Je suis perdue et lui est allongé dans son lit d'hôpital, paisible. L'infirmier m'indique qu'il peut m'entendre, est-ce que j'ai une dernière chose à lui dire ? Excellente question."},
		endingActions: [{fr: "Laisser Grand-Père se reposer en paix", value: 1}, {fr: "Réprouver l'inaction de Grand-Père face à ses doutes", value: -1}],
		endingValue: 0,
		isFeminine: true,
	}, 
	{
		steps: theGuilty,
		title: {fr: "Le Coupable"},
		objects: [],
		bookTitle: {fr: "Le Livre du Châtiment"},
		stepIndex: 0,
		beginning: {fr: "Je suis attaché mais mes liens sont invisibles. En tout cas je n'arrive pas à les voir, ni même l'endroit où je suis. J'ai une terrible migraine. J'ai perdu conscience de mes derniers jours à l'air libre et je sens que quelque chose encercle, enferme, ma tête. Il y a comme des sons électroniques que je perçois très loin de moi, parfois des micro-décharges se font sentir au bout de mes membres. Ce qui veut dire que j'ai encore une existence physique, c'est rassurant. Un message s'affiche, tout un jargon juridique que je dois lire impérativement. Je ne sais pas comment ils font mais tant que je n'ai pas réellement lu et processé la phrase, je ne peux pas passer à la suivante. C'est donc ça la prison. J'arrive au bout... Il faut que je signe mentalement. Je ne sais même pas ce que ça veut dire."},
		beginningAction: {fr: "Signer mentalement"},
		firstIntro: {fr: "Il semble que ça a fonctionné. Les textes ont disparu. Je suis dans le noir complet mais je peux bouger. Je marche"},
		continuing: {fr: "Je suis de nouveau dans cet endroit étrange, infini et hors de tout. Combien de temps ça va encore durer ? Je ne sais même plus ce qu'est le temps en réalité, il n'y a rien qui me permet d'en avoir une idée. Je n'ai d'autre choix que de continuer."},
		continueAction: {fr: "Poursuivre la punition"},
		ending: {fr: "Je me réveille avec une torpeur terrible. J'ouvre les yeux et je vois la lumière du jour, la vraie, mes sens me reviennent peu à peu et les rayons du soleil me réchauffent la peau. Ce n'est plus une fiction, je suis de nouveau moi-même et maître de mes pensées. Où suis-je ? Devant une porte gigantesque, entourée de murs infinis à l'horizon. C'était donc ça la prison. J'ai ressassé tout le chaos de mes souvenirs et de mon imagination, et j'y ai trouvé plus de questions que de réponses. Mais les nouvelles questions sont rafraichissantes sous cette lumière. Mon informatrice avait donc une fille. Et notre rendez-vous manqué avait un témoin. Je dois désormais faire un choix."},
		endingActions: [{fr: "Retrouver l'orpheline", value: 2}, {fr: "Retrouver le témoin", value: -2}],
		endingValue: 0,
		isFeminine: false,
	},
	{
		steps: theGuilty,
		title: {fr: "Le Patient"},
		objects: [],
		bookTitle: {fr: "Le Livre de la Justice"},
		stepIndex: 0,
		beginning: {fr: "Comme à chaque fois, je commence par expliquer au patient le processus de cette thérapie, la chirurgie de l'esprit. Ce dernier me raconte qu'il a vécu quelque chose de terrible, qui a changé son rapport au monde, et qu'il cherche avant tout à comprendre, pas forcément à soigner. Je vais donc chercher un souvenir. Souvent, je lui dis, les personnes ne sont pas capables d'atteindre par elles-mêmes les souvenirs en question, alors que ces expériences ont un impact profond sur la manière de vivre par la suite. Il me donne son accord pour que j'enregistre mon exploration afin de revenir sur ces pensées, les démêler, les annoter et peut-être même les lui dévoiler. Nous nous connectons avec nos casques respectifs."},
		beginningAction: {fr: "Démarrer la thérapie"},
		firstIntro: {fr: "J'entre dans l'esprit du patient. Il a l'air torturé. Beaucoup de souvenirs, beaucoup d'imagination, tout s'entremêle. Je me laisse guider"},
		continuing: {fr: "Le patient revient pour une nouvelle séance. Je me perds un peu dans ses pensées désordonnées mais mes notes et mon enregistrement me seront bien utiles. J'espère y trouver la source de son trauma."},
		continueAction: {fr: "Poursuivre la thérapie"},
		ending: {fr: "Je décide de mettre fin à la thérapie. Je me déconnecte d'avec le patient, ce dernier me voit perplexe et me demande ce qui ne va pas. Comment lui expliquer ? J'ai vu mon père dans ses souvenirs. Ce n'était pas un tour de son imagination, ni de la mienne, la machine n'est pas capable de transposer ces choses avec une telle netteté. Quand je l'ai vu, je l'ai reconnu consciemment tout en étant dans le ressenti du patient, terrifié. Ça ne trompe pas. Et mon père ne m'en a jamais parlé. Pourquoi cacherait-il cet évènement ? Il y a bien eu un procès, à l'époque sans témoin, et on a trouvé le coupable... Ou en tout cas, un coupable. Pourtant l'origine du trauma de mon patient est dans sa présence lors de cet accident, et je dois lui montrer pour le soigner. Que faire ?"},
		endingActions: [{fr: "Montrer le souvenir au patient et à la justice", value: 2}, {fr: "Déclarer ne rien avoir trouvé et détruire l'enregistrement", value: -2}],
		endingValue: 0,
		isFeminine: true,
	},
	{
		steps: theGuilty,
		title: {fr: "Le Voyant"},
		objects: [],
		bookTitle: {fr: "Le Livre de l'Action"},
		stepIndex: 0
	},
	{
		steps: theGuilty,
		title: {fr: "L'Enfant"}, // orpheline
		objects: [],
		bookTitle: {fr: "Le Livre de la Vérité"},
		stepIndex: 0
	},
	{
		steps: theGuilty,
		title: {fr: "La Mère"},
		objects: [],
		bookTitle: {fr: "Le Livre du Destin"},
		stepIndex: 0
	}];
	stories = shuffle(stories);
	for (var i = stories.length - 1; i >= 0; i--) {
		realStories[i%realStories.length].steps.push(stories[i]);
	}
	for (var i = realStories.length - 1; i >= 0; i--) {
		realStories[i].steps = shuffle(realStories[i].steps);
		var objects = [];
		realStories[i].steps.forEach(function(s, i) {
			if(s.object != null){
				objects.push({
					step: i,
					name: s.object.name,
					description: s.object.description,
					locked: true,
					new: false
				});
			}
		});
		realStories[i].objects = objects;
	}
	return realStories;
}