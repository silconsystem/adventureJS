/**
 * 		Game objects list
 * 
 * 		object {
 * 			name: "name",
 * 			description: "describe",
 * 			game: "event",
 * 			url: "path/to/image.img",
 * 			type: "item|weapon|magic_D|magic_H|skill"
 * 			handler: "player|pl_class|NPC/enemy"	
 * 		}
 * 
 * 		access: game_objects[0].item[index_no.].name|description|game|url|type|handler
 * 				game_objects[1].weapon[index_no.].name|description|game|url|type|handler
 * 				game_objects[2].magic[index_no.].name|description|game|url|type|handler
 * 				game_objects[3].item[index_no.].name|description|game|url|type|handler
 * 
 */
const game_objects = [			
	{
		item: 
		[
			/**
			 * 				item object array
			 */
			{name: "item",	 		description: "player",		 	game: "HP - 0",	 	url: "../img/weapons/nothing.png", 				type: "item",		handler: "player"},
			{name: "potion",		description: "small boost",		game: "HP +10",	 	url: "../img/items/item/potion.png",			type: "item",		handler: "player"},
			{name: "ether",			description: "MP boost",		game: "MP +10",	 	url: "../img/items/item/ether.png",				type: "item",		handler: "player"},
			{name: "revive",		description: "alive",			game: "HP +100", 	url: "../img/items/item/revive.png",			type: "item",		handler: "player"},
			{name: "helmet",		description: "protect head",	game: "evd +3",	 	url: "../img/items/item/helmet.png", 			type: "item",		handler: "player"},
			{name: "coins",			description: "player coin",		game: "coins +10", 	url: "../img/items/item/coins.png", 			type: "item",		handler: "player"},
			{name: "medals",		description: "luck plus",		game: "luc +5", 	url: "../img/items/item/medals.png", 			type: "item",		handler: "player"},
			{name: "crown",			description: "strenght plus",	game: "str +5", 	url: "../img/items/item/crown.png", 			type: "item",		handler: "player"},
			{name: "robes",			description: "strenght plus",	game: "str +1", 	url: "../img/items/item/robes.png", 			type: "item",		handler: "player"}
		]
	},
	{
		weapon: 
		[
			/**
			 * 				weapon object array
			 *
			 *		thief			*/
			{name: "weapon", 		description: "player-thief",	game: "HP -0", 		url: "../img/weapons/nothing.png",				type: "weapon",		handler: "thief"},
			{name: "stick",			description: "a strong stick",	game: "HP -5", 		url: "../img/weapons/thief/stick.png",			type: "weapon",		handler: "thief"},
			{name: "throwknife",	description: "small and deadly",game: "HP -5", 		url: "../img/weapons/thief/throwknife.png",		type: "weapon",		handler: "thief"},
			{name: "cane",			description: "pointy cane", 	game: "HP -8", 		url: "../img/weapons/thief/cane.png",			type: "weapon",		handler: "thief"},
			{name: "whip",			description: "longrange",		game: "HP -10",		url: "../img/weapons/thief/whip.png",			type: "weapon",		handler: "thief"},
			/** 	warrior			 */
			{name: "weapon", 		description: "player-warrior",	game: "HP -0", 		url: "../img/weapons/nothing.png",				type: "weapon", 	handler: "warrior"},
			{name: "club",			description: "a wood club",		game: "HP -6", 		url: "../img/weapons/warrior/club.png",			type: "weapon", 	handler: "warrior"},
			{name: "mace",			description: "smash heads",		game: "HP -7", 		url: "../img/weapons/warrior/mace.png",			type: "weapon", 	handler: "warrior"},
			{name: "chains",		description: "brute force", 	game: "HP -8", 		url: "../img/weapons/warrior/chains.png",		type: "weapon", 	handler: "warrior"},
			{name: "trident",		description: "shortrange",		game: "HP -10",		url: "../img/weapons/warrior/trident.png",		type: "weapon", 	handler: "warrior"},
			/**		rogue			 */
			{name: "weapon", 		description: "player-rogue", 	game: "HP -0", 		url: "../img/weapons/nothing.png",				type: "weapon", 	handler: "rogue"},
			{name: "dagger",		description: "simple dagger", 	game: "HP -6",		url: "../img/weapons/rogue/dagger.png",			type: "weapon", 	handler: "rogue"},
			{name: "sword",			description: "sharp and deadly",game: "HP -7",		url: "../img/weapons/rogue/sword.png",			type: "weapon", 	handler: "rogue"},
			{name: "rapier", 		description: "elegance",		game: "HP -8",		url: "../img/weapons/rogue/rapier.png",			type: "weapon", 	handler: "rogue"},
			{name: "longsword", 	description: "more range",		game: "HP -10",		url: "../img/weapons/rogue/longsword.png",		type: "weapon", 	handler: "rogue"},
			/**		mage			 */
			{name: "weapon", 		description: "player-mage",		game: "HP -0", 		url: "../img/weapons/nothing.png",				type: "weapon", 	handler: "mage"},
			{name: "woodstaff",		description: "walking staff",	game: "HP -6", 		url: "../img/weapons/mage/woodstaff.png",		type: "weapon", 	handler: "mage"},
			{name: "copperstaff",	description: "simple staff",	game: "HP -7", 		url: "../img/weapons/mage/copperstaff.png",		type: "weapon", 	handler: "mage"},
			{name: "ironstaff",		description: "strong staff", 	game: "HP -8", 		url: "../img/weapons/mage/ironstaff.png",		type: "weapon", 	handler: "mage"},
			{name: "silverstaff",	description: "fancy staff",		game: "HP -10",		url: "../img/weapons/mage/silverstaff.png",		type: "weapon", 	handler: "mage"}
		]
	},
	{
		magic_D:
		[
			/**	
			 * 		magic defense object array
			 */
			{name: "magic_D", 		description: "player-magic-d",	game: "HP -0", 		url: "../img/weapons/nothing.png",				type: "magic_D", 	handler: "player|NPC"},
			{name: "fire", 			description: "fire spell", 		game: "HP -10", 	url: "../img/magic/magic_D/fire.png",			type: "magic_D", 	handler: "player|NPC"},
			{name: "ice", 			description: "ice spell", 		game: "HP -10", 	url: "../img/magic/magic_D/ice.png",			type: "magic_D", 	handler: "player|NPC"},
			{name: "bolt", 			description: "thunder spell", 	game: "HP -11", 	url: "../img/magic/magic_D/bolt.png",			type: "magic_D", 	handler: "player|NPC"},
			{name: "plague", 		description: "poison spell", 	game: "HP -1", 		url: "../img/magic/magic_D/plague.png",			type: "magic_D", 	handler: "player|NPC"},
		]
	},
	{
		magic_H:
		[
			/**		
			 *		magic heal object array 
			 */
			{name: "Magic_H", 		description: "player-magic-h", 	game: "HP -0", 		url: "../img/weapons/nothing.png",				type: "magic_H", 	handler: "player|NPC"},
			{name: "cure", 			description: "cure HP spell",	game: "HP + 20",	url: "../img/magic/magic_H/cure.png",			type: "magic_H", 	handler: "player|NPC"},
			{name: "cure-all", 		description: "cure all spell",	game: "HP + 20",	url: "../img/magic/magic_H/cure-all.png",		type: "magic_H", 	handler: "player|NPC"},
			{name: "life", 			description: "full HP",			game: "HP + 100",	url: "../img/magic/magic_H/life.png",			type: "magic_H", 	handler: "player|NPC"},
			{name: "antidote", 		description: "stop poison",		game: "ST_P = 0", 	url: "../img/magic/magic_H/antidote.png",		type: "magic_H", 	handler: "player|NPC"}
		]
	},
	{
		skills:
		[
			/**		
			 * 		player skills object array
			 */
			{name: "skills", 		description: "player-skill",	game: "0", 			url: "../img/weapons/nothing.png",				type: "skills", 	handler: "player"},
			{name: "1st_attack",	description: "magic defense", 	game: "SK_00", 		url: "../img/skills/first-attack.png",			type: "skills", 	handler: "player"},
			{name: "scan", 			description: "magic defense", 	game: "SK_01", 		url: "../img/skills/scan.png",					type: "skills", 	handler: "player"},
			{name: "magician", 		description: "magic defense", 	game: "SK_02", 		url: "../img/skills/magician.png",				type: "skills", 	handler: "player"},
			{name: "berserk", 		description: "magic defense", 	game: "SK_03", 		url: "../img/skills/scan.png",					type: "skills", 	handler: "player"}
		]
	}
];

