/*
	action-handles.js
	handler for the text input parser
*/

// handle text input 	
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
		target_sp,									// if 3rd string exists set value
		cmd_exists 		= false,					// command exists flag
		obj_type,									// set type for inventory / npc handler
		obj_exists 		= false,					// set exists flag for sorting
		obj_name,									// set later
		action_obj;									// if found create 'item_obj' for further sorting

	// create a base object from found item to use for later handling
	function item_obj(name, type, handler, url, exists) {
		this.name 		= name;						// name
		this.type 		= type;						// type: item|weapon|magic|npc|enemy|event
		this.handler 	= handler;					// used by actor: player|thief|warrior|rogue|mage
		this.url 		= url;						// the image url
		this.exists 	= exists;					// set exist flag 
	}

	console.log('input text:', txt, '\ncmd:', cmd, '\n', target);	// log
	console.log('player action is: ', cmd);							// log
	console.log('item object is', target);							// log

	/*
			if not empty set 3rd string variable
			"attack harold fire"

			3rd argument: 		action | target | event/object
								  cmd  | target |  target_sp
			usage example: 		attack | harold | 	fire	
	*/
	if (strArray[2] != undefined || null) {			// if more than 2 words found in string	

		target_sp 	= strArray[2];					// create extra variable 
		console.log('extra action string found: ', target_sp);
	}
	/*
		helper functions, find 2nd arguments type and return 'action_obj'
	*/
	// search in weapon array
	function getWeaponValue(itm) {

		var result,
			handler,
			url;

		for (let i in game_obj[1].weapon[0].thief[0].name) {

			// compare weapon names of each class and return new item_obj
			// or leave obj_exists false and pass the argument to another function
			if (game_obj[1].weapon[0].thief[i].name.includes(itm)) {

				obj_exists 	= true;
				handler 	= 'thief';
				url 		= game_obj[1].weapon[0].thief[i].url;
				result 		= game_obj[1].weapon[0].thief[i].name;
				break;				
			} else if (obj_exists == false) {

				obj_exists 	= true;
				handler 	= 'warrior';
				url 		= game_obj[1].weapon[1].warrior[i].url;
				result 		= game_obj[1].weapon[1].warrior[i].name;
				break;
			} else if (game_obj[1].weapon[2].rogue[i].name.includes(itm)) {
				
				obj_exists 	= true;
				handler 	= 'rogue';
				url 		= game_obj[1].weapon[2].rogue[i].url;
				result 		= game_obj[1].weapon[2].rogue[i].name;
				break;
			} else if (game_obj[1].weapon[3].mage[i].name.includes(itm)) {
				
				obj_exists 	= true;
				handler 	= 'mage';				
				url 		= game_obj[1].weapon[3].mage[i].url;
				result 		= game_obj[1].weapon[3].mage[i].name;
				break;
			}
		}
		// if obj_exists still false return false and leave 'itm' unchanged
		if (obj_exists == false) {

			itm = itm;
			console.log('getItemValue: target not found:', itm, 'checking if type magic');
			return false;

		} else {

			// set type and create new item_obj
			obj_type = 'weapon';
	        itm = new item_obj(result, obj_type, handler, url, obj_exists);
		}
		console.log('getItemValue: returning input:', itm, 'of type:',obj_type);
		return itm;	
	}

	// test if target is an item or not
	function getItemValue(itm) {

		var result,
			url;

		// find match and set obj_exists to true
		for (let i in game_obj[0].item[0].name) {

			console.log(game_obj[0].item[i].name);
		    if (game_obj[0].item[i].name.includes(itm)) {

		    	obj_exists 	= true;
		    	url 		= game_obj[0].item[i].url;
		    	result 		= game_obj[0].item[i].name;
		        break;
		    } 
		}

		// if false return false and leave 'itm' unchanged
		if (obj_exists == false) {

			itm = itm;
			console.log('getItemValue: target not found:', itm, 'checking if type weapon');
			return false;

		} else {

			handler 	= 'player';
			obj_type 	= 'item';
			url 		= url;
	        itm = new item_obj(result, obj_type, handler, url, obj_exists);
	        console.log('getItemValue: target found, input:', itm.name, 'result:', result);
	        console.log('getItemValue: returning new object:', itm);
		}
		console.log('getItemValue: returning input:', itm, 'of type:',obj_type);
		return itm;	
	}

	// set object action_obj to the returned value if function returns true
	if (getItemValue(target)) {

		action_obj = getItemValue(target);
		console.log('getItemValue: target value is now:'	, action_obj);
		console.log('getItemValue: target name:'			, action_obj.name);
		console.log('getItemValue: target type:'			, action_obj.type);
		console.log('getItemValue: target handler:'			, action_obj.handler);
		console.log('getItemValue: target url:'				, action_obj.url);
		console.log('getItemValue: target exists:'			, action_obj.exists);

		if (handleInventory(cmd, action_obj)) {

			console.log('item', action_obj.name,'succesfully added to player inventory');
			console.log(player.inventory.items);
		}

	} else if (getWeaponValue(target)) {

		action_obj = getWeaponValue(target);
		console.log('getWeaponValue: target value is now:'	, action_obj);
		console.log('getWeaponValue: target name:'			, action_obj.name);
		console.log('getWeaponValue: target type:'			, action_obj.type);
		console.log('getWeaponValue: target handler:'		, action_obj.handler);
		console.log('getWeaponValue: target url:'			, action_obj.url);
		console.log('getWeaponValue: target exists:'		, action_obj.exists);

		if (handleInventory(cmd, action_obj)) {

			console.log('item', action_obj.name,'succesfully added to player inventory');
			console.log(player.inventory.items);
		}

	} else {
		
		console.log('getItemValue returned false');
	}

	// search in white magic array
	function magicHValue(itm) { 
		// magic heal item 
	}

	// search in black magic array
	function magicDValue(itm) {
		// magic defense item
	}

	// search in skill array
	function skillValue(itm) {
		// skill item 
	}						

	// test the action exists
	function cmdExists(c) {	
	}

	// handle the take and drop command with the found item
	function handleInventory(cmdStr, itemObj) {

		console.log('handleInventory: command is:', cmdStr);
		console.log('handleInventory: item object:', itemObj);
		console.log(itemObj.name);
		console.log(itemObj.type);
		console.log(itemObj.url);
		console.log(itemObj.exists);

		// take or add 
		switch (cmdStr) {
			case "take":

				// add item to inventory
				manInventory(0, itemObj.type, itemObj);

				switch (itemObj.type) {
					case "item":
						// statements_1
						document.getElementById('item-image').innerHTML = '<img src=\"' + itemObj.url + '\">';	
						break;
					case "weapon":

						// statements_def
						document.getElementById('weapon-image').innerHTML = '<img src=\"' + itemObj.url + '\">';
						break;
				}

				break;
			case "drop":
				
				// drop item from inventory
				manInventory(1, itemObj.type, itemObj);
				document.getElementById('inventory-weapon').innerHTML = '<img src=\"../img/weapons/nothing.png\">';
				break;
			default:

				// return false if command is not valid
				if (cmdStr != "take" || "drop");
				console.log('not an inventory command');
				return false;
		}

	}
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