var size = 4; // foloseste const in loc de var si dai un nume mai bun cu uppercase, exe: GAME_SIZE, MATRIX_SIZE
var randNumber = function(){
  var numbers = [2, 2, 2, 4];
  return numbers[Math.floor(Math.random() * numbers.length)]; 
  //poti sa o rescrii astfel var value = Math.random() < 0.9 ? 2 : 4;
  //si atunci in 90% din cazuri iti da 2
  // poti sa faci 0.9 constanta ca si SIZE si atunci e configurabil
};

//returns a string 
var randPosition = function(matr){ 
  return matr[Math.floor(Math.random() * matr.length)]; // asta cred ca e metoda a matricei si locul ei e acolo
};


