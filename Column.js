function Column(height) {
	this.height = height;
	
	this.generate = function() {
		var matrix = document.getElementById("matrix");
		
		this.ul = document.createElement("ul");
		
		for (r = 0; r < height; r++) {
			var li = document.createElement("li");
			li.setAttribute("class", "invisible");
			li.onclick = toggleColor;
			li.appendChild(document.createTextNode(randomChar()));
			
			this.ul.appendChild(li);
		}
		
		matrix.appendChild(this.ul);
	}
	
	var randomChar = function() {
		var hiragana = "ぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをん";
		var katakana = "ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶ";
		var halfWidthKana = "ｦｧｨｩｪｫｬｭｮｯｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ";
		var numerals = "01234567890";
		
		var possible = halfWidthKana + numerals;

		return possible.charAt(Math.floor(Math.random() * possible.length));
	}
	
	var head = 0;
	var chars = 12;
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
	
	this.getWidth = function() {
		var ulWidth = 0;
		ulWidth += parseFloat(window.getComputedStyle(this.ul, null).getPropertyValue('width'));
		ulWidth += parseFloat(window.getComputedStyle(this.ul, null).getPropertyValue('margin-left'));
		ulWidth += parseFloat(window.getComputedStyle(this.ul, null).getPropertyValue('margin-right'));
		
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
		ul: this.ul,
		getWidth: this.getWidth
	};
}