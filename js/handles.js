/*		helper functions   			*/
// increment a value
var increment = (function(n) {
	return function() {
	  n += 1;
	  return n;
	}
  }(0));
// get input val
function getInputValue(func, argOne, argTwo) {

	var matchedValue;

	// func 	= 0 : writeHTML() 			| func 		= 1 : get array value
	// argOne	= HTML id element value 	| argOne 	= array name
	// argTwo	= HTML_id 					| argTwo 	= value to match   

    // Displaying the value
    switch (func) {							// ____func 0 writeHTML 
    	case 0: 							

    		// Selecting the input element and get its value 
    		var text = document.getElementById(argOne.value); 

    		// write 'text' to 'out_loc'
    		writeHTML(argTwo, text);
    		console.log('writing text: ', text, 'from: ', argOne, ' to element id: ', argTwo);
    		break;
    	case 1:

    		// get array value
    		if (argOne.includes(argTwo)) {
    			matchedValue = argTwo;
    			console.log('found match with: ', argOne,' :: ', matchedValue, ' in array: ', argOne);
    		} else {
    			console.log(argOne, ' array doesn\'t contain: ', argTwo);
    		}
    		return matchedValue;
    		break;
    	default:

    		// write error to console
    		console.log('values: ', func, ' : ', argOne, ' : ', argTwo,' not valid or used wrong !')
    		break;
    }
}
// write html
function writeHTML(location, text) {
	document.getElementById(location).innerHTML = text;
}

//  get player inventory
function manInventory(func, id, item) {
	
	/* 
		func 0 	: add 
		func 1 	: remove

		id 		: type of inventory item 
				0	"item"
				1	"weapon"
				2	"magic_H"
				3	"magic_D"
				4	"skills"

		item 	: item string
				get id to push or remove from

		0: 
			if item == items[i]
				inventory[0][]
			if id = item
			push(item) to 

			TODO: get array  id and push given value 
				or remove
	*/
	// if func argument = 0 add to player inventory
	if (func == 0) {

		console.log('add to array: '. id);	

		switch (id) {
			case "item":

				// add to inventory
				player.inventory.items.push(item);				
				console.log('added ' + item + ' to: ' + id);
				break;
			case "weapon":

				// add to inventory
				player.inventory.weapon.push(item);	
				console.log('added ' + item + ' to: ' + id);
				break;
			case "spell_H":

				// add to inventory
				player.inventory.spell_H.push(item);
				console.log('added ' + item + ' to: ' + id);
				break;
			case "spell_D":

				// add to inventory
				player.inventory.spell_D.push(item);	
				console.log('added ' + item + ' to: ' + id);

				break;
			case "skill":

				// add to inventory
				player.inventory.skill.push(item);
				console.log('added ' + item + ' to: ' + id);
				break;
			default:

				// unknown statements
				console.log('unknown values, nothing added');
				break;
		}

	// if func argument = 1 	
	} else if (func == 1) {

		console.log('remove from array: ', id);

		switch (id) {
			case "item":

				// remove 'item' argument from array 'id'
				var index = player.inventory.items.indexOf(item);
				player.inventory.items.splice(index,1);
				break;
			case "weapon":
				// statements_def
				var index = player.inventory.weapon.indexOf(item);
				player.inventory.weapon.splice(index,1);
				break;
			case "spell_H":
				// statements_def
				var index = player.inventory.spell_H.indexOf(item);
				player.inventory.spell_H.splice(index,1);
				break;
			case "spell_D":
				// statements_def
				var index = player.inventory.spell_D.indexOf(item);
				player.inventory.spell_D.splice(index,1);
				break;
			case "skill":
				// statements_def
				var index = player.inventory.skill.indexOf(item);
				player.inventory.skill.splice(index,1);
				break;
		}

	} else {
		console.log('unknown value');
	}
}

// call if html page is loaded
function onload(rm_name) {
		
	var rm_name = document.getElementsByTagName('data')[0].value;

	if (rm_name == "room one") {
		intro = true;
		document.getElementById('describe').innerHTML = "this is a creepy looking house over here,<br><br>do you really want to go on...";
	} else {
		intro = false;
	}
	console.log(rm_name);
	// do !
	console.log('room html loaded');
	return rm_name;
}

