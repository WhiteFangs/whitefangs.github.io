var stories = [
{
	"description":{"fr": "une porte rouge apparaît en face de moi. Elle est en bois avec une peinture qui s'écaille par endroits et elle dégage une aura similaire à l'odeur des pins dans une forêt. C'est plutôt agréable, quoiqu'un peu envahissant."},
	"action": {"fr": "Ouvrir la porte"},
	"next": {"fr": "La poignée, usée et poussiéreuse, s'actionne néanmoins. La porte grince puis se referme derrière moi dans un son sourd, comme lointain. Derrière la porte"},
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
		"description": {"fr": "En traversant l'arc-en-ciel, ce petit morceau de lumière à la couleur sans cesse changeante s'est accroché à ma chaussure. Je l'ai ramassé mais je sais pas trop quoi en faire..."}
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
	"next": {"fr":  "Je l'ouvre. Elle tombe de ma main et gise au sol, béante. Puis elle se met à grandir, grandir jusqu'à atteindre les dimensions de la première poupée. Je m'engouffre dedans"},
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
{
	"description": {"fr":  "je débarque dans un univers très étrange. Il y a des couleurs vagues qui se mélangent partout autour de moi, comme si j'étais entouré(e) d'une flaque de pétrole ou d'huile. Je plonge mon bras dedans, il ressort derrière moi. J'arrive à me gratter le dos."},
	"action": {"fr":  "Traverser la paroi"},
	"next": {"fr":  "Je traverse cette étrange texture. Je reviens naturellement là où j'étais. Bon. Je saute. Ma tête passe sous mes pieds et je retombe sur mes pieds mais j'ai senti quelque chose bouger, comme une bulle. Je saute plus fort. La bulle éclate"},
},
{
	"description": {"fr":  "j'arrive dans une pièce remplie d'escaliers. Ils vont tous dans des sens différents, certains à l'envers, d'autres sont en diagonale ou en oblique à travers la pièce. Enfin, il y en a un qui tourne en rond. Enfin en carré plutôt."},
	"action": {"fr":  "Prendre l'escalier qui tourne en carré"},
	"next": {"fr":  "Je monte l'escalier en carré. Je continue à monter tout en repassant au même endroit à chaque fois. C'est perturbant. Il y a également un son qui m'accompagne et m'enivre dans la même idée. Toujours ascendant. Tant pis, je saute dans le trou au milieu du carré"},
	"object": {
		"name" : {"fr": "Un étrange animal"},
		"description": {"fr": "Je l'ai entrevue dans la pièce aux escaliers. Il a un corps longiforme avec 6 pattes et un petit bec crochu. Il a l'air d'avoir une carapace et semble pouvoir se rouler en boule pour dévaler des pentes."}
	}
},
{
	"description": {"fr":  "je marche dans une forêt assez dense. Après quelques minutes de marche, j'arrive dans une clairière. Elle fait plus ou moins la taille d'un stade et est en réalité constituée uniquement d'un gigantesque trou béant. D'un noir profond."},
	"action": {"fr":  "Sauter dans le trou"},
	"next": {"fr":  "Je vois défiler sous mes yeux les différentes couches de la surface terrestre. Des racines, puis de la terre, puis rien. Je tombe.                                                                           Enfin je crois. Je ne sens plus de mouvement, peut-être que je peux avancer en fait. J'essaie. Je peux. J'avance"},
},
{
	"description": {"fr":  "je découvre par terre une bouteille. Elle est en verre transparent et légèrement bleuté. Il y a un liquide à l'intérieur. Ça ressemble à de l'eau mais c'est très mouvementé, il y a des vagues alors que la bouteille est immobile."},
	"action": {"fr":  "Entrer dans la bouteille"},
	"next": {"fr":  "Par une force de l'esprit, je rétrécis et pénètre dans la bouteille. Je tombe du goulot et plonge dans l'eau animée. Je coule jusqu'à atteindre le fond. L'eau redescend soudainement et je ne vois plus de parois. Je continue mon chemin"},
},
{
	"description": {"fr":  "je suis en fait sur un toit. Un brume m'empêchait de voir clairement où je mettais les pieds. Il y a deux rebords pentus, j'avance à tâtons. Je fais attention car il y a de la neige aussi. Et une cheminée sans fumée un peu plus loin."},
	"action": {"fr":  "Sauter dans la cheminée"},
	"next": {"fr":  "Je saute à pieds joints dans la cheminée. Les parois m'érafflent et la suie se colle à ma peau. Ça pue. Je tombe finalement sur mes fesses. Je me relève avec quelques égratignures. Après m'être dépoussiéré, je reprends ma route"},
},
{
	"description": {"fr":  "je me retrouve face à un pont de corde qui surplombe un gouffre sans fond. Un brouillard me bloque la vue d'en face. Je ne sais pas s'il vaut mieux traverser ou sauter."},
	"action": {"fr":  "Traverser le pont de corde"},
	"next": {"fr":  "Je m'agrippe avec force aux deux côtés du pont. J'avance à petits pas. J'essaie de ne pas regarder en bas mais après quelques mètres tout est brouillard. Je ne vois même plus le bout de mes bras. Ni mes jambes. En fait, je ne suis plus sur le pont. Le brouillard se dissipe"},
},
{
	"description": {"fr":  "j'arrive devant une rivière avec un fort courant. Il y a un radeau en rondins sur la rive. Ces quelques troncs attachés ne m'inspirent pas confiance face à un tel débit."},
	"action": {"fr":  "Monter sur le radeau"},
	"next": {"fr":  "A peine monté, j'ai de grandes difficultés à tenir à l'équilibre sur cette embarcation. Dans un mouvement brusque, je perds ma seule rame. Le radeau se fait emporter par les flots et moi avec. Je déploie toute mes forces dans mes bras et jambes pour nager. Je regagne la rive"},
},
{
	"description": {"fr":  "je fais face à un montagne. Enfin peut-être plutôt juste une paroi rocheuse dont je ne vois pas le bout. Elle est humide mais j'ai le sentiment que je peux m'agripper avec un peu d'adresse"},
	"action": {"fr":  "Escalader la paroi"},
	"next": {"fr":  "Je manque de glisser à plusieurs reprises et des gouttes me claquent au visage mais je progresse. Au bout de ce qui semble être plusieurs heures de crispation de mes muscles, je touche enfin un rebord stable. Je me remets sur mes deux pieds"},
},
{
	"description": {"fr":  "j'avance dans le noir. Je finis par voir quelques reflets çà et là. Je suis dans une grotte. Il y a des stalactites et des stalagmites partout. Les parois sont humides et il fait froid."},
	"action": {"fr":  "Casser une stalactite"},
	"next": {"fr":  "Je force un peu pour casser une stalactite. Elle se décroche mais tombe de mes mains et se plante entre mes pieds. Puis elle fond et son eau se répand et submerge très rapidement l'endroit. Je nage tant bien que mal jusqu'à trouver une poche d'air et de terre dans la grotte. Je sors de l'eau"},
},
{
	"description": {"fr":  "je m'enfonce. Le sol est maléable et mes pieds s'enfoncent dans une texture étrange proche du sable. Plus je bouge et plus la poigne de cette matière se referme sur mes membres."},
	"action": {"fr":  "Rester immobile"},
	"next": {"fr":  "Je ne bouge pas et je m'enfonce malgré tout. Plus lentement certes mais quand même. Il n'y a rien à faire. J'attends. Au bout de quelques minutes, j'ai la tête à moitié dedans. Je prends une dernière respiration et plonge. Je tombe de l'autre côté"},
},
{
	"description": {"fr":  "je met un pied devant l'autre mais c'est difficile. Des racines s'accrochent à mes chaussures. Puis à mes mollets. Une mousse grimpe le long de ma jambe à une vitesse hallucinante."},
	"action": {"fr":  "Arracher la mousse et les racines"},
	"next": {"fr":  "Je fais ce que je peux pour les retirer. En les touchant elles remontent sur mes mains, puis mes bras. Bientôt mon corps entier est pris dans cet enchevêtrement. Je décrépis et me fais aspirer par le sol. La terre se meut et de cette matière, mon corps se reforme. Je recommence à marcher"},
},
{
	"description": {"fr":  "j'arrive devant une étendue désolée et marécageuse. J'essaie de me frayer un chemin parmi les morceaux de terre encore solides mais les marais alentours dégagent une fumée qui trouble ma vision. Je suis maintenant dans un cul de sac."},
	"action": {"fr":  "Plonger dans le marais"},
	"next": {"fr":  "Je tombe dans le marais, la tête la première. Il y a des vapeurs étranges dans l'eau. Je ne sais même pas si c'est de l'eau. J'ai l'impression de voir des êtres ou des yeux m'observait. Je perds connaissance. Je me réveille"},
},
{
	"description": {"fr":  "j'avance lentement car je sens une présence. Je tourne la tête et je fais face à un dragon. Rien de moins. Il est colossal mais heureusement, il dort. Et il dort la bouche ouverte."},
	"action": {"fr":  "Entrer dans la gueule du dragon"},
	"next": {"fr":  "Je fais très attention à ne pas réveiller le dragon. Je passe entre ses deux énormes canines, j'essaie de ne pas écraser sa langue et je m'enfonce dans sa gorge aux parois sèches. Assez vite, je suis dans le noir complet. Je continue"},
},
{
	"description": {"fr":  "je me retrouve devant une montagne immense avec une porte colossale. Je pose ma main sur la porte, elle s'ouvre et je m'enfonce dans le coeur de la montagne. En avançant, les parois se peuplent de cristaux qui brillent de plus en plus."},
	"action": {"fr":  "Toucher un des cristaux"},
	"next": {"fr":  "Je touche un de ces cristaux aux teintes blanches, dorées et vertes. Ma main prend ses couleurs. Les paillettes se répandent sur moi, sur mes vêtements et ma peau jusqu'au fond de mon être. Je brille de milles feux. Quand la lumière se dissipe, je ne suis plus au même endroit. Je marche"},
},
{
	"description": {"fr":  "je suis arrivé au sommet d'une montagne. A l'horizon, tout n'est que monts, neige et nuages. Il devrait faire terriblement froid et le vent devrait m'agresser mais ce n'est pas le cas."},
	"action": {"fr":  "Sauter dans le vide et s'envoler"},
	"next": {"fr":  "Je n'ai rien de mieux à faire depuis ce sommet donc je saute et j'agite mes bras comme des ailes. Ça fonctionne, je vole. Enfin, je plane plutôt. Je me sens plus libre que jamais. Je traverse un nuage et j'atterris sur un sol. Je me relève"},
},
{
	"description": {"fr":  "je suis face à un rocher d'un mètre au pied d'une colline. La colline ne semble pas très haute et il y a un chemin assez bien marqué partant du rocher jusqu'au sommet."},
	"action": {"fr":  "Pousser le rocher jusqu'au sommet"},
	"next": {"fr":  "Je pousse le rocher le long du chemin en direction du sommet. Après ce qui me semble être quelques heures, j'arrive au bout. Je m'assoie pour me reposer mais le rocher bouge légèrement et dévale la pente jusqu'en bas. Je reprends mon chemin"},
},
{
	"description": {"fr":  "je suis plongé dans l'obscurité. Il y a des ombres qui oscillent devant moi. Enfin, des ombres blanches que j'aperçois par une lumière surnaturelle qu'elles dégagent. Elles s'orientent dans une direction."},
	"action": {"fr":  "Suivre les ombres"},
	"next": {"fr":  "Je suis les ombres lumineuses. J'entends des rires par moments. Certaines me frôlent ou semblent vouloir me toucher. Je n'ai pas peur mais je ne suis pas rassuré(e). Au bout d'un moment, je vois une lumière. Les ombres s'arrêtent avant. Je continue"},
},
{
	"description": {"fr":  "j'arrive sur une plage avec un océan qui s'étend devant moi. Je plonge dans l'eau et nage entre les coraux. Il y a des anémones un peu plus loin. Je m'en approche."},
	"action": {"fr":  "Toucher une anémone"},
	"next": {"fr":  "Je touche une des anémones. La lumière de son tentacule passe dans mon doigt et ma main s'illumine. Puis des tentacules poussent sur ma peau et traversent mes vêtements. Je ne m'inquiète pas, c'est plutôt amusant. Je ressors de l'eau, elles disparaissent. Je continue en tournant le dos à l'océan"},
},
{
	"description": {"fr":  "je vois au loin une bête monstrueuse qui passe. Elle semble avoir une dizaine de pattes de la taille d'immeubles et un visage hybride entre un loup et un kraken. J'ai à peine le temps de l'observer car elle fonce sur moi."},
	"action": {"fr":  "Fuir"},
	"next": {"fr":  "Je cours pour ma vie alors que ce monstre mi-loup mi-kraken me poursuit. Je m'essouffle assez vite et elle non. Cependant, elle me dépasse et poursuit sa route. Elle n'en avait pas après moi. Je reprends mon souffle"},
},
{
	"description": {"fr":  "je sens qu'un orage se profile. Il y a des nuages noirs qui se forment au-dessus de moi et l'air est lourd. Le vent est tombé. Pas un bruit. Je sens de la tension."},
	"action": {"fr":  "Lever les bras au ciel"},
	"next": {"fr":  "Je lève les bras vers le ciel obscur. Un éclair jaillit et la foudre s'agrippe à mes mains. Je sens mon corps s'électrifier sans ressentir une quelconque douleur. Je vibre et me sens plus vivant(e) que jamais. J'explose d'un coup. Je me relève"},
},
{
	"description": {"fr":  "je fais face à un bonhomme de neige. Ce qui est surprenant, c'est qu'il n'y a pas de neige autour et je n'ai pas froid. Ce bonhomme a un air mesquin, il me regarde de travers."},
	"action": {"fr":  "Casser le bonhomme de neige"},
	"next": {"fr":  "J'arme ma jambe et décoche un coup de pied au bonhomme de neige. Sa tête tombe à la renverse. Je fonce sur le reste de son corps et le piétine et l'écrase. Il y a un passage en dessous. Je me faufile dedans"},
},
{
	"description": {"fr":  "je me retrouve dans une pièce close avec une unique fenêtre. Par la fenêtre, un oeil me regarde. Un oeil de la taille de la fenêtre. Il cligne. C'est inquiétant."},
	"action": {"fr":  "Planter quelque chose dans l'oeil"},
	"next": {"fr":  "Je trouve une fourche dans un coin de la pièce. Je l'empoigne et embroche l'oeil gigantesque qui m'observait par la fenêtre. Il se referme dans un clignement de douleur et tombe. Le passage à travers la fenêtre est libre. Je passe"},
},
{
	"description": {"fr":  "j'arrive dans une chambre simplement meublée d'un tableau au mur. C'est un portrait style Renaissance. Je cherche une porte ou une fenêtre mais il n'y a rien, juste ce portrait."},
	"action": {"fr":  "Regarder le portrait dans les yeux"},
	"next": {"fr":  "Je regarde droit dans les yeux la figure sur le portrait. Je ne saurais décrire ce visage, il est androgyne et changeant. D'un seul coup, je me sens transporté. Je regarde autour de moi, je vois l'homme du portrait dans la chambre, à ma place. Et je suis dans le tableau. Je décide de m'éloigner du cadre. Je pars sur un chemin du paysage"},
},
{
	"description": {"fr":  "je débarque au milieu d'une arène de terre battue. Une foule m'acclame depuis des tribunes lointaines. Je me regarde. Je porte un casque et une tunique, j'ai un glaive et un bouclier en main. Un lion s'approche en face de moi."},
	"action": {"fr":  "Attaquer le lion"},
	"next": {"fr":  "Je fonce sur le lion sous la clameur de l'arène, tel le gladiateur que je suis supposé être. L'animal court et saute. Nous nous croisons dans les airs. Aucun de nous ne se touche. Je m'écrase au sol. Quand je rouvre les yeux, plus d'arène ni de lion. Je me relève"},
},
];

/*

{
	"description": {"fr":  ""},
	"action": {"fr":  ""},
	"next": {"fr":  ""},
},

	"object": {
		"name" : {"fr": ""},
		"description": {"fr": ""}
	}

tomber en traversant
plonger dans un tonneau des danaides
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
bain chaud, aspiré par le trou
se liquéfier
traverser un mur par un pouvoir de transparence
voler d'un point à l'autre séparé par du vide
entrer dans une capsule de téléportation
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
	"description": {"fr":  "j'arrive dans ce qui ressemble à une cabine de contrôle. Plein de boutons et de manivelles, le tout surmonté d'une immense vitre qui donne sur... rien. Du noir complet éclairé par de puissants phares. J'ai la sensation que ça avance malgré tout. Une silhouette grise se profile, de plus en plus proche et nette."},
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
		"description": {"fr": "Impossible de dire quels sont ces chiffres. Toujours est-il qu'ils étaient ancrés en moi comme un réflexe. Je crois les avoir vues ailleurs, mais je suis incapable de remettre le doigt dessus. C'est si vague..."}
	}
},
{
	"description": {"fr":  "j'entre dans un bureau, un peu à contre-coeur. Quelqu'un d'important semble me parler et me dit que c'est la dernière fois en me tendant un papier. Ces mots me rassurent et je prends la feuille et un stylo."},
	"action": {"fr":  "Signer le contrat"},
	"next": {"fr":  "L'encre noire vire progressivement au rouge. J'ai l'impression d'avoir fait une erreur mais c'est l'incertitude qui me pèse le plus. Je ferme les yeux"},
	"object": {
		"name" : {"fr": "Le contrat"},
		"description": {"fr": "L'encre s'est étalée, il n'y a plus rien de lisible sur cette feuille. Je devine çà et là des formes, ici une signature, à cet endroit un numéro à 3 chiffres. Une ombre malsaine transparait lorsque je m'y concentre."}
	}
},
{
	"description": {"fr":  "j'entends une voix me dire que ça va aller, que je serai protégé(e), que je n'ai rien à craindre. Je ressens un mélange de remords et de tranquillité m'envahir. Une personne en costume m'offre un soutien financier et me tend la main."},
	"action": {"fr":  "Serrer la main tendue"},
	"next": {"fr":  "Soudainement, j'oublie tout, ou presque, et je sens mes sens s'élever au-dessus de moi par leur légèreté. La pesanteur revient, mes esprits aussi"},
	"object": {
		"name" : {"fr": "Un doute"},
		"description": {"fr": "Pourquoi ? Qu'est-ce que cette personne faisait là ? Pourquoi moi ? Pourquoi suis-je soutenu(e) et aidé(e) ? Pourquoi cette manigance ? Et quelle manigance ? Qui est innocent, qui est coupable et quel est le sens de tout ça ? Avais-je le choix ?"}
	}
},
{
	"description": {"fr":  "un enfant s'approche de moi, ça m'emplit d'une joie immense. Nous sommes dans sa chambre, des jouets sont éparpillés au sol. Je nous vois danser, chanter, jouer, puis s'écrouler d'une fatigue apaisante."},
	"action": {"fr":  "Éteindre la lumière"},
	"next": {"fr":  "J'ai la sensation de m'endormir pendant des décennies, le monde autour de moi bouge à une vitesse folle. Je me réveille"},
	"object": {
		"name" : {"fr": "Un scalpel en plastique"},
		"description": {"fr": "C'est un des jouets que l'enfant avait dans sa chambre. Il a l'air de revêtir une importance particulière, comme s'il dégageait une aura. En fait, il m'inspire un sentiment de fierté. Je ne sais pas quel sens lui donner."}
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
		"description": {"fr": "C'était ce que nous avions conclu. Un endroit abandonné, apparemment souterrain, et pas de retard. Pas de retard... Cette précision s'inscrit en gras dans mon esprit."}
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
	"description": {"fr":  "je reviens encore une fois dans ce souterrain, ça ressemble à un tunnel. Le sol vibre et je suis blotti(e) dans un coin. Il y a une silhouette au loin et une lumière s'approche, grandissante, menaçante."},
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
];

var theChild = [
{
	"description": {"fr":  "je fais face à... moi-même. Mais enfant. Dans le laboratoire de maman. Elle est également là. Je joue avec des câbles tandis qu'elle avance sur ses recherches sur l'esprit. Personne ne me remarque. A part son bureau, il n'y a qu'un brancard au milieu de la pièce. Le tout est éclairé d'une lumière blafarde."},
	"action": {"fr":  "S'allonger sur le brancard"},
	"next": {"fr":  "Je m'allonge et ferme les yeux. Les sons de mon moi enfant disparaissent et sont progressivement remplacés par des cris. Paniquée, j'ouvre les yeux"},
	"object": {
		"name" : {"fr": "Des câbles"},
		"description": {"fr": "Ce sont ceux avec lesquels je jouais étant enfant. Ils sont épais mais souples, je ne sais pas vraiment de quoi ils sont fait. Ils sont désormais utilisés dans ces appareils de chirurgie de l'esprit que commercialise l'ancienne entreprise de maman."}
	}
},
{
	"description": {"fr":  "j'entre dans un cabinet de médecin. Mais pas n'importe quel type de médecin. Il y a la machine qui permet de pénétrer dans les souvenirs des patients et tout le matériel pour enregistrer ce qui s'y passe. Ça ressemble à ce que j'utilise mais en plus industriel. Il y a là une dame en blouse. Elle ressemble vaguement à l'adolescente."},
	"action": {"fr":  "Faire signe à la dame"},
	"next": {"fr":  "Elle me sourit et vient m'enlacer. Je me sens emplie d'une chaleur rassurante, comme dans un bain. Je tente de l'enlacer à mon tour mais elle s'évapore dans mes bras. Il fait toujours chaud et tout change autour de moi"},
	"object": {
		"name" : {"fr": "Un badge"},
		"description": {"fr": "C'est une étiquette sur la blouse de la dame qui m'a enlacée. Elle indique son poste en tant que chirurgienne de l'esprit ainsi que son nom. C'est le même que celui de l'adolescente et du grand-père."}
	}
},
{
	"description": {"fr":  "j'arrive dans une cabine de conducteur. Il y a un tableau de bord avec de nombreux boutons, quelques leviers et manivelles, ainsi qu'une gigantesque vitre qui donne sur un tunnel. Le train n'avance pas. Et en fait, je n'arrive pas à distinguer la vitre. Il n'y a ni reflet, ni lumière, les ténèbres sont absolues et elles m'attirent."},
	"action": {"fr":  "Sortir de la cabine à travers la vitre"},
	"next": {"fr":  "J'escalade le tableau de bord et je me laisse aspirer par l'obscurité totale. Je m'y sens bien. J'ai malgré tout les yeux ouverts, je le sais. Et je ne suis pas seul. Une faible lumière apparait, je la suis"},
	"object": {
		"name" : {"fr": "Une présence"},
		"description": {"fr": "Dans les ténèbres absolues du tunnel, une fois sorti de la cabine de train, il y avait cette présence. Elle n'était pas menaçante, ni animale. Je dirais plutôt familière. Comme un être humain qui vivrait dans l'obscurité et en aurait fait son univers au point de s'y fondre. Une présence qui observe là où personne ne voit."}
	}
},
{
	"description": {"fr":  "je débarque dans un bureau d'entreprise. Le standing est assez élevé, il y a une baie vitrée tout le long du mur qui donne sur un ciel grisatre et un horizon d'immeubles. Sur la table, des dizaines de feuilles éparpillées. J'ai un sentiment d'illégitimité. Je n'ai pas le droit d'être là. Mais je suis aussi curieuse."},
	"action": {"fr":  "Prendre une des feuilles"},
	"next": {"fr":  "Je lis. Ça parle d'une opération exceptionnelle de convoi de train dans un tunnel abandonné. C'est suivi d'une série de vagues justifications... J'entends un bruit derrière moi. Je panique et me retourne. Je ne suis plus dans le bureau"},
	"object": {
		"name" : {"fr": "Une feuille piquée sur un bureau"},
		"description": {"fr": "Je l'ai trouvée dans le grand bureau avec baie vitrée. Le document explique pourquoi un train doit être exceptionnellement conduit dans un tunnel désaffecté. Les raisons apportées sont très imprécises. Il y a deux tampons étranges : urgent et confidentiel. A quoi bon ?"}
	}
},
{
	"description": {"fr":  "je pénètre dans une chambre d'hôpital. Un jeune homme en blouse m'accueille et me parle mais je n'entends rien. A côté, un vieil homme est allongé sur le lit, des câbles sont reliés à son corps et son crâne en particulier. Le jeune homme, charmant, me tend un casque rattaché à une de ces machines et me fait signe de le porter."},
	"action": {"fr":  "Mettre le casque"},
	"next": {"fr":  "J'enfile le casque et soudainement tout évolue à une vitesse folle autour de moi. J'ai l'impression d'être dans un cinéma à nombreuses dimensions et une vie entière défile en quelques secondes sous mes yeux. J'arrive à la fin. Il fait noir"},
	"object": {
		"name" : {"fr": "Une mémoire"},
		"description": {"fr": "Il s'agit de la mémoire du vieil homme allongé dans la chambre d'hôpital, le grand-père. Mon exploration a été très brève et assez confuse. Il me faudrait plus de temps pour comprendre son rôle dans le décès de maman."}
	}
},
{
	"description": {"fr":  "je me retrouve dans un bureau très simple, un bureau d'entreprise. La lumière y est froide, artificielle et aggressive. J'entends des voix dans les couloirs adjacents. Des mots apparaissent petit à petit sous mes yeux... Ils flottent dans l'air en 2 ou 3 dimensions et se multiplient à une vitesse impressionnante. Je commence à étouffer."},
	"action": {"fr":  "Attraper un mot"},
	"next": {"fr":  "J'ai attrapé le mot \"doute\" et il est tombé en poussière dans mes mains. Ça m'a légèrement brûlé les doigts, comme de la cendre. Les autres mots se sont aussi transformés et leurs restes au sol ont consumé la moquette. Je relève les yeux"},
	"object": {
		"name" : {"fr": "Un mot attrapé"},
		"description": {"fr": "C'est le mot \"doute\", il flottait parmi tant d'autres. Je me souviens qu'il y avait un numéro à 3 chiffres, un nom, celui du condamné, une heure, une date, des adjectifs. Certaines de ces choses ont un lien avec le train qui a percuté maman, j'en suis persuadée."}
	}
},
{
	"description": {"fr":  "je fais face à un poste d'information. Un présentateur mentionne les actualités et notamment la condamnation d'un homme. On le voit, menotté et tenu par des policiers, sortir d'une entrée de gare abandonnée. Il jette un regard à la caméra mais ce regard et son visage semble percer par-delà l'écran. J'attrape par réflexe la commande physique à ma droite."},
	"action": {"fr":  "Appuyer sur n'importe quelle touche"},
	"next": {"fr":  "J'ai appuyé et son regard scrutateur a disparu de ma vue. Cependant, l'empreinte de ses yeux est encore figée dans mon champ de vision, comme si je m'étais brûlée la rétine à regarder un soleil. Je ferme les yeux et les rouvre"},
	"object": {
		"name" : {"fr": "Les informations"},
		"description": {"fr": "Ce sont les actualités qui étaient affichées sur le poste d'information. Ça date de quelques années après la mort de maman. Il y avait un condamné, terroriste connu, qui souhaitait s'attaquer à l'entreprise, et s'en serait pris à ses employés."}
	}
},
{
	"description": {"fr":  "je suis dans le salon de la maison, celle qu'on avait avec maman. Elle est là d'ailleurs. Encore un foutu souvenir personnel qui court-circuite mon exploration. Elle semble inquiète mais déterminée. Elle rassemble des documents, m'embrasse affectueusement et se dirige vers la porte d'entrée."},
	"action": {"fr":  "L'appeler avant qu'elle ne parte"},
	"next": {"fr":  "J'essaie de la retenir mais évidemment, c'est un souvenir dans lequel je suis dans mon corps de fillette et je la vois s'en aller pour la dernière fois. Je me mets à pleurer. La suite, je la connais. Je me concentre pour passer à autre chose"},
	"object": {
		"name" : {"fr": "Des documents"},
		"description": {"fr": "Je ne sais toujours pas ce que maman a emporté avec elle ce jour là ni ce qu'elle faisait dans ce tunnel finalement mais je suis persuadée que ces documents avaient une importance cruciale et qu'elle a peut-être été tuée pour ça. Mais par qui ?"}
	}
}
];

var theAugur = [
{
	"description": {"fr":  "je suis dans ce souterrain que je connais si bien. Les parois en brique, les rails, la compagnie des rats. J'ai assez vécu ça, j'ai pas besoin de le revivre. Et encore moins ce moment... Je sens que ça va se reproduire. Avec le train..."},
	"action": {"fr":  "Fermer les yeux"},
	"next": {"fr":  "J'essaie de fermer les yeux à chaque fois, et à chaque fois je n'y arrive pas. Je me cache bien sûr, mais je ne peux pas m'empêcher de voir, même si je ne vois rien d'intelligible car j'ai tout oublié. Je suis juste effrayé. Je cours. Je m'enfuis"},
	"object": {
		"name" : {"fr": "Une silhouette de femme"},
		"description": {"fr": "C'est l'unique empreinte rétinienne qui me reste de cet évènement dans les souterrains. Bon, il y a aussi les couleurs, du noir et du rouge, une lumière aveuglante dans les ténèbres. J'ai oublié tout le reste. Ou j'ai voulu oublier..."}
	}
},
{
	"description": {"fr":  "je cours. Il fait un noir total, je ne sais pas combien de temps je cours mais ça me parait être une éternité, tout en ayant l'impression de faire du sur place. C'est terrifiant et en même temps je me sens lâche. Comment savoir si j'avance sans aucun repère ?"},
	"action": {"fr":  "S'arrêter de courir"},
	"next": {"fr":  "Lorsque je m'arrête, mon entourage s'éclaire peu à peu. Comme si j'avais fermé les yeux tout ce temps. Je redécouvre aussi mes autres sens. Je sens que je tiens quelque chose entre mes mains. Mais en regardant, ça a disparu. Je reprends ma marche"},
	"object": {
		"name" : {"fr": "Ce que je tenais entre les mains"},
		"description": {"fr": "C'était intense. C'était à la suite d'une fuite. Je ne sais pas ce qui m'a pris. Je me souviens avoir couru et quand j'ai repris mes esprits, j'avais entre les mains les documents qui m'ont permis de fabriquer cette étrange machine."}
	}
},
{
	"description": {"fr":  "j'entre dans un bâtiment. Il ressemble vaguement à un temple, il y a d'immenses colonnes et moulures aux murs. Une série de bancs en bois où sont assis des dizaines de personnes. Tant de personnes au même endroit, ça m'angoisse. Bien sûr, je ne les distingue pas. Sauf une."},
	"action": {"fr":  "Plisser les yeux pour mieux voir"},
	"next": {"fr":  "J'essaie de préciser ce visage qui se distingue du lot. C'est une fillette. Elle est profondément triste. Ou bien énervée. Je n'arrive pas à savoir. Alors que ses traits s'affinent, tout le reste s'illumine jusqu'à m'éblouir et je finis par ne plus rien voir. Je rouvre les yeux"},
	"object": {
		"name" : {"fr": "Le visage de la petite fille"},
		"description": {"fr": "Difficile de distinguer les émotions qu'elle exprime. C'est un mélange de profonde tristesse, de colère et de détermination. Je l'ai aperçue dans le temple étrange et lumineux au milieu d'une foule inombrable."}
	}
},
{
	"description": {"fr":  "je marche dans une rue. Ou plutôt je boite, à mon habitude. C'est très banal mais les gens que je croise sont tous flous. J'ai pas la force de les imaginer probablement. Je croise une jeune femme. Sa tête me dit quelque chose. Sa silhouette avait une brillance d'un autre monde."},
	"action": {"fr":  "Se retourner"},
	"next": {"fr":  "Je me retourne, elle s'est retournée également. Je n'arrive pas à la voir correctement. Son corps semble être constitué de calques successifs de silhouettes superposés et mouvants. Ils s'effacent un à un jusqu'à disparition. Je reprends ma route"},
	"object": {
		"name" : {"fr": "Une superposition de silhouettes"},
		"description": {"fr": "C'est la jeune femme que j'ai croisé dans la rue. Je ne suis même plus sûr que c'est une jeune femme. Parfois j'y vois une fillette. Parfois j'y vois une autre femme, plus vieille. Elles me semblent toutes liées et familières."}
	}
},
{
	"description": {"fr":  "je pénètre dans une chambre. Je ne suis jamais venu ici. La décoration est moderne. Il y a un bureau, un lit, une table de chevet. Le lit est plutôt grand et dans les draps se dessine une forme de corps à taille adulte. Par une dissonance cognitive étrange, je tiens entre les mains mon casque."},
	"action": {"fr":  "Déposer le casque sur la table"},
	"next": {"fr":  "Je pose l'appareil à côté du lit. Quand je le lâche, je vois mes mains blêmir. Elles deviennent transparentes. Je disparais. Puis, c'est au tour de la chambre de disparaître. Enfin, je reprends corps"},
	"object": {
		"name" : {"fr": "Une photo"},
		"description": {"fr": "Dans un cadre, sur la table de chevet où j'ai déposé le casque, c'est une photo d'une mère et sa fille, toutes les deux souriantes. Elles se ressemblent. A chaque fois que je regarde le visage de la mère de plus près, j'ai un mal de crâne terrible."}
	}
},
{
	"description": {"fr":  "je me retrouve dans le cabinet de ma chirurgienne. Elle est là, assise à côté de son appareil d'exploration de l'esprit et semble paniquée. Étrangement, je suis là aussi, en double, allongé sur le divan. Mais je porte des vêtements que je n'ai jamais eu."},
	"action": {"fr":  "S'approcher de moi-même"},
	"next": {"fr":  "Je m'approche de mon propre corps. Mon autre moi a les yeux fermés. Moi en revanche, je vois la chirurgienne encore sous le choc. Ce n'est pas ma double présence car elle ne me voit pas. C'est autre chose. Je touche la main de mon double et tout s'éteint. Je tâtonne dans le noir"},
	"object": {
		"name" : {"fr": "Un enregistrement en cours"},
		"description": {"fr": "J'ai distingué qu'il y avait un enregistrement en cours dans l'appareil de ma chirurgienne de l'esprit. Elle était paniquée. Je ne sais de quoi. Après tout, ce n'était pas un souvenir car je n'ai jamais porté les habits dans lesquels je me suis vu."}
	}
},
{
	"description": {"fr":  "je suis dans une chambre, la fenêtre est ouverte et il fait nuit. Il y a une jeune fille qui dort dans un lit et une jeune femme avec un casque assise à côté. Mais. C'est mon casque. Et j'ai l'impression d'avoir déjà vu ailleurs celle qui le porte."},
	"action": {"fr":  "Retirer le casque à la jeune femme"},
	"next": {"fr":  "Je me dirige vers elle mais je prends très vite conscience que je ne suis pas physiquement présent. Un rayon de soleil passe à travers les rideaux. Je la vois se lever, prendre ses affaires et sauter par la fenêtre. Je fais de même"},
	"object": {
		"name" : {"fr": "Mon casque"},
		"description": {"fr": "Cette vision d'une jeune femme qui portait mon casque est perturbante. Je sais que mon imagination est capable de beaucoup mais cette scène semblait plus réelle que ma pâle réalité. Elle semblait s'atteler à un tâche très importante avec cette jeune fille endormie."}
	}
},
{
	"description": {"fr":  "je suis face à un immeuble gigantesque. Ce sont des bureaux vraisemblablement. J'ai des flashs intermittents très perturbants. Je le vois entier, puis en flammes, puis décrépit et abandonné. Il y a une jeune femme debout devant l'immeuble."},
	"action": {"fr":  "Aller lui parler"},
	"next": {"fr":  "Je m'approche en boitant. Elle est instable tout comme l'immeuble. Un instant je la vois menottée et torturée, l'autre je la vois allègre et triomphante. Comme s'il y avait un court-circuit intempestif de son existence. C'est insupportable à regarder. Je m'éloigne au plus vite"},
	"object": {
		"name" : {"fr": "Des cendres"},
		"description": {"fr": "Parmi les débris de l'immeuble en feu, qui parfois ne l'était pas et parfois l'était, j'ai remarqué des morceaux de papiers dans les cendres. Tous étaient annotés d'un numéro à 3 chiffres et de tampons d'entreprises. Malgré l'intermittence, ces feuilles restaient toujours brûlées."}
	}
}
];

var theMother = [
{
	"description": {"fr":  "je reviens dans mon ancien laboratoire de recherche. Il y avait cet homme, innocent, qui y a subit, malgré moi, des choses insupportables. Sur son esprit et son corps. Je le vois attaché au brancard, la tête enfermée dans un appareil. J'ai voulu le revoir. J'ai voulu l'aider."},
	"action": {"fr":  "Libérer l'homme"},
	"next": {"fr":  "Je veux de toutes mes forces courir vers lui pour le détacher et le sortir de cette torture. Mais je n'y arrive pas. Car je ne savais pas. Je le vois disparaître dans un torrent de rage et de douleur. Puis je le revois, plus vieux, libéré. Je continue ma route"},
	"object": {
		"name" : {"fr": "Un appareil qui enferme la tête"},
		"description": {"fr": "J'ai travaillé sur cet appareil. C'était plus évolué qu'une simple lecture de l'esprit. Plus qu'une sauvegarde même. Il y avait un processus d'échanges bidirectionnel. C'est à dire qu'on pouvait non seulement lire, mais aussi écrire. Peut-être que c'est ce qui m'arrive là."}
	}
},
{
	"description": {"fr":  "j'entre dans mon bureau de travail. J'ai passé des journées et nuits entières dans cette entreprise à effectuer mes recherches. Des recherches que je regrette aujourd'hui. J'aimerais pouvoir tout annuler mais c'est trop tard. Je ne fais qu'explorer à présent. Ou bien c'est l'impression que j'ai ?"},
	"action": {"fr":  "Foutre le feu au bureau"},
	"next": {"fr":  "Ça brûle ! Ça brûle ! Sous mes yeux. Je vois les flammes danser et leur chaleur me réconforter. J'ai des larmes aux yeux, elles ne sèchent pas. Je me sens protégée par les flammes. J'avance vers elles. Je les traverse"},
	"object": {
		"name" : {"fr": "Un incendie"},
		"description": {"fr": "Cet incendie ne s'est pas produit de mon vivant. Et pourtant sa vision était bluffante de réalité. C'est comme si une part de moi avait réalisé cette acte. Dans une autre dimension, dans une autre vie, un autre moi. C'est un feu qui s'est allumé quelque part et qui ne s'éteindra pas."}
	}
},
{
	"description": {"fr":  "je fais face à un immense immeuble. Celui de l'entreprise. J'ai assez ressassé mes souvenirs de ma lutte interne. Une lutte perdue d'avance. Non pas de mon fait, mais parce qu'on ne lutte pas contre le courant en le suivant. J'ai failli m'y noyer."},
	"action": {"fr":  "S'extraire de la rivière"},
	"next": {"fr":  "Je nage vers la rive. Un flot interminable d'eau se déverse et l'immeuble de l'entreprise reste planté là. Je bouillone de rage face à mon échec. Je décide de m'éloigner"},
	"object": {
		"name" : {"fr": "Une rivière"},
		"description": {"fr": "C'est même un torrent. Elle emporte tout sur son passage. C'est une métaphore. En réalité, englouti dans ce courant, j'ai failli perdre toute ma volonté et ma force intérieure. Heureusement je m'en suis extrait."}
	}
},
{
	"description": {"fr":  "je retourne dans mon bureau de travail. Tous mes travaux de recherches sont concentrés ici. Il fait nuit et sombre, je ressens d'autant plus ma solitude et mon isolement. Non seulement dans ce lieu mais dans ma quête. Je ressens aussi le danger dans les ténèbres de ce lieu."},
	"action": {"fr":  "Prendre les documents et fuir"},
	"next": {"fr":  "J'attrape tout ce que je peux et je cours. Les couloirs semblent infinis. J'ai beau continuer, tourner, j'ai l'impression de revenir à indéfiniment au même endroit. Je serre ce que j'ai contre moi et me concentre en fermant les yeux. Je suis sortie"},
	"object": {
		"name" : {"fr": "Des documents"},
		"description": {"fr": "Si j'avais laissé mes travaux entre les mains de l'entreprise... Je n'ose imaginer les conséquences. J'ai aussi profité de ma fuite pour récupérer des éléments d'accès. Cependant, je ne savais pas quoi en faire. Celui que je devais rencontrer aurait su en faire meilleur usage."}
	}
},
{
	"description": {"fr":  "je marche dans la rue. Il fait jour mais tout est obscur autour de moi. Aussi, toutes les personnes que je croise sont suspicieuses, inquiétantes. Je me sens épiée. Je ne me sens plus en sécurité nulle part. Je vois une entrée de gare souterraine."},
	"action": {"fr":  "Courir vers l'entrée"},
	"next": {"fr":  "Je cours. La foule autour de moi semble avoir pris conscience d'une urgence et se précipite sur moi. Ils me touchent, m'aggripent, me retiennent, m'écrasent. Je finis par être submergée par leur nombre. J'étouffe. Je tombe sous-terre"},
	"object": {
		"name" : {"fr": "La gare souterraine"},
		"description": {"fr": "J'avais donné rendez-vous à l'homme dans cet endroit. Nous avions un passé commun, lui, moi et l'entreprise. Et je voulais l'aider dans... Sa vengeance je suppose. C'était aussi la mienne d'une certaine manière. Malheureusement, un train est arrivé avant lui."}
	}
},
{
	"description": {"fr":  "j'arrive chez moi. J'explore des informations et je tombe sur le visage d'un homme que je reconnais. Il était dans mon laboratoire. Il a participé aux expériences. Participé n'est peut-être pas le bon mot. Il a subit. Je ne pensais jamais le revoir. Je me dois de le revoir."},
	"action": {"fr":  "Trouver ses coordonnées"},
	"next": {"fr":  "Je fais quelques recherches rapides et je trouve le moyen de le contacter. Je note les informations sur un papier mais ce que j'écris change sous mes yeux. Je m'obstine avec mon stylo jusqu'à percer la feuille. Le trou s'agrandit et m'engloutit. Je suis dans le noir"},
	"object": {
		"name" : {"fr": "Des coordonnées de l'homme"},
		"description": {"fr": "J'avais déjà un plan qui se dessinait. C'était risqué mais important. Et je sentais qu'il me suivrait. Mais quelque chose nous a empêché de nous rencontrer. J'espère qu'il va bien."}
	}
},
{
	"description": {"fr":  "je m'introduis dans une chambre. C'est celle de ma fille. Elle est là, elle joue, petite et pétillante de joie et d'énergie. Je ne sais pas ce que l'avenir lui réserve mais je souhaite qu'elle garde la force de son enfance en elle. Elle me regarde et m'appelle."},
	"action": {"fr":  "Reculer et fermer la porte"},
	"next": {"fr":  "La porte fermée, je suis déchirée par une douleur intense. Je sens mon corps littéralement arraché en deux. Pas seulement mon corps en fait, tout, la maison, ma vie, ma vision se déchire en deux, comme une photo. Je marche dans l'interstice"},
	"object": {
		"name" : {"fr": "Ma fille"},
		"description": {"fr": "Elle était ma vie. J'ai agit ainsi pour elle. Si c'était à refaire, je le referais. Malgré l'échec, c'était nécessaire. Et puis, peut-être plus qu'un échec, c'était une graine. Pour son avenir. Elle saura porter mon flambeau."}
	}
},
{
	"description": {"fr":  "je me retrouve dans un tunnel. Le tunnel. Alors que j'attends un homme, je sens que quelqu'un d'autre est là. C'est une présence innoffensive mais observatrice. Dans le noir. Probablement quelqu'un d'habitué à cette obscurité au point de s'y fondre."},
	"action": {"fr":  "Parler à cette présence"},
	"next": {"fr":  "J'essaie de m'adresser à cet être de l'obscurité mais aucun son ne sort de ma bouche. Le silence se fait oppresssant. Puis un son strident perce les ténèbres, une lumière mécanique fonce sur moi. Je disparais. Je me relève"},
	"object": {
		"name" : {"fr": "Une présence dans les ténèbres"},
		"description": {"fr": "Elle était là, elle a tout vu et n'a rien pu faire. Mais j'ai ressenti sa peur, sa lâcheté et sa compassion dans ce silence et cette absence de lumière. Finalement, sous ses yeux, une autre lumière aura eu raison de moi."}
	}
}
];