var stories = [
{
	"description":{"fr": "une porte rouge apparaît en face de moi. Elle est en bois, la peinture est partie ça et là, et elle dégage une aura similaire à l'odeur des pins dans une forêt."},
	"action": {"fr": "Ouvrir la porte"},
	"next": {"fr": "La poignée était usée mais poussiéreuse, la porte grince et une fois passé, elle se referme derrière moi dans un son sourd, comme lointain. Derrière la porte"},
},
{
	"description": {"fr": "je trouve une petite commode au style démodé, je n'aimerais pas avoir ça chez moi. Le meuble n'est pas très large et il n'y a qu'un seul tiroir."},
	"action": {"fr":  "Ouvrir le tiroir"},
	"next": {"fr":  "Dans le tiroir"},
},
{
	"description": {"fr":  "je découvre un escalier descendant aux marches escarpées."},
	"action": {"fr":  "Descendre l'escalier"},
	"next": {"fr":  "Je fais attention en descendant, je manque de tomber à plusieurs reprises mais finalement plus de peur que de mal, j'atteins le fond. En bas de l'escalier"},
},
{
	"description": {"fr":  "une grande armoire en bois massif se dresse devant moi. Elle doit faire deux fois ma taille avec de belles ornementations sur les côtés."},
	"action": {"fr":  "Ouvrir l'armoire"},
	"next": {"fr":  "Je tire fort pour pouvoir ouvrir les deux battants de la porte, au point que je tombe à la renverse. A l'intérieur de l'armoire"},
},
{
	"description": {"fr":  "face à moi, un miroir déformant, dans lequel je me reflète. J'ai une tête énorme et un corps minuscule, et si je bouge de quelques pas sur le côté, c'est l'inverse. Mon reflet semble me faire signe parfois..."},
	"action": {"fr":  "Entrer dans le miroir"},
	"next": {"fr":  "Étrangement, j'y passe comme si je traversais une simple porte. De l'autre côté du miroir"},
	"object": {
		"name" : {"fr": "Un miroir déformant"},
		"description": {"fr": "Un grand miroir de plein pied dont le reflet bouge. Plus je le regarde et plus mon reflet change. Si je continue à l'observer je vais finir par douter de mon apparence ou de mes sens."}
	}
},
{
	"description": {"fr":  "un arc-en-ciel se déroule magiquement sous mes yeux et continue à perte de vue. En dessous de celui-ci, le monde entier se déploie, des collines, des lacs, des villes. Je mets un pied dessus pour essayer, il est solide."},
	"action": {"fr":  "Traverser l'arc-en-ciel"},
	"next": {"fr":  "C'est comme un pont. Il est très long, mais lorsque je fais un pas, j'enjambe des kilomètres de terre. En quelques minutes, j'arrive au bout de l'arc-en-ciel"},
	"object": {
		"name" : {"fr": "Un morceau de lumière colorée"},
		"description": {"fr": "En traversant l'arc-en-ciel, ce petit morceau de lumière à la couleur sans cesse changeante s'est accroché à ma chaussure, je l'ai ramassé mais je sais pas trop quoi en faire..."}
	}
},
{
	"description": {"fr":  "j'aperçois un mur blanc qui s'étend sans fin à droite et à gauche. J'avance le long du mur et je finis par trouver un petit interrupteur blanc, presque camouflé, sur le mur, pile à ma hauteur."},
	"action": {"fr":  "Déclencher l'interrupteur"},
	"next": {"fr":  "J'appuie sur l'interrupteur, tout un pan du mur se détache et se met à pivoter. C'est un pan immense qui m'emporte dans sa rotation. De l'autre côté du mur"},
},
{
	"description": {"fr":  "un livre rouge se matérialise à mes pieds. Il n'y a pas de titre, la couverture est simplement rouge, la reliure en cuir, il est léger quand je le ramasse mais plus je le porte, plus il s'allourdit."},
	"action": {"fr":  "Ouvrir le livre"},
	"next": {"fr":  "Je l'ouvre et je ne sais pas si c'est le livre qui se gigantifie ou moi qui rapeticie mais je suis irrémédiablement aspiré à l'intérieur même du livre. A l'intérieur"},
	"object": {
		"name" : {"fr": "Un livre rouge"},
		"description": {"fr": "Un étrange livre rouge, je me suis engouffré(e) dedans d'une certaine manière, et pourtant je l'ai aussi emporté avec moi. Il n'y a peut-être rien de paradoxal là-dedans."}
	}
},
{
	"description": {"fr":  "je tombe dans le vide.                                                                                           Je suis encore en train de tomber.                                                                          C'est un vide inquiétant et je sens un vent fort me secouer mais j'essaie de me rassurer."},
	"action": {"fr":  "Continuer à tomber"},
	"next": {"fr":  "Ma chute ralentit soudainement à partir du moment où j'ai fini par m'ennuyer de celle-ci. Je me remets sur mes pieds et reprends ma route"},
},
{
	"description": {"fr":  "je me retrouve nez-à-nez avec une poupée russe à taille humaine. Il y a une poignée, je l'ouvre. Dedans, évidemment, une poupée russe. Je continue, encore une poupée russe. C'est l'idée. Je poursuis inlassablement jusqu'à obtenir une poupée de la taille de ma main."},
	"action": {"fr":  "Ouvrir la poupée russe"},
	"next": {"fr":  "Je l'ouvre et elle tombe de ma main et se met à grandir jusqu'à prendre la taille de la première poupée. Mais cette fois-ci, elle est déjà ouverte. Alors je m'engouffre dedans"},
},
{
	"description": {"fr":  "je me promène dans un champ d'herbe tondue, un espace lissé parfaitement où la seule aspérité qui vient perturber ce paysage est une petite pierre visible à des kilomètres. Elle est solidement ancrée dans le sol. Il n'y a rien d'autre."},
	"action": {"fr":  "Trébucher sur la pierre"},
	"next": {"fr":  "Je n'ai rien de mieux à faire, sinon je suis condamné à cet espace infini terrifiant. Je marche, lève les yeux au ciel et trébuche sur la pierre. Sous cette impulsion, le monde bascule, ou c'est moi, je ne sais pas. Je retrouve enfin l'équilibre"},
},
{
	"description": {"fr":  "je découvre un tombeau posé sur une structure avec des marches pour y accéder. Il y a des inscriptions égyptiennes ainsi que le dessin d'une personne... On dirait moi ! Quand je m'approche le sarcophage s'ouvre."},
	"action": {"fr":  "S'allonger dans le sarcophage"},
	"next": {"fr":  "Je m'allonge et la forme de l'objet m'oblige à croiser les bras. Le couvercle se referme automatiquement. Je suis plongé dans le noir mais je sens que j'ai à nouveau une liberté de mouvement. Je me relève"},
},
{
	"description": {"fr":  "je me sens lourd, il fait une chaleur écrasante, je suis dans un désert chaud. Au loin, une pyramide. Seule au milieu des dunes de sable. Je lutte contre le poids du soleil et de l'atmosphère pour avancer tant bien que mal et parvenir jusqu'à l'entrée."},
	"action": {"fr":  "Entrer dans la pyramide"},
	"next": {"fr":  "Je pénètre à l'intérieur et c'est comme si tous mes sens venaient d'être remis à zéro. Il fait une température parfaite, et le silence est agréable. J'avance dans le couloir"},
},
{
	"description": {"fr":  "je vois apparaître à travers la brume un château fort. Je dévale la colline sur laquelle je me trouve pour approcher l'entrée. La forteresse est entourée de douves avec un pont-levis redressé. J'ai un cor qui se matérialise dans mes mains."},
	"action": {"fr":  "Sonner le cor"},
	"next": {"fr":  "Un son fort et ennivrant résonne dans tout le paysage. Soudain, des êtres s'agitent dans le château et le pont-levis se baisse. Je le traverse et entre"},
	"object": {
		"name" : {"fr": "Un cor de guerre"},
		"description": {"fr": "Un cor en ivoire, orné d'inscriptions runiques indéchiffrables et de dessins qui ne cessent de changer à chaque nouveau regard."}
	}
},
{
	"description": {"fr":  "je flotte au-dessus du monde. Je ne sais pas vraiment si je flotte à vrai dire, c'est plutôt comme si je marchais sur un pont transparent et j'ai l'impression que je vais en atteindre le bout. Là, ça y est, je sens le rebord sur la pointe de mes pieds."},
	"action": {"fr":  "Sauter dans un nuage"},
	"next": {"fr":  "Je saute dans un nuage qui passait juste en dessous, au début c'est tout doux mais je m'enfonce et me retrouve dans un univers de brouillard. Je nage dedans autant que possible"},
},
{
	"description": {"fr":  "je sens un vent fort qui tournoie et une chaleur qui vient d'en bas. Ah, c'est un volcan et je suis au sommet. Il brûle de milles feux et son intensité irradie mes yeux que c'en est difficile de les garder ouvert. La fumée est aussi un problème."},
	"action": {"fr":  "Sauter dans le volcan"},
	"next": {"fr":  "Je me bouche le nez et ferme les yeux, comme si je plongeais dans une piscine, et je saute. Et c'est comme dans une piscine, fluide et chaud. Puis la chaleur disparaît peu à peu. Je me résouds à rouvrir les yeux"},
},
{
	"description": {"fr":  "je suis emporté par le courant d'une rivière. Tout va très vite, je vois les paysages défilés sur la rive et je me débats dans l'eau pour garder ma tête en dehors. Il y a un tronc d'arbre devant, puis une cascade."},
	"action": {"fr":  "S'accrocher au tronc d'arbre"},
	"next": {"fr":  "J'essaie de me diriger vers le tronc, je les sur le bout des doigts mais ça glisse et je lâche. Je tombe du haut de la cascade, puis dans le vide. Et je me relève"},
},
{
	"description": {"fr":  "je trouve un trébuchet en plein milieu de nulle part. Il est en bois évidemment, avec tout un mécanisme complexe que je ne suis pas capable d'expliquer. Je m'installe dans le panier où devrait se placer le boulet, c'est confortable. J'ai même accès au levier pour actionner le trébuchet."},
	"action": {"fr":  "Actionner le trébuchet"},
	"next": {"fr":  "J'entends un clic, puis un enchevêtrement de cordes qui se détachent et... Je suis propulsé dans les airs à une vitesse folle. Je sens le vent m'agresser au début puis ça se calme et j'arrive même finalement à me mouvoir comme je le souhaite. Il n'y a plus de mouvement. Je me mets sur mes deux jambes et j'avance"},
},
{
	"description": {"fr":  "une cascade gronde et se déverse en face de moi. L'eau s'éparpille un peu partout autour, sans vraiment me gêner. Je me dis qu'il doit y avoir quelque chose de l'autre côté de ce mur d'eau."},
	"action": {"fr":  "Traverser la cascade"},
	"next": {"fr":  "Je passe sous les tonnes d'eau dont la puissance ne m'affecte presque pas. De l'autre côté, il y a, comme je pouvais m'y attendre, une grotte aux parois humides. J'avance à travers la brume"},
},
{
	"description": {"fr":  "je découvre un écran numérique qui fait à peu près ma taille. Il y a des images pixellisées qui s'affichent, dont beaucoup de glitchs de couleurs vives ponctués de textes dans un alphabet qui m'est inconnu."},
	"action": {"fr":  "Entrer dans l'écran"},
	"next": {"fr":  "Je passe d'abord mon bras et ce dernier fait corps avec les images, puis ma jambe qui se numérise également. Je suis entré tout entier et j'ai l'impression que mon corps a changé de forme mais à ma vue il est pareil. Je continue mon chemin"},
},
{
	"description": {"fr":  "j'arrive dans un village perdu au milieu d'une forêt et qui semble abandonné. Les bâtisses me rappellent les images des contes de mon enfance. Au milieu du village, un puits. Je regarde le fond et j'y distingue des reflets, mais certainement pas ceux du ciel ou de moi."},
	"action": {"fr":  "Sauter dans le puits"},
	"next": {"fr":  "Je tombe dans un liquide visqueux et quelques instants après j'en ressors de l'autre côté, comme dans un passage. Je n'ai plus aucune trâce de cette substance sur moi. J'atterris sans me faire mal et reprends ma route"},
},
{
	"description": {"fr":  "je regarde mes mains et elles sont pixellisées. De même pour mes pieds. Et face à moi, tout n'est que pixel désormais. Il y a bien des formes qui ressemblent à des paysages ou des objets, mais c'est difficile à reconnaître. Il y a des pixels qui flottent aussi dans l'air."},
	"action": {"fr":  "Frapper un pixel"},
	"next": {"fr":  "Je frappe un pixel qui flotte, une onde de choc se répand et je tombe à terre. Quand je me relève, il n'y a plus de pixels. Je cligne des yeux pour être sûr"},
},
{
	"description": {"fr":  "je flotte et je me sens attiré par une force extérieure vers... une planète. Il y en a même plusieurs. Et un soleil ! Je tourne en orbite autour d'une de ces planètes, elle-même autour du soleil."},
	"action": {"fr":  "Changer d'orbite"},
	"next": {"fr":  "Je m'élance et essaie de nager vaguement vers une autre planète mais elles s'éloignent toutes de plus en plus vite, le soleil aussi, jusqu'à ce qu'elles disparaissent toutes et que je ne flotte plus du tout. Déçu(e), je me relève"},
},
];

