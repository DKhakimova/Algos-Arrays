// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

function minToFront(arr){
    var minIndex = 0;
    var min = arr[0];
    for(var i =0; i<arr.length; i++){
        if (arr[i]<min){
        min = arr[i];
        minIndex = i; 
        }
    }
    for(var i=minIndex; i>=1; i--){
      arr[i] = arr[i-1];
    }
    arr[0] = min
    return arr;
}
var testArr = [4,2,1,3,5]
var result = minToFront(testArr);
console.log(result);