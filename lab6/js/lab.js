// index.js - Lab 6
// Author: Kam Ren
// Date: 23 October

// Define variables
var myTransport = ["car", "bike", "walk", "run", "bus"]

// creat an object for my car

var myMainRide = { 
  make: "Toyota",
  model: "Corolla",
  color: "gray",
  year: 2016,
  //Defining a function in our object
  age: function () {
      return 2022 - this.year;
  }
}

// output
document.writeln("Kinds of transportation I use are ", myTransport, "</br>");

document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
