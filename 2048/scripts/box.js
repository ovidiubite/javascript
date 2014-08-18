var createMatrix = function(){
	var matrix = new Array(size);
		for ( i = 0; i < size; i++){
			matrix[i] = new Array(size);
		}
	for ( i = 0; i < size; i++) {
		for( j = 0; j < size; j++)
			matrix[i][j] = new Tile(i,j,0) ;
	}
	matrix[2][3] = new Tile(i,j, randNumber());
	return matrix;
};



var matrix = createMatrix();

// error on line 28 
var getEmptyCell = function(mat){
	var emptyCell = new Array(mat.length);
		for ( i = 0; i < mat.length; i++){
			emptyCell[i] = new Array(mat.length);
		}
	var l = 0;
	for(i = 0; i < mat.length; i++){
		for(j = 0; j < mat.length; j++)
			if(mat[i][j].value === 0){
				emptyCell[l][0] = i;
				emptyCell[l][1] = j;
				l++;
			}
	}
	return emptyCell;
};


var emptCell  = getEmptyCell(matrix);


//for drawing the matrix after changes 
// var draw = function(matr){
// 	var rand_number = new Array(matr.length)
// 	 	for ( i = 0; i < matr.length; i++){
// 			matrix[i] = new Array(matr.length);
// 		}
// 	 rand_number = matr[Math.floor(Math.random() * matr.length)][Math.floor(Math.random() * matr.length)];
// 	return matr;
 			
//  	}
// };









// see matrix in browser
$(document).ready(function(){
for(i = 0; i < matrix.length; i++){
		for(j = 0; j < matrix.length; j++)
			$('#screen').append('<p style="float:left; margin:0; padding:0;">'+matrix[i][j].value + "&nbsp &nbsp"+'</p>')
		$('#screen').append('<br/>')
	}
 // for empty cell
 // for(i = 0; i < empty.length; i++){
	// 	for(j = 0; j < empty.length; j++)
	// 		$('#screen').append('<p style="float:left; margin:0; padding:0;">'+emptcell+ "&nbsp &nbsp"+'</p>')
	// 	$('#screen').append('<br/>')
	// }


})
