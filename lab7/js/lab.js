// index.js - Make a function
// Author: Kam Ren
// Date: 10/28/24



// Functions
function sortUserName() {
  var userName = window.prompt("Hello, what is your name?");
  console.log("userName=", userName);
  //split the array into string, sort the array, join the array
  return userName.split('').sort().join('')
  
}

//output
document.writeln("I fixed your name: ",
  sortUserName(), "</br>",

"Nice name lol");
