$(document).ready(function() {
  $("form#beep").submit(function() {
    event.preventDefault();

    let userInput = $("input#number").val();
    let result = change(userInput);

function change(userInput) {
  const numArray = [];
  for (let i = 0; i <= userInput; i++) {
    let element = i.toString();

    if (element.includes(3)) {
      numArray.push("Won't you be my neighbor"+ ", ")
    } else if (element.includes(2)){
      numArray.push("Boop!" + ", ")
    } else if (element.includes(1)){
      numArray.push("Beep!" + ", ")
    } else{
      numArray.push(i + ", ")
    }

  }
return numArray
}
    

    $("#output").append(result);
    // $("form#beep")[0].reset();
    });
  });























// $(document).ready(function() {
//   $("#rogers").submit(function(event) {
//     event.preventDefault();

//     let userNumber = parseInt($("input#userInput").val());
//     let numArray = [0]
//     const words = [1]
//     const words2 = [2]
//     const words3 = [3]
//     const wild = [3]
    

   
    

    

//     function elementList(userNumber) {
//       while (userNumber > numArray.length - 1) {
//         numArray.push(numArray.length);
    
//       };
//     };
//     elementList(userNumber);
  

//     for(let i=0; i < numArray.length; i += 1)
//      if (words.includes(numArray[i])) {
//         numArray[i] = "beep";
//      } else if (words2.includes(numArray[i])) {
//        numArray[i] = "bop";
//      } else if (words3.includes(numArray[i])) {
//        numArray[i] = "won't you be my neighbor"
//      } 
     

   


    
    
    
    
    
    
//     console.log(numArray);
//   });
// });