/*
		scenes
		object array holding all description data

	// template for easy creation
	{
		room_id : ,
		describe: ,
		look 	: ,
		weapon 	: ,
		item 	: ,
		NPC 	: ,
		exits 	: ,
		exit_N 	: ,
		exit_E 	: ,
		exit_S 	: ,
		exit_W 	: ,
		trap 	: ,
		secret 	:
	}
*/
const scene_objects = [
	{
		scenes:
		[
			{
				room_id : 0,
				describe: "this is a creepy looking house over here,<br><br>do you really want to go on...",
				look 	: "the house looks rundown, still the heavy oakwood door looks like they dont want anyone inside",
				weapon 	: "you see nothing but an overgrown garden and an old house",
				item 	: "even the garden looks like its dead and gone",
				NPC 	: "you look for any people but outside is no one to be seen",
				exits 	: "there's only one way to go and thats through the frontdoor on the south",
				exit_N 	: "you came this far, you cant go back now...",
				exit_E 	: "just bushes, and some broken garden tools",
				exit_S 	: "you feel the heavy door handle, its openening and you step through...",
				exit_W 	: "a headless garden gnome is still fishing in something that once was a pond",
				trap 	: "none",
				secret 	: "none" 	
			},
			{
				room_id : 1,
				describe: "You step into a large livingroom<br>there's a strange man staring at you<br>You spot an object in the SouthWest corner and a chest in the SouthEast one<br>But a strange man stands in the middle of the room",
				look 	: "There is a stairs in the East corner and a door to the South",
				weapon 	: "You find a rusted pistol<br>Dont touch anything, come here ! The man says...",
				item 	: "You manage to take a potion from this chest when the man looks for his keys",
				NPC 	: "So you finally came, larp sent you right?<br>Follow me, he's waiting for you...",
				exits 	: "There is a stairs in the East corner and a door to the South",
				exit_N 	: "You walk past him and go for the North exit door to get out of here, but it's locked already!!<br>If your difficult he will be displeased, the man says in a gloomy voice",
				exit_E 	: "You follow the man up the stairs",
				exit_S 	: "There's a door at the South exit but the man is already pointing you to the stairway on the East",
				exit_W 	: "There is nothing there but a wall",
				trap 	: "none",
				secret 	: "none"
			}
		]
	}
];

