$(document).ready(function(){
	$(document).keydown(function(key){ 
			var $square = $("#square");
			var $posT = $square.position().top;
			var $posL = $square.position().left;
		   switch(parseInt(key.which,10)){
			// right
			case 39:
				if ($posL < 300)
				$square.animate({left: "+=100px"}, 1);
				break;
			// Up
			case 38:
				if ($posT > 0)				
				$square.animate({top: "-=100px"}, 1);
				break;
			// left
			case 37:
				if ($posL > 0)				
				$square.animate({left: "-=100px"}, 1);
				break;
			// Down
			case 40:
				if ($posT < 300)				
				$square.animate({top: "+=100px"}, 1);
				break;
			}
	});
});


