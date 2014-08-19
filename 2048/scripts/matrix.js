//create the matrix with value 0
var createMatrix = function(){
  var matrix = new Array(size);
  for ( i = 0; i < size; i++){
    matrix[i] = new Array(size);
  }
  for ( i = 0; i < size; i++) {
    for( j = 0; j < size; j++)
      matrix[i][j] = new Tile(i,j,0) ;
  }
  return matrix;
};

// get positions for empty cells with value 0
var getEmptyCell = function(matrix1){
  var emptyCell = new Array(size*size);
  for( i = 0; i < size*size; i++)
    emptyCell[i] = new Array(2);
  var l = 0;
  for(i = 0; i < size; i++){
    for(j = 0; j < size; j++)
      if(matrix1[i][j].value === 0){
        emptyCell[l][0] = i;
        emptyCell[l][1] = j;
        l++;
      }
  }
  //set the length of emptyCell to not have undefined cells	
  emptyCell.length = l;
  return emptyCell;
};

var matrix = createMatrix();


//initialize the game with 2 cells
var startGame = function(){
  var emptCell = getEmptyCell(matrix);
  var x = randPosition(emptCell);
  matrix[x[0]][x[1]].value = 2;
  emptCell = getEmptyCell(matrix);
  x = randPosition(emptCell);
  matrix[x[0]][x[1]].value = 2;
};

var insertTile = function(matrix1){
  var emptCell1 = getEmptyCell(matrix1);
  var position = randPosition(emptCell1);
  matrix1[position[0]][position[1]] = new Tile(position[0], position[1], randNumber());
};

// var compareValues = function(a,b){
//   if(a.value !== 0 && a.value === b.value)
//     return 1;
//   else
//     return 0;
// };

//for moves 
var move = function(matrix1, direction){
  // $(document).ready(function(){
    resetFlag(matrix1);
      switch(direction) {
       // left Arrow
      case 'left':
        for( var i = 0; i < size; i++){
          for( var j = size-1; j >= 0; j--){
            // console.log(i + '-' +j +'--------------------------');
            // console.log(matrix1[i][j]);
          if(j>0 && matrix[i][j].value !== 0){           
            if(matrix1[i][j].value === matrix1[i][j-1].value && matrix1[i][j].flag === 0 && matrix1[i][j-1].flag === 0){
              matrix1[i][j-1].value = matrix1[i][j-1].value*2;
              matrix1[i][j].value = 0;
              matrix1[i][j].flag = 1;
              console.log('am intrat in if');
            }
            else if(matrix1[i][j-1].value === 0){
              matrix1[i][j-1] = matrix1[i][j];
              matrix1[i][j] = new Tile(i,j,0);
              console.log('am intrat in else');
              }
              else if(matrix1[i][j-1].value !== 0) continue;
              console.log('nu am intrat');
          }
        }
        }
          insertTile(matrix1);
          break;
        case 'startGame':
          startGame();
          break;
        }
     
      // // up Arrow 
      // case 'up':
      //   break;
      // // right Arrow 
      // case 'right':
      //   break;
      // // down Array 
      // case 'down':
      //   break;
  // });	
return matrix1;
};

var draw = function(matrix){
    $('#screen').empty();
  for(i = 0; i < size; i++){
    for(j = 0; j < size; j++)
      $('#screen').append('<p style="float:left; margin:0; padding:0;">'+matrix[i][j].value + "&nbsp &nbsp"+'</p>')
    $('#screen').append('<br/>')
  }
};