/**
		Room Objects

		entry_flag	: 		// set flag if room = active
		id 			: 		// each room extends id var
		name 		: 		// set room name
		exits 		: 		// "n|e|s|w" get available exits
		entry 		: 		// get entry variable
		scene 		: 		// describe scene on room_no load
		look 		: 		// html: look for objects and exits
		weapon 		: 		// html: describe | script: fill room with roomItems[0] = treasure where needed
		item		: 		// html: describe | fill room with roomItems[1] = weapons where needed
		npc 		: 		// npc info
		trap 		: 		// maybe there's a trap ?
		secret 		: 		// maybe there's a secret ?
		exit_out	: 		// "n|e|s|w" exit variable
*/
const room_objects = [
	{
		entry_flag	: false,
		id 			: 0,
		name 		: "room zero",
		exits 		: [0,0,1,0],		//"n|e|s|w"
		entry 		: entryPoint = "north",
		scene 		: scene_objects[0].scenes[0].describe,
		look		: scene_objects[0].scenes[0].look,	
		weapon 		: rm_weapon = ["none", 0, scene_objects[0].scenes[0].weapon], 		// name|can-take y/n|description[room-id]
		item		: rm_item 	= ["none", 0, scene_objects[0].scenes[0].item],			// name|can-take y/n|description[room-id]
		npc 		: rm_npc 	= ["none", , 0, 0, scene_objects[0].scenes[0].NPC],		// name|can-take y/n|npc/enemy|description[room-id]
		trap 		: rm_trap 	= ["none", 0, scene_objects[0].scenes[0].trap],			// name|active y/n|description[room-id]
		secret 		: rm_secret = ["none", 0, scene_objects[0].scenes[0].secret],		// name|active y/n|description[room-id]
		exit_out	: exitPoint
	},
	{
		entry_flag	: false,
		id 			: 1,
		name 		: "room one",
		exits 		: [0,1,1,0],					//"n|e|s|w"
		entry 		: entryPoint = "north",
		scene 		: scene_objects[0].scenes[1].describe,
		look 		: scene_objects[0].scenes[1].look,
		weapon		: rm_weapon = ["none", 		0, scene_objects[0].scenes[1].weapon],
		item		: rm_item 	= ["potion", 	1, scene_objects[0].scenes[1].item],
		npc 		: rm_npc 	= ["harold", 	1, scene_objects[0].scenes[1].NPC],
		trap 		: rm_trap 	= ["none", 		0, scene_objects[0].scenes[1].trap],
		secret 		: rm_secret = ["none", 		0, scene_objects[0].scenes[1].secret],
		exit_out	: exitPoint
	}
];