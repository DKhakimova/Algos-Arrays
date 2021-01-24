// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 

// If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".

function removeBlanks(str){
    return str.split(" ").join("");
}
var testStr = (" Pl ayTha tF u nkyM usi c ");
var result = removeBlanks(testStr);
console.log(result);

// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.

function getDigits(str){
    var newArr = [];
    for(var i = 0; i < str.length; i++){
        if(!isNaN(str[i])){
        newArr.push(str[i]);
      }
    }
    return newArr.join("");
  }
  var testStr = ("0s1a3y5w7h9a2t4?6!8?0");
  var result = getDigits(testStr);
  console.log(result);

// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 

// Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 

// Given "Live from New York, it's Saturday Night!", return "LFNYISN".

function acronyms(str){
    var words = str.split(" ");
    var output = ""
    for(var i=0; i<words.length; i++) {
        // make sure there is actually an index 0 here
        if(words[i][0]) {
            output += words[i][0].toUpperCase();
        }
    }
    return output;
}
var result = acronyms("Live from New York, it's Saturday Night!");
console.log(result); 


// Count Non-Spaces
// Accept a string and return the number of non-space characters found in the string. 

// For example, given "Honey pie, you are driving me crazy", return 29 (not 35).

function countNonSpaces(str){
    return str.split(" ").join("").length;
}
var testStr = ("Honey pie, you are driving me crazy");
var result = countNonSpaces(testStr);
console.log(result);


// Remove Shorter Strings
// Given a string array and value (length), remove any strings shorter than the length from the array.

function removeShortStrings(str, val){
    str = str.split(" ");
    for(var i = 0; i < str.length; i++){
        if (str[i].length < val){
            for(var j = i; j < str.length-1; j++){
                str[j] = str[j + 1];
            }
            str.pop();
            i--;
        } 
    } 
    return str.join(" ");
}
var testStr = "Honey pie, you are driving me crazy";
var result = removeShortStrings(testStr, 4);
console.log(result);
