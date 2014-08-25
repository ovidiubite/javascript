var container = $('.container');
var resetFlag = function(matrix){
	for( var i = 0; i < MATRIX_SIZE; i++)
		for( var j = 0; j < MATRIX_SIZE; j++)
			matrix[i][j].flag = 0;
		return matrix;
};

function clone(existingArray) {
   var newObj = (existingArray instanceof Array) ? [] : {};
   for (i in existingArray) {
      if (existingArray[i] && typeof existingArray[i] == "object") {
         newObj[i] = clone(existingArray[i]);
      } else {
         newObj[i] = existingArray[i]
      }
   }
   return newObj;
};

function stopScroll(){
var ar=new Array(37,38,39,40);
$(document).keydown(function(e) {
  var key = e.which;
  if($.inArray(key,ar) > -1) {
    e.preventDefault();
    return false;
    }
  return true;
});
}


