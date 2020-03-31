/*			engine.js
 *
 *			game logic, get&set functions
 */
 /* 		DEV SWITCHES 		*/
 /* =========================== */
function change(id) {

	let ID 		= "dip-" + id,
		cssId 	= document.getElementById(ID);

	function getAction(id) {

		console.log('getAction:', id);

		switch (id) {
			case "dip-1":
				// statements_1
				if (cssId.name == "off") {
					changeCSSStyle("dev-switch", "visibility", "hidden");
					cssId.name = "on";
					console.log('getAction: hid dev switch panel,')
				} 
				break;
			case "dip-2":
				// statements_1
				if (cssId.name === "off") {
					cssId.name = "on";
					console.log('change: dip 2 state:', cssId.name);
				} 
				playerDummy();

				var	htmlString = "<table id=\"stat-table\" class=\"character-build\"><tr><td>Name: " + player.name + "</td></tr><tr><td>Class: " + player.class + "</td></tr><tr><td>Arms: " + player.weapon + "</td></tr><tr><td>Exp:" + player.exp + "</td></tr><tr><td>Level:" + player.lvl + "</td></tr><tr><td>HP: " + player.HP + "</td></tr><tr><td>MP: " + player.MP + "</td></tr><tr><td>STR: " + player.str + "</td></tr><tr><td>INT: " + player.int + "</td></tr><tr><td>EVD: " + player.evd + "</td></tr><tr><td>LUC: " + player.luc + "</td></tr><tr><td>Skill: " + player.inventory.skills[0].name + "</td></tr></table>";
				startBtn.click();
				writeHTML('stats', htmlString);
				break;
			case "dip-3":
				// statements_1
				if (cssId.name == "off") {
					changeCSSStyle("player-content", "border", "0px");
					changeCSSStyle("input-values", "border", "0px");
					changeCSSStyle("game-content", "border", "0px");
					changeCSSStyle("player-stats", "border", "0px");
					cssId.name = "on";
				} else {
					changeCSSStyle("player-content", "border", "1px dotted #fa7d7d");
					changeCSSStyle("input-values", "border", "1px dotted #fa7d7d");
					changeCSSStyle("game-content", "border", "1px dotted #fa7d7d");
					changeCSSStyle("player-stats", "border", "1px dotted #fa7d7d");
					cssId.name = "off";
				}
				break;
		}
	}

	console.log('change: call id:', ID);

	if (cssId.getAttribute("style") != "background-image: url(\"../img/dev/switch-down.png\")") {

		cssId.name = "on";
		cssId.setAttribute("style", "background-image: url(\"../img/dev/switch-down.png\")");
		getAction(cssId.id);
		console.log('change: DIP on, state:', cssId.name);
	} else {

		cssId.name = "off";
		cssId.setAttribute("style", "background-image: url(\"../img/dev/switch-up.png\")");
		getAction(cssId.id);
		console.log('change: DIP off, state:', cssId.name);
	}
}
// 
function inventoryInfo(invObj) {

	var info = {};

	if (invObj) {
		
		console.log('inventoryInfo: extracting info from object:', invObj, '\n', invObj.name, '\n', invObj.type, '\n', invObj.description, '\n');
	
		info = {
			invObjectName: invObj.name,
			invObjectType: invObj.type,
			invObjectDesc: invObj.description
		}
	}	
}

