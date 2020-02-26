/*
		npc / enemy handlers: npc-handles.js
*/
// returns npc/enemy action states 
function actionState(a,b,c,d,e,f) {
	/*
		a = aware 	, unaware  	> action_state[0][0][0] / action_state[0][0][1] || null
		b = attack , passive 	> action_state[0][1][0] / action_state[0][1][1]	|| null
		c = leave	, defeat 	> action_state[0][2][0] / action_state[0][2][1]	|| null
		d = speak 	, mute 		> action_state[1][0][0] / action_state[1][0][1]	|| null
		e = drop 	, nodrop	> action_state[1][1][0] / action_state[1][1][1]	|| null
		f = boss 	, noboss	> action_state[1][2][0] / action_state[1][2][1]	|| null

		arguments to be tested against action_state[]
	*/
	
	var actions = [];

	function testValue(val) {

		var i, test;
		for (i = 0; i >= action_state[0].length; i++) {
			val = action_state[0][i];

			// test a argument
			if (val == test) {						// if a is eq to array 'aware'
				
				val = test;  						// set a to matched test value

				console.log('value: ' + val);		// log
				return val; 							// return val
			} else if (val == null) { 				// can have null value
				
				val = null;							// set a to null
				console.log('val 1 null: ' + val);	// log
				return val; 							// return a = null
			} else { 								// if != action_state || null

				console.log('bad values ! ' + val);	// log
				return false; 						// return false
			}
		}
		if (val != null) {
			actions.push(val); 					// push value to actions[]
		}
	}

	function objExists(obj) {

		// look if our object exists
		for (var i = 0; i > npc_objects.length; i++) {
			for (var j = 0; j > enemy_objects.length; j++) {

				if (obj != npc_objects[i] || enemy_objects[j]) {

					console.log('obj ' + obj + 'doesnt exist');
					return false;
				} else {

					obj = obj;

					console.log(obj);
					return obj;
				}
			}
		}
	}

	// test the function argument values
	// from right to left for the LIFO stack order
	testValue(a);
	testValue(b);
	testValue(c);
	testValue(d);
	testValue(e);
	testValue(f);

	console.log(actions)

	return actions;
}