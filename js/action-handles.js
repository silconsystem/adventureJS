/*
	action-handles.js

	handler for the text input parser
*/
// handle text input 				TODO:
function textParser(txt) {

	/*
		use: func('action string')

		test if valid action
		test if valid object

		set actions for each command

		commands:

		1. take + item:
			take object from room if present
		2. drop + item
			drop item from inventory if present
		3. attack + enemy
			attack enemy if present
			start battle function 					TODO: battle function
		4. leave + enemy
			leave room without fighting
		5. talk + npc
			talk to npc if present
													TODO: battle function	
		6. magic def + enemy
			attack enemy >> in battle mode
		7. magic heal + player
			HP + with item or enemy event >> in battle mode
		8. skill + player || npc
			use skill on player or enemy >> in battle mode
	*/
	var string 			= txt;
	var strArray		= string.split(" "),
		cmd 			= strArray[0],
		target 			= strArray[1],
		target_sp		= strArray[2],
		cmd_exists 		= false,
		I_obj_exists	= false,
		W_obj_exists	= false,
		type;

	//				TODO: spaghetti code:
	//				make more compact functions
	// 				TODO: organize switch statement
	//				switch statements witch trigger the helper functions.

	/*							____helper functions */
	// check if target is an npc object or enemy
	function npcValue(t) {

		if (npc_objects.includes(t)) {

			target 	= t;
		} else if (enemy_names.includes(t)) {

			target 	= t;
		} else {

			target 	= null;		
		}
		console.log('found npc: ', target);
		return target;
	}

	// get target if it exists and set type 'weapon_cmd'
	function weaponValue(t) {

		for (var i = 0 ; i >= weapon.length; i ++) {
			if (weapon[0][i][0].includes(t)) {

				target 	= t;
			} else if (weapon[1][i][0].includes(t)) {

				target 	= t;
			} else if (weapon[2][i][0].includes(t)) {

				target 	= t;
			} else if (weapon[3][i][0].includes(t)) {

				target 	= t;
			} else if (weapon[4][i][0].includes(t)) {

				target 	= t;
			} else {

				target 	= null;
			}
		}
		console.log('found weapon: ', target);
		return target;
	}

	// get command if it exists and set type 'item_cmd'
	function itemValue(t) {
		// test if target exists
		if (items.includes(t)) {

			target = t;
		} else {
			target 	= null;
		}
		console.log('found item: ', target);
		return target;
	}
	/* 												____logic 				*/
	// test if cmd, target and opt. special
	if (player_input_action.includes(cmd)) {
		cmd = cmd;
		console.log('command: ', cmd, ' found');
	} else {
		cmd = null;
		console.log('unknown value: ', cmd);
	}

	// test if item exists
	if (itemValue(target)) {
		target 	= weaponValue(target);
		type 	= "item_cmd";
	} else {
		target 	= null;
	}
	
	// test if weapon exists
	if (weaponValue(target)) {
		target 	= weaponValue(target);
		type 	= "weapon_cmd";
	} else {
		target 	= null;
	}

	// test if npc exists
	if (npcValue(target)) {
		target 	= npcValue(target);
		type 	= "npc_cmd";
	} else {
		target 	= null;
	}

	// TODO : get extra target 
	console.log('player action: ', cmd, ' target: ', target, ' type: ', type);
}

/* 								____player action parser input */
actionBtn.onclick = function(event) {

	event.preventDefault();
	playerAction = actionInput.value;					// set value as variable
	writeHTML('action-display',playerAction);			// write to display

	// handle the input value 			TODO: create a handler
	textParser(playerAction);

	console.log('player action: ' + playerAction);		// log
}