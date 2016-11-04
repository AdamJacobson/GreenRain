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

// Generate the Columns for the matrix
generateColumns = function(numRows) {
	var width = document.documentElement.clientWidth;
	var columns = [];
	
	c = 0;
	do {
		columns[c] = new Column(numRows);
		columns[c].generate();
		
		width -= columns[c].getWidth();
		
		c++;
	} while (width - columns[c - 1].getWidth() > 0)
	
	console.log("columns", c);
	
	return columns;
}

// Animate the columns using random lengths and times
animateColumns = function(columns) {
	var maxInterval = 800;
	var minInterval = 200;
	
	for (i = 0; i < columns.length; i++) {
		setInterval(function(index){columns[index].animate();},
			Math.floor((Math.random() * maxInterval) + minInterval), i);
	}
}

randomChar = function() {
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789ウェブサイトのメンテナンスの下で";

    return possible.charAt(Math.floor(Math.random() * possible.length));
}

generateMatrixText = function() {
	clearMatrix();
	
	var width = document.documentElement.clientWidth;
	var height = document.documentElement.clientHeight;
	
	var numRows = Math.floor(height / 20);
	
	var cols = generateColumns(numRows);
	animateColumns(cols);
}

clearMatrix = function() {
	var parent = document.getElementById("matrix");
	var uls = document.getElementsByTagName("ul");
	while (uls.length > 0) {
		parent.removeChild(uls[0]);
	}
}

window.onresize = function() {
	generateMatrixText();
}

window.onload = function() {
	generateMatrixText();
}