/*

{
	"description": {"fr":  ""},
	"action": {"fr":  ""},
	"next": {"fr":  ""},
},

espace en 4D, traverser un mur
escaliers à la escher, monter et descendre
sauter dans un trou
se rétrécir et entrer dans une bouteille
sauter dans une cheminée
escalader une paroi humide
traverser un gouffre sur un pont de corde
traverser une rivière sur un pont en bois
tomber en traversant
avancer dans une grotte remplie de stalactites
s'enfoncer dans des sables mouvants
se faire aspirer par la terre et la mousse
plonger dans un marais
rentrer dans la gueule d'un dragon
entrer dans le coeur d'une montagne avec des pierres brillantes sur toutes les parois
arriver sur le sommet de l'himalaya
pousser un rocher au sommet d'une montagne
plonger dans un tonneau des danaides
voir des ombres et les suivre pour sortir de la grotte
nager sous l'eau et toucher une anémone
fuir un monstre à 10 pattes
glisser dans un toboggan
plonger dans l'eau à la plage
saut d'un immeuble
briser une baie vitrée
cockpit d'une fusée
blizzard
tempête de sable
maelstrom
oeil de cyclone
vortex
porte runique dans une montagne
couloir de lierre
avalanche
courir dans un champ de mais
sauter dans un tuyau
ramper dans des canalisations
traverser un champ de force
résoudre un puzzle
tyrolienne
main dans le grille pain
serrer la main d'un robot
aiguille et pacte de sang
entrer dans un cheval en bois
suivre un lapin
mettre la main dans un chapeau de magicien
appuyer sur une brique dans un mur
tirer un livre dans une bibliothèque
ouvrir un coffre, une mélodie (zelda)
énorme clé pour ouvrir une porte gigantesque
mettre un chapeau et se faire manger
toucher le doigt d'une statue avec le doigt
regarder un tableau dans les yeux
détruire un bonhomme de neige, découvrir un passage en dessous
bain chaud, aspiré par le trou
se liquéfier
traverser un mur par un pouvoir de transparence
voler d'un point à l'autre séparé par du vide
entrer dans une capsule de téléportation
arène romaine, terrasser le lion
orage, tendre le bras pour attirer la foudre
marcher sur des braises
s'allonger sur un tapis de fakir
frapper un sac de frappe
se transformer en fumée
entrer dans un tipi
entrer dans un igloo
plonger dans l'eau glacée creusée à même la banquise
tapis roulant, passer aux rayons X
suivre les petites pierres dans la forêt
enfiler les bottes
embrasser la grenouille
manger des sucreries de la maison
planter l'oeil unique qui cligne
enfiler l'anneau
casser la baguette
levier qui soulève le monde

*/

