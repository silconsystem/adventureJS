/*			entities.js
 *
 *
 *			player objects, enemy objects, etc
 */
 // player object
 class playerObj {

 	constructor(Name,
 				Class,
 				Health,
 				Magic,
 				Exp,
 				Level,
 				STR,
 				INT,
 				EVD,
 				LUC,
 				StatEffect,
 				d_spell,
 				h_spell,
 				skill1,
 				skill2
 				) 
 	{
	 	this.name 	= Name;
	 	this.class 	= Class;
	 	this.HP 	= Health;
	 	this.MP 	= Magic;
	 	this.exp 	= Exp;
	 	this.lvl 	= Level;
	 	this.str 	= STR;
	 	this.int  	= INT;
	 	this.evd 	= EVD;
	 	this.luc 	= LUC;
	 	this.status = StatEffect;
	 	this.M_def 	= d_spell;
	 	this.M_heal = h_spell;
	 	this.skill1 = skill1;
	 	this.skill2 = skill2;
	 }
};
// room class
var room = {

	entry_flag	: false,			// set flag if room = active
	id 			: 0,				// each room extends id var
	name 		: "",				// set room name
	exits 		: "",				// get available exits
	entry 		: entryPoint,		// get entry variable
	scene 		: "",				// describe scene on room_no check
	item_1 		: "",				// fill room with roomItems[0] = treasure where needed
	item_2		: "",				// fill room with roomItems[1] = weapons where needed
	npc 		: "",				// npc info
	trap 		: "",				// maybe there's a trap ?
	secret 		: "",				// maybe there's a secret ?
	exit_out	: exitPoint 		//exit
	
};

// player object TODO: maybe above is better ?
var player = {

 	name 	   : playerName,
 	class 	   : playerClass,
 	weapon 	   : playerWeapon,
 	HP 		   : playerHealth,
 	MP 		   : playerMagic,
 	exp 	   : playerExp,
 	lvl 	   : playerLevel,
 	str 	   : playerStats.STR,
 	int  	   : playerStats.INT,
 	evd 	   : playerStats.EVD,
 	luc 	   : playerStats.LUC,
 	status 	   : playerStatEffect,
 	M_def 	   : spellBook[0][0],
 	M_heal 	   : spellBook[1][0],
 	skill_1	   : playerSkills.none,
 	skill_2    : playerSkills.none,
 	inventory  : inventory = {
		items 	: inventory_items 		= [],
		weapon	: inventory_weapons 	= [],
		spell_H	: inventory_spell_H		= [],
		spell_D : inventory_spell_D 	= [],
		skill 	: inventory_skill 		= []
	}
};
// enemy base object
var enemy = {

 	name 		: "enemyName",			// name
 	class		: "enemy",				// class
 	level 		: "enemyLevel",			// level
 	state 		: null ,				// [aware 0/1, attk on entry 0/1, leave room 0/1]
 	description : "empty",				//describe enemy
 	text 		: "empty", 				// says stuff
 	HP 			: "enemyHealth",			// HP to take away
 	MP 			: "enemyMagic",			// MP to do spells or to take away
 	str 		: "enemyStats.STR",		// str
 	int  		: "enemyStats.INT",		// int
 	evd 		: "enemyStats.EVD",		// evd
 	luc 		: "enemyStats.LUC",		// luc
 	M_def 		: enemySpellBook[0][0],	// defensive spells
 	M_heal 		: enemySpellBook[1][0],	// healing spells
 	skills 		: enemySkills.none,		// special skills
 	exp_RW 		: experience_rewarded,	// what you gain from a kill
 	drop_M 		: enemyLootMagic[0],	// could drop magic spell
 	drop_I 		: enemyLootItem[0],		// could drop item
 	drop_H 		: enemyLootHeal[0],		// could drop healing magic/items
 	statFX 		: enemyStatEffect[0],	// can be afflicted with: enemyStatEffect
 	statF_P 	: playerStatEffect[0],	// can give you playerStatEffect
 	final 		: enemyFinalWord[0],	// last attack when HP/MP is: something
};

var npc = Object.create(enemy);
	npc.name 		= "";					// name
 	npc.class		= "npc";				// class
 	npc.description = ""; 					// describe npc
 	npc.text 		= "";					// says stuff
 	npc.state 		= action_state;			// [aware 0/1, attk on entry 0/1, leave room 0/1]
 	npc.drop_M 		= enemyLootMagic[0];	// could drop magic spell
 	npc.drop_I 		= enemyLootItem[0];		// could drop item
 	npc.drop_H 		= enemyLootHeal[0];		// could drop healing magic/items
 	npc.statF_P 	= playerStatEffect[0];	// can give you playerStatEffect

const harold = Object.create(npc);
	harold.name 		= "harold";
	harold.class 		= "npc";
	harold.description 	= "serious looking old and intimidating man";
	harold.text 		= "no lingering";
	harold.state 		= actionState('aware','speak','nodrop',null);
