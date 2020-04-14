/*
				game-controls.js
*/
// globals
var ctrlButtons 	= document.querySelectorAll(".game-controls");

// helper function
function checkGameValues(count, dir) {

	if (c_created == false) {

		document.getElementById("direction").innerHTML = "no character created yet";
		console.log('direction:', dir, 'disabled, no character');
	} else {

		//moveControl(dir);

		document.getElementById("direction").innerHTML = dir + "<br>";
		loadRoom(moveCount, dir);

		console.log('direction: north');
	}
}

// dynamicly load room controls
function loadjscssfile(filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}

// screen controls
ctrlButtons.forEach((btn) => {
  btn.addEventListener("click", (event) => {

  	let btnID = event.target.id,
  		result;

  	switch (btnID) {
  		case "north":
  			// statements_1
  			result = btnID;
  			break;
  		case "east":
  			// statements_def
  			result = btnID;
  			break;
  		case "south":
  			// statements_1
  			result = btnID;
  			break;
  		case "west":
  			// statements_def
  			result = btnID;
  			break;
  		case "look-btn":
  			// statements_1
  			result = btnID;
  			break;
  		case "weapon-btn":
  			// statements_def
  			result = btnID;
  			break;
  		case "item-btn":
  			// statements_def
  			result = btnID;
  			break;
  	}

    console.log('registered control button press:',result);
    
	moveControl(result);

	function roomLoader() {

		activeRoom = new roomContentLoad(moveCount, result);

		let idCount = activeRoom.getRoomId();
		
		if (idCount == 0) {
			moveCount = 1;
		}

		activeRoom.loadRoom();
		activeRoom.getRoomHTML();
	}
  });
});