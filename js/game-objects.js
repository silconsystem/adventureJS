/**const game_obj = [			/* 			This is the new way I'm gonna structure the data(if it works like I want)		
	{
		item: 
		[
			{name:"item",	 	description:"player",		 	game:"HP - 0",	 	url: "../img/weapons/nothing.png", 		type: "item"},
			{name:"potion",		description:"small boost",		game:"HP +10",	 	url: "../img/items/item/potion.png",	type: "item"},
			{name:"ether",		description:"MP boost",		 	game:"MP +10",	 	url: "../img/items/item/ether.png",		type: "item"},
			{name:"revive",		description:"alive",			game:"HP +100", 	url: "../img/items/item/revive.png",	type: "item"},
			{name:"helmet",		description:"protect head",	 	game:"evd +3",	 	url: "../img/items/item/helmet.png", 	type: "item"},
			{name:"coins",		description:"player coin",		game:"coins +10", 	url: "../img/items/item/coins.png", 	type: "item"},
			{name:"medals",		description:"luck plus",		game:"luc +5", 		url: "../img/items/item/medals.png", 	type: "item"},
			{name:"crown",		description:"strenght plus",	game:"str +5", 		url: "../img/items/item/crown.png", 	type: "item"},
			{name:"robes",		description:"strenght plus",	game:"str +1", 		url: "../img/items/item/robes.png", 	type: "item"}
		]
	},
	{
		weapon: 
		[
			{
				thief:
				[
					{name: "weapon", 		description: "player-thief",	game: "HP -0", 		url: "../img/weapons/nothing.png"},
					{name: "stick",			description: "a strong stick",	game: "HP -5", 		url: "../img/weapons/thief/stick.png"},
					{name: "throwknife",	description: "small and deadly",game: "HP -5", 		url: "../img/weapons/thief/throwknife.png"},
					{name: "cane",			description: "pointy cane", 	game: "HP -8", 		url: "../img/weapons/thief/cane.png"},
					{name: "whip",			description: "longrange",		game: "HP -10",		url: "../img/weapons/thief/whip.png"}
				]
			},
			{
				warrior:
				[
					{name: "weapon", 		description: "player-warrior",	game: "HP -0", 		url: "../img/weapons/nothing.png"},
					{name: "club",			description: "a wood club",		game: "HP -6", 		url: "../img/weapons/warrior/club.png"},
					{name: "mace",			description: "smash heads",		game: "HP -7", 		url: "../img/weapons/warrior/mace.png"},
					{name: "chains",		description: "brute force", 	game: "HP -8", 		url: "../img/weapons/warrior/chains.png"},
					{name: "trident",		description: "shortrange",		game: "HP -10",		url: "../img/weapons/warrior/trident.png"}
				]		
			},
			{
				rogue:
				[
					{name: "weapon", 		description: "player-rogue", 	game: "HP -0", 		url: "../img/weapons/nothing.png"},
					{name: "dagger",		description: "simple dagger", 	game: "HP -6",		url: "../img/weapons/rogue/dagger.png"},
					{name: "sword",			description: "sharp and deadly",game: "HP -7",		url: "../img/weapons/rogue/sword.png"},
					{name: "rapier", 		description: "elegance",		game: "HP -8",		url: "../img/weapons/rogue/rapier.png"},
					{name: "longsword", 	description: "more range",		game: "HP -10",		url: "../img/weapons/rogue/longsword.png"}
				]	
			},
			{
				mage:
				[
					{name: "weapon", 		description: "player-mage",		game: "HP -0", 		url: "../img/weapons/nothing.png"},
					{name: "woodstaff",		description: "walking staff",	game: "HP -6", 		url: "../img/weapons/mage/woodstaff.png"},
					{name: "copperstaff",	description: "simple staff",	game: "HP -7", 		url: "../img/weapons/mage/copperstaff.png"},
					{name: "ironstaff",		description: "strong staff", 	game: "HP -8", 		url: "../img/weapons/mage/ironstaff.png"},
					{name: "silverstaff",	description: "fancy staff",		game: "HP -10",		url: "../img/weapons/mage/silverstaff.png"}
				]
			}
		]
	},
	{
		magic_D:
		[
			{name: "magic_D", 	description: "player-magic-d",	game: "HP -0", 		url: "../img/weapons/nothing.png"},
			{name: "fire", 		description: "fire spell", 		game: "HP -10", 	url: "../img/magic/magic_D/fire.png"},
			{name: "ice", 		description: "ice spell", 		game: "HP -10", 	url: "../img/magic/magic_D/ice.png"},
			{name: "bolt", 		description: "thunder spell", 	game: "HP -11", 	url: "../img/magic/magic_D/bolt.png"},
			{name: "plague", 	description: "poison spell", 	game: "HP -1", 		url: "../img/magic/magic_D/plague.png"}
		]
	},
	{
		magic_H:
		[
			{name: "Magic_H", 	description: "player-magic-h", 	game: "HP -0", 		url: "../img/weapons/nothing.png"},
			{name: "cure", 		description: "cure HP spell",	game: "HP + 20",	url: "../img/magic/magic_H/cure.png"},
			{name: "cure-all", 	description: "cure all spell",	game: "HP + 20",	url: "../img/magic/magic_H/cure-all.png"},
			{name: "life", 		description: "full HP",			game: "HP + 100",	url: "../img/magic/magic_H/life.png"},
			{name: "antidote", 	description: "stop poison",		game: "ST_P = 0", 	url: "../img/magic/magic_H/antidote.png"}
		]
	},
	{
		skills:
		[
			{name: "skills", 	description: "player-skill",	game: "0", 			url: "../img/weapons/nothing.png"},
			{name: "1st_attack",description: "magic defense", 	game: "SK_00", 		url: "../img/skills/first-attack.png"},
			{name: "scan", 		description: "magic defense", 	game: "SK_01", 		url: "../img/skills/scan.png"},
			{name: "magician", 	description: "magic defense", 	game: "SK_02", 		url: "../img/skills/magician.png"},
			{name: "berserk", 	description: "magic defense", 	game: "SK_03", 		url: "../img/skills/scan.png"},
		]
	}
];*/
/* 			This is the new way I'm gonna structure the data(if it works like I want)		*/
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
		magic:
		[
			/**	
			 * 		magic defense object array
			 */
			{name: "magic_D", 		description: "player-magic-d",	game: "HP -0", 		url: "../img/weapons/nothing.png",				type: "magic_D", 	handler: "player|NPC"},
			{name: "fire", 			description: "fire spell", 		game: "HP -10", 	url: "../img/magic/magic_D/fire.png",			type: "magic_D", 	handler: "player|NPC"},
			{name: "ice", 			description: "ice spell", 		game: "HP -10", 	url: "../img/magic/magic_D/ice.png",			type: "magic_D", 	handler: "player|NPC"},
			{name: "bolt", 			description: "thunder spell", 	game: "HP -11", 	url: "../img/magic/magic_D/bolt.png",			type: "magic_D", 	handler: "player|NPC"},
			{name: "plague", 		description: "poison spell", 	game: "HP -1", 		url: "../img/magic/magic_D/plague.png",			type: "magic_D", 	handler: "player|NPC"},
			/**		magic heal object array */
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