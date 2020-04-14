// room controls
var roomControls = document.querySelectorAll(".room-nav")

roomControls.forEach((btn) => {
  btn.addEventListener("click", (event) => {

	let btnID = event.target.id,
  		result;

  	console.log('roomControls: pressed control:', btnID);
  });
});