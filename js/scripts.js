$(document).ready(function() {
  $("#rogers").submit(function(event) {
    event.preventDefault();

    let number = parseInt($("input#userInput").val());
    let array = [0];
    array.push(number);
    let string = array.toString();
    let newString = string.split("");
    console.log(newString);
    
    
 
    


  });
});