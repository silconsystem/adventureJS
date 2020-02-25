/*		sources.js
 *
 *		global variables, objects
 */
//								____logic
// global variables
var id,							// set room id
	move,						// holds move direction
	moved = ["entry", "exit"],	// check if room is done and stop submit if false
	moveCount = 0,				// count = room-no
	entryPoint,					// tell room where you enter
	exitPoint = "none",			// change with move button
	c_created = false,			// character created flag
	loaded_room,				// put html in var
	intro = false,				// set move to n on first page room_001
	entry_flag = false,
	Room_1;
//
// 								____room
var room_objects = [];

//								____player
// global variables
var playerName,
	playerClass,
	playerWeapon,
	playerHealth,
	playerMagic,
	playerExp,
	playerLevel,
	spellBook,
	inventory_items 	= [],
	inventory_weapons 	= [],
	inventory_spell_H	= [],
	inventory_spell_D 	= [],
	inventory_special 	= [];
// 								____enemies
// global variables
var enemyName,
 	enemyClass,
 	enemyLevel,
 	enemyHealth,
 	enemyMagic,
 	experience_rewarded;

//								____rooms
// global variables
var entered,
	room_name,
	room_no = 0;

//								____player_objects_arrays
// stat objects
var	playerStats = {
	STR : 1,
	INT : 1,
	EVD : 1,
	LUC : 1
};

// player skills
var playerSkills = {
	none 			: "Rookie<br>Nothing yet",
	first_attack 	: "Sneak<br>50% chance of 1st strike",
	scan_enemy		: "Scanner<br>Show enemy stats",
	use_magic		: "Learned Magic<br>magic enabled",
	berserker 		: "berseker<br>Strong attack after no. of hits"
};

// status effects player 
var playerStatEffect = [
	"healthy",
	"poisoned",
	"sad",
	"confused",
	"the plague"
];

// spells
var attack_spells = [
		"none", "fire", "ice", "bolt", "plague"
	],
	restore_spells = [
		"none", "cure", "cure_all", "life", "antidote"
	];

spellBook = [attack_spells, restore_spells];

// 								____enemies_objects_arrays
// enemy stats
var	enemyStats = {
	STR : 1,
	INT : 1,
	EVD : 1,
	LUC : 1
};

// enemy state
var action_state = [
		["aware"	, "unaware"],			// enemy attack on entry or ignores entry
		["attack"	, "passive"], 			// attack on look or ignore look
		["leave"	, "defeat"],			// no exit before defeat
		["speak"	, "mute"],				// interacts or silent
		["drop"		, "nodrop"], 			// drops inventory items or nothing
		["boss"		, "noboss"]				// boss enemy or not
];

// enemy spells
var enemySpellBook = [attack_spells, restore_spells];

// enemy skills
var enemySkills = {
	none 			: "none yet",
	back_attack 	: "100% chance of 1st strike",
	statFX_player	: "add status effects",
	use_magic		: "magic enabled",
	final_attack	: "strong last attack after no. of hits"
};

// enemy can drop magic
var enemyLootMagic = [
	"nothing",
	"antidote",
	"sadness",
	"confuse",
	"slow"
];

// enemy can drop item
var enemyLootItem = [
	"nothing",
	"potion",
	"ether",
	"revive",
	"light"

]; 

// enemy can drop healing prop
var enemyLootHeal = [
	"nothing",
	"HP + 10",
	"HP + 30",
	"HP + 50",
	"MP + 50"
];

// enemy can get sick like us
var enemyStatEffect = playerStatEffect;

var enemyFinalWord = [
	"did not work, phew !",
	"boom",
	"poisoned",
	"stoned",
	"confused"
];

// npc names
var npc_objects = [
	"harold"
];

// enemy names
var enemy_names = [];

//								____rooms_objects_arrays
// scenes
var scenes = [
	"nothing to see here but dust, but it seems theres a opening on the east exit and a crappy door at the south exit.",
	"a dim light only barely shows the door in this room",
	" room mrood",
	"shite room",
	"zombie stuff"
];

// items treasure,weapons & items
var treasure = [
	"nothing",
	"coins",
	"medals",
	"crown",
	"robes"
];

var weapon = [
	[	["nothing","unarmed","HP -5"],
		["stick","a strong stick","HP -6"],
		["throwknife","small and deadly","HP -7"],
		["cane","pointy cane","HP -8"],
		["whip","longrange","HP -10"]
	],
	[	["nothing","unarmed","HP -5"],
		["club","a wood club","HP -6"],
		["mace","smash heads","HP -7"],
		["chains","brute force","HP -8"],
		["trident","shortrange","HP -10"]
	],
	[	["nothing","unarmed","HP -5"],
		["dagger","simple dagger","HP -6"],
		["sword","sharp and deadly","HP -7"],
		["rapier","elegance","HP -8"],
		["longsword","more range","HP -10"]
	],
	[	["nothing","unarmed","HP -5"],
		["woodstaff","walking staff","HP -6"],
		["copperstaff","simple staff","HP -7"],
		["ironstaff","strong staff","HP -8",],
		["silverstaff","fancy staff","HP -10"]
	]
];

var items = [
	"nothing",
	"potion",
	"ether",
	"revive",
	"helmet"
];

var traps = [
	"nothing",
	"spikes",
	"trapdoor",
	"beartrap",
	"sinkhole"
];

var secret = [
	"nothing",
	"gold",
	"to room_four",
	"str + 5",
	"HP & MP full"
];

var inventory = [
	["items", "nothing",],			
	["weapons","nothing"],
	["magic", "nothing"]
];

var roomItems = [treasure, weapon, items];

//								____enemies

// acces variables
var startBtn 	= document.getElementById('start-btn'),
	nameInput 	= document.getElementById('name-input'),
	charSelMenu = document.getElementById('character-menu'),
	armSelMenu 	= document.getElementById('weapon-menu'),
	nameVal 	= document.getElementById('name-value'),
	nameBtn		= document.getElementById('name-submit'),
	northBtn	= document.getElementById('north'),
	eastBtn		= document.getElementById('east'),
	southBtn	= document.getElementById('south'),
	westBtn		= document.getElementById('west'),
	lookBtn		= document.getElementById('look'),
	weaponBtn 	= document.getElementById('weapon'),
	itemBtn 	= document.getElementById('item');

// html elements
var char_name 	= 'char-name';

var roomContent = document.getElementById('room-content');