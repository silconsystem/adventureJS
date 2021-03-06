/*			entities.js
 *
 *
 *			player objects, enemy objects, etc
 */
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

// player object 
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
 	inventory  	: inventory = {							
		items 	: inventory_items 		= [],
		weapon	: inventory_weapons 	= [],
		magic_H	: inventory_magic_H		= [],
		magic_D : inventory_magic_D 	= [],
		skills 	: inventory_skills 		= []
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
	this.drop_m 		= drop_m;
	this.drop_h 		= drop_h;
	this.st_F_P 		= st_F_P;
}