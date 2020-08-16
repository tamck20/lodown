'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * identity: takes a value and returns it unchanged
 * 
 * @param: {*} value: single value that can be any datatype
 * 
 * @returns {*}: the unput value unchanged 
 * 
 * 
 */
 
 function identity(value){
    //return that value unchanged
    return value;
}
module.exports.identity = identity;



/**
 * typeOf: takes a value and defines the datatype
 * 
 * param{*} value: single value that can be any datatype
 * 
 * returns {*}: a string containing the datatype
 * 
 */
 
 function typeOf(value){
    if (value === null){
        return 'null';
    }else if (Array.isArray(value) === true){
        return 'array';
    }
  return typeof(value);
}
module.exports.typeOf = typeOf;



/**
 * first: designed to return an array of the elements of a given number of indices
 * if nunmber > array length, the function returns the entire array
 * if the second argument is not a number, the function returns first element of the array
 * if there are no arguments, the function returns an empty array
 * 
 * param{Array} array: the array over which to iterate
 * param{Number} number: the number of indices in which to access
 * 
 * return {Array}: Return first value's with given input number
 * 
 */
 
 function first(array, number){
 if(!Array.isArray(array) || number < 0){
     return [];
 }else if(!number){
     return array[0];
 }else{
     return array.slice(0, number);
 }
  
}
module.exports.first = first;


/**
 * last: return a specific element of array based on restrictions
 * if number is < array length, the function returns the entire array
 * if the second argument is not a number, the function returns last element of array
 * if there are no arguments, the function returns an empty array
 * 
 * @param {Array}: array: an array of elements in which to iterate
 * @param {Number}: num: the number of indices in which to access
 * 
 * @return {Array}: Return last value's' depending on given input number
 * 
 */
 
function last(array, num){
    if (Array.isArray(array) && num > 0){
        return array.slice(-num, array.length);
    }else if (num > array.length){
        return array;
    }else if (!num || typeof num !== 'number'){
        return array[array.length - 1];
    } else{
        return [];
    }
}
module.exports.last = last;


/**
 * indexOf: Designed to return the index of a certain value in the array
 * 
 * @param {array}: array: an array of elements in which to iterate
 * @param {*} value: an element of the array
 * 
 * 
 * @return {number}: the index of the array that is the first occurrence of value parameter.
 * If the value is not in the array, return -1
 * 
 * 
 */
 
 
 
 function  indexOf(array, value){
    for (let i = 0; i < array.length; i++){
        if (array[i] === value){
            return i;
        }
    } 
    return -1;
}
module.exports.indexOf = indexOf;




/**
 * contains: To test whether a value inside an array using a boolean
 * 
 * @param {array}: array: an array of elements
 * @param {*} value: inputted value to see if the array includes it
 * 
 * @return {boolean}: a boolean value signifying whether or not the array contains the value
 * 
 */

function contains(array, value){
    if (array.includes(value)){
        return true;
    }
    return false;
}
module.exports.contains = contains;



/**
 * unique: To determine whether the array has duplicate values and return a new array with no duplicates
 * 
 * @param {array}: array: An array of values(numbers)
 * 
 * @return {array}: Return a new array, pushing the duplicated numebrs inside to make a unique array
 * 
 */ 
 
 function unique(array){
    //create new array 
    let newArray = [];
    //loop through array passed to the function
    for (let i = 0; i < array.length; i++){
        //if the previously defined indexOf function returns -1
        if (indexOf(newArray, array[i]) === -1){
            //push into newArray
            newArray.push(array[i]);
        }
    }
    return newArray;
}
module.exports.unique = unique;


/**
 * filter: pass array into function passing arguemtns of its element, index and array, if array returns true, push into new array
 * 
 * @param {array}: array: An array in which to iterate through
 * @param {function} func: function to be used for each value in the collection of the array
 * 
 * 
 * @return {array}: return new array in which the the array pushed through the function evaluates to true
 */

