$(document).ready(function() {
  $("#rogers").submit(function(event) {
    event.preventDefault();

    let userNumber = $("input#userInput").val()
    let numArray = [0]
    function elementList(userNumber) {
      while (userNumber > numArray.length - 1) {
        numArray.push(numArray.length);
    
      };
    };
    elementList(userNumber)
    console.log(numArray);

  });
});