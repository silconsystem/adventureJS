/**
 * 
 *      text parser js
 *      handle text input
 * 
 */

// handle the player actions
function textParserActions(actCmd, actObj, actSpc) {

    //  "take", "drop", "attack", "leave", "talk", "magic def", "magic heal", "skill" ​
    actCmd = actCmd.toLowerCase();

    if (!actSpc) {

        actSpc = null;
    } else {
        
        actSpc = actSpc.toLowerCase();
    }

    console.log('textParserActions: player command:', actCmd, '\ntarget object:', actObj.name);

    if (actCmd && actObj) {

        console.log('textParserActions: testing values action command: \'' + actCmd + '\'for matching player action command');
        console.log('textParserActions: object item to handle: \'' + actObj.name + '\'');
        switch (actCmd) {

        case "take":

            // add obj to inventory and set image
            manInventory(0, actObj.type, actObj);
            newrow(0, actObj);
            writeHTML('game-info', player.name + ' took the ' + actObj.name + ' and added it to the ' + actObj.type + ' inventory');            // write to display
            
            console.log('textParserActions: action: \'' + actCmd + '\'');
            console.log('textParserActions: added:', actObj.name, 'object to:', actObj.type, 'inventory array and created html element');
            break;
        case "drop":

            // drop obj from inventory and remove image
            console.log('textParserActions: action: \'' + actCmd + '\'');
            manInventory(1, actObj.type, actObj);
            newrow(1, actObj);
            console.log('textParserActions: action: \'' + actCmd + '\'');
            console.log('textParserActions: removed:', actObj.name, 'object from:', actObj.type, 'inventory array and removed html element');
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
    var cmdString   = str.split(" ");
    var foundObj;

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
	
        if (c) {		// if more than 2 words found in string	

            thrdArg = c;					// create extra variable 
            console.log('extra action string found: ', thrdArg);
            return thrdArg;
        } else if (!c) {

            thrdArg = null;
        }
    }
    
    // find the second string argument and set type
    function findObject(arr, itm) {
    
        var found;
        console.log('findObject: searching for:',itm);
    
        for(let i in arr) {
            for (let j in arr[i])
                if (arr[i][j].name.includes(itm)) {
              
                found = arr[i][j];
            }
        }
        itm = found;
        return itm;
    }
    
    // check if item exists, set type, url, add or remove from inventory and display on screen
    function setObjectType(itm) {

        var itemArray  = [game_objects[0].item,     // search object array lists 
                    game_objects[1].weapon,
                    game_objects[2].magic_D,
                    game_objects[3].magic_H,
                    game_objects[4].skills];

        // find the object in the list and get its type
        if (findObject(itemArray, itm)) {

            foundObj = findObject(itemArray, itm);

            console.log('setObjectType: object is of type \'item\'');
            console.log('setObjectType: action obj =',foundObj);
        } 
        return foundObj;     
    }
    
    command     = actionCheck(cmdString[0]);            // 1st argument: action command
    target      = setObjectType(cmdString[1]);
    thrdArg     = ifThird(cmdString[2]);

    var action_obj  = target,
        action_cmd  = command,
        action_spc  = thrdArg;


    console.log('textParserString: input string is:', str, '\ncommand:', command, '\ntarget:', target, '\nthird argument:', thrdArg);

    console.log('textParserString: action_obj variable is:', action_obj);
    console.log('textParserString: calling textParserActions(' +command+ ', ' +action_obj+ ');');

    textParserActions(action_cmd, action_obj, action_spc);
}