var theGrandfather = [
{
	"description": {"fr":  "un tunnel sombre s'ouvre devant moi. Il y a des rails et de grosses pierres grises au sol. Ça vibrait jusqu'à un instant... Plus loin, les lumières d'un train arrêté sur la voie m'éblouissent. Je sens une présence à côté de moi. J'entends un gémissement."},
	"action": {"fr":  "Poursuivre dans le tunnel"},
	"next": {"fr":  "J'ai essayé de suivre les sons qui résonnent sur les parois, en vain. Au bout du tunnel, j'avance"},
	"object": {
		"name" : {"fr": "Un écho"},
		"description": {"fr": "C'est ce qu'il reste des sons dans le tunnel. Parfois j'ai l'impression que c'est un cri, parfois une plainte. Il y a un choc. Et le bruit du train aussi. Que s'est-il passé ?"}
	}
},
{
	"description": {"fr":  "j'arrive dans ce qui ressemble à une cabine de contrôle. Plein de boutons et de manivelles le tout surmonté d'une immense vitre qui donne sur... rien. Du noir complet éclairé par de puissants phares. J'ai la sensation que ça avance malgré tout. Une silhouette grise se profile, de plus en plus proche et nette."},
	"action": {"fr":  "Appuyer sur le bouton rouge Arrêt d'Urgence"},
	"next": {"fr":  "J'ai appuyé et il ne s'est rien passé, j'ai donc rappuyé mais je crois que c'était trop tard. Il y a eu un impact, j'ai été secoué(e) puis projeté(e) en avant. Je me relève difficilement"},
	"object": {
		"name" : {"fr": "Le bouton rouge Arrêt d'Urgence"},
		"description": {"fr": "Peut-être que j'aurais dû appuyer plus tôt, peut-être qu'il était défectueux. J'aimerais croire que j'y suis pour rien, c'est même peut-être le cas, mais je ne peux m'empêcher d'avoir un regret lié à ce bouton. Quand je l'observe, j'ai de l'amertume en bouche."}
	}
},
{
	"description": {"fr":  "je me retrouve sur un chemin de fer abandonné à l'air libre. La voie est bordée de collines vertes, il y a une petite brise agréable qui s'engouffre dans le tunnel derrière moi. Machinalement, j'ai sorti mon téléphone et je compose un numéro à trois chiffres avec hâte. Je ne sais même pas pourquoi je suis essoufflé(e)."},
	"action": {"fr":  "Appeler le numéro à trois chiffres"},
	"next": {"fr":  "J'ai perdu le fil. Quelqu'un a décroché, soudainement j'étais serein(e), j'ai vu un flash et j'ai tout oublié"},
	"object": {
		"name" : {"fr": "Le numéro à trois chiffres"},
		"description": {"fr": "Impossible de dire quels sont ces chiffres. Toujours est-il qu'ils étaient ancrés en moi comme un réflexe. Je crois les avoir vus ailleurs, mais je suis incapable de remettre le doigt dessus. C'est si vague..."}
	}
},
{
	"description": {"fr":  "j'entre dans un bureau, un peu à contre-coeur. Quelqu'un d'important semble me parler et me dit que c'est la dernière fois en me tendant un papier. Ces mots me rassurent et je prends la feuille et un stylo."},
	"action": {"fr":  "Signer le contrat"},
	"next": {"fr":  "L'encre noire vire progressivement au rouge. J'ai l'impression d'avoir fait une erreur mais c'est l'incertitude qui me pèse le plus. Je ferme les yeux"},
	"object": {
		"name" : {"fr": "Le contrat"},
		"description": {"fr": "L'encre s'est étalée, il n'y a plus rien de lisible sur cette feuille. On devine ça et là des formes, ici une signature, à cet endroit un numéro à 3 chiffres. Une ombre malsaine transparait lorsque je m'y concentre."}
	}
},
{
	"description": {"fr":  "j'entends une voix me dire que ça va aller, que je serai protégé(e), que je n'ai rien à craindre. Je ressens un mélange de remords et de tranquilité m'envahir. Une personne en costume m'offre un soutien financier et me tend la main."},
	"action": {"fr":  "Serrer la main tendue"},
	"next": {"fr":  "Soudainement, j'oublie tout, ou presque, et je sens mes sens s'élever au-dessus de moi par leur légèreté. La pesanteur revient, mes esprits aussi"},
	"object": {
		"name" : {"fr": "Un doute"},
		"description": {"fr": "Pourquoi ? Qu'est-ce que cette personne faisait là ? Pourquoi moi ? Pourquoi suis-je soutenu et aidé(e) ? Pourquoi cette manigance ? Et quelle manigance ? Qui est innocent, qui est coupable et quel est le sens de tout ça ? Avais-je le choix ?"}
	}
},
{
	"description": {"fr":  "un enfant s'approche de moi, ça m'emplit d'une joie immense. Nous sommes dans sa chambre, des jouets sont éparpillés au sol. Je nous vois danser, chanter, jouer, puis s'écrouler d'une fatigue apaisante."},
	"action": {"fr":  "Éteindre la lumière"},
	"next": {"fr":  "J'ai la sensation de m'endormir pendant des décennies, le monde autour de moi bouge à une vitesse folle. Je me réveille"},
	"object": {
		"name" : {"fr": "Un scalpel en plastique"},
		"description": {"fr": "C'est un des jouets que l'enfant avait dans sa chambre. Il a l'air de revêtir une importance particulière, comme s'il dégageait une aura, il m'inspire un sentiment de fierté. Je ne sais pas quel sens lui donner."}
	}
},
{
	"description": {"fr":  "un poste d'information est allumé face à moi. Je n'entends que des bribes des paroles : préméditation, révolutionnaire, accident. Plusieurs noms font écho à des choses que je crois avoir vu."},
	"action": {"fr":  "Éteindre le poste"},
	"next": {"fr":  "Le poste s'éteint dans un flash qui m'aveugle. Un mal de tête se déclenche à ce moment. Je me concentre sur la douleur"},
	"object": {
		"name" : {"fr": "Un nom"},
		"description": {"fr": "Ils l'ont énoncé dans les informations. Est-ce le nom d'une personne ? Il y avait \"révolutionnaire\" dans la même phrase... Ou bien le nom d'une entreprise ? Ou de la victime de l'accident ? Peu importe la réponse, le nom n'est pas associé à quelque chose d'agréable."}
	}
},
{
	"description": {"fr":  "un long couloir s'étend devant moi avec d'innombrables portes des deux côtés, certaines ouvertes d'autres non. Ce sont des bureaux qui me paraissent familiers. J'entends une rumeur, un murmure, qui grandit jusqu'à m'assaillir."},
	"action": {"fr":  "Courir pour échapper aux sons"},
	"next": {"fr":  "Je cours comme pour échapper à mes pires angoisses. J'arrive enfin au bout du couloir, un silence terrible m'entoure"},
	"object": {
		"name" : {"fr": "Une rumeur"},
		"description": {"fr": "Je l'ai attrapée dans le couloir assourdissant. Plus je l'observe et plus elle s'infiltre dans mes pensées. Ou peut-être est-ce ma pensée qui veut l'accueillir ? Elle a le goût doux-amer du complot et de sa demi-certitude."}
	}
}
];

