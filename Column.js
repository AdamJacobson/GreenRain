function Column(height) {
	this.height = height;
	//console.log("Initialized a new column", height);
	
	this.generate = function() {
		//console.log(".generate() called");
		
		var matrix = document.getElementById("matrix");
		
		this.ul = document.createElement("ul");
		// ul.setAttribute("id", "column" + c);
		
		for (r = 0; r < height; r++) {
			var li = document.createElement("li");
			//li.setAttribute("id", "char" + r);
			li.setAttribute("class", "invisible");
			li.onclick = toggleColor;
			li.appendChild(document.createTextNode(randomChar()));
			
			this.ul.appendChild(li);
		}

		matrix.appendChild(this.ul);
	}
	
	var head = 0;
	var chars = 8;
	var tail = -chars;
	
	this.animate = function() {
		elements = this.ul.getElementsByTagName("li");
		
		if (elements[head]) {
			toggleColor(elements[head]);
		}
		if (elements[head - 1]) {
			toggleColor(elements[head - 1]);
		}
		if (elements[tail]) {
			toggleColor(elements[tail]);
		}
		
		head++;
		tail++;
		
		if (head >= elements.length && tail >= elements.length) {
			head = 0;
			tail = -chars;
		}
	}
	
	var toggleColor = function(element) {
		if (element.className == "invisible") {
			element.className = "appear";
		} else if (element.className == "appear") {
			element.className = "visible";
		} else if (element.className == "visible") {
			element.className = "invisible";
		}
	}
	
	/*
	return {
		animate: this.animate,
		generate: this.generate,
		ul: this.ul
	};*/
}