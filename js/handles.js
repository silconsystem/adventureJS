/*		helper functions   			*/
// get input val
function getInputValue(in_loc, out_loc, func){

	// in_loc 	= HTML id element value
	// out_loc 	= HTML_id
	// func 	= select funtion to call

    // Selecting the input element and get its value 
    var text = document.getElementById(in_loc).value;    

    // func 1 :
    // Displaying the value
    if (func == 1) {
    	writeHTML(out_loc, text);
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
				0	"items"
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
	*//* TODO less code with function
	function itemTest(id) {
				for (var i = 0; i > id.length; i++) {

					if (item == id[i]) {

						item = id[i];
						player.inventory.id.push(item);	// add to inventory
						console.log('item: ' + item + 'exists, added to player inventory');
					} else {
						console.log('item doesn\'t exist, error');
					}
				}
			}
			*/
	if (func == 0) {	

		switch (id) {
			case "items":
				player.inventory.items.push(item);	// add to inventory
				/*itemTest(id);*/
				console.log('added ' + item + ' to: ' + id);
				break;
			case "weapon":
				player.inventory.weapon.push(item);	// add to inventory
				console.log('added ' + item + ' to: ' + id);
				break;
			case "spell_H":
				player.inventory.spell_H.push(item);	// add to inventory
				console.log('added ' + item + ' to: ' + id);
				break;
			case "spell_D":
				break;
				player.inventory.spell_D.push(item);	// add to inventory
				console.log('added ' + item + ' to: ' + id);
			case "skill":
				player.inventory.skill.push(item);	// add to inventory
				console.log('added ' + item + ' to: ' + id);
				break;
			default:

				// statements_def
				break;
		}
	} else {
		console.log('unknown value');
	}
}

/*
// fill weapon options when class is selected
function getPlayerClass(p_class) {

	var i;


	switch (p_class) {

		case "Thief":
			// fill weapon menu array for Thief class
			for (i = 1; i <= armSelMenu.options.length; i++) {

				armSelMenu.options[i].innerHTML = weapon[0][i][0];
			}

			console.log('arms select for thief');
			break;

		case "Warrior":
			// fill weapon menu array for Warrior class
			for (var i = 1; i > armSelMenu.options.length; i++) {
				
				armSelMenu.options[i].innerHTML = weapon[1][i][0];
			}

			console.log('arms select for warrior');
			break;

		case "Rogue":
			// fill weapon menu array for Rogue class
			for (var i = 1; i <= armSelMenu.options.length; i++) {
				
				armSelMenu.options[i].innerHTML = weapon[2][i][0];
			}

			console.log('arms select for rogue');
			break;

		case "Mage":
			// fill weapon menu array for Mage class
			for (var i = 1; i <= armSelMenu.options.length; i++) {
				
				armSelMenu.options[i].innerHTML = weapon[3][i][0];
			}

			console.log('arms select for mage');
			break;	
	}
}*/
/*
// check if data field is empty*
function checkInputValue(field, button) {
    var val = document.getElementById(field).value;
        var submit = true;

    if (val.length == 0) {
           submit = false;
    }

    if (submit == false) {
      document.getElementById(button).onchange = null;

      console.log('no value, button disabled');
    } else if (submit == true) {
    	document.getElementById(button)
    }

};*/

// create room descriptions
function getRoomText(rm_nm) {
	/* 
		rm_nm: 	room name
	 */
	 // TODO:

}

// call if html page is loaded
function onload() {
		
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
			for (var i = 0; i < weapon[0].length; i++) {		// iterate through class assigned weapons

				if (weapon[0][i][0] == wp) {					// if match

					wp_name = weapon[0][i][0]; 					// set name as var
					wp_url 	= weapon[0][i][3];					// set url as var
					wp_name = wp_name.toLowerCase();			// var to lowercase for html string

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
			for (var i = 0; i < weapon[1].length; i++) {		// iterate through class assigned weapons

				if (weapon[1][i][0] == wp) {					// if match

					wp_name = weapon[1][i][0];					// set var
					wp_url 	= weapon[1][i][3];					// set url as var
					wp_name = wp_name.toLowerCase();			// var to lowercase for html string

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
			for (var i = 0; i < weapon[2].length; i++) {		// iterate through class assigned weapons

				if (weapon[2][i][0] == wp) {					// if match

					wp_name = weapon[2][i][0];					// set var
					wp_url 	= weapon[2][i][3];					// set url as var
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
			for (var i = 0; i < weapon[3].length; i++) {		// iterate through class assigned weapons

				if (weapon[3][i][0] == wp) {					// if match

					wp_name = weapon[3][i][0];					// set var
					wp_url 	= weapon[3][i][3];					// set url as var
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