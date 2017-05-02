(function(window,document) {
  'use strict';
  /*
     Initial
  */

  function grid(){

    var art = document.getElementById("art");

    for (let i=0; i<10; i++){
      var row = document.createElement("div");
      art.appendChild(row);
      row.className = "row";

      for (let x=0; x<20; x++){
        var cell = document.createElement("div");
        row.appendChild(cell);
        cell.className = "grid";
      }
    }
  }

  grid();

  /*
     Selectors
  */

  var x = document.getElementsByClassName('grid');

  let y = document.querySelectorAll('#circle');

  let color = "white";


  /*
     Methods
  */

  function paint (event) {
    var square = event.target;
    square.className = 'grid ' + color;
    console.log(event);
  }

  function getColor(event) {
    console.log(event)
    var circle = event.target;
    color = circle.className;
  }

  /*
     Events
  */

  for (var i = 0; i < x.length; i++) {
    x[i].addEventListener('click', paint);
  }

  for (var j=0; j<y.length; j++){
    y[j].addEventListener('click',getColor);
  }

})(window, document);