var theGuilty = [
{
	"description": {"fr":  "je suis dans cette pièce qui ressemble à une chambre d'hôpital sauf que tout y est familier et inquiétant. Le lit a des sangles et de grandes machines avec des câbles autour, et il n'y a aucune fenêtre ni aucune porte à l'horizon. J'ai un mal de crâne terrible."},
	"action": {"fr":  "Crier à l'aide"},
	"next": {"fr":  "Je m'arrache les cordes vocales à crier jusqu'à ne plus pouvoir exprimer autre chose qu'un silence. Dans ce silence, ce cauchemar disparaît"},
	"object": {
		"name" : {"fr": "Un cri"},
		"description": {"fr": "C'est le mien. Je ne sais pas s'il est récent ou ancien mais il est profond, c'est certain. Il résonne sur les parois invisibles de cette chambre où j'ai été enfermé, et où je le suis encore peut-être ?"}
	}
},
{
	"description": {"fr":  "je reçois une alerte sur mon appareil. C'est pour le rendez-vous. Je recouvre ces émotions oubliées. C'est très important et très risqué, et un mélange d'excitation et d'inquiétude me submerge."},
	"action": {"fr":  "Organiser la rencontre"},
	"next": {"fr":  "Ça semble simple comme ça mais c'était extrêmement difficile. Je m'attendais à voir la suite mais je perds le fil"},
	"object": {
		"name" : {"fr": "Le lieu et l'heure"},
		"description": {"fr": "C'était ce que nous avions conclu. Un endroit abandonné, apparemment sous-terrain, et pas de retard. Pas de retard... Cette précision s'inscrit en gras dans mon esprit."}
	}
},
{
	"description": {"fr":  "je cours, je regarde ma montre, je cours. Dans des rues, des passages. Je me faufile. Je dévale des escaliers, traverse des couloirs. Je cours encore mais c'est vain. Je suis épuisé."},
	"action": {"fr":  "S'arrêter"},
	"next": {"fr":  "Je m'arrête, je reprends mon souffle. Tout tourne autour de moi, ou bien c'est ma tête qui tourne. J'ai un vertige, celui de l'échec probablement"},
	"object": {
		"name" : {"fr": "Un obstacle"},
		"description": {"fr": "Présenté comme ça, c'est plutôt un concept, et pourtant je n'arrive pas à le cerner mieux que ça. Je l'ai reçu de plein fouet, il m'a mis en retard et ne m'a jamais abandonné depuis, aussi flou soit-il."}
	}
},
{
	"description": {"fr":  "je débarque en bas d'un escalier, légèrement essouflé, dans un couloir sombre avec un virage au bout. J'entends des murmures venant de ce coin, leur présence m'est étrangère alors que j'allais dans cette direction avec certitude."},
	"action": {"fr":  "S'approcher quand même"},
	"next": {"fr":  "Je m'approche, et je les vois nombreux s'affairer autour d'un corps au sol. Soudain, je prends un coup sur la nuque et je sens mes mains se lier dans mon dos. Je m'évanouis"},
	"object": {
		"name" : {"fr": "La sensation du visage collé au sol"},
		"description": {"fr": "J'étais à genoux et j'ai retenu ça. C'était bien sûr très désagréable, mais pas le pire. Les yeux ouverts, j'ai vu les pierres, les rails, le train, le corps, et les chaussures de ces pourritures qui me tenaient."}
	}
},
{
	"description": {"fr":  "je me retrouve projeté au sol, une pression incompréhensible s'exerce sur mes bras et mes mains derrière mon dos. De douleur, je plisse les yeux et les ferme alors qu'une silhouette se dessine dans un coin de mon regard."},
	"action": {"fr":  "Rouvrir les yeux"},
	"next": {"fr":  "Je lutte de toutes mes forces contre mes réflexes pour rouvrir les yeux et j'aperçois une autre paire briller et me regarder au loin puis disparaître dans l'obscurité. Je peux enfin me libérer"},
	"object": {
		"name" : {"fr": "Une paire d'yeux dans le noir"},
		"description": {"fr": "Elles m'ont semblé innocentes au premier abord et pourtant je ne peux m'empêcher d'y trouver une forme de culpabilité. Peut-être est-ce lié à l'inaction face à ce dont elles étaient témoins ?"}
	}
},
{
	"description": {"fr":  "j'arrive sur un parvis avec de grands escaliers qui mènent à un bâtiment cerné de colonnes. Je le reconnais, c'est le tribunal. Je me sens malgré moi attiré vers lui, je monte les escaliers machinalement, presque en trébuchant."},
	"action": {"fr":  "Entrer dans le bâtiment"},
	"next": {"fr":  "Une lumière aveuglante s'échappe de l'entrée. Juste avant de pénétrer dans le halo, je vois un visage dans le coin gauche de mes yeux. J'oublie et je m'avance"},
	"object": {
		"name" : {"fr": "Un visage"},
		"description": {"fr": "Quelque chose dans ce visage me perturbe. Quand je le regarde, j'ai cette désagréable impression de déjà-vu qui me frappe soudainement. Ça vient principalement des yeux, ils ne me sont pas inconnus."}
	}
},
{
	"description": {"fr":  "je suis enfermé dans une cage de verre. Au delà, la pièce est très grande, haute de plafond, et il y a des rangées de personnes assises dont tous les visages sont flous. Tous sauf un, isolé dans un coin, que je reconnais."},
	"action": {"fr":  "Appeler à l'aide"},
	"next": {"fr":  "Je crie et frappe des poings contre la vitre en direction de ce visage. Soudain, sous mes coups, la vitre se brise"},
	"object": {
		"name" : {"fr": "Un enfant"},
		"description": {"fr": "Je l'ai reconnu dans une foule de visages flous. Il avait des traits proches d'une autre personne enfouie dans ma mémoire. Quelqu'un que j'ai échoué. Ce pourquoi je suis là. Pourquoi suis-je là ?"}
	}
},
{
	"description": {"fr":  "je pénètre dans une salle cubique. Les murs sont transparents mais j'arrive à les distinguer par un reflet bleu, comme une vitre numérique, et l'ensemble flotte au-dessus de rien. Du noir. Tout y est vide, c'est une torture."},
	"action": {"fr":  "Attendre"},
	"next": {"fr":  "Je ne sais même pas quoi faire d'autre, je n'ai aucune notion de rien, mes mouvements même semblent ne pas me faire bouger. J'attends ce qui me semble être un instant et une éternité. Puis tout bouge autour"},
	"object": {
		"name" : {"fr": "Une fiction"},
		"description": {"fr": "Cette idée se matérialise dans ma tête, peut-être est-ce le sens de ce lieu vide auquel je ne cesse de retourner. Mais est-ce la réalité ? Ou mon esprit qui me joue des tours ? Suis-je même en réelle possession de mes moyens ?"}
	}
},
];

