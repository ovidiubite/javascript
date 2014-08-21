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
      case 38:
        Go('up');
        break;
      case 39:
      	Go('right');
      	break;
      case 40:
        Go('down');
        break;

      }
  });
});
