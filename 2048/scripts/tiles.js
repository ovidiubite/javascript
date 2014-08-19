function Tile(x,y, value){
  this.x = x;
  this.y = y;
  this.value = value;
  this.flag = 0;
};

var resetFlag = function(matrix){
	for( var i = 0; i < size; i++)
		for( var j = 0; j < size; j++)
			matrix[i][j].flag = 0;
};

