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
    case "magic_D":
      
      typeArray = game_objects[2].magic_D;
      var targetObj = objectUrlByName(typeArray, name);
      
      console.log('targetObj magic_D:',targetObj);
      console.log('targetUrl magic_D:',targetObj.url);
      break;
    case "magic_H":
      
      typeArray = game_objects[3].magic_H;
      var targetObj = objectUrlByName(typeArray, name);
      
      console.log('targetObj magic_H:',targetObj);
      console.log('targetUrl magic_H:',targetObj.url);
      break;
    case "skills":
      
      typeArray = game_objects[4].skills;
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
	
	/*
		func 0 = add | func 1 = remove
		i_obj = item object, we can use its properties to 
	*/	
	function action(func) {

		var act;

		if (func == 0) {
			act = 'add';
		} else if (func == 1) {
			act = 'remove';
		}
		return act;
	}

	console.log('newrow: function:', func, 'object:', i_obj);							

	var	imgUrl 		= i_obj.url, 					// strip "../" from image url		
		pageUrl 	= imgUrl.substring(3),			// ready for use in index.html
		itemName 	= i_obj.name,
		htmlId 		= (i_obj.type + "-image"),
		id 			= increment();

	console.log('newrow: object:', i_obj, '\nurl raw:', imgUrl, '\nstripped url:', pageUrl, '\nname:', itemName, '\nhtml element ID:', htmlId);

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

			if (htmlId.includes("weapon")) {
				var img = document.getElementById('weapon-thumb');
				img.src = pageUrl;
			} 

			// add a row with each taken item
			document.getElementById(htmlId).innerHTML += "<div id=\"" + itemName + "_" + id + "\" name=\"" + itemName + "\" class=\"inventory-thumbs\"><img src=\"" + pageUrl + "\"></div>";
			console.log('newrow: added', itemName, 'to', i_obj.type, 'in page element:', htmlId);
				
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

			console.log('newrow: removed element:', elementId, 'successfully')
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

// count duplicates
function countDuplicates(arr) {

  let counts = {},
    duplicate = 0;
  arr.forEach(function(x) {
    counts[x] = (counts[x] || 0) + 1;
  });

  for (var key in counts) {
    if (counts.hasOwnProperty(key)) {
      counts[key] > 1 ? duplicate++ : duplicate;
    }
  }
  return [counts, key, duplicate];
}

/* 											____submit action command text */
actionBtn.onclick = function(event) {

	event.preventDefault();

	playerAction = actionInput.value;					// set value as variable

	console.log('player submitted string: ' + playerAction + '\nwrite to id: \'action-display\'');		// log

	//writeHTML('action-display',playerAction);			// write to display

	// handle the input value 	
	console.log('actionBtn.onclick: calling textParserString(\'' +playerAction+ '\');');

	if (playerAction.length > 0) {	
		textParserString(playerAction);
	} else {
        console.log('no input');
        writeHTML('action-display', 'type some command');
	}
}

var itemId = document.getElementById('item-image'),
	weaponId = document.getElementById('weapon-image'),
	magicDId = document.getElementById('magic_D-image'),
	magicHId = document.getElementById('magic_H-image'),
	skillsId = document.getElementById('skills-image');

document.addEventListener('keyup', function (event) {

	function list(arr) {

		let list = [];

		for (let i in arr) {

			list.push(arr[i].name);
		}
		return list;
	}

    if (event.defaultPrevented) {
        return;
    }

    var key = event.key || event.keyCode;

    switch (event.keyCode) {
    	case 49:
    		// focus item div 					'1 key'
        	itemId.focus();
        	console.log('key:', key, 'pressed, focus on:', itemId.id);
    		break;
    	case 50:
    		// focus magic-h div 				'2 key'
        	magicHId.focus();
        	console.log('key:', key, 'pressed, focus on:', magicHId.id);
    		break;
    	case 51:
    		// focus magic-d div 				'3 key'
        	magicDId.focus();
        	console.log('key:', key, 'pressed, focus on:', magicDId.id);
    		break;
    	case 52:
    		// focus skills div 				'4 key'
    		skillsId.focus();
    		console.log('key:', key, 'pressed, focus on:', skillsId.id);
    		break;
    	case 73:
    		// show inventory 					'i key'
    		var item_txt 	= list(player.inventory.items),
    			weapon_txt 	= list(player.inventory.weapon),
    			magic_D_txt = list(player.inventory.magic_D),
    			magic_H_txt = list(player.inventory.magic_H),
    			skills_txt 	= list(player.inventory.skills);

    		var txt = "weapons:<br>" +weapon_txt+ "<br>items:<br>" +item_txt+ "<br>magic_D:<br>" +magic_D_txt+ "<br>magic_H:<br>" +magic_H_txt+ "<br>skills:<br>" +skills_txt+ "<br>inventory<br>"; 

    		console.log(txt);
    		console.log('key:', key, 'pressed, showing inventory');
    		writeHTML('action-display', '<ul>' + (txt.split(",").join("</br>")) + '</ul>');
    		break;
    	case 68:
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
});