var theDoctor = [
{
	"description": {"fr":  "je vois un ensemble de personnes réunies autour d'un feu improvisé. Toutes assises autour, les têtes penchées, les mains tendues, les corps meurtris. Je m'approche et je m'assieds à une place libre dans le cercle."},
	"action": {"fr":  "Tendre les mains vers le feu"},
	"next": {"fr":  "Je sens la chaleur réchauffer le bout de mes doigts gelés. Je ne savais même pas que mes doigts étaient froids, je n'avais même pas conscience de mes doigts, à présent je les sens à nouveau. Mon regard se perd dans la flamme"},
	"object": {
		"name" : {"fr": "Un squat"},
		"description": {"fr": "C'est la meilleure manière de décrire cet endroit. C'était sous-terre, dans les lueurs des flammes je pouvais remarquer des panneaux de direction, des escaliers, des comptoirs, mais tout décrépit. Peut-être une station de gare abandonnée."}
	}
},
{
	"description": {"fr":  "il y a une personne debout qui n'a rien à faire à cet endroit. Comment décrire le lieu ? Très peu de lumière, il y a des rails au sol... Je me sens dans mon élément mais cette personne fait tâche ici."},
	"action": {"fr":  "Se cacher"},
	"next": {"fr":  "Je suis resté en retrait dans l'obscurité suite à mon réflexe de survie, pour surveiller et attendre, mais il a suffit que je cligne des yeux et la personne a disparu. Je sors de ma cachette"},
	"object": {
		"name" : {"fr": "Une attente"},
		"description": {"fr": "Est-ce la mienne quand j'ai dû me cacher face à cette situation inédite ? Ou bien était-ce celle de cette personne qui était là où elle n'avait aucune raison d'être. Elle a disparu mais il me reste cette attente. Une attente de quoi ?"}
	}
},
{
	"description": {"fr":  "je reviens encore une fois dans ce sous-terrain, ça ressemble à un tunnel. Le sol vibre et je suis blotti(e) dans un coin. Il y a une silhouette au loin et une lumière s'approche, grandissante, menaçante."},
	"action": {"fr":  "Observer"},
	"next": {"fr":  "Un train déboule à toute vitesse, freine, manifestement trop tard, et j'entends un cri. Puis, tout redevient sombre. Je revois enfin un peu de lumière"},
	"object": {
		"name" : {"fr": "Le visage du conducteur"},
		"description": {"fr": "Impossible de m'en défaire. Pourtant tout se passe très vite dans ces souvenirs. Je rembobine, j'ai beau revoir la scène, j'ai beau tenter d'y lire quelque chose d'autre, je n'ai aucun place pour le doute. Ce conducteur, c'est mon père."}
	}
},
{
	"description": {"fr":  "je me faufile discrètement entre un mur et un wagon de train. La cabine de conducteur est vide. Au sol, non loin, il y a une grande zone de flou. C'est très perturbant car tout est net malgré l'obscurité, tout sauf cette partie. A côté, je remarque un truc au sol."},
	"action": {"fr":  "Ramasser ce qu'il y a au sol"},
	"next": {"fr":  "Je me penche et je saisis de mes mains ces choses. Cette fois, c'est la texture qui est floue. Mais dès lors que je les touche, je me sens en danger. Je m'enfuit"},
	"object": {
		"name" : {"fr": "Les documents"},
		"description": {"fr": "La forme physique de ces données est indescriptible, c'est comme s'il s'agissait de connaissances pures qui s'intellectualisent au toucher. Il y a un logo à 3 chiffres et des thèmes qui m'imprègnent : la pensée, une technologie, l'imagination et le contrôle. Aussi, le secret."}
	}
},
{
	"description": {"fr":  "j'entre dans une salle à haut plafond, c'est comme si je voyais pour la première fois une pièce aussi grande et aussi éclairée. J'en ai mal aux yeux. Il y a des rangées de bancs avec des personnes assises, à ma gauche, un enfant."},
	"action": {"fr":  "S'asseoir à côté de l'enfant"},
	"next": {"fr":  "Je m'assois mais le visage de l'enfant m'imprègne profondément, une tristesse immense m'envahit. Je me lève et m'enfuis"},
	"object": {
		"name" : {"fr": "Les yeux de l'enfant"},
		"description": {"fr": "Je ne sais pas de quel couleur ils sont. C'est une couleur floue. Un flou que j'ai déjà vu ailleurs. C'est une couleur triste, une couleur qui a vu beaucoup de larmes couler. La couleur de la solitude. Mais pas que. Il y a aussi une goutte de révolte."}
	}
},
{
	"description": {"fr":  "j'arrive dans un atelier. Il y a une chaise, une table, des outils et des documents. Je me sens à l'aise, c'est un environnement apaisant où je pourrais passer des heures à travailler."},
	"action": {"fr":  "S'asseoir et travailler"},
	"next": {"fr":  "Beaucoup de temps est passé, mes fesses sont engourdies mais j'ai le sentiment d'avoir progressé dans ma compréhension de nombreuses choses. Je me relève"},
	"object": {
		"name" : {"fr": "L'étude"},
		"description": {"fr": "C'est un travail long mais un travail nécessaire. Le fruit de ce travail sera révolutionnaire. Un sens du devoir anime cette recherche. Un devoir sous forme de dette envers quelqu'un. Mais qui ?"}
	}
},
{
	"description": {"fr":  "je me retrouve dans une chambre à la lumière tamisée. Ça sent le fer chaud. Il y a des machines et des morceaux d'électronique éparpillés. Au milieu de la pièce, posé au sol, je trouve un casque cabossé à l'allure artisanale qui semble avoir été forgé ici-même."},
	"action": {"fr":  "Enfiler le casque"},
	"next": {"fr":  "J'active le casque avec un bouton sur le côté mais il y a des câbles autour qui nécessitent d'être connectés à quelque chose. Je le retire et le repose"},
	"object": {
		"name" : {"fr": "Le casque"},
		"description": {"fr": "Plus qu'un casque, c'est une machine. Ça ressemble à mon outil de travail qui permet d'explorer les pensées de mon patient mais ça a l'air d'aller plus loin. Il y a des éléments qui me sont inconnus."}
	}
},
{
	"description": {"fr":  "je m'introduis dans une chambre d'adolescent. Il y a une odeur de désespoir et de rage. J'avance très prudemment, comme si je n'avais pas le droit d'être là, et je pose quelque chose sur la table de chevet. J'entends un bruit, quelqu'un s'approche."},
	"action": {"fr":  "S'enfuir par la fenêtre"},
	"next": {"fr":  "Je ne réfléchis même pas un instant et m'enfuis par la première sortie possible. J'ai le sentiment d'un devoir accompli, mais lequel ? Je continue ma route"},
	"object": {
		"name" : {"fr": "La table de chevet"},
		"description": {"fr": "C'est pas tant le meuble que ce que j'y ai déposé qui m'intéresse. Un objet rond, comme une pastèque, avec des tentacules. Qu'est-ce et pourquoi avoir fait ça ? En tout cas, après l'avoir déposé, une énergie nouvelle et puissante s'est déployée dans cette chambre auparavant triste."}
	}
},
]