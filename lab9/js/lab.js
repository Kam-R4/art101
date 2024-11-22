// index.js - create a button
// Author: Kam Ren 
// Date: 4 November 

// Adding a button to challenge section

$("#challenge").append("<button id='button-challenge'>Toggle Highlight</button>");

// add a click listener to the challenge button
$("#button-challenge").click(function(){
  
  $(this).parent().toggleClass("special");
  
});

// Button for problem section

$("#problems").append("<button id='button-problems'>Toggle Font</button>");

// add listener to problem button
$("#button-problems").click(function(){

$(this).parent().toggleClass("font");

});

// Button for Results


$("#button-results").click(function(){

$("#results").toggle();

});