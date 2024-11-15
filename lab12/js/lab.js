// index.js - purpose and description here
// Author: Your Name
// Date:


 //return Element 
// sortingHat function depending on length
function sortingHat(str){
  len = str.length;
  mod = len % 4;
  if (mod == 0){
    return "Fire"
  }
  else if (mod == 1){
    return "Water"
  }
  else if (mod == 2){
    return "Earth"
  }
  else if (mod == 3){
    return "Wind"
  }
}

//Button
$("#button").click(function(){

const userHouse = $("#input").val();

userHouseSorted = sortingHat(userHouse);

$("#output").html("<p>The crystal ball has identified your element " + userHouseSorted + "</p>" );

});


