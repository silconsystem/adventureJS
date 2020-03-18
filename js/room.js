/* 			room.js
 *
 *			room objects
 */
function makeExit(mov) {

	switch (mov) {
		case "n":

			console.log('exit_N');

			entrypoint = "s";

			console.log('entrypoint: ' + entrypoint);
			return entrypoint;
			break;
		case "e":

			console.log('exit_E');

			entrypoint = "n";

			console.log('entrypoint: ' + entrypoint);
			return entrypoint;
			break;
		case "s":

			console.log('exit_S');

			entrypoint = "s";

			console.log('entrypoint: ' + entrypoint);
			return entrypoint;
			break;	
		case "w":

			console.log('sceneObjects.exit_W');

			entrypoint = "w";

			console.log('entrypoint: ' + entrypoint);
			return entrypoint;
			break;
	}
	console.log('exit');
}

// scenes
var sceneObject = {
	describe_001 	: "You step into a large livingroom<br>there's a strange man staring at you<br>You spot an object in the SouthWest corner and a chest in the SouthEast one<br>But a strange man stands in the middle of the room",
	look_001 		: "you spot something resembling a pistol, and a box of sorts"
}
// exits
var exitObject = {
	exits_001		: "There is a stairs in the East corner and a door to the South",
	exits_room_001	: ["none, east, south, none"], // N, E, S, W always same order
	exit_N_001		: "You walk past him and go for the North exit door to get out of here, but it's locked already!!<br>If your difficult he will be displeased, the man says in a gloomy voice",
	exit_S_001 		: "There's a door at the South exit but the man is already pointing you to the stairway on the East",
	exit_E_001		: "You follow the man up the stairs",
	exit_W_001 		: "There is nothing there but a wall",
	// 				____002____
	exits_002		: "TODO"
}
/*// npc's
var npcObject = {
	npc_001			: "So you finally came, larp sent you right?<br>Follow me, he's waiting for you...",
	npc_001_n		: "harold"
	//				____002____ TODO: dont forget comma above !
}
// enemies
var enemyObject = {
	enemy_001       : "Do you have an appointment ?",
}
// weapons
var weaponObject = {
	weapon__001 	: "You find a rusted pistol<br>Dont touch anything, come here ! The man says...",
	weapon__001_f 	: 0 		// flag: 1 = can take, 0 = cant take

	// 				____002____ TODO: dont forget comma above !
}
// treasure
var itemObject = {
	item_001		: "You manage to take a potion from this chest when the man looks for his keys",
	item_001_name 	: "potion",
	item_001_f	 	: 1 		// // flag: 1 = can take, 0 = cant take
	// 				____002____ TODO: dont forget comma above !
}
// traps 
var trapObject = {
	trap_001		: "none"
}
// secrets
var secretObject = {
	secret_001 		: "none"
}
*/

/**
		Room Objects

		entry_flag	: 		// set flag if room = active
		id 			: 		// each room extends id var
		name 		: 		// set room name
		exits 		: 		// "n|e|s|w" get available exits
		entry 		: 		// get entry variable
		scene 		: 		// describe scene on room_no load
		look 		: 		// html: look for objects and exits
		weapon 		: 		// html: describe | script: fill room with roomItems[0] = treasure where needed
		item		: 		// html: describe | fill room with roomItems[1] = weapons where needed
		npc 		: 		// npc info
		trap 		: 		// maybe there's a trap ?
		secret 		: 		// maybe there's a secret ?
		exit_out	: 		// "n|e|s|w" exit variable
*/
const room_objects = [
	{
		room_0:
		[
			{
				entry_flag	: false,
				id 			: 0,
				name 		: "room zero",
				exits 		: "n|e|s|w",
				entry 		: entryPoint,
				scene 		: "this is a creepy looking house over here,<br><br>do you really want to go on...",
				look:		: "there's just one way in it seems, you go south and open the heavy oakwood door, <br>its unlocked.",	
				weapon 		: "none",
				item		: "none",
				npc 		: "none",
				trap 		: "none",
				secret 		: "none",
				exit_out	: exitPoint = "south";

			}
		]
	},
	{
		room_1:
		[
			{
				entry_flag	: false,
				id 			: 1,
				name 		: "room one",
				exits 		: "n|e|s|w",
				entry 		: entryPoint = "north",
				scene 		: "You step into a large livingroom<br>there's a strange man staring at you<br>You spot an object in the SouthWest corner and a chest in the SouthEast one<br>But a strange man stands in the middle of the room",
				look 		: "There is a stairs in the East corner and a door to the South",
				weapon		: "You spot a rusted pistol<br>Dont touch anything, come here ! The man says...",
				item		: "You manage to take a potion from this chest when the man looks for his keys",
				npc 		: "harold",
				trap 		: "none",
				secret 		: "none",
				exit_out	: exitPoint

			}
		]
	}
]