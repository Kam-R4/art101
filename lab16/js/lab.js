// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
// Using the core $.ajax() method

let endpoint = "https://api.chucknorris.io/jokes/random"

let ajaxConfig = {
  url: endpoint,  // API URL
  method: "GET", // HTTP method
  contentType: "application/json", // Payload type
  data: { 
    
  },
  success: function(data) { // Success handler
    console.log(data); 
    record = data[3];
    $("#output").append("<h1>" + data.created_at);
    $("#output").append(data.value);
    $("#output").append("<img src='" + data.icon_url  + "'>")
  }, 
  error: function(xhr, status, error) { // Error handler
    console.error(error); 
  } 
};



// send the AJAX request
$.ajax(ajaxConfig);
