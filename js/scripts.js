    // Business Logic

    function replace(userInput) {
    const numbers = [];
    for (let i = 0; i <= userInput; i++) {
      let element = i.toString();
      
      if (element.includes(3)) {
        numbers.push("Won't you be my neighbor"+ ", ")
      } else if (element.includes(2)) {
        numbers.push("Boop!" + ", ")
      } else if (element.includes(1)) {
        numbers.push("Beep!" + ", ")
      } else {
        numbers.push(i + ", ")
      }
      
      }
      return numbers;
      }

      // UI Logic

      $(document).ready(function() {
        $("form#beep").submit(function() {
          event.preventDefault();
      
      let userInput = $("input#number").val();
      let final = replace(userInput);
  
      $("#output").hide();
      $("#output").show();
      $("#output").text(final);
    });
  });























   


    
    
    
    
    
    
