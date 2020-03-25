/*
	npc-enemy-list.js

	action state options:
	["aware"	, "unaware"],			// enemy attack on entry or ignores entry
	["attack"	, "passive"], 			// attack on look or ignore look
	["leave"	, "defeat"],			// no exit before defeat
	["speak"	, "mute"],				// interacts or silent
	["drop"		, "nodrop"], 			// drops inventory items or nothing
	["boss"		, "noboss"]				// boss enemy or not	

*/
// 															____NPC's
/*
// harold
var harold = Object.create(npc);
	harold.name 		= "harold";
	harold.class 		= "npc";
	harold.description 	= "serious looking old and intimidating man";
	harold.text 		= "no lingering";
	harold.state 		= actionState('aware', 'passive', 'none', 'speak','nodrop', 'noboss');
*/
/* 

	add arguments in this order

	npc(
			name,
			n_class,
			desc,
			txt,
			state,
			drop_m,
			drop_h,
			st_F_P
			)
*/
var harold = new npc('npc_001', 'harold', 'npc', 'serious looking old and intimidating man',
				 'no lingering', actionState('aware', 'passive', 'none', 'speak','nodrop', 'noboss'));

npc_objects.push(harold.name);
//															____Enemies
/* 
	add arguments in this order

	enemy(
			name, e_class, lvl, state,
			desc, txt, hp, mp, 
			str, int, evd, luc,
			m_def, m_heal, skills, exp,
			drop_m, drop_i, drop_h, st_fx,
			st_F_P, final
			)
*/
lisa = new enemy('enemy_001', 'lisa', 'enemy', 1, actionState('aware','attack','defeat', 'speak', 'drop', 'noboss'),
				'this fragile women doesn\'t look very intimidating, but attacks you anyway',
				'you don\'t have an appointment, and now you\'ll be sorry that you ever came here !',
				95, 0, 12, 10, 6, 10, 0, 0, game_objects[4].skills[1], playerExp + 10,);
npc_objects.push(lisa.name);
/*//lisa
var lisa = Object.create(enemy);
	lisa.name 			= "lisa";
	lisa.class 			= "enemy";
	lisa.level 			= 1;
	lisa.state 			= actionState('aware','attack','defeat', 'speak', "drop", "noboss");
	lisa.description 	= "this fragile women doesn't look very intimidating, but attacks you anyway";
	lisa.text 			= "you don't have an appointment, and now you'll be sorry that you ever came here !";
	lisa.HP 			= 95;
	lisa.MP 			= 0;
	lisa.str 			= 12;
	lisa.int 			= 10;
	lisa.evd 			= 6;
	lisa.luc 			= 10;
	lisa.M_def 			= 0;
	lisa.M_heal 		= 0;
	lisa.skills 		= enemySkills.back_attack;		// attacks on entry
	lisa.exp_RW  		= playerExp + 10;				// add exp after deafeat
 	lisa.drop_M 		= enemyLootMagic[2];			// if 'use_magic' is true ,drop magic 'sadness'
 	lisa.drop_I 		= enemyLootItem[1];				// drops 'porion'
 	lisa.drop_H 		= enemyLootHeal[1];				// add 10 HP to playerHealth
 	lisa.statFX 		= enemyStatEffect[0];			
 	lisa.statF_P 		= playerStatEffect[0];			
 	lisa.final 			= enemyFinalWord[0];	
 */