//Ex 1 :max

var max = function(a,b){
	if(a >= b)
		return a;
	else
		return b;
}

console.log(max(3,4));

//Ex 2 :maxOfThree
var maxOfThree = function(a,b,c){
	if(a >= max(b,c))
		return a;
	else if(b >= c)
		return b;
	else return c;
}
console.log(maxOfThree(3,1,14));

//Ex 3 :Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
var vowel = function(letter){
	if( letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u')
		return true;
	else
		return false;
}
console.log(vowel('a'));


//Ex 4 : sum and multiply
var sum = function(numbs){
	var sum = 0;
	for ( var i =0; i < numbs.length; i++)
		sum +=numbs[i];
	return sum;
}
console.log(sum([3,1,14]));

var multiply = function(numbs){
	var multiply = 1;
	for ( var i =0; i < numbs.length; i++)
		multiply *= numbs[i];
	return multiply;
}
console.log(multiply([3,1,14]));


//Ex 5 : Write a function findLongestWord() 
var findLongestWord = function(words){
	var longest = 0;
	for (var i = 0; i < words.length; i++)
		if(words[i].length >= longest)
			longest = words[i].length;
	return longest;	
}
console.log(findLongestWord(['long', 'longest','short']));


//Ex 6 : Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
var filterLongWords = function(words, i){
	for (var j = 0; j < words.length; j++) {
		if(words[j].length > i)
			return words[j];
	}
}
console.log(filterLongWords(['aaasdd', 'dasddwq', 'asd','dawer'],5));


//Ex 7 :Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. 
//Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
var charFreq = function(aString){
	var freq = {};
	for (var j = 0; j < aString.length; j++){
		var character = aString[j];
	if (freq[character])
		freq[character]++;
	else
		freq[character] =  1;
	}
	return freq;
}
console.log(charFreq('sadkjhdadsdalkjrq'));
