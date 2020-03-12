/**
 * 
 *      text parser js
 *      handle text input
 * 
 */
// handle the player actions
function textParserActions(actCmd, actObj) {

    //  "take", "drop", "attack", "leave", "talk", "magic def", "magic heal", "skill" ​
    actCmd = actCmd.toLowerCase();

    switch (actCmd) {
        case "take":
            // add obj to inventory and set image
            manInventory(0, actObj.type, actObj);
            newrow(actObj);
            break;
        case "drop":
            // drop obj from inventory and remove image
            manInventory(0, actObj.type, actObj);
            newrow(actObj);
            break;
        case "attack":
            // statements_1
            break;
        case "leave":
            // statements_1
            break;
        case "talk":
            // statements
            break;
        case "magic_D":
            // statements_1
            break;
        case "magic_H":
            // statements_1
            break;
        case "skill":
            // statements_1
            break;
    }
} 

 // set up the values for further handling
function textParserString(str) {

    /**
     *      extract separate values from the string and handle them
     *      check if exists
     *      get name, type, url, etc
     *      create an inventory object
     *      add or take from inventory
     * 
     *      if NPC
     *      check if exists in room
     *      get name, type, url, etc
     *      handle options
     * 
     *      target_sp = 
	 *		if not empty set 3rd string variable
	 *		"attack harold fire"
	 *		3rd argument: 		action | target | event/object
	 *							  cmd  | target |  target_sp
	 *		usage example: 		attack | harold | 	fire   
     */
    // variables
    let cmdString = [];                                 // empty array

    cmdString   = str.split(" ");                       // divide at space deliminator

    var command = actionCheck(cmdString[0]);            // 1st argument: action command
    var target  = setObjectType(cmdString[1]);
    var thrdArg = ifThird(cmdString[2]);

    const action_obj = target;

    console.log('textParserString: user input:', str);    
    console.log('textParserString: user command string:', command);
    console.log('textParserString: user target object:', target);
    console.log('textParserString: user 3rd argument:', thrdArg);
    console.log('textParserString: variable action_obj:', action_obj);

    // check if action input is valid  
    function actionCheck(c) {                       
        let result;

        for (let i in player_actions) {

            console.log(player_actions[i]);

            if (player_actions[i].includes(c)) {

                result = player_actions[i];
                break; 
            }
        }
        console.log('command is valid: ', result);
        return result;
    }
    // check for third action argument     
    function ifThird(c) {                        // if 3rd string exists set value
	
        if (c != undefined || null) {		// if more than 2 words found in string	

            thrdArg 	= c;					// create extra variable 
        }
        console.log('extra action string found: ', thrdArg);
        return thrdArg;
    }
    // check if item exists, set type, url, add or remove from inventory and display on screen
    // find the second string argument and set type
	function findObject(arr, itm) {
	
        console.log('findObject: searching for:',itm);
            
        for(let i in arr) {
            if (arr[i].name.includes(itm)) {
                    
                console.log('findObject: item index:',i );		
                console.log('findObject: item name:', arr[i].name);
                console.log('findObject: item type:', arr[i].type);
                console.log('findObject: item url:', arr[i].url);
            
            itm = arr[i];
            } 
        }
        return itm;
    }

    // get and set type of object
    function setObjectType(itm) {

        var foundObj;

        let itemArray 		= game_objects[0].item;		// search object array lists 
        let weaponArray 	= game_objects[1].weapon;
        let magicArray 		= game_objects[2].magic;
        let skillArray 		= game_objects[3].skills;

        // find the object in the list and get its type
        if (findObject(itemArray, itm)) {

            foundObj = findObject(itemArray, itm);

            console.log('setObjectType: object is of type \'item\'');
            console.log('setObjectType: action obj =',foundObj);
        } else if (findObject(weaponArray, target)) {

            foundObj = findObject(weaponArray, itm);

            console.log('setObjectType: object is of type \'weapon\'');
            console.log('setObjectType: action obj =',foundObj);
        } else if (findObject(magicArray, target)) {

            foundObj = findObject(magicArray, itm);

            console.log('setObjectType: object is of type \'magic\'');
            console.log('setObjectType: action obj =',foundObj);
        } else if (findObject(skillArray, target)) {

            foundObj = findObject(skillArray, itm);

            console.log('setObjectType: object is of type \'magic\'');
            console.log('setObjectType: action obj =',foundObj);
        }
        return foundObj;
    }

    textParserActions(command, action_obj);
        
}