toggleColor = function() {
	console.log("animating ", this);
	
	if (this.className == "invisible") {
		this.className = "appear";
	} else if (this.className == "appear") {
		this.className = "visible";
	} else if (this.className == "visible") {
		this.className = "invisible";
	}
}

generateTable = function() {
	console.log("generating tables");

	var rows = 25;
	var columns = 50;

	var tableDiv = document.getElementById("matrix");

	for (c = 0; c < columns; c++) {
		var table = document.createElement("table");
		table.setAttribute("id", "column" + c);
		
		for (r = 0; r < rows; r++) {
			var tr = document.createElement("tr");
			
			var td = document.createElement("td");
			td.setAttribute("id", c + "-" + r);
			td.setAttribute("class", "invisible");
			td.onclick = toggleColor;
			var text = document.createTextNode(randomChar());
			td.appendChild(text);
			
			tr.appendChild(td);
			table.appendChild(tr);
		}

		tableDiv.appendChild(table);
	}
}

randomChar = function() {
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}\|;:<>,.\"`~";

    return possible.charAt(Math.floor(Math.random() * possible.length));
}

window.onload = function() {
	console.log("loaded");
	generateTable();
}