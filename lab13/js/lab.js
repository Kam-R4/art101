// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions

function oneLongString(str){
  let result = "";
  for (i=1; i <= 200; i++) { 
    //if multiple of 15  
   if (i% 15 == 0) {
     //console.log("FizzBuzz");
     result += "FizzBuzz<br>";
  
   } 
   //if multiple of 5
   else if(i% 7 == 0) { 
    //console.log("Boom");
    result += "Boom<br>";
  } 
   else if (i% 5 == 0) { 
     //console.log("Buzz");
     result += "Buzz<br>";
   } 
    //if multiple of 3
   else if (i% 3 == 0) {
     //console.log("Fizz");
     result += "Fizz<br>";
   } else {
     //console.log(i);
     result += i + "<br>";
     
   }
  }
  return result;

};


$("#my-button").click(function(){

  $("#output").html(oneLongString());
 
    
});