// fill weapon options when class is selected
function getClassWeaponOptions(p_class) {

	var weaponsList = [];

	// get the weapons belonging to the class
	function listWeapons(cl) {

		var weapons = [];

		for (let i in game_objects[1].weapon) {

			if (game_objects[1].weapon[i].handler == cl) {
				weapons.push(game_objects[1].weapon[i].name);
			}
		}
		return weapons;
	}

	p_class = p_class.toLowerCase();

	console.log('getClassWeaponOptions: class name:', p_class);	


	switch (p_class) {

		case "thief":

			// fill weapon menu array for Thief class
			weaponsList = listWeapons(p_class);

			for (var i = 1; i <= armSelMenu.options.length; i++) {

				if (i < 5) {

					console.log(game_objects[1].weapon[i].name);
					armSelMenu.options[i].innerHTML = weaponsList[i];
				}
			}

			console.log('arms select for thief');
			break;

		case "warrior":

			// fill weapon menu array for Warrior class
			weaponsList = listWeapons(p_class);

			for (var i = 1; i <= armSelMenu.options.length; i++) {

				if (i < 5) {

					console.log(game_objects[1].weapon[i].name);
					armSelMenu.options[i].innerHTML = weaponsList[i];
				}
			}

			console.log('arms select for warrior');
			break;

		case "rogue":
			// fill weapon menu array for Rogue class
			weaponsList = listWeapons(p_class);

			for (var i = 1; i <= armSelMenu.options.length; i++) {

				if (i < 5) {

					console.log(game_objects[1].weapon[i].name);
					armSelMenu.options[i].innerHTML = weaponsList[i];
				}
			}

			console.log('arms select for rogue');
			break;

		case "mage":

			// fill weapon menu array for Mage class
			weaponsList = listWeapons(p_class);

			for (var i = 1; i <= armSelMenu.options.length; i++) {

				if (i < 5) {

					console.log(game_objects[1].weapon[i].name);
					armSelMenu.options[i].innerHTML = weaponsList[i];
				}
			}

			console.log('arms select for mage');
			break;
	}
}
// get player name
nameBtn.onclick = function(event) {						

	event.preventDefault();										// disable unwanted behaviour	
	playerName = document.getElementById('name-value').value;	// get value from button
	playerName = playerName.trim();								// get test value and trim whitespace

	// test if value is undefined or empty string
	if (playerName == undefined  || playerName == "") {			// if == undefined || empty

		playerName = undefined;									// set value back to undefined
		writeHTML(char_name , "cant be empty");					// alert user in span element
		
		console.log('no value input');							// console info

		return false;											// return failed action
	} else {													// if != undefined || empty

		player.name = playerName;								

		writeHTML(char_name ,playerName);						// alert user in span element
		writeHTML('skills', playerSkills.none);				// add info TODO: ??? <<<<<<<<<<<<<<<<<<<<<<<<< ????
		
		console.log('player name set: ' + playerName);			// console info
		
		return true;											// return succes
	}
}

// get selected character class
charSelMenu.onchange = function(event) {

	event.preventDefault();														// remove default behaviour
	playerClass 	= document.getElementById('character-menu').value;			// get element val
	playerClass	 	= playerClass.trim();										// trim whitespace

	// test undefined or empty
	if (player.name == undefined || player.name == "") {

		playerClass = undefined;												// set span value	

		writeHTML(char_name ,'name first');										// alert user
 		console.log('no name var');												// console info

		document.getElementById('character-menu').options.selectedIndex = 0; 	// set index back to 0

		return false;
	} else {

		player.class = playerClass;

		switch (playerClass) {
			case "Thief":
				// class info
				writeHTML('char-class', 'you chose to play as a ' + playerClass);
				writeHTML('skills', playerSkills.first_attack);
				writeHTML('class-image', '<img src="../img/thief.png" style="width : 100px; height : 100px; text-align: center;">');
				// TODO: .GIF looks pixelated but animations could be added otherwise
				//writeHTML('class-image', '<img src="../img/thief_anim.gif" style="width : 100px; height : 100px; text-align: center;">');
				break;
			case "Warrior":
				// class info
				writeHTML('char-class', 'you chose to play as  a' + playerClass);
				writeHTML('class-image', '<img src="../img/warrior.png" style="width : 100px; height : 100px; text-align: center;">');
				break;
			case "Rogue":
				// class info
				writeHTML('char-class', 'you chose to play as a ' + playerClass);
				writeHTML('class-image', '<img src="../img/rogue.png" style="width : 100px; height : 100px; text-align: center;">');
				break;
			case "Mage":
				// class info
				writeHTML('char-class', 'you chose to play as a ' + playerClass);
				writeHTML('class-image', '<img src="../img/mage.png" style="width : 100px; height : 100px; text-align: center;">');
				break;
			default:
				// no input
				console.log('no input value');
				break;
		}

		getClassWeaponOptions(playerClass);											
		console.log('created class');

		return true;
	}

}