// entrypoint logic
function roomEntryPoint(mv) {

	var mv = mv.toLowerCase();

	switch (mv) {
		case "n":
			entryPoint = "s";

			move = entryPoint;
			console.log('entryPoint: ' + entryPoint);
			break;
		case "s":
			entryPoint = "n";

			move = entryPoint;
			console.log('entryPoint: ' + entryPoint);
			return entryPoint;
			break;
		case "w":
			entryPoint = "e";

			move = entryPoint;
			console.log('entryPoint: ' + entryPoint);
			return entryPoint;
			break;
		case "e":
			entryPoint = "w";

			move = entryPoint;
			console.log('entryPoint: ' + entryPoint);
			return entryPoint;
			break;
	}
}

// control the NESW button
function moveControl(btn) {

		move = document.getElementById(btn).value;
		moveCount++;

		console.log('move made: ' + move);
	
}

// load html
function loadRoom(count, dir) {

	// count 		= moveCount;
	// dir 		 	= move;

	var pageUrl 		= "../html/room-00" + count + ".html",
		page_load		= false,
		id 				= count-1,
		room_exits 		= "exitObject.exits_room_00" + id,
		room_scene 		= "sceneObject.describe_00" + id,
		room_weapon 	= "weaponObject.weapon__00" + id,
		room_item 		= "itemObject.item_00" + id,
		room_npc 		= "npcObject.npc_00" + id,
		room_trap 		= "trapObject.trap_00" + id,
		room_secret 	= "secretObject.secret_00" + id,
		entryPoint 		= roomEntryPoint(dir); 
		move 			= dir;
	
	// handle exit and entry
	function enterAndExit(ex) {
		
		for (var i = 0; i >= ex.length; i++) {
			room_exits.push(ex[i]);
			console.log(ex[i]);
		}
		return room_exits;
	} 	

    fetch(pageUrl /*, options */)
    .then((response) => response.text())
    .then((html) => {

    	// parse html page 
    	loaded_room = html.toString();
    	writeHTML('room-content', html);

    	// set flag on succes
    	page_load 	= true;
    	entry_flag 	= true;

    	if (moveCount >= 2) {
    		console.log('building room');
    	/* construct a new room with these values
    	// flag,id,name,exits,entry,scene,item_1,item_2,npc,trap,secret,exit_out

    	Room_1 = new room(entry_flag,1,"room-one",1,exitObject.exits_room_001,
    							move,sceneObject.describe_001,weaponObject.weapon__001,
    							weapon[0],items[1],npcObject.npc_001,traps[0],secret[0]
    							,entryPoint);*/

    	room.flag 		= entry_flag;
    	room.id 		= id;
    	room.name 		= document.getElementsByTagName('data')[0].value;
    	room.exits 		= eval(room_exits);
    	room.entry 		= move;
    	room.scene 		= eval(room_scene);
    	room.item_1		= eval(room_weapon);
    	room.item_2 	= eval(room_item);
    	room.npc 		= eval(room_npc);
    	room.trap 		= eval(room_trap);
    	room.secret 	= eval(room_secret);
    	room.exit_out 	= move;

    	console.log('built room object');
    }
    	console.log('html page: ' + pageUrl + " :: " + loaded_room.split()[0][1]);
    }).catch((error) => {

    	// set flag on error 
    	page_load = false;
        console.log('html page: ' + pageUrl + " not loaded or error");
    });

    return Room_1;
}

// hide a div element after event
function hideHTML(id) {

	// set var from id argument
	var el = document.getElementById(id);
	el.remove();

	console.log('removed html element: ' + id);
	
	return false;
}

// change css elements
function changeCSSStyle(id,arg,val) {

	var style = function() {

		var str = "document." + "getElementById(\"" + id + "\").style." + arg + " = \"" + val +"\";"
		eval(str);

		return str;
	}
	eval(style());

	console.log(style());
	console.log("element id: " + id + " argument: " + arg + " val: " + val);

	return true;
}

