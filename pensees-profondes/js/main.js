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
		beginning: {fr: "L'infirmier me fait entrer dans la chambre. Grand-Père est allongé dans un lit d'hôpital, autour de lui de nombreuses machines vibrent et clignotent. Il a les yeux fermés et inspire une tranquillité hors du commun. Le monsieur m'explique qu'il s'agit d'une de ses dernières volontés, qu'il m'a choisie moi, et commence à me parler de l'appareil. C'est étrange il me dit, comme dans un rêve, parfois il y aura des souvenirs, parfois juste de l'imagination qui se perd... Je comprends pas tout mais il me rassure, j'ai qu'à me laisser porter au gré de l'esprit de Grand-Père.<br>Ok.<br>Je mets le casque sur ma tête. Il finit les derniers réglages et me signale que c'est prêt."},
		beginningAction: {fr: "J'entre dans l'esprit de Grand-Père"},
		firstIntro: {fr: "Je ne vois rien mais j'ai l'impression d'avancer. Ah... Il y a quelque chose qui se dessine... J'avance encore un peu"},
		continuing: {fr: "J'ai dû faire une pause. L'infirmier a été très compréhensif. Les souvenirs de Grand-Père ne sont pas très clair mais c'est intéressant. Je suis prête à reprendre..."},
		continueAction: {fr: "Replonger dans l'esprit de Grand-Père"},
		ending: {fr: "Je suis de retour dans la réalité. Je retire le casque, l'infirmier me parle mais je ne l'entends pas, encore enivrée par l'expérience et les souvenirs de Grand-Père, son imagination aussi. Il y avait ces visions d'un accident de train... Pourquoi n'en a-t-il jamais parlé ? Pas même à maman. Pourquoi voulait-il que je vois ça alors ? J'ai ressenti qu'il avait des doutes, ce n'était pas qu'un accident, quelqu'un a été condamné, lui a été protégé par l'entreprise. Mais alors quelle serait sa responsabilité ? Est-ce qu'il me veut juge de cette situation ? Je suis perdue et lui est allongé dans son lit d'hôpital, paisible. L'infirmier m'indique qu'il peut m'entendre, est-ce que j'ai une dernière chose à lui dire ? C'est une bonne question ça."},
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
		beginning: {fr: "Je suis attaché mais mes liens sont invisibles. En tout cas je n'arrive pas à les voir, ni même l'endroit où je suis. J'ai une terrible migraine. J'ai perdu la mémoire de mes derniers jours à l'air libre et je sens que quelque chose encercle, enferme, ma tête. Il y a comme des sons électroniques que je perçois très loin de moi, parfois des micro-décharges se font sentir au bout de mes membres. Ce qui veut dire que j'ai encore une existence physique, c'est rassurant. Un message s'affiche, tout un jargon juridique que je dois lire impérativement. Je ne sais pas comment ils font mais tant que je n'ai pas réellement lu et processé la phrase, je ne peux pas passer à la suivante. C'est donc ça la prison. J'arrive au bout... Il faut que je signe mentalement. Je ne sais même pas ce que ça veut dire."},
		beginningAction: {fr: "Signer mentalement"},
		firstIntro: {fr: "Il semble que ça a fonctionné. Les textes ont disparu. Je suis dans le noir complet mais je peux bouger. Je n'arrive pas vraiment à savoir si c'est mon corps qui bouge où mon esprit qui l'imagine. Je marche"},
		continuing: {fr: "Je suis de nouveau dans cet endroit étrange, infini et hors de tout. Combien de temps ça va encore durer ? Je ne sais même plus ce qu'est le temps en réalité, il n'y a rien qui me permet d'en avoir une idée. Je n'ai d'autre choix que de continuer."},
		continueAction: {fr: "Poursuivre la punition"},
		ending: {fr: "Je me réveille avec une torpeur terrible. J'ouvre les yeux et je vois la lumière du jour, la vraie, mes sens me reviennent peu à peu et les rayons du soleil me réchauffent la peau. Ce n'est plus une fiction, je suis de nouveau moi-même et maître de mes pensées. Où suis-je ? Devant une porte gigantesque, entourée de murs qui s'étendent sans fin à l'horizon. C'était donc ça la prison. J'ai ressassé tout le chaos de mes souvenirs et de mon imagination, et j'y ai trouvé plus de questions que de réponses. Mais les nouvelles questions sont rafraichissantes sous cette lumière. Mon informatrice avait donc une fille. Et notre rendez-vous manqué avait un témoin. Je dois désormais faire un choix."},
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
		beginning: {fr: "Comme à chaque fois, je commence par expliquer au patient le processus de cette thérapie, la chirurgie de l'esprit. Ce dernier me raconte qu'il a vécu quelque chose de terrible, qui a changé son rapport au monde, qu'il cherche avant tout à comprendre, pas forcément à soigner. Je vais donc chercher un souvenir. Souvent, je lui dis, les personnes ne sont pas capables d'atteindre par elles-mêmes les souvenirs en question, alors que ces expériences ont un impact profond sur la manière de vivre par la suite. Il me donne son accord pour que j'enregistre mon exploration afin de revenir sur ces pensées, les démêler, les annoter et peut-être même les lui dévoiler. Nous nous connectons avec nos casques respectifs."},
		beginningAction: {fr: "Démarrer la thérapie"},
		firstIntro: {fr: "J'entre dans l'esprit du patient. Il a l'air torturé. Beaucoup de souvenirs, beaucoup d'imagination, tout s'entremêle. Je me laisse guider"},
		continuing: {fr: "Le patient revient pour une nouvelle séance. Je me perds un peu dans ses pensées désordonnées, certaines sont proches d'hallucinations. Mes notes et mon enregistrement me seront bien utiles. J'espère y trouver la source de son trauma."},
		continueAction: {fr: "Poursuivre la thérapie"},
		ending: {fr: "Je décide de mettre fin à la thérapie. Je me déconnecte d'avec le patient, ce dernier me voit perplexe et me demande ce qui ne va pas. Comment lui expliquer ? J'ai vu mon père dans ses souvenirs. Ce n'était pas un tour de son imagination, ni de la mienne, la machine n'est pas capable de transposer ces choses avec une telle netteté. Quand je l'ai vu, je l'ai reconnu consciemment tout en étant dans le ressenti du patient, terrifié. Ça ne trompe pas. Et mon père ne m'en a jamais parlé. Pourquoi cacherait-il cet évènement ? Il y a bien eu un procès, à l'époque sans témoin, et on a trouvé le coupable... Ou en tout cas, un coupable. Pourtant l'origine du trauma de mon patient vient de sa présence lors de cet accident, que je dois lui montrer pour le soigner. Que faire ?"},
		endingActions: [{fr: "Montrer le souvenir au patient et à la justice", value: 2}, {fr: "Déclarer ne rien avoir trouvé et détruire l'enregistrement", value: -2}],
		endingValue: 0,
		isFeminine: true,
	},
	{
		steps: theChild,
		title: {fr: "L'Enfant"},
		objects: [],
		bookTitle: {fr: "Le Livre de la Vérité"},
		stepIndex: 0,
		beginning: {fr: "Je me faufile par la fenêtre de la chambre. L'adolescente dort paisiblement dans son lit. Il est 3h du matin, j'ai jusqu'au réveil, à 6h. J'espère que cette fois l'appareil ne va pas entremêler mes souvenirs dans les siens... Ça serait un vrai bordel pour y trouver ce qu'elle a récupéré de son grand-père et comprendre ce qui s'est réellement passé. Bon, je devrais déjà m'estimer heureuse d'avoir cette machine. Ça se voit que c'est du bricolage, parfois il y a des courts-circuits ou des interférences, mais ça fonctionne pas trop mal. Je suis infiniment reconnaissante envers l'inconnu qui a déposé ça chez moi. C'est bien le prototype sur lequel travaillait maman avant sa mort. Maintenant c'est à moi de m'en servir pour qu'elle puisse un jour reposer en paix, dans la justice et la vérité."},
		beginningAction: {fr: "Infiltrer l'esprit de l'adolescente"},
		firstIntro: {fr: "Ça grésille. Il faut que je fasse attention à ne pas la réveiller. Sinon, c'est la prison. Bon, ça y est, je suis dans son esprit. Ou en tout cas un esprit. Peut-être le mien. Voyons voir"},
		continuing: {fr: "C'était un peu intense, je suis sorti de l'esprit de l'adolescente pour prendre un peu d'air. C'est difficile de distinguer ce qui vient d'elle, de son grand-père ou de moi. Mais je dois continuer à chercher, pour maman."},
		continueAction: {fr: "Reprendre l'infiltration de l'esprit de l'adolescente"},
		ending: {fr: "Mon alerte me signale qu'il est bientôt l'heure de son réveil. Je retire le casque un instant et voit par la fenêtre le jour qui commence à se lever. Je n'ai plus beaucoup de temps, il faut que je fasse un choix, et vite. Ce fameux révolutionnaire condamné, il est innocent. Je suis persuadée d'avoir aperçu des preuves parmi les papiers de l'entreprise. Mais pour en être certaine, il faudrait tout extraire afin d'analyser. Il faudrait que je vole à la petite tous les souvenirs de son grand-père. Et ce n'est pas sans danger, je risque de lui détruire son esprit. Je n'ai jamais fait ça. Que ferait maman ? Peut-être que je devrais plutôt chercher du côté de l'entreprise et laisser le grand-père et ses souvenirs tranquilles. Il est presque 6h, son réveil va bientôt sonner et je dois m'échapper..."},
		endingActions: [{fr: "Voler les souvenirs du grand-père et innocenter le condamné", value: 2}, {fr: "Laisser les souvenirs du grand-père dans l'esprit de l'adolescente", value: -2}],
		endingValue: 0,
		isFeminine: true,
	},
	{
		steps: theAugur,
		title: {fr: "L'Augure"},
		objects: [],
		bookTitle: {fr: "Le Livre de l'Action"},
		stepIndex: 0,
		beginning: {fr: "Je crois qu'initialement cette machine était destinée à être utilisée avec un deuxième esprit. Je n'ai que le mien avec moi malheureusement. Le bricolage de ce truc m'a pris plusieurs années. Faut dire, ces documents que j'ai ramassé dans le tunnel m'étaient vraiment cryptiques au départ. Même maintenant je suis toujours pas sûr de comprendre le vrai but de cet engin. Ça ressemble beaucoup à ce qu'utilise ma chirurgienne de l'esprit pour la thérapie mais en plus évolué. Je me sens presque illégitime à l'utiliser, je devrais le léguer à qui de droit, à quiconque doit recevoir l'héritage de cette création monstrueuse et géniale. Mais j'y suis presque dépendant. Bon. Je réfléchis trop. J'ai besoin de plâner à nouveau. J'ai pris ma dose, je peux enfiler le casque et me perdre encore un peu..."},
		beginningAction: {fr: "Commencer à plâner"},
		firstIntro: {fr: "Je me sens tellement bien à chaque fois que j'entre dans cette dimension de mon imagination. Les trucs que je prends aident, c'est certain. Ils aident à oublier, à pas trop retomber sur des souvenirs aussi. Juste voyager. Me perdre. Voilà, je me perds"},
		continuing: {fr: "Les effets se sont dissipés donc je me suis arrêté un instant pour sortir de mes rêveries. Parfois j'ai l'impression de voir dans le futur, voire même de pouvoir y agir. Néanmoins, j'ai souvent des souvenirs douloureux aussi, mes bad trips. Ce casque bricolé est une bénédiction et une malédiction."},
		continueAction: {fr: "Repartir en trip"},
		ending: {fr: "Je dois m'arrêter. J'ai assez vu de ces souvenirs et visions perturbantes. Ma chirurgienne, sous le choc... Cette fille, orpheline... Ce casque semble animé de sa propre volonté et me ressasse sans cesse ces situations lointaines, irréelles et illusoires. Je me suis vu, moi, dans ces hallucinations, en train de l'abandonner au chevet de cette jeune femme. Elle ressemble à sa mère. Tout aussi géniale et déterminée. Comment est-ce que je sais ça moi ? Aucune idée, j'ai vraiment perdu la tête après une vie si difficile. Si vaine. Si lâche. Les effets de cet appareil n'aident pas. Ni ma thérapie. Ou peut-être que ça viendra, si ce que j'ai imaginé sont des visions du futur et non des fantasmes... Quelle différence ? Je dois moi-même choisir ou non de réaliser cette prophétie auto-réalisatrice. Ça fait des années que je n'ai pas eu aussi peur de faire un choix."},
		endingActions: [{fr: "Aller se soigner chez la chirurgienne de l'esprit", value: 2}, {fr: "Retrouver la fille pour lui léguer l'appareil", value: -2}],
		endingValue: 0,
		isFeminine: false,
	}];
	var theMotherStory = {
		steps: theMother,
		title: {fr: "La Mère"},
		objects: [],
		bookTitle: {fr: "Le Livre du Destin"},
		stepIndex: 0,
		beginning: {fr: "J'étais dans le tunnel. J'ai vu une lumière. Puis rien.<br>J'attendais quelqu'un. Puis plus rien.<br>C'est donc ça la fin ? Pourquoi suis-je encore consciente ? Ne meurt-on pas quand on est percuté par un train à toute vitesse ? Ou bien est-ce ça la mort ? Peut-être suis-je dans le purgatoire, ou dans une antichambre du paradis ou de l'enfer... Je ne comprends pas très bien et je pense que c'est normal, mais c'est aussi perturbant. J'ai conscience. Et j'ai conscience de ne plus avoir de forme physique. Pourtant j'ai encore mes sens. Je peux sentir, toucher, voir. D'une manière différente et similaire à la fois. C'est peut-être mon imagination pure et simple. C'est sûrement ça. Qu'est-ce que je vois ? Je ne sais pas. De la lumière encore. Une lumière obscure... Et un portail. Gigantesque. Infini de tous les côtés mais dont je distingue les terminaisons."},
		beginningAction: {fr: "Entrer dans l'au-delà"},
		firstIntro: {fr: "Je traverse le portail. J'avance sur ce qui ressemble à des coussins de nuages. Assez proche de l'idée qu'on se fait d'une entrée au paradis sauf qu'ils sont pas blancs mais gris. Certains noirs même. Je continue à marcher ou flotter. Je ne sais pas. Je flotte probablement. Je flotte donc"},
		continuing: {fr: "Cet au-delà est improbable. J'y recroise des souvenirs de ma vie passée entremêlés d'instants loufoques d'imagination. Est-ce que mon cerveau serait dans une cuve ? En tout cas j'ai le sentiment intime que ce n'est pas tout ce qu'il y a ici. Et même que je progresse. Je vais avancer jusqu'au bout."},
		continueAction: {fr: "Continuer à explorer l'au-delà"},
		ending: {fr: "Je suis arrivé au bout. Au bout de tout. Par delà ma vie, ma mort, mes souvenirs et mon imagination. Mes mots, mes sens et mon intellect. Alors qu'y a-t-il ici ? C'est inintelligible. Une sorte de paix en mouvement. Comme une brise, un faible courant, rien n'est figé et pourtant tout est déterminé. Quelle est ma place ? Je ne sais pas. Je suis là, je suis arrivé jusque là. Est-ce que ça restera éternellement ainsi ? Je ne crois pas. Est-ce que ça a un sens ? Probablement celui que je lui donne, sinon non. Il y a de la violence et une sorte de tranquillité dans cet endroit. Tout action est vaine et en même temps essentielle. C'est un destin imprévisible, chaotique. Et c'est sûrement la fin. Hm... Y a-t-il même une fin ? Non. En réalité, c'est infini. Mais qu'y a-t-il au-delà ?"},
		endingActions: [{fr: "Tout", value: 2}, {fr: "Rien", value: -2}],
		endingValue: 0,
		isFeminine: true,
	};
	realStories = shuffle(realStories);
	realStories.push(theMotherStory); // always at the end
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