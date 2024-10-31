// index.js - callback functions
// Author: Kam Ren
// Date: 30 October

// Functions
function addingNumber(x){
  return( x + 1);
}

// test function
console.log("What is 2+1?: ", addingNumber(2));

myArray = [10, 20, 30, 40]
console.log("My orginal Array: ", myArray);

var results = myArray.map(addingNumber);
// should return [11, 21, 31, 41]
console.log("Adding 1 to my array: ", results);

var results = myArray.map(function(x){
  return x **2;
})
// should return [100, 400, 900, 1600]
console.log("Squaring my array: ", results)


 