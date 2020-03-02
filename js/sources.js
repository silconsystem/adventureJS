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
var npc_objects = [];

//								____player
// global variables
var playerName,
	playerClass,
	playerWeapon,
	playerExp,
	playerLevel,
	spellBook,
	inventory_items 	= [],
	inventory_weapons 	= [],
	inventory_spell_H	= [],
	inventory_spell_D 	= [],
	inventory_skill 	= [],
	playerAction;
//								____rooms
// global variables
var entered,
	room_name,
	room_no = 0;
	room_exits = [];

//								____player_objects_arrays
// stat objects
var	playerStats = {
	HP 	: 100,
	MP 	: 0,
	STR : 10,
	INT : 10,
	EVD : 10,
	LUC : 10
};

// player skills
var playerSkills = {
	none 			: "Rookie: Nothing yet",
	first_attack 	: "Sneak: 50% chance of 1st strike",
	scan_enemy		: "Scanner: Show enemy stats",
	use_magic		: "Learned Magic: magic enabled",
	berserker 		: "berseker: Strong attack after no. of hits"
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

// 								____enemies_npc's_objects_arrays
// enemy stats
var	enemyStats = {
	HP 	: 100,
	MP 	: 0,
	STR : 10,
	INT : 10,
	EVD : 10,
	LUC : 10
};

// enemy state
// array holding tested argument values
var action_state = [
		["aware"	, "unaware"],			// enemy attack on entry or ignores entry
		["attack"	, "passive"], 			// attack on look or ignore look
		["leave"	, "defeat"],			// no exit before defeat
		["speak"	, "mute"],				// interacts or silent
		["drop"		, "nodrop"], 			// drops inventory items or nothing
		["boss"		, "noboss"]				// boss enemy or not
	],
	player_input_action =[
		"take", "drop", "attack", "leave", "talk", "magic def", "magic heal", "skill"
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
	"NPC",
	"harold"
];

// enemy names
var enemy_names = [
	"ENEMY",
	"lisa"
];

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
		// name			// description 		// damage 	//img url	
	[	["nothing"		,"unarmed"			,"HP -5"	, "none"],
		["stick"		,"a strong stick"	,"HP -6"	, "../img/weapons/thief/stick.png"],
		["throwknife"	,"small and deadly"	,"HP -7"	, "../img/weapons/thief/throwknife.png"],
		["cane"			,"pointy cane"		,"HP -8"	, "../img/weapons/thief/cane.png"],
		["whip"			,"longrange"		,"HP -10"	, "../img/weapons/thief/whip.png"]
	],
	[	["nothing" 		,"unarmed"			,"HP -5", 	,"none"],
		["club"			,"a wood club"		,"HP -6"	,"../img/weapons/warrior/club.png"],	
		["mace"			,"smash heads"		,"HP -7"	,"../img/weapons/warrior/mace.png"],
		["chains"		,"brute force"		,"HP -8"	,"../img/weapons/warrior/chains.png"],
		["trident"		,"shortrange"		,"HP -10"	,"../img/weapons/warrior/trident.png"]
	],
	[	["nothing"		,"unarmed"			,"HP -5"	,"none"],
		["dagger"		,"simple dagger"	,"HP -6"	,"../img/weapons/rogue/dagger.png"],
		["sword"		,"sharp and deadly"	,"HP -7"	,"../img/weapons/rogue/sword.png"],
		["rapier"		,"elegance"			,"HP -8"	,"../img/weapons/rogue/rapier.png"],
		["longsword"	,"more range"		,"HP -10"	,"../img/weapons/rogue/longsword.png"]
	],
	[	["nothing"		,"unarmed"			,"HP -5"	,"none"],
		["woodstaff"	,"walking staff"	,"HP -6"	,"../img/weapons/mage/woodstaff.png"],
		["copperstaff"	,"simple staff"		,"HP -7"	,"../img/weapons/mage/copperstaff.png"],
		["ironstaff"	,"strong staff"		,"HP -8"	,"../img/weapons/mage/ironstaff.png"],
		["silverstaff"	,"fancy staff"		,"HP -10"	,"../img/weapons/mage/silverstaff.png"]
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
	itemBtn 	= document.getElementById('item'),
	actionInput = document.getElementById('action-text'),
	actionBtn 	= document.getElementById('action-button'),
	actionOut	= document.getElementById('action-display');

// html elements
var char_name 	= 'char-name';
// room elements
var roomContent = document.getElementById('room-content');