// get selected weapon
armSelMenu.onchange = function(event) {

	var pl_weaponObj;

	event.preventDefault();

	playerWeapon 	= document.getElementById('weapon-menu').value;
	playerWeapon  	= playerWeapon.trim();

	c_created = true;													// set created flag flag
	pl_weaponObj = objArray('weapon', playerWeapon);
	playerWeapon = pl_weaponObj;
																		// TODO: cannot use textParser if false
	player.weapon = playerWeapon;										// set player.weapon
	writeHTML('arm-name' ,'weapon selected: ' + playerWeapon.name);		// write name to HTML

	console.log('player weapon: ' + playerWeapon.name);
	console.log('weapon object: ' + pl_weaponObj.name);
}

// create character
startBtn.onclick = function(event) {

	event.preventDefault();		
		
	var targetElement = 'stats';
	
	let new_stats 	= document.querySelectorAll("#game-stats");
	let new_img 	= document.querySelectorAll("#class-image");
	let new_W_img 	= document.querySelectorAll("#weapon-image");

	if (playerWeapon) {
		manInventory(0, playerWeapon.type, playerWeapon)
		newrow(0, playerWeapon);
		for (let i = 0; i < new_stats.length; i++) {

		new_stats[i].style.visibility 	= 'visible';
		new_stats[i].style.position 	= "absolute";
		new_stats[i].style.width 		= "300px";
		new_stats[i].style.height 		= "640px";
		new_stats[i].style.left 		= "0px";
		new_stats[i].style.top 			= "50px";
		new_stats[i].style.border 		= "1px solid #000";

		console.log('style changed: ' + new_stats[0].id);
		}	

		for (let i = 0; i < new_img.length; i++) {

			new_img[i].style.position 		= "relative";
			new_img[i].style.top 			= "5px";
			new_img[i].style.margin 	 	= "0 auto";

			console.log('style changed: ' + new_stats[0].id);
		}

		for (let i = 0; i < new_img.length; i++) {

			new_W_img[i].style.position 	= "relative";
			new_W_img[i].style.top 			= "0px";
			new_W_img[i].style.left 		= "0px";
			new_W_img[i].style.width	 	= "40px";
			new_W_img[i].style.height 		= "40px";

			console.log('style changed: ' + new_stats[0].id);
		}

		switch (playerClass) {

			case "Thief":
				player.state 	= "alive";
		 		player.coins 	= 100;
				player.name 	= playerName;
				player.class 	= playerClass;
				player.weapon 	= player.inventory.weapon[0].name;
				player.exp 		= 100;
				player.lvl 		= 1;
				player.HP 		= playerStats.HP 	+ 12;
				player.MP  		= playerStats.MP 	= 0;
				player.str 		= playerStats.STR 	+ 6;
				player.int 		= playerStats.INT 	+ 6;
				player.evd 		= playerStats.EVD 	+ 4;
				player.luc 		= playerStats.STR 	+ 11;

				manInventory(0, game_objects[4].skills[1].type, game_objects[4].skills[1]);
				newrow(0, game_objects[4].skills[1]);

				var	htmlString = "<table id=\"stat-table\" class=\"character-build\"><tr><td>Name: " + player.name + "</td></tr><tr><td>Class: " + player.class + "</td></tr><tr><td>Arms: " + player.weapon + "</td></tr><tr><td>Exp: " + player.exp + "</td></tr><tr><td>Level:" + player.lvl + "</td></tr><tr><td>HP: " + player.HP + "</td></tr><tr><td>MP: " + player.MP + "</td></tr><tr><td>STR: " + player.str + "</td></tr><tr><td>INT: " + player.int + "</td></tr><tr><td>EVD: " + player.evd + "</td></tr><tr><td>LUC: " + player.luc + "</td></tr><tr><td>Skill: " + player.inventory.skills[0].name + "</td></tr></table>";

				writeHTML(targetElement, htmlString);

				console.log('name: ' +playerName + ' class: ' + playerClass + ' chosen');
				break;
			case "Warrior":
				player.state 	= "alive";
		 		player.coins 	= 100;
				player.name 	= playerName;
				player.class 	= playerClass;
				player.weapon 	= player.inventory.weapon[0].name;
				player.exp 		= 100;
				player.lvl 		= 1;
				player.HP 		= playerStats.HP 	+ 20;
				player.MP  		= playerStats.MP 	= 0;
				player.str 		= playerStats.STR 	+ 10;
				player.int 		= playerStats.INT 	+ 2;
				player.evd 		= playerStats.EVD 	+ 6;
				player.luc 		= playerStats.STR 	+ 5;

				manInventory(0, game_objects[4].skills[4].type, game_objects[4].skills[4]);
				newrow(0, game_objects[4].skills[4]);

				var	htmlString = "<table id=\"stat-table\" class=\"character-build\"><tr><td>Name: " + player.name + "</td></tr><tr><td>Class: " + player.class + "</td></tr><tr><td>Arms: " + player.weapon + "</td></tr><tr><td>Exp:" + player.exp + "</td></tr><tr><td>Level:" + player.lvl + "</td></tr><tr><td>HP: " + player.HP + "</td></tr><tr><td>MP: " + player.MP + "</td></tr><tr><td>STR: " + player.str + "</td></tr><tr><td>INT: " + player.int + "</td></tr><tr><td>EVD: " + player.evd + "</td></tr><tr><td>LUC: " + player.luc + "</td></tr><tr><td>Skill: " + player.inventory.skills[0].name + "</td></tr></table>";

				writeHTML(targetElement, htmlString);
				console.log('name: ' +playerName + ' class: ' + playerClass + ' chosen');
				break;
			case "Rogue":
				player.state 	= "alive";
		 		player.coins 	= 100;
				player.name 	= playerName;
				player.class 	= playerClass;
				player.weapon 	= player.inventory.weapon[0].name;
				player.exp 		= 100;
				player.lvl 		= 1;
				player.HP 		= playerStats.HP 	+ 15;
				player.MP  		= playerStats.MP 	= 0;
				player.str 		= playerStats.STR 	+ 7;
				player.int 		= playerStats.INT 	+ 10;
				player.evd 		= playerStats.EVD 	+ 7;
				player.luc 		= playerStats.STR 	+ 7;

				manInventory(0, game_objects[4].skills[2].type, game_objects[4].skills[2]);
				newrow(0, game_objects[4].skills[2]);

				var	htmlString = "<table id=\"stat-table\" class=\"character-build\"><tr><td>Name: " + player.name + "</td></tr><tr><td>Class: " + player.class + "</td></tr><tr><td>Arms: " + player.weapon + "</td></tr><tr><td>Exp:" + player.exp + "</td></tr><tr><td>Level:" + player.lvl + "</td></tr><tr><td>HP: " + player.HP + "</td></tr><tr><td>MP: " + player.MP + "</td></tr><tr><td>STR: " + player.str + "</td></tr><tr><td>INT: " + player.int + "</td></tr><tr><td>EVD: " + player.evd + "</td></tr><tr><td>LUC: " + player.luc + "</td></tr><tr><td>Skill: " + player.inventory.skills[0].name + "</td></tr></table>";

				writeHTML(targetElement, htmlString);
				console.log('name: ' +playerName + ' class: ' + playerClass + ' chosen');
				break;
			case "Mage":
				player.state 	= "alive";
		 		player.coins 	= 100;			
				player.name 	= playerName;
				player.class 	= playerClass;
				player.weapon 	= player.inventory.weapon[0].name;
				player.exp 		= 100;
				player.lvl 		= 1;
				player.HP 		= playerStats.HP 	+ 5;
				player.MP  		= playerStats.MP 	= 20;
				player.str 		= playerStats.STR 	+ 6;
				player.int 		= playerStats.INT 	+ 20;
				player.evd 		= playerStats.EVD 	+ 15;
				player.luc 		= playerStats.STR 	+ 7;

				manInventory(0, game_objects[4].skills[4].type, game_objects[4].skills[4]);
				newrow(0, game_objects[4].skills[4]);

				var	htmlString = "<table id=\"stat-table\" class=\"character-build\"><tr><td>Name: " + player.name + "</td></tr><tr><td>Class: " + player.class + "</td></tr><tr><td>Arms: " + player.weapon + "</td></tr><tr><td>Exp:" + player.exp + "</td></tr><tr><td>Level:" + player.lvl + "</td></tr><tr><td>HP: " + player.HP + "</td></tr><tr><td>MP: " + player.MP + "</td></tr><tr><td>STR: " + player.str + "</td></tr><tr><td>INT: " + player.int + "</td></tr><tr><td>EVD: " + player.evd + "</td></tr><tr><td>LUC: " + player.luc + "</td></tr><tr><td>Skill: " + player.inventory.skills[0].name + "</td></tr></table>";

				writeHTML(targetElement, htmlString);
				console.log('name: ' +playerName + ' class: ' + playerClass + ' chosen');
				break;
		}
			
		changeCSSStyle("input-values", "height", "0px");
		changeCSSStyle("save-button", "visibility", "visible");
		changeCSSStyle("room", "visibility", "visible");

		writeHTML('char-name', '');
		writeHTML('char-class', '');
		writeHTML('arm-name', '');
		writeHTML('skills', '');
/*
		writeHTML('action-display', 'press any direction and you are off...<br><br>');
		document.getElementById('action-display').innerHTML += ('[MESSAGE:] >>>>>>>>>>>>>>>>>>><br>');
		document.getElementById('action-display').innerHTML += ('you have been summoned by larp corporation,\nThere\'s this old house they found and they dont dare to enter,\n but they figured you would !<br>');
		document.getElementById('action-display').innerHTML += ('[MESSAGE:] >>>>>>>>>>>>>>>>>>><br>');
		document.getElementById('action-display').innerHTML += ('Lorem ipsum adipiscing elit members of the grief. But variable region that pregnant lion skirt. Each makeup Vulputate sauce. largest real estate passengers. Maecenas Performance pot diam deductible policies. Vestibulum in dignissim nibh, nisi pretium dui. Phasellus in nulla ac sem pulvinar dignissim.<br>Lorem ipsum adipiscing elit members of the grief. But variable region that pregnant lion skirt. Each makeup Vulputate sauce. largest real estate passengers. Maecenas Performance pot diam deductible policies. Vestibulum in dignissim nibh, nisi pretium dui. Phasellus in nulla ac sem pulvinar dignissim.');
		console.log('character created');
*/
		loadHTML(null, 'room', '../html/message.html');

		changeCSSStyle('dice-display', 'visibility', 'visible');
		hideHTML('player-content');
	} else {
		// no player.weapon
		writeHTML('arm-name' ,'no weapon selected');
	}	
}

