$(document).ready(function(){
	startGame();
  draw(gameMatrix.matrix);
  var undoMatrix = clone(gameMatrix.matrix);
    $('#undo').html('Undo ('+x+')');

   $('#restartGame').click(function(){
    gameMatrix.matrix = restartGame();
    startGame();
    draw(gameMatrix.matrix);
   }); 
   $('#undo').click(function(){
    if(x>0){
      gameMatrix.matrix = undo();
      draw(gameMatrix.matrix);
      x--;
    $('#undo').html('Undo ('+x+')');
    }
  }); 

  	$(document).keydown(function(key){
    switch(parseInt(key.which,10)) {
       // left Arrow
      case 37:
        stopScroll();
        undoMatrix = clone(gameMatrix.matrix); 
        moveLeft(gameMatrix.matrix);
        break;
      case 38:
        stopScroll();
        undoMatrix = clone(gameMatrix.matrix); 
        moveUp(gameMatrix.matrix);
        break;
      case 39:
        stopScroll();
        undoMatrix = clone(gameMatrix.matrix); 
       	moveRight(gameMatrix.matrix);
        break;
      case 40:
        stopScroll();
        undoMatrix = clone(gameMatrix.matrix); 
        moveDown(gameMatrix.matrix);
        break;
      case 27:
        gameMatrix.matrix = restartGame();
        startGame();
        draw(gameMatrix.matrix);
      }
    gameOver(gameMatrix.matrix);
        
  });
});
