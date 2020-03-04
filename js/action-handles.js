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
	// private variables
	var string 			= txt,						// player action input string
		strArray		= string.split(" "),		// split on space delimiter
		cmd 			= strArray[0],				// 1st argument: action command
		target 			= strArray[1], 				// 2nd argument: target item object 
		target_sp,
		cmd_exists 		= false,					// command exists flag
		I_obj_exists	= false,					// target object exists
		type 			= null,						// set type for inventory / npc handler
		i;

	console.log('player action is: ', cmd);			// log
	console.log('item object is', target);			// log

	/*
			3rd argument: 		action | target | event/object
								  cmd  | target |  target_sp
			usage example: 		attack | harold | 	fire	
	*/
	if (strArray[2] != undefined || null) {			// if more than 2 words found in string	

		target_sp 	= strArray[2];					// create extra variable 
		console.log('extra action string found: ', target_sp);
	}

	// test the action exists
	function cmdExists(c) {

		// test if 'cdm' exists as action command
		for (i = 0; i > player_actions.length; i++) {

			// if 'cmd' == player_actions array list
			if (c == player_actions[i]) {
				cmd = c;
			} else {
				console.log('action:', cmd, 'not valid');
				return false;				
			}
		}
		console.log('action command:', cmd, 'is valid');
		return cmd;
	}

	if (cmdExists(cmd)){
		cmd_exists = true;
		console.log('cmd',cmd,'exists');
		console.log('cmd_exists is', cmd_exists);

		// test against array, set type variable
		var opt = [
			"items",
			"weapon",
			"npc",
			"enemy",
			"spell_H",
			"spell_D",
			"skill"
		];
	}

	// TODO: find item and set type
	/*
		types:
			items
			weapon
			npc
			enemy
			------------ TODO:
			spell_H
			spell_D
			skill
	*/
	/*	switch (cmd) {
			case "take":

				// add item to inventory
				manInventory(0, type, target);
				console.log('added ', type, ' ', target, ' to inventory');
				break;

			case "drop":
				// remove item from inventory
				manInventory(1, type, target);
				console.log('added ', type, ' ', target, ' to inventory');
				break;
		}
	*/
		
}
/* 											____submit action command text */
actionBtn.onclick = function(event) {

	event.preventDefault();
	playerAction = actionInput.value;					// set value as variable
	console.log('player submitted string: ' + playerAction + '\nwrite to id: \'action-display\'');		// log

	writeHTML('action-display',playerAction);			// write to display

	// handle the input value 			TODO: create a handler
	textParser(playerAction);

}