function filter(array, func){
    //declare new array to empty array
    let newArray = [];
    //loop through array passed into function
    for (let i = 0; i < array.length; i++){
        //if function returned true, pass into new array
        if(func(array[i], i, array)){
            newArray.push(array[i]);
        }
    }
    return newArray;
}
module.exports.filter = filter;


/**
 * reject: pass array into function passing arguemtns of its element, index and array, if array returns true, push into new array
 * 
 * @param {array}: array: An array in which to iterate through
 * @param {function} func: function to be used for each value in the collection of the array
 * 
 * 
 * @return {array}: return new array in which the the array pushed through the function evaluates to true
 */
 
 
function reject(array, func){
    let newArray = [];
    for (let i = 0; i < array.length; i++){
        if(!func(array[i], i, array)){
            newArray.push(array[i]);
        }
    }
    return newArray;
}
module.exports.reject = reject;



/**
 * partition: iterate through array and push new values that meet the condition into a sub array inside of the original array 
 * 
 * @param {array} array: The collection over which to iterate
 * @param {function} func: The function to be applied to each value in the collection
 * 
 * @return {array}: return sub arrays in which the condition is met and divide the ones that meet,
 * and the ones that don't meet the condition
 * 
 */

function partition(array, func){
    let trueArray = [];
    let falseArray = [];
    let results = [];
     for (let i = 0; i < array.length; i++){
         if (func(array[i], i, array)){
             trueArray.push(array[i]);
         }else if (!func(array[i], i, array)){
             falseArray.push(array[i]);
     }
     }
     results.push(trueArray, falseArray);
     return results;
}
module.exports.partition = partition;



/**
 * map: Takes an array and returns a new array with transformed values
 * 
 * 
 * @param {array or object} collection: The collection over which to iterate
 * @param {function} func: A callback function being called on every element in the collection
 * 
 * @return {array}: Returns new array of transformed values
 * 
 */
 
 function map(collection, func){
    //use each to loop instead
    let newArray = [];
    if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
           newArray.push(func(collection[i], i, collection));
        }
    }else if (!Array.isArray(collection) && typeof collection === 'object'){
        for(let key in collection){
            newArray.push(func(collection[key], key, collection));
        }
    }
    return newArray;
    
}

module.exports.map = map;


/**
 * pluck: Designed to iterate though input array containing objects, 
 * and push each object value associated with inputer property to a new array
 * 
 * @param {array}: array: A collection of objects
 * @param {string} property: Representing the property name to be used when pushing
 * associated values  from the object to new array created
 * 
 * @return {array}: Returns new array containing the object values from the input array,
 * that is associated with the property name passed to the function
 */

function pluck(array, property){
    let newArray = [];
    map(array, function(obj){
        newArray.push(obj[property]);
        });

    return newArray;
}
module.exports.pluck = pluck;

