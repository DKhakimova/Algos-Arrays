// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

function pushFront(arr, val){
    for(var i = arr.length-1; i >= 0; i--){
        arr[i+1] = arr[i];
    }
    arr[0] = val;
    return arr;
}
var testArr = [2,4,6,8];
var result = pushFront(testArr, 10);
console.log(result);

// Pop Front
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().

function popFront(arr){
    var val = arr[0];
    for(var i = 1; i<arr.length; i++){
        arr[i-1] = arr[i];
    }
    arr.pop();
    return val;  
}
var testArr = [2,4,6,8];
var result = popFront(testArr);
console.log(result);


// Insert At
// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

function insertAt(arr, idx, val){
    for(var i = arr.length-1; i >= idx; i--){
        arr[i+1] = arr[i];
    }
    arr[idx] = val;
    return arr;
}
var testArr = [2,4,6,8];
var result = insertAt(testArr, 2, 10);
console.log(result);


// Remove At
// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).

function removeAt(arr, idx){
    var val = arr[idx];
    for(var i = idx; i<arr.length-1; i++){
        arr[i-1] = arr[i];
    }
    arr.pop();
    return val;  
}
var testArr = [2,4,6,8];
var result = removeAt(testArr, 1);
console.log(result);


// Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.

function swapPairs(arr){
    for(var i = 0; i < arr.length-1; i +=2){
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
    return arr
}
var testArr = [2,4,6,8,10,12];
var result = swapPairs(testArr);
console.log(result);


// Remove Duplicates
// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.

function removeDuplicates(arr){
    for(var i = 0; i < arr.length - 1; i++){
        if (arr[i] == arr[i+1]){
            for(var j = i+1; j < arr.length-1; j++){
                arr[j] = arr[j+1];
            }
            arr.pop();
            i--;
        }
    }
    return arr
}
var testArr = [2,4,6,6,8,10,12,12,14];
var result = removeDuplicates(testArr);
console.log(result);


// Second: Solve this without using any nested loops.

function removeDuplicates(arr){
    newArr = [];
    for(var i = 0; i < arr.length - 1; i++){
        if (arr[i] !== arr[i+1]){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
var testArr = [2,4,6,6,8,10,12,12,14];
var result = removeDuplicates(testArr);
console.log(result);

