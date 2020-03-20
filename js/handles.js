/*		helper functions   			*/
// increment a value
var increment = (function(n) {

	return function() {
	  n += 1;
	  return n;
	}
}(0));

// handle yes no questions either by keypress or text input
// returns boolean
function getYesNo(func) {

	/*
		func = 0 : listen for keyboard input
		func = 1 : get <input>.value
	*/
	// handle y/n input
	var key = event.key || event.keyCode,
		result;

	switch (func) {
		case 0:

			console.log('getYesNo: function:', func, '; keyboard listener');
		
			// keyboard event// listen for keyboard input 'y || n'
			document.addEventListener('keyup', function (event) {

			    if (event.defaultPrevented) {
			        return;
				}

				// get key input 'y' or 'n'
			    if (key === 'y' || key === 89) {

			    	result = true;
			    	console.log('player chose \'yes\'');
			    } else if (key === 'n' || key === 78) {

			    	result = false;
		        	console.log('player chose no');				    	
		    	}
			});
			break;
		case 1:

			console.log('getYesNo: function:', func, '; text input hanle');

			// text field input
			let textInput = actionInput.value;
			textInput.toLowerCase();

			if (textInput.includes("y")) {

				result = true;
			    console.log('player chose \'yes\'');
			} else if (textInput.includes("n")) {

				result = false;
		        console.log('player chose no');	

				
			}
			break;
	}	
	return result;
}

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

function replaceHTML(target, source) {
  document.getElementById(target).innerHTML = document.getElementById(source).innerHTML;
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
				inventoryNamesList.push(item.name);			
				console.log('added ' + item + ' to: ' + id);
				break;
			case "weapon":

				// add to inventory
				player.inventory.weapon.push(item);
				inventoryNamesList.push(item.name);		
				console.log('added ' + item + ' to: ' + id);
				break;
			case "magic_H":

				// add to inventory
				player.inventory.magic_H.push(item);
				console.log('added ' + item + ' to: ' + id);
				break;
			case "magic_D":

				// add to inventory
				player.inventory.magic_D.push(item);	
				console.log('added ' + item + ' to: ' + id);

				break;
			case "skills":

				// add to inventory
				player.inventory.skills.push(item);
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
				player.inventory.magic_H.splice(index,1);
				break;
			case "spell_D":
				// statements_def
				var index = player.inventory.spell_D.indexOf(item);
				player.inventory.magic_D.splice(index,1);
				break;
			case "skills":
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
		//document.getElementById('describe').innerHTML = ;
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

	let freezeCount = moveCount,
		active 		= false;
	// get direction value
	move = document.getElementById(btn).value;

	function handleExit(exitBool) {

		switch (exitBool) {
			case 0:
				// no exit
				moveCount = freezeCount;
				writeHTML('action-display', 'you cant use this exit');
				break;
			case 1:

				// exit
				writeHTML('action-display', 'use this exit ?? (y/n)');

				let go_exit = getYesNo(0);

				if (go_exit) {
					
					// set entryPoint
					entryPoint = roomEntryPoint(mov);
		    		moveCount++;
		    	}
				break;
		}
	}
	
	function getActiveRoom() {
		// get room info from roomContentLoad class using moveCount, move
		var currentRoom = new roomContentLoad(moveCount, move);

		if (currentRoom.loadRoom()) {
				
			activeRoom = currentRoom.getRoom();
			active = false;
	    	console.log('player chose yes');
		} else {

			console.log('no room to load');
		} 
	}			

	// handle exit and entry
	function enterAndExit(mov) {

		mov = mov.toLowerCase();


		
		// N|E|S|W  = [0,0,1,1]

		switch (mov) {
			case 'n':
				
				// check if exit is possible and describe to the player
				room_objects[currentRoom.id].exit_txt[0];

				handleExit(activeRoom.exits[0]);
				break;
			case 'e':
				// check if exit is possible and describe to the player
				room_objects[currentRoom.id].exit_txt[1];
				if (activeRoom.exits[1] == 1) {
					console.log('can exit');
				}
				break;
			case 's':
				// check if exit is possible and describe to the player
				room_objects[currentRoom.id].exit_txt[2];
				if (activeRoom.exits[2] == 1) {
					console.log('can exit');
				}
			case 'w':
				// check if exit is possible and describe to the player
				room_objects[currentRoom.id].exit_txt[3];
				if (activeRoom.exits[3] == 1) {
					console.log('can exit');
				}
			default:
				// statements_def
				break;
		}
		return room_exits;
	} 	

	console.log('moveControl: move made: ' + move + '\nmoveControl: moveCount:', moveCount);
	return [move, moveCount];
}

/* load html
function loadRoom(count, dir) {

	// count 		= moveCount;
	// dir 		 	= move;

	var id 				= count+1,
		pageUrl 		= "../html/room-" + id + ".html",
		page_load		= false,
		room_exits 		= "exitObject.exits_room_" + id,
		room_scene 		= "sceneObject.describe_" + id,
		room_weapon 	= "weaponObject.weapon__" + id,
		room_item 		= "itemObject.item_" + id,
		room_npc 		= "npcObject.npc_" + id,
		room_trap 		= "trapObject.trap_" + id,
		room_secret 	= "secretObject.secret_" + id,
		entryPoint 		= roomEntryPoint(dir); 
		move 			= dir;
	
	
    fetch(pageUrl )
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
    							,entryPoint);

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
}*/

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

	// element: id 'el-d', arg: 'width', val: '10000px' 

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