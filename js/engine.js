/*			engine.js
 *
 *			game logic, get&set functions
 */
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
			for (var i = 1; i <= armSelMenu.options.length; i++) {
				
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
		writeHTML('arm-name', playerSkills.none);				// add info
		
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
				writeHTML('arm-name', playerSkills.first_attack);
				writeHTML('class-image', '<img src="../img/thief.png" style="width : 100px; height : 100px; text-align: center;">');
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

		getPlayerClass(playerClass);											
		console.log('created class');

		return true;
	}

}

// get selected weapon
armSelMenu.onchange = function(event) {

	event.preventDefault();
	playerWeapon 	= document.getElementById('weapon-menu').value;
	playerWeapon  	= playerWeapon.trim();

	if (playerWeapon == undefined || playerWeapon == "") {

		playerWeapon = undefined;
		writeHTML(char_name ,'no weapon value input');
		document.getElementById('weapon-menu').options.selectedIndex = 0;

		c_created = false;

		console.log('no weapon value');
	
		return false;
	} else if (playerName == undefined || playerName == "") {

		playerWeapon = undefined;
		writeHTML(char_name ,'no name value input');
		document.getElementById('weapon-menu').options.selectedIndex = 0;

		c_created = false;

		console.log('no name value');

		return false;
	} else {

		player.weapon = playerWeapon;
		writeHTML('arm-name' ,'weapon selected: ' + playerWeapon);

		loadWeaponImg(player.class, player.weapon);

		c_created = true;

		console.log('weapon: ' + playerWeapon);

		return true;
	}
}

