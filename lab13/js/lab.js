// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions

function oneLongString(str){
  for (i=1; i <= 200; i++) { 
    //if multiple of 15  
   if (i% 15 == 0) {
     console.log("FizzBuzz");
  
   } 
   //if multiple of 5
   else if(i% 7 == 0) { 
    console.log("Boom");
  } 
   else if (i% 5 == 0) { 
     console.log("Buzz");
   } 
    //if multiple of 3
   else if (i% 3 == 0) {
     console.log("Fizz");
   } else {
     console.log(i);
   }
  }

};


$("#my-button").click(function(){

  $("#output").html(oneLongString);
 
    
});
