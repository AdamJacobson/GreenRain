// Generate the Columns for the matrix
let generateColumns = function() {
  var width = document.documentElement.clientWidth;
  var columns = [];

  let c = 0;
  do {
    columns[c] = new Column();
    columns[c].generate();

    width -= columns[c].getWidth();

    c++;
  } while (width - columns[c - 1].getWidth() > 0);

  return columns;
};

// Animate the columns using random lengths and times
let animateColumns = function(columns) {
  var maxWait = 15000;

  function setAnimateTimout(i) {
    var wait = Math.floor((Math.random() * maxWait));

    setTimeout(function(){
      columns[i].animate();
    }, wait);
  }

  for (let i = 0; i < columns.length; i++) {
    setAnimateTimout(i);
  }
};

let clearMatrix = function() {
  var parent = document.getElementById("matrix");
  var uls = document.getElementsByTagName("ul");
  while (uls.length > 0) {
    parent.removeChild(uls[0]);
  }
};

let generateMatrixText = function() {
  clearMatrix();
  Column.reset();

  var cols = generateColumns();
  animateColumns(cols);
};

window.onresize = function() {
  window.onload();
};

window.onload = function() {
  generateMatrixText();
};
