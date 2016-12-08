// Generate the Columns for the matrix
generateColumns = function() {
	var width = document.documentElement.clientWidth;
	var columns = [];
	
	c = 0;
	do {
		columns[c] = new Column();
		columns[c].generate();
		
		width -= columns[c].getWidth();
		
		c++;
	} while (width - columns[c - 1].getWidth() > 0)
	
	return columns;
}

// Animate the columns using random lengths and times
animateColumns = function(columns) {
	var maxWait = 15000;
	
	function setAnimateTimout(i) {
		var wait = Math.floor((Math.random() * maxWait));
		
		setTimeout(function(){
			columns[i].animate();
		}, wait);
	}
	
	for (i = 0; i < columns.length; i++) {
		setAnimateTimout(i);
	}
}

clearMatrix = function() {
	var parent = document.getElementById("matrix");
	var uls = document.getElementsByTagName("ul");
	while (uls.length > 0) {
		parent.removeChild(uls[0]);
	}
}

generateMatrixText = function() {
	clearMatrix();
	
	var cols = generateColumns();
	animateColumns(cols);
}

window.onresize = function() {
	generateMatrixText();
}

window.onload = function() {
	generateMatrixText();
}