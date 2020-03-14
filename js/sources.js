/*		sources.js
 *
 *		global variables, objects
 */
//								____logic
// global variables
var id,							// set room id
	itemIndex = 0, 				// use for add|remove from index
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
//
// 								____gane save
var saveGame;
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
	[
		["aware"	, "unaware"],			// enemy attack on entry or ignores entry
		["attack"	, "passive"], 			// attack on look or ignore look
		["leave"	, "defeat"],			// no exit before defeat
		["speak"	, "mute"],				// interacts or silent
		["drop"		, "nodrop"], 			// drops inventory items or nothing
		["boss"		, "noboss"]				// boss enemy or not
	]
];
var player_actions = [
	"take", "drop", "attack", "leave", "talk", "magic_D", "magic_H", "skill"
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
	lookBtn		= document.getElementById('look-btn'),
	weaponBtn 	= document.getElementById('weapon-btn'),
	itemBtn 	= document.getElementById('item-btn'),
	actionInput = document.getElementById('action-text'),
	actionBtn 	= document.getElementById('action-button'),
	actionOut	= document.getElementById('action-display');
	saveBtn 	= document.getElementById('save-button');
	loadBtn 	= document.getElementById('load-button');
// html elements
var char_name 	= 'char-name';
// room elements
var roomContent = document.getElementById('room-content');