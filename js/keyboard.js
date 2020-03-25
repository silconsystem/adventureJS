/*
			keyboard.js
*/
function changeImage(id) {

	let element_id = 'key-' + id;

	let key_class = document.getElementsByClassName("ZX-keys");

	for (let i in key_class) {

		if (key_class[i].id == element_id) {

			let cssArg = '../img/keyboard/key-' +id+ '.png',
				css_up = '../img/keyboard/key-' +id+ '-up.png';
				IO = 0; 

			console.log('match:', key_class[i].id);

			if (key_class[i].name == "0") {
				key_class[i].name = "1";
				key_class[i].style.backgroundImage = 'url(' +cssArg+ ')';

				console.log('changeImage: changing background',cssArg);
			} else {
				key_class[i].name = "0";
				key_class[i].style.backgroundImage = 'url(' +css_up+ ')';

				console.log('changeImage: changing background',css_up);
			}
		}
	}
}
//Make the DIV element draggagle:
// Custom options
let options = {
	drag: false,
	resize: false,
	close: false,
	minMax: true,
	minMaxIcons: true,
	minDoubleClick: true,
	minZone: document.window
}
interactive('keyboard', options);