// create character
startBtn.onclick = function(event) {
	event.preventDefault();

	if (c_created == false) {
		console.log('first fill out all the fields in order');

		return false;
	} else {

		var htmlString,
			targetElement = 'stats';

		let new_stats 	= document.querySelectorAll("#player-stats");

			for (let i = 0; i < new_stats.length; i++) {

				new_stats[i].style.position = "absolute";
				new_stats[i].style.border 	= "1px solid #000";
				new_stats[i].style.width 	= "350px";
				new_stats[i].style.height 	= "400px";
				new_stats[i].style.left 	= "0px";
				new_stats[i].style.top 		= "10px";
				new_stats[i].style.padding 	= "10px;";

				console.log('style changed: ' + new_stats);
			}

		let new_img 	= document.querySelectorAll("#class-image");

			for (let i = 0; i < new_img.length; i++) {

				new_img[i].style.border = "3px solid #000";
				new_img[i].style.top 	= "60px";
				new_img[i].style.left 	= "200px";

				console.log('style changed: ' + new_stats);
			}

		// TODO new position
		// TODO add rogue and mage img

		switch (playerClass) {
			case "Thief":
				player.name 	= playerName;
				player.class 	= playerClass;
				player.weapon 	= playerWeapon;
				player.str 		= player.str = 2;
				player.int 		= player.int = 6;
				player.evd 		= player.evd = 4;
				player.luc 		= player.luc = 11;
				player.M_def 	= spellBook[0][0];
				player.M_heal 	= spellBook[1][0];
				player.skill_1 	= playerSkills.first_attack;
				player.skill_2 	= playerSkills.scan_enemy;

				htmlString = "<table id=\"stat-table\"><tr><td>Name: " + player.name + "</td></tr><tr><td>Class: " + player.class + "</td></tr><tr><td>Arms: " + player.weapon + "</td></tr><tr><td>STR: " + player.str + "</td></tr><tr><td>INT: " + player.int + "</td></tr><tr><td>EVD: " + player.evd + "</td></tr><tr><td>LUC: " + player.luc + "</td></tr><tr><td>M_DEF: " + player.M_def + "</td></tr><tr><td>M_Heal: " + player.M_heal + "</td></tr><tr><td>skill one: " + player.skill_1 + "</td></tr><tr><td>skill two: " + player.skill_2 + "</td></tr></table>";
		
				writeHTML(targetElement, htmlString);

				console.log('name: ' +playerName + ' class: ' + playerClass + ' chosen');
				break;
			case "Warrior":
				player.name 	= playerName;
				player.class 	= playerClass;
				player.weapon 	= playerWeapon;
				player.str 		= player.str = 11;
				player.int 		= player.int = 2;
				player.evd 		= player.evd = 3;
				player.luc 		= player.luc = 4;
				player.M_def 	= spellBook[0][0];
				player.M_heal 	= spellBook[1][0];
				player.skill_1 	= playerSkills.berserker;
				player.skill_2 	= playerSkills.none;

				htmlString = "<table id=\"stat-table\"><tr><td>Name: " + player.name + "</td></tr><tr><td>Class: " + player.class + "</td></tr><tr><td>Arms: " + player.weapon + "</td></tr><tr><td>STR: " + player.str + "</td></tr><tr><td>INT: " + player.int + "</td></tr><tr><td>EVD: " + player.evd + "</td></tr><tr><td>LUC: " + player.luc + "</td></tr><tr><td>M_DEF: " + player.M_def + "</td></tr><tr><td>M_Heal: " + player.M_heal + "</td></tr><tr><td>skill one: " + player.skill_1 + "</td></tr><tr><td>skill two: " + player.skill_2 + "</td></tr></table>";
		
				writeHTML(targetElement, htmlString);
				console.log('name: ' +playerName + ' class: ' + playerClass + ' chosen');
				break;
			case "Rogue":
				player.name 	= playerName;
				player.class 	= playerClass;
				player.weapon 	= playerWeapon;
				player.str 		= player.str = 3;
				player.int 		= player.int = 11;
				player.evd 		= player.evd = 7;
				player.luc 		= player.luc = 6;
				player.M_def 	= spellBook[0][4];
				player.M_heal 	= spellBook[1][1];
				player.skill_1 	= playerSkills.scan_enemy;
				player.skill_2 	= playerSkills.use_magic;

				htmlString = "<table id=\"stat-table\"><tr><td>Name: " + player.name + "</td></tr><tr><td>Class: " + player.class + "</td></tr><tr><td>Arms: " + player.weapon + "</td></tr><tr><td>STR: " + player.str + "</td></tr><tr><td>INT: " + player.int + "</td></tr><tr><td>EVD: " + player.evd + "</td></tr><tr><td>LUC: " + player.luc + "</td></tr><tr><td>M_DEF: " + player.M_def + "</td></tr><tr><td>M_Heal: " + player.M_heal + "</td></tr><tr><td>skill one: " + player.skill_1 + "</td></tr><tr><td>skill two: " + player.skill_2 + "</td></tr></table>";
		
				writeHTML(targetElement, htmlString);
				console.log('name: ' +playerName + ' class: ' + playerClass + ' chosen');
				break;
			case "Mage":			
				player.name 	= playerName;
				player.class 	= playerClass;
				player.weapon 	= playerWeapon;
				player.str 		= player.str = 3;
				player.int 		= player.int = 11;
				player.evd 		= player.evd = 7;
				player.luc 		= player.luc = 6;
				player.M_def 	= spellBook[0][3];
				player.M_heal 	= spellBook[1][1];
				player.skill_1 	= playerSkills.use_magic;
				player.skill_2 	= playerSkills.none;

				htmlString = "<table id=\"stat-table\"><tr><td>Name: " + player.name + "</td></tr><tr><td>Class: " + player.class + "</td></tr><tr><td>Arms: " + player.weapon + "</td></tr><tr><td>STR: " + player.str + "</td></tr><tr><td>INT: " + player.int + "</td></tr><tr><td>EVD: " + player.evd + "</td></tr><tr><td>LUC: " + player.luc + "</td></tr><tr><td>M_DEF: " + player.M_def + "</td></tr><tr><td>M_Heal: " + player.M_heal + "</td></tr><tr><td>skill one: " + player.skill_1 + "</td></tr><tr><td>skill two: " + player.skill_2 + "</td></tr></table>";
		
				writeHTML(targetElement, htmlString);
				console.log('name: ' +playerName + ' class: ' + playerClass + ' chosen');
				break;
			}

		changeCSSStyle("input-values", "height", "0px");

		writeHTML('char-name', '');
		writeHTML('char-class', ''),
		writeHTML('arm-name', '');
		writeHTML('describe','you have been summoned by larp corporation,\nThere\'s this old house they found and they dont dare to enter,\n but they figured you would !');

		console.log('character created');

		hideHTML('player-content');
		hideHTML("char-name");
		hideHTML("char-class");
		hideHTML("arm-name");
	}
}

// get movement variables
northBtn.onclick = function(event) {

	event.preventDefault();
	moveControl('north');

	loadRoom(moveCount, move);
}
eastBtn.onclick = function(event) {

	event.preventDefault();
	moveControl('east');
    
	loadRoom(moveCount, move);	
}
southBtn.onclick = function(event) {

	event.preventDefault();
	moveControl('south');
    
	loadRoom(moveCount, move);	
}
westBtn.onclick = function(event) {


	event.preventDefault();
	moveControl('north');
    
	loadRoom(moveCount, move);	
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




