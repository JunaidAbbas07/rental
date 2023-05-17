var img = ["11.png", "22.png", "33.png", "44.png", "55.png", "66.png"];
var i = 0;
var room = document.querySelector('#room')

function next() {

	if (i == img.length - 1) {
		i = 0;
		room.src = "./images/" + img[i]
	}
	else {
		i++;
		room.src = "./images/" + img[i];

	}
}

function back() {
	if (i == 0) {
		i = img.length - 1
		room.src = "./images/" + img[i]
	}
	else {
		i--;
		room.src = "./images/" + img[i]

	}
}

const side = document.querySelector("#side-menu");

function openmenu() {
	side.style.right = "0px";
}

function closemenu() {
	side.style.right = "-350px";
}