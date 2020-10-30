$(document).ready(function() {
  $("#rogers").submit(function(event) {
    event.preventDefault();

    let userNumber = $("input#userInput").val()
    let numArray = [0]
    const words = [1]

    

    function elementList(userNumber) {
      while (userNumber > numArray.length - 1) {
        numArray.push(numArray.length);
    
      };
    };
    elementList(userNumber);

    for(let i=0; i < numArray.length; i += 1)
     if (words.includes(numArray[i])) {
        numArray[i] = "beep";
     }


    
    
    
    
    
    
    
    console.log(numArray);
  });
});