function Column() {
	var ul;
	
	this.generate = function() {
		var matrix = document.getElementById("matrix");
		var height = document.documentElement.clientHeight;

		ul = document.createElement("ul");
		matrix.appendChild(ul);
		
		do {
			var li = document.createElement("li");
			li.setAttribute("class", "invisible");
			li.appendChild(document.createTextNode(randomChar()));
			
			ul.appendChild(li);
			
			if (typeof Column.liHeight == 'undefined') {
				Column.liHeight = parseFloat(window.getComputedStyle(li).getPropertyValue('height'));
				console.log("set liHeight", Column.liHeight);
			}
			
			height -= Column.liHeight;
		} while (height - Column.liHeight > 0)
	}
	
	var randomChar = function() {
		var halfWidthKana = "ｦｧｨｩｪｫｬｭｮｯｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ";
		var numerals = "0123456789";
		
		var possible = halfWidthKana + numerals;

		return possible.charAt(Math.floor(Math.random() * possible.length));
	}
	
	var head = 0;
	var chars = 7;
	var tail = -chars;
	
	var animateStep = function() {
		elements = ul.getElementsByTagName("li");
		
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
	
	this.animate = function() {
		setInterval(function(){ animateStep(); }, 100);
	}
	
	this.getWidth = function() {
		var ulWidth = 0;
		ulWidth += parseFloat(window.getComputedStyle(ul).getPropertyValue('width'));
		ulWidth += parseFloat(window.getComputedStyle(ul).getPropertyValue('margin-left'));
		ulWidth += parseFloat(window.getComputedStyle(ul).getPropertyValue('margin-right'));
		
		return ulWidth;
	}
	
	var toggleColor = function(element) {
		if (element.className == "invisible") {
			element.className = "appear";
		} else if (element.className == "appear") {
			element.className = "visible";
		} else if (element.className == "visible") {
			element.className = "invisible";
		} else {
			element.className = "invisible";
		}
	}
	
	return {
		animate: this.animate,
		generate: this.generate,
		getWidth: this.getWidth,
	};
}