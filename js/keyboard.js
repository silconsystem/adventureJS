/*
			keyboard.js
*/
// keyboard 
function gameInfo() {
	writeHTML('game-info','keys 1 to 4 switch inventory fields, <br>use cursor up and down to scroll.<br>(shift&i) or i key on keyboard show inventory.');
}

function changeImage(id) {

	let element_id = 'key-' + id;

	let key_class = document.getElementsByClassName("ZX-keys");

	for (let i in key_class) {

		if (key_class[i].id == element_id) {

			let cssArg = '../img/keyboard/key-' +id+ '.png',
				css_up = '../img/keyboard/key-' +id+ '-up.png';
				IO = 0; 

			console.log('match:', key_class[i].id);

			if (key_class[i].name == "0") {
				key_class[i].name = "1";
				key_class[i].style.backgroundImage = 'url(' +cssArg+ ')';

				console.log('changeImage: changing background',cssArg);
			} else {
				key_class[i].name = "0";
				key_class[i].style.backgroundImage = 'url(' +css_up+ ')';

				console.log('changeImage: changing background',css_up);
			}
		}
	}
}
//Make the DIV element draggagle:
// Custom options
let options = {
	drag: false,
	resize: false,
	close: false,
	minMax: true,
	minMaxIcons: true,
	minDoubleClick: true,
	minZone: document.window
}
interactive('keyboard', options);

// listen for keypress
document.querySelectorAll('.ZX-keys').forEach(item => {

	function list(arr) {

		let list = [];

		for (let i in arr) {

			list.push(arr[i].name);
		}
		return list;
	}

  	item.addEventListener('click', event => {
    	
    	//handle click
  
    	// handle accoring to ID values
  	switch (item.id) {
    	case "key-1":
    		// focus item div 					'1 key'
        	itemId.focus();
        	console.log('keyboard:', item.id, 'pressed, focus on:', itemId.id);
    		break;
    	case "key-2":
    		// focus magic-h div 				'2 key'
        	magicHId.focus();
        	console.log('keyboard:', item.id, 'pressed, focus on:', magicHId.id);
    		break;
    	case "key-3":
    		// focus magic-d div 				'3 key'
        	magicDId.focus();
        	console.log('keyboard:', item.id, 'pressed, focus on:', magicDId.id);
    		break;
    	case "key-4":
    		// focus skills div 				'4 key'
    		skillsId.focus();
    		console.log('keyboard:', item.id, 'pressed, focus on:', skillsId.id);
    		break;
    	case "key-i":
    		// show inventory 					'i key'
    		var item_txt 	= "empty",
    			weapon_txt 	= "empty",
    			magic_D_txt = "empty",
    			magic_H_txt = "empty",
    			skills_txt 	= "empty";

    		if (player.inventory.items.length > 0) {
    			item_txt 	= list(player.inventory.items)
    		} else if (player.inventory.weapon.length > 0) {
    			weapon_txt 	= list(player.inventory.weapon)
    		} else if (player.inventory.magic_D.length > 0) {
    			magic_D_txt = list(player.inventory.magic_D)
    		} else if (player.inventory.magic_H.length > 0) {
    			magic_H_txt = list(player.inventory.magic_H)
    		} else if (player.inventory.skills.length > 0) {
    			skills_txt 	= list(player.inventory.skills)
    		}

    		var txt = "<strong>==[player inventory]==</strong><br><br><b>[weapons]::</b><br>" +weapon_txt+ "<br><b>[items]::</b><br>" +item_txt+ "<br><b>[magic_D]::</b><br>" +magic_D_txt+ "<br><b>[magic_H]::</b><br>" +magic_H_txt+ "<br><b>[skills]::</b><br>" +skills_txt+ "<br><strong>end inventory</strong><br>";
			
			console.log(txt);
			console.log('keyboard:', item.id, 'pressed, showing inventory');
			writeHTML('game-info', '<ul>' + (txt.split(",").join("</br>")) + '</ul>');
	    	   		

    		break;
    	case "key-d":
    		// show dev panel 					'd key'
    		var dipSwitches = document.getElementById("dev-switch");

    		if (dipSwitches.style.visibility == "visible") {

    			dipSwitches.style.visibility = "hidden";
    		} else {
    		
    			dipSwitches.style.visibility = "visible";
    		}
    		break;
    	default:
    		// statements_def
    		break;
    }
    	console.log(item.id);
  	});  	
});