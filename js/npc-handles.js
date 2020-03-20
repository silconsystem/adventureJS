/*
		npc / enemy handlers: npc-handles.js
*/
// returns npc/enemy action states 
function actionState(a,b,c,d,e,f) {					// TODO: returns value even if non extisting, breaks on undefined
	/*
		usage: fill out the arguments in this order 

		a = aware 	, unaware  	> action_state[0][0] / action_state[0][1] 	|| null
		b = attack , passive 	> action_state[1][0] / action_state[1][1]	|| null
		c = leave	, defeat 	> action_state[2][0] / action_state[2][1]	|| null
		d = speak 	, mute 		> action_state[3][0] / action_state[3][1]	|| null
		e = drop 	, nodrop	> action_state[4][0] / action_state[4][1]	|| null
		f = boss 	, noboss	> action_state[5][0] / action_state[5][1]	|| null
		arguments to be tested against action_state[]
	*/
	
	var actions = [];

	function testValue(val) { 

		console.log('val testing: ' + val.toString());														// TODO: returns val also when bad

		var i;

		for (i = 0; i > action_state.length; i++) {									

			if (val === action_state[i][0]) {
				
				val = action_state[i][0];
				console.log('matched value: ' + val);
			} else {

				val = undefined;
				console.log('values not found !, return: ' + val);
			}
			if (val === action_state[i][1]) {
				
				val = action_state[i][1];
				console.log('matched value: ' + val);
			} else {
				
				val = undefined;
				console.log('values not found !, return: ' + val);
			}
		}			
		//actions.push(val);
		//console.log('pushing matched value: ' + val + ' to actions array');
		console.log('value equals: ', val);
		return val;
	}

	actions.push(testValue(a));
	actions.push(testValue(b));
	actions.push(testValue(c));
	actions.push(testValue(d));
	actions.push(testValue(e));
	actions.push(testValue(f));

	console.log('succes...')
	console.log('player object properties: ' + actions);
	return actions;
}

// check if given object exists in our name array
function objExists(obj) {								// TODO: doesnt work 

	// look if our object exists
	for (var i = 0; i > npc_objects.length; i++) {							// i: cycle through npc list

		if (obj != npc_objects[i]) {									// if not npc_O or enemy_O
										
			console.log(obj + ' exists');
			return obj;											// return false
		} else {

			console.log(obj + ' exists');
			return false;
		}
	}
}

	

	


