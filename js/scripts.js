$(document).ready(function() {
  $("#rogers").submit(function(event) {
    event.preventDefault();

    let number = parseInt($("input#userInput").val());
    let array = [0,]
    console.log(number);
    array.push(number);
    console.log(array);


  });
});