// load weapon image
function loadWeaponImg(cl, wp) {
	// cl = player.class
	// wp = player.weapon
	var cl_name,
		wp_name,
		wp_url;

	switch (cl) {
		case "Thief":
			// find selected weapon
			console.log('matched thief class');
			cl_name = cl.toLowerCase();							// force lowercase on class name for html string
			for (var i = 0; i < game_obj[1].weapon[0].thief.length; i++) {		// iterate through class assigned weapons

				if (game_obj[1].weapon[0].thief[i].name == wp) {					// if match

					wp_name = game_obj[1].weapon[0].thief[i].name; 					// set name as var
					wp_url 	= game_obj[1].weapon[0].thief[i].url;					// set url as var
					wp_name = wp_name.toLowerCase();								// var to lowercase for html string

					console.log(cl_name + ' weapon: ' + wp_name);
					// write the element and url in html page 
					writeHTML('weapon-image', '<img src="' + wp_url + '" style="width : 40px; height : 40px;">');

				} else {
					console.log('no matching values found!, check input');
				}
			}
			break;
		case "Warrior":
			// find selected weapon
			console.log('matched warrior class');
			cl_name = cl.toLowerCase();							// force lowercase on class name for html string
			for (var i = 0; i < game_obj[1].weapon[1].warrior.length; i++) {		// iterate through class assigned weapons

				if (game_obj[1].weapon[1].warrior[i].name == wp) {					// if match

					wp_name = game_obj[1].weapon[1].warrior[i].name;				// set var
					wp_url 	= game_obj[1].weapon[1].warrior[i].url;					// set url as var
					wp_name = wp_name.toLowerCase();								// var to lowercase for html string

					console.log(cl_name + ' weapon: ' + wp_name);
					// write the element and url in html page 
					writeHTML('weapon-image',  '<img src="' + wp_url + '" style="width : 40px; height : 40px;">');

				} else {
					console.log('no matching values found!, check input');
				}
			}
			break;
		case "Rogue":
			// find selected weapon
			console.log('matched rogue class');
			cl_name = cl.toLowerCase();							// force lowercase on class name for html string
			for (var i = 0; i < game_obj[1].weapon[2].rogue.length; i++) {		// iterate through class assigned weapons

				if (game_obj[1].weapon[2].rogue[i].name == wp) {					// if match

					wp_name = game_obj[1].weapon[2].rogue[i].name;					// set var
					wp_url 	= game_obj[1].weapon[2].rogue[i].url;					// set url as var
					wp_name = wp_name.toLowerCase();			// var to lowercase for html string

					console.log(cl_name + ' weapon: ' + wp_name);
					// write the element and url in html page 
					writeHTML('weapon-image',  '<img src="' + wp_url + '" style="width : 40px; height : 40px;">');

				} else {
					console.log('no matching values found!, check input');
				}
			}
			break;
		case "Mage":
			// find selected weapon
			console.log('matched mage class');
			cl_name = cl.toLowerCase();							// force lowercase on class name for html string
			for (var i = 0; i < game_obj[1].weapon[3].mage.length; i++) {		// iterate through class assigned weapons

				if (game_obj[1].weapon[3].mage[i].name == wp) {					// if match

					wp_name = game_obj[1].weapon[3].mage[i].name;					// set var
					wp_url 	= game_obj[1].weapon[3].mage[i].url;					// set url as var
					wp_name = wp_name.toLowerCase();			// var to lowercase for html string

					console.log(cl_name + ' weapon: ' + wp_name);
					// write the element and url in html page 
					writeHTML('weapon-image',  '<img src="' + wp_url + '" style="width : 40px; height : 40px;">');

				} else {
					console.log('no matching values found!, check input');
				}
			}
			break;
	}
}

// check if array has value 
function checkIfEmpty(a) {

	// check if array length is not 0
	if (a.length > 0) {
		return true;
	} else {
		return false;
	}
}