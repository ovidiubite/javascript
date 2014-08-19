var size = 4;
var randNumber = function(){
  var numbers = [2, 2, 2, 4];
  return numbers[Math.floor(Math.random() * numbers.length)];
};

//returns a string 
var randPosition = function(matr){
  return matr[Math.floor(Math.random() * matr.length)];
};

