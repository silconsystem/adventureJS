/*			entities.js
 *
 *
 *			player objects, enemy objects, etc
 *//*
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
};*/
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

// player object TODO: maybe function is better ?
var player = {
	state 		: "dead",
	coins 		: 0,
 	name 	   	: playerName,
 	class 	   	: playerClass,
 	weapon 	   	: playerWeapon,
 	HP 		   	: playerStats.HP,
 	MP 		   	: playerStats.MP,
 	exp 	   	: playerExp,
 	lvl 	   	: playerLevel,
 	str 	   	: playerStats.STR,
 	int  	   	: playerStats.INT,
 	evd 	   	: playerStats.EVD,
 	luc 	   	: playerStats.LUC,
 	status 	   	: playerStatEffect,
 	M_def 	   	: spellBook[0][0],
 	M_heal 	   	: spellBook[1][0],
 	skill_1	   	: playerSkills.none,
 	skill_2    	: playerSkills.none,
 	inventory  	: inventory = {
		items 	: inventory_items 		= [],
		weapon	: inventory_weapons 	= [],
		spell_H	: inventory_spell_H		= [],
		spell_D : inventory_spell_D 	= [],
		skill 	: inventory_skill 		= []
	}
};

// enemy
function enemy (
				id, name, e_class, lvl,
				state, desc, txt, hp, mp, 
				str, int, evd, luc,
				m_def, m_heal, skills, exp,
				drop_m, drop_i, drop_h, st_fx,
				st_F_P, final
				)
{
	this.id 			= id; 			// id
 	this.name 			= name;			// name
 	this.class			= e_class;		// class
 	this.level 			= lvl;			// level
 	this.state 			= state;		// [aware 0/1; attk on entry 0/1; leave room 0/1]
 	this.description 	= desc;			// describe enemy
 	this.text 			= txt; 			// says stuff
 	this.HP 			= hp;			// HP to take away
 	this.MP 			= mp;			// MP to do spells or to take away
 	this.str 			= str;			// str
 	this.int  			= int;			// int
 	this.evd 			= evd;			// evd
 	this.luc 			= luc;			// luc
 	this.M_def 			= m_def;		// defensive spells
 	this.M_heal 		= m_heal;		// healing spells
 	this.skills 		= skills;		// special skills
 	this.exp_RW 		= exp;			// what you gain from a kill
 	this.drop_M 		= drop_m;		// could drop magic spell
 	this.drop_I 		= drop_i;		// could drop item
 	this.drop_H 		= drop_h;		// could drop healing magic/items
 	this.statFX 		= st_fx;		// can be afflicted with= enemyStatEffect
 	this.statF_P 		= st_F_P;		// can give you playerStatEffect
 	this.final 			= final;		// last attack when HP/MP is: something
}

// npc
function npc(
			id,
			name,
			n_class,
			desc,
			txt,
			state,
			drop_m,
			drop_h,
			st_F_P
			) 
{
	this.id 			= id;
	this.name 			= name;
	this.class 			= n_class;
	this.description 	= desc;
	this.text 			= txt;
	this.state 			= state;
	this.drop_m 		= enemyLootMagic[0];
	this.drop_h 		= enemyLootItem[0];
	this.st_F_P 		= playerStatEffect[0];
}