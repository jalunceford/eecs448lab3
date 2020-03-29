document.addEventListener("DOMContentLoaded", function(){
	document.getElementById("btn").addEventListener("click", () => {
		let red = Number(document.getElementById("red").value);
		let green = Number(document.getElementById("green").value);
		let blue = Number(document.getElementById("blue").value);
		let width = String(document.getElementById("width").value);
		let red2 = Number(document.getElementById("red2").value);
		let green2 = Number(document.getElementById("green2").value);
		let blue2 = Number(document.getElementById("blue2").value);
		
		document.getElementById("p").style.borderWidth = width;
		document.getElementById("p").style.backgroundColor = 'rgb(' + red2 + ',' + green2 + ',' + blue2 + ')';
		document.getElementById("p").style.borderColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
		'rgb(' + a + ',' + b + ',' + c + ')'
		
	});
});

