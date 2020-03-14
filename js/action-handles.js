/*
	action-handles.js
	handler for the text input parser
*/
// load image and write to html
function loadObjectImg(func, pageId, objUrl) {

	/*
		func 0 = change img.src value
		func 1 = add html code and use 'objUrl'

		dynamicly change img.src atrribute
		pageId: <img id="pageId"> src="objUrl">
	*/
	switch(func) {

		case 0:
	
			// change only <img>.src value
			var imgSrc = document.getElementById(pageId);

			imgSrc.src = objUrl;
			break;
		case 1:

			// write html code in a given element
			// create a string and concat the objUrl, or write directly into objUrl
			var elementId = document.getElementById(pageId),
				htlmString; // = ('<div id=\"blah\"><img src=\"' + htmlString + '\">');

			writeHTML(elementId, htlmString);
			break;
	}
	console.log('loadObjectImg: argument:', func, '\nsuccesfully written;', objUrl, 'to:', pageId);
}

// get the object by name
function objectUrlByName(arr, nm) {
    
    let result;
    
    for (let i in arr) {

      if (arr[i].name.includes(nm)) {
        
        result = arr[i];
        break;
      }
    }
    //result = result.substring(3);
    return result;
  }
  
// return object by type and name
function objArray(type, name) {
  
  var typeArray = [],
      targetObj;
  
  switch(type) {
    case "item":
      
      typeArray = game_objects[0].item;
      var targetObj = objectUrlByName(typeArray, name);
      
      console.log('targetObj item:',targetObj);
      console.log('targetUrl item:',targetObj.url);
      break;
    case "weapon":
      
      typeArray = game_objects[1].weapon;
      var targetObj = objectUrlByName(typeArray, name);
      
      console.log('targetObj weapon:',targetObj);
      console.log('targetUrl weapon:',targetObj.url);
      break;
    case "magic":
      
      typeArray = game_objects[2].magic;
      var targetObj = objectUrlByName(typeArray, name);
      
      console.log('targetObj magic:',targetObj);
      console.log('targetUrl magic:',targetObj.url);
      break;
    case "skills":
      
      typeArray = game_objects[3].skills;
      var targetObj = objectUrlByName(typeArray, name);
      
      console.log('targetObj skills:',targetObj);
      console.log('targetUrl skills:',targetObj.url);
      break;
  }
  console.log('succes');
  return targetObj;
}

// add new <div> to html page
function newrow(func, i_obj) {

	var action		= function(func) { 			// 0|1 add or remove
						let str;	if (func == 0) {str = 'add'}
						else if (func == 1) {str = 'remove'}
						return str;
					};										

	var	imgUrl 		= i_obj.url, 					// strip "../" from image url		
		pageUrl 	= imgUrl.substring(3),			// ready for use in index.html
		itemName 	= i_obj.name,
		htmlId 		= (i_obj.type + "-image"),
		id 			= increment();

	/**
	 * 		helper functions
	 */
	Element.prototype.remove = function() {
		this.parentElement.removeChild(this);
	}
	NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
		for(var i = this.length - 1; i >= 0; i--) {
			if(this[i] && this[i].parentElement) {
				this[i].parentElement.removeChild(this[i]);
			}
		}
	}
	// log
	console.log('newrow: given object is \"' + i_obj.name + '\" of type \"' + i_obj.type + '\" function: ' + action(func));

	switch(func) {

		// add items to html inventory display
		case 0:

			console.log('newrow: add html element');

			// if 'weapon' only 1 img in display
			if (i_obj.type != 'weapon') {

				// add a row with each taken item
				document.getElementById(htmlId).innerHTML += "<div id=\"" + itemName + "_" + id + "\" name=\"" + itemName + "\" class=\"inventory-thumbs\"><img src=\"" + pageUrl + "\"></div>";
				console.log('newrow: added', itemName, 'to', i_obj.type, 'in page element:', htmlId);
			} else if (i_obj.type == 'weapon'){

				// other item types can become lists
				document.getElementById(htmlId).innerHTML = "<div id=\"" + itemName + "_" + id + "\" name=\"" + itemName + "\" class=\"inventory-thumbs\"><img src=\"" + pageUrl + "\"></div>";			
				console.log('newrow: weapon added', itemName, 'to', i_obj.type, 'in page element:', htmlId);
			}				
			break;
		// remove items from inventory display
		case 1:

			var elements = document.getElementsByClassName("inventory-thumbs"),
				elementId;
			

			console.log('newrow: remove html element');
			
			for (let i = 0; i <= elements.length;i++) {

				if (elements[i].id.includes(itemName)) {

					elementId = elements[i].id;

					console.log(elementId);
					document.getElementById(elementId).remove();
					break;
				}
			}

			console.log('newrow: removed element:', element, 'successfully')
			break;
	}

	
}
// check if array has value 
function checkIfEmpty(a) {

	var obj;

	// check if array length is not 0
	if (a.length > 0) {

		obj = {
			length: 	a.length,
			notzero: 	true
		};
	}
	if (a.length == 0) {

		obj = {
			length: 	a.length,
			notzero: 	false
		}
	}
	return obj;
}

// handle inventory actions	
function inventoryActions(cmdStr, invObj) {
	
	switch (cmdStr) {

	case "take":

		// set a ne image to display the list can be scrolled
		if (checkIfEmpty(player.inventory.items) == false) {

			document.getElementById('item-list').src = 'img/weapons/active.png';
		}

		// add item to inventory
		manInventory(0, action_obj.type, action_obj);

		switch (action_obj.type) {
			case "item":
				// create item list, scroll through
				newrow(action_obj);

				console.log(action_obj.url);

				break;
			case "weapon":

				// player weapon
				document.getElementById('weapon-image').innerHTML = '<img name =\"' + itemObj.name + '\"src=\"' + itemObj.url + '\">';
				break;
			}
		case "drop":

			// drop item from inventory
			manInventory(1, itemObj.type, action_obj);
			
			switch (itemObj.type) {
				case "item":

					// ---------------------------------------------------------->>>>>TODO: deletes all !!!

					// check if elements with name 'object.name' exist
					// 	if exists is true
					//	delete the div element with this name

					document.getElementsByName(itemObj.name).innerHTML = '';
					break;
				case "weapon":

					// statements_def
					document.getElementById('weapon-image').innerHTML = '';
					document.getElementById('weapon-image').innerHTML = '<img src=\"../img/weapons/nothing.png\">';
					break;
				
				default:

					// return false if command is not valid
					if (cmdStr != "take" || "drop") {
					console.log('not an inventory command');
					return false;
				}
			}
		}
	}



/* 											____submit action command text */
actionBtn.onclick = function(event) {

	event.preventDefault();
	var string,						// player action input string
		stringArray;//	= string.split(" "),		// split on space delimiter

	playerAction = actionInput.value;					// set value as variable

	console.log('player submitted string: ' + playerAction + '\nwrite to id: \'action-display\'');		// log

	writeHTML('action-display',playerAction);			// write to display

	// handle the input value 			TODO: create a handler
	textParserString(playerAction);
}