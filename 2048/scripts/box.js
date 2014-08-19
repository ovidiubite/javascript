// see matrix in browser
var Go = function(direction) {
  matrix = move(matrix, direction);
  draw(matrix);
};

$(document).ready(function(){
	Go('startGame');
	$(document).keydown(function(key){
      switch(parseInt(key.which,10)) {
       // left Arrow
      case 37:
      	Go('left');
      	break;
      // case 38:
      //   break;
      // // right Arrow 
      // case 39:
      //   break;
      // // down Array 
      // case 40:
      //   break;

      }
  });
});


