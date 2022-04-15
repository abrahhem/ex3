let index_counter = 0, count = 0, img_up = 0;

class box {
	constructor(op = "1") {
		this.element = document.createElement("div");
		this.element.className = "boxes3";
		this.element.style.opacity = op;

	}
	set_op(op) {
		this.element.style.opacity = op;
	}
	get_element() {
		return this.element;
	}

};

window.onload = () => {

	createboxes();
	clicks();
}

function clicks() {

	let bz = document.getElementsByClassName("boxes3");
	console.log(bz.length);
	for(let i = 0 ; i < bz.length ; i++) {
		bz[i].onclick = () => {
				if(bz[i].style.backgroundColor === "green")
					bz[i].style.backgroundColor = null;
				else
					bz[i].style.backgroundColor = "green";
		}
	}

	document.getElementById("plus").onclick = function () {
		const box = document.getElementById("unique");
		if(reset(this, box)) {
			box.style.backgroundColor = plus_color();
			box.style.opacity = 1;
		}
	}
}

//#fadec9

function createboxes() {
	
	const dropzone = document.getElementById("drophere");
	for (let i = 0; i < 6; i++) {
		let container_drop = document.createElement("div");
		container_drop.className = "container3";
		for (let j = 0; j < 4; j++) {
			let b = new box();
			switch (j) {
				case 1:
					b.set_op("0.75");
					break;
				case 2:
					b.set_op("0.5");
					break;
				case 3:
					b.set_op("0.25");
					break;
				default:
					break;
			}
			container_drop.appendChild(b.get_element());
		}
		dropzone.appendChild(container_drop);
	}
}
function reset(p, b) {
	
	if(count === 10) {
		p.src = "images/reset.png";
		count = 0;
		img_up = 1;
		return false;
	}
	else if(count === 0 && img_up) {
		p.src = "images/plus.png";
		img_up = 0;
		b.style.opacity = null;
		b.style.backgroundColor = null;
		return false;
	}
	count++;
	return true;
}

function plus_color() {
	const colors = ["#FF99E6", "#CCFF1A", "#E6331A", "#33FFCC", "#66994D", "#B366CC", "#4D8000", "#B33300", "#CC80CC"];
	return colors[index_counter++ % colors.length];
}




