var colors = ["blue","green","red","yellow"];
$(document).ready(function(){
	$('#square').click(function(){ 
			var rand = colors[Math.floor(Math.random()*colors.length)];
		   switch(rand){
			// right
			case "blue":
				$('#square').animate({left: "+=100px"}, 'fast');
				$('#square').css('background-color', 'blue' );
				break;
			// Up
			case "green":
				$('#square').animate({top: "-=100px"}, 'fast');
				$('#square').css('background-color', 'green' );
				break;
			// left
			case "red":
				$('#square').animate({left: "-=100px"}, 'fast');
				$('#square').css('background-color', 'red' );
				break;
			// Down
			case "yellow":
				$('#square').animate({top: "+=100px"}, 'fast');
				$('#square').css('background-color', 'yellow' );
				break;
			}
	});
});