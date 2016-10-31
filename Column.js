function Column(height) {
	this.height = height;
	
	var generate = function() {
		var tableDiv = document.getElementById("matrix");
		
		for (r = 0; r < height; r++) {
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
	
	this.animate = function() {
		console.log("Created a column with " + this.height);
	}
	
	return {
		animate: this.animate
	};
}