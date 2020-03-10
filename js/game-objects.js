const game_obj = [			/* 			This is the new way I'm gonna structure the data(if it works like I want)		*/
	{
		item: 
		[
			{name:"item",	 	description:"player",		 	game:"HP - 0",	 	url: "../img/weapons/nothing.png"},
			{name:"potion",		description:"small boost",		game:"HP +10",	 	url: "../img/items/item/potion.png"},
			{name:"ether",		description:"MP boost",		 	game:"MP +10",	 	url: "../img/items/item/ether.png"},
			{name:"revive",		description:"alive",			game:"HP +100", 	url: "../img/items/item/revive.png"},
			{name:"helmet",		description:"protect head",	 	game:"evd +3",	 	url: "../img/items/item/helmet.png"},
			{name:"coins",		description:"player coin",		game:"coins +10", 	url: "../img/items/item/coins.png"},
			{name:"medals",		description:"luck plus",		game:"luc +5", 		url: "../img/items/item/medals.png"},
			{name:"crown",		description:"strenght plus",	game:"str +5", 		url: "../img/items/item/crown.png"},
			{name:"robes",		description:"strenght plus",	game:"str +1", 		url: "../img/items/item/robes.png"}
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
];
/*
var game_objects = [
	{
		item: [
			["nothing"		,"none"				,"none"		,"item"],
			["potion"		,"small boost"		,"HP +10"	,"#"],
			["ether"		,"MP boost"			,"MP +10"	,"#"],
			["revive"		,"alive"			,"HP +100"	,"#"],
			["helmet"		,"protect head"		,"evd +3"	,"#"],		
			["coins"		,"player coin"		,"coins +10","#"],	
			["medals"		,"luck plus"		,"luc +5"	,"#"],
			["crown"		,"strenght plus"	,"str +5"	,"#"],
			["robes"		,"strenght plus"	,"str +1"	,"#"]
		]
	},
	{
		weapon: [
			{
				thief: [
					["nothing"		,"unarmed"			,"HP -5"	, "none"],
					["stick"		,"a strong stick"	,"HP -6"	, "../img/weapons/thief/stick.png"],
					["throwknife"	,"small and deadly"	,"HP -7"	, "../img/weapons/thief/throwknife.png"],
					["cane"			,"pointy cane"		,"HP -8"	, "../img/weapons/thief/cane.png"],
					["whip"			,"longrange"		,"HP -10"	, "../img/weapons/thief/whip.png"]
				]
			},
			{
				warrior: [
					["nothing" 		,"unarmed"			,"HP -5" 	,"none"],
					["club"			,"a wood club"		,"HP -6"	,"../img/weapons/warrior/club.png"],	
					["mace"			,"smash heads"		,"HP -7"	,"../img/weapons/warrior/mace.png"],
					["chains"		,"brute force"		,"HP -8"	,"../img/weapons/warrior/chains.png"],
					["trident"		,"shortrange"		,"HP -10"	,"../img/weapons/warrior/trident.png"]
				]
			},
			{
				rogue: [
					["nothing"		,"unarmed"			,"HP -5"	,"none"],
					["dagger"		,"simple dagger"	,"HP -6"	,"../img/weapons/rogue/dagger.png"],
					["sword"		,"sharp and deadly"	,"HP -7"	,"../img/weapons/rogue/sword.png"],
					["rapier"		,"elegance"			,"HP -8"	,"../img/weapons/rogue/rapier.png"],
					["longsword"	,"more range"		,"HP -10"	,"../img/weapons/rogue/longsword.png"]
				]
			},
			{
				mage: [
					["nothing"		,"unarmed"			,"HP -5"	,"none"],
					["woodstaff"	,"walking staff"	,"HP -6"	,"../img/weapons/mage/woodstaff.png"],
					["copperstaff"	,"simple staff"		,"HP -7"	,"../img/weapons/mage/copperstaff.png"],
					["ironstaff"	,"strong staff"		,"HP -8"	,"../img/weapons/mage/ironstaff.png"],
					["silverstaff"	,"fancy staff"		,"HP -10"	,"../img/weapons/mage/silverstaff.png"]
				]
			}
		]
	},
	{
		secret: [
			["nothing"		,""	,""	,""],
			["gold"			,""	,""	,""],
			["to room_four"	,""	,""	,""],
			["str + 5"		,""	,""	,""],
			["HP & MP full"	,""	,""	,""]
		]
	},
	{
		traps: [
			["nothing"	,""	,""	,""],
			["spikes"	,""	,""	,""],
			["trapdoor"	,""	,""	,""],
			["beartrap" ,""	,""	,""],
			["sinkhole"	,""	,""	,""],
		]
	}
];*/