/**
 * reduce: Call function for every element, and for each element,
 * use the previous index as the starting point to pass through the function to return the value
 * 
 * @param {Array}: array: An array of elements
 * @param {Function}: func: take a value as an argument, and return a value: Should take a starting value
 * (previous result), an array element and an array index as parameters
 * @param {*} seed: A starting value of any datatype for use in the function
 * 
 * 
 * @return {*}: Returns the final result after looping though the entire input array and passings each
 * element to the input function
 * 
 */
 
 
 function reduce(array, func, seed){
    //check if seed is not undefined
 if (seed !== undefined){
     //if seed value is passed, create a new variable seed and loop through
    var result = seed;
    //loop through array starting at first index
    for(let i = 0; i < array.length; i++){
         result = func(result, array[i], i);
     }
 }else {
    var result = array[0];
    //loop through array starting at second index
    for (let i = 1; i < array.length; i++){
        //pass the result, the current array element, and the current index to the input function and assign it to result array
        result = func(result, array[i], i);
    }
 }
return result;
 }
 module.exports.reduce = reduce;



 /**
  * every: Designed to iterate through a collection of data, pass each element or property
  * through a function, and return true only if the function returns true for every value
  * if no call back function is provided, the function will return true if every value is a truthy value, false otherwise
  * 
  * @param {array or object}: Collection: an collection of data in which to interate
  * @param {function} func: test each element of data based on a condition and return boolean
  * 
  * @return {boolean}: Returns true if every value within the collection is true when passed into function
  */
  
  function every(collection, func){
    //first, check if no function arg is passed to the every function
    if(func === undefined){
        //if there is no input function, check to see if array
        if (Array.isArray(collection)){
            //if array, loop though the array and return false with any falsy values
            for (let i = 0; i < collection.length; i++){
                //checking if the values in the collection are truthy or not
                if (!collection[i]){
                    return false;
                }
            }
            // if the object is not an aray, loop through object properties
         }else if (!Array.isArray(collection) && typeof collection === 'object'){
            for(let key in collection){
                //if any value in the object is a false value, return false
                if ((func === undefined && !collection[key]) || !func(collection[key], key, collection)){
                    return false;
                }
            }
         }
         //if a function arg is passed. check for is array
    } else if (Array.isArray(collection)){
        //if array, loop through using a for loop
        for (let i = 0; i < collection.length; i++){
            //pass each element of the array to the callback function, which should take the element, index number and array as args
            if (!func(collection[i], i, collection)){
                //if any any value of the object returns false when passed, return false
                return false;
            }
        }
        //check if the collection is an object by checking for not array and DT 'object'
    }else if(!Array.isArray(collection) && typeof collection === 'object'){
        //if true, loop through object
        for (let key in collection){
            //pass each property of the object to the callback function, which takes element, index num and array as args
            if (!func(collection[key], key, collection)){
                
                return false;
            }
        }
    }
return true;
}
module.exports.every = every;


 /**
  * some: Designed to iterate through a collection of data, pass each element or property
  * through a function, and return true only if the function returns true for one of the values
  * if no callback function is provided, the function will return one truthy value
  * 
  * @param {array or object}: Collection: an collection of data in which to interate
  * @param {function} func: test each element of data based on a condition and return boolean
  * 
  * @return {boolean}: Returns true if only one value or the first true value within the collection is true when passed into function.
  * If no values return true, the function will return false
  */
  
  function some(collection, func){
    //first check if no function argument is passed to every function
   if(func === undefined){
       //if there is no input function. check if object type is an array
        if (Array.isArray(collection)){
            //if array, loop through the array and return true if any element is a truthy value
            for (let i = 0; i < collection.length; i++){
                if (collection[i]){
                    return true;
                }
            }
            //if the object is not an array, loop through object properties
         }else if (!Array.isArray(collection) && typeof collection === 'object'){
             //loop through object
            for(let key in collection){
                //if any truthy values, return true
                if (collection[key]){
                    return true;
                }
            }
         }
         //if a function argument is passed, check for the array
    } else if (Array.isArray(collection)){
        //if array, loop though 
        for (let i = 0; i < collection.length; i++){
            //pass each element of the array to the call back function, takes element, index number and array as args
            if (func(collection[i], i, collection)){
                
                return true;
            }
        }
    }else if(!Array.isArray(collection) || typeof collection === 'object'){
        for (let key in collection){
            if ((func === undefined && !collection[key]) || !func(collection[key], key, collection)){
                //console.log('false object');
                return true;
            }
        }
    }
return false;
}
module.exports.some = some;


/**
 * extend: Copy properties from the all the objects to the first object in the order they were passed,
 * and return the new object
 * 
 * @param {Array}: obj: An array containing all of the objects passed as arguments to function
 * 
 * 
 * @return {Object}: Return the updated object with the new data pushed into it
 */
 
 function extend(...obj){
    //create new array containing all of the objects passed as arguments to the function
    let array = Array.from(obj);
    //create a new variable called obj1 and assign the first object in arg array
    let obj1 = array[0];
    //loop through the arguments array starting at index 1 to access the second object in the array
    for(let i = 1; i < array.length; i++){
        //loop though objects in array
        for (let key in array[i]){
            //assign each property from the current object to the first object passed as an argument
            obj1[key] = array[i][key];
        }
    
    }
    return obj1;
}
module.exports.extend = extend;