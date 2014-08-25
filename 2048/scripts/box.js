$(document).ready(function(){
	startGame();
  draw(gameMatrix.matrix);
     

  	$(document).keydown(function(key){
    switch(parseInt(key.which,10)) {
       // left Arrow
      case 37:
        stopScroll();
        moveLeft(gameMatrix.matrix);
        break;
      case 38:
        stopScroll();
        moveUp(gameMatrix.matrix);
        break;
      case 39:
        stopScroll();
       	moveRight(gameMatrix.matrix);
        break;
      case 40:
        stopScroll();
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
