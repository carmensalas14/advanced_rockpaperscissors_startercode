//Class 1:
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES


//FUNCTIONS



// DOCUMENT READY FUNCTION

// $("input").val();

$( document ).ready(function() {
        $( "button" ).click(function() {
                
                var possibleAnswers = ["Rock", "Paper", "Scissors"];
                var compAnswer = possibleAnswers[Math.floor(Math.random()*possibleAnswers.length)];
                var getCompAns = document.innerHTML = compAnswer.toString();
                $("#compChoice").html(getCompAns)
                
                var userInput = $("input").val();
                var rockImg = "http://www.freepngimg.com/download/rock/7-2-rock-free-png-image.png"
                var paperImg = "http://allfreedesigns.com/wp-content/uploads/2017/04/lined-paper-texture-4.jpg"
                var scissorsImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Pair_of_scissors_with_black_handle%2C_2015-06-07.jpg/1200px-Pair_of_scissors_with_black_handle%2C_2015-06-07.jpg"
                
                
                        if(userInput === "Rock") {

                                $("#userPhoto").attr("src", rockImg);

                                if (getCompAns === userInput) {
                                        $("#compPhoto").attr("src", rockImg);
                                        $("#results").html("Tie")
                                }
                                if (getCompAns === "Paper") {
                                        $("#compPhoto").attr("src", paperImg);
                                        $("#results").html("You lose")
                                }
                                if (getCompAns === "Scissors") {
                                        $("#compPhoto").attr("src", scissorsImg);
                                        $("#results").html("You win")      
                                }
                                
                        }
                        
                        if(userInput === "Paper") {
                                $("#userPhoto").attr("src",paperImg);
                                
                                if (getCompAns === "Rock") {
                                        $("#compPhoto").attr("src", rockImg);
                                        $("#results").html("You win")      
                                }
                                if (getCompAns === userInput) {
                                        $("#compPhoto").attr("src", paperImg);
                                        $("#results").html("Tie")
                                }
                                if (getCompAns === "Scissors") {
                                        $("#compPhoto").attr("src", scissorsImg);
                                        $("#results").html("You lose")
                                }
                                
                        }
                        
                         if(userInput === "Scissors") {
                                $("#userPhoto").attr("src", scissorsImg);

                                if (getCompAns === "Rock") {
                                        $("#compPhoto").attr("src", rockImg);
                                        $("#results").html("You lose")      
                                }
                                if (getCompAns === "Paper") {
                                        $("#compPhoto").attr("src", paperImg);
                                        $("#results").html("You win")
                                }
                                if (getCompAns === userInput) {
                                        $("#compPhoto").attr("src", scissorsImg);
                                        $("#results").html("Tie")
                                }
                                
                        }
        });
});
