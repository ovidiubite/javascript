$(document).ready(function(){
	createPiece();
	$(document).keydown(function(key){ 
			var $square = $(".square");
			var $posTop = $square.position().top;
			var $posLeft = $square.position().left;
		   switch(parseInt(key.which,10)){
			// right
			case 39:
				if ($posLeft < 300)
				$square.animate({left: "+=106px"}, 1);
				createPiece();
				break;
			// Up
			case 38:
				if ($posTop > 0)				
				$square.animate({top: "-=106px"}, 1);
				createPiece();
				break;
			// left
			case 37:
				if ($posLeft > 0)				
				$square.animate({left: "-=106px"}, 1);
				createPiece();
				break;
			// Down
			case 40:
				if ($posTop < 300){
				$square.animate({top: "+=106px"}, 1);
				createPiece();
				}
				break;
			}
	});
});


var createPiece = function(){
	$('#screen').append('<div class="square"></div>');
}
 
