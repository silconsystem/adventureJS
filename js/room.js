/* 			room.js
 *
 *			room objects
 */
function makeExit(mov) {

	let entry;

	switch (mov) {
		case "n":

			console.log('exit_N');

			entry = "s";
			break;
		case "e":

			console.log('exit_E');

			entry = "n";
			break;
		case "s":

			console.log('exit_S');

			entry = "s";
			break;	
		case "w":

			console.log('exit_W');

			entry = "w";
			break;
	}
	console.log('makeExit: exitpoint:', mov, '\nmakeExit: entrypoint new room:', entry);
	return entry;
}

/*
		Room Class, get event information and set room data accordingly

		- get the id of the room to link it with the room objects array properties
		- get the move of the player
		- use the counter to set the id

		build room

		- scene method; use id to find and return the proper html responses
		 - describe : on entry => to <html>
		 - look 	: get look from room_objects[id].look[etc]
		 - weapon 	: check what it is, check if it can be taken, decribe
		 - item 	: same
		 - npc 		: check if npc in room #no[id]; 
		  - if Y: check type: npc/enemy
		   - description => to <html>
		   - call handle setting npc properties
		    - call text parser argument handle
		    - return results and setup for further handling
		 - trap  	: check if trap in room #no[id]
		 - secret 	: check if secret in room #no[id]

		entry method:
		- get the value of entry so we can keep handle a map
		 - if exit = south: entry = north (moveControl(button pressed)) {returns : entryPoint}
		 - set entryPoint and set it as room_object variable
		 - if entered, set entry_flag to true, when true pressing NESW buttons doesnt update moveCount.
		  - NESW buttons onclick:
		  	- check exit y/n flags, give descriptions
		  	- UI: if exit N|E|S|W tests true; ask user to exit Y/N
		  	- if Y: update moveCount,load a new room using updated moveCount as [id]
		  	- if N: do nothing, freeze moveCount untill user input = Y(ES)
*/