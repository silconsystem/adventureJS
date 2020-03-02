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

		take + item:
			take object from room if present
		drop + item
			drop item from inventory if present
		attack + enemy
			attack enemy if present
			start battle function 					TODO: battle function
		leave + enemy
			leave room without fighting
		talk + npc
			talk to npc if present
													TODO: battle function	
		magic def + enemy
			attack enemy >> in battle mode
		magic heal + player
			HP + with item or enemy event >> in battle mode
		skill + player || npc
			use skill on player or enemy >> in battle mode
	*/
}
/* 								____player action parser input */
actionBtn.onclick = function(event) {

	event.preventDefault();
	playerAction = actionInput.value;					// set value as variable
	writeHTML('action-display',playerAction);			// write to display

	// handle the input value 			TODO: create a handler
	// textParser(playerAction);

	console.log('player action: ' + playerAction);		// log
}