// get movement variables
northBtn.onclick = function(event) {

	event.preventDefault();
	moveControl('north');

	writeHTML("action-display", "north<br>");
	console.log('direction: north');
	//loadRoom(moveCount, move);
}
eastBtn.onclick = function(event) {

	event.preventDefault();
	moveControl('east');
    
	writeHTML("action-display", "east<br>");
	console.log('direction: east');
	//loadRoom(moveCount, move);	
}
southBtn.onclick = function(event) {

	event.preventDefault();
	moveControl('south');

	writeHTML("action-display", "south<br>");
	console.log('direction: south');
   	//loadRoom(moveCount, move);	
}
westBtn.onclick = function(event) {


	event.preventDefault();
	moveControl('north');
    
	writeHTML("action-display", "west<br>");
	console.log('direction: west');
	//loadRoom(moveCount, move);	
}
lookBtn.onclick = function(event) { // TODO:: layout, make the description divs more interesting
	event.preventDefault();

	if (room.id >= 0) {
	document.getElementById('room-name').innerHTML = room.name;
	document.getElementById('describe').innerHTML = room.scene;
	console.log('looking around');
	}
}
weaponBtn.onclick = function(event) {
	event.preventDefault();	
	document.getElementById('describe').innerHTML = room.item_1;
	console.log('looking for weapons');
}

itemBtn.onclick = function(event) {
	event.preventDefault();
	document.getElementById('describe').innerHTML = room.item_2;
	console.log('looking for items');
}
/* 						 DICE ROLLER							*/
document.querySelector('input[type=button]#dice-button').addEventListener('click', function(){rollTheDice();});

/*
	becomes a background function, call to calculate hits by status values 
*/
var rollTheDice = function() {
    var i,
        faceValue,
        output = '',
        diceCount = 2;
        //diceCount = document.querySelector('input[type=number]#dice-number').value || 1;
    for (i = 0; i < diceCount; i++) {
        faceValue = Math.floor(Math.random() * 6);
        output += "&#x268" + faceValue + "; ";
    }
    document.getElementById('dice').innerHTML = output;
    console.log(output);
}