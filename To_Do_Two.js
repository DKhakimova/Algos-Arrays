// Reverse
// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working ‘in-place’ means that you cannot use a second array – move values within the array that you are given. As always, do not use built-in array functions such as splice().

function reverseArray(arr){
    for(var i=0; i<arr.length/2; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
        console.log(arr);
    }
    return arr;
}
var testArr = [2,4,6,8,10];
var result = reverseArray(testArr);
console.log(result);


// Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr’s values to the right by that amount. ‘Wrap-around’ any values that shift off array’s end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. Don’t use built-in functions.

function rotate(arr, shiftBy){
    for(var i = 0; i < shiftBy; i++){
        var temp = arr[arr.length-1];
        for(var k = arr.length-1; k>0; k--){
            arr[k] = arr[k-1];
        }
        arr[0] = temp;     
    }
    return arr;
}
var testArr = [2,4,6,8,10];
var result = rotate(testArr, 2);
console.log(result);

// Second: allow negative shiftBy (shift L, not R).

function rotate(arr, shiftBy){
    for(var i = 0; i < Math.abs(shiftBy); i++){
        if(shiftBy < 0){
            var temp = arr[0];
            for(var k = 0; k<arr.length-1; k++){
                arr[k] = arr[k+1];
            }
        arr[arr.length-1] = temp;  
        }   
    }
    return arr;
}
var testArr = [1,2,4,6,8,10];
var result = rotate(testArr, -1);
console.log(result);

// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.

// Fourth: minimize the touches of each element.

// Filter Range
// Alan is good at breaking secret codes. One method is to eliminate values that lie within a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.

function filterRange(arr, min, max){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > min && arr[i] < max){
            for(var j = i; j < arr.length-1; j++){
                arr[j] = arr[j+1];
            }
            arr.pop(arr[i]);
            i--;
        }
    }
    return arr;
}
var testArr = [1,2,4,6,8,10];
var result = filterRange(testArr, 4, 10);
console.log(result);

// Concat
// Replicate JavaScript’s concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array’s elements, followed by the second array’s elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

function concat(arrOne, arrTwo){
    var newArr = arrOne.concat(arrTwo);
    return newArr;
}
var result = concat(["hello", "django"], [1,2,3]);
console.log(result);


function concat(arrOne, arrTwo){
    var newArr = [];
    for(var i = 0; i < arrOne.length; i++){
        newArr.push(arrOne[i]);
    }
    for(var i = 0; i < arrTwo.length; i++){
        newArr.push(arrTwo[i]);
    }
    return newArr;
}
var result = concat(["hello", "django"], [1,2,3]);
console.log(result);
