var colors = ["blue","green","red","yellow"];
$(document).ready(function(){
	$('#square').click(function(){ 
			var rand = colors[Math.floor(Math.random()*colors.length)];
			var $posT = $('#square').position().top;
			var $posL = $('#square').position().left;
		   switch(rand){
			// right
			case "blue":
				if ($posL !== 300)
				$(this).animate({left: "+=100px"}, 'fast').css('background-color', 'blue' );
				break;
			// Up
			case "green":
				if ($posT !== 0)				
				$(this).animate({top: "-=100px"}, 'fast').css('background-color', 'green' );
				break;
			// left
			case "red":
				if ($posL !== 0)				
				$(this).animate({left: "-=100px"}, 'fast').css('background-color', 'red' );
				break;
			// Down
			case "yellow":
				if ($posT !== 300)				
				$(this).animate({top: "+=100px"}, 'fast').css('background-color', 'yellow' );
				break;
			}
	});
});


