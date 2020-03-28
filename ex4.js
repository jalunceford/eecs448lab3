document.addEventListener("DOMContentLoaded", function(){
	document.getElementById("btn").addEventListener("click", () => {
		let red = document.getElementById("red").value;
		let green = document.getElementById("green").value;
		let blue = document.getElementById("blue").value;
		let width = document.getElementById("width").value;
		let red2 = document.getElementById("red2").value;
		let green2 = document.getElementById("green2").value;
		let blue2 = document.getElementById("blue2").value;
		let p = document.getElementById("p");
		p.style.borderWidth = width;
		p.style.backgroundColor = 'rgb(' + red2 + ',' + green2 + ',' + blue2 + ')';
		p.style.border = 'solid rgb(' + red + ',' + green + ',' + blue + ')';
		
	});
});

