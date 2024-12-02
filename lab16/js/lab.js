// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
// Using the core $.ajax() method
$.ajax({
  // The URL for the request (from the api docs)
  url: "https://cors-anywhere.herokuapp.com/https://xkcd.com/3018/info.0.json",
  // Whether this is a POST or GET request
  type: "GET",
  // The type of data we expect back
  //dataType : "jsonp",
  dataType: "json", 
  // What do we do when the api call is successful
  //   all the action goes in here
  success: function(data) {
      // do stuff
      console.log(data);
    $("#output").append("<img src='" + data.img + "'>")
  },
  // What we do if the api call fails
  error: function (jqXHR, textStatus, errorThrown) { 
      // do stuff
      console.log("Error:", textStatus, errorThrown);
  }
})
