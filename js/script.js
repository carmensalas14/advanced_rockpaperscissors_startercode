
$( document ).ready(function() {
    
    $( "button" ).click(function() {
                
        var Answers = ["Rock", "Paper", "Scissors"];
        var compAnswer = Answers[Math.floor(Math.random()*Answers.length)];
        var getCompAnswer = document.innerHTML = compAnswer.toString();
            
        $("#compChoice").html(getCompAnswer);
                
        var userInput = $("input").val();
        var rockImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Rock-paper-scissors_%28rock%29.png/1024px-Rock-paper-scissors_%28rock%29.png";
        var paperImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Rock-paper-scissors_%28paper%29.png/1024px-Rock-paper-scissors_%28paper%29.png";
        var scissorsImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Rock-paper-scissors_%28scissors%29.png/1024px-Rock-paper-scissors_%28scissors%29.png";
                
            // IF USER CHOOSES ROCK
            if(userInput === "Rock") {

                $("#userPhoto").attr("src", rockImg);

                    if (getCompAnswer === userInput) {
                            $("#compPhoto").attr("src", rockImg);
                            $("#results").html("Tie");
                                
                    }
                                
                    if (getCompAnswer === "Paper") {
                            $("#compPhoto").attr("src", paperImg);
                            $("#results").html("You lose");
                                
                    }
                        
                    if (getCompAnswer === "Scissors") {
                                        
                            $("#compPhoto").attr("src", scissorsImg);
                            $("#results").html("You win");      
                                
                    }
                                
            }
            // IF USER CHOOSES ROCK CLOSED 
                    
                    // IF USER CHOOSES PAPER
            if(userInput === "Paper") {
                                
                    $("#userPhoto").attr("src",paperImg);
                                
                        if (getCompAnswer === "Rock") {
                                $("#compPhoto").attr("src", rockImg);
                                $("#results").html("You win");      
                                
                            
                        }
                        
                        if (getCompAnswer === userInput) {
                            $("#compPhoto").attr("src", paperImg);
                            $("#results").html("Tie");
                                
                            
                        }
                        
                        if (getCompAns === "Scissors") {
                            $("#compPhoto").attr("src", scissorsImg);
                            $("#results").html("You lose");
                                
                            
                        }
                                
            }
            // IF USER CHOOSES PAPER CLOSED
            
                    
                    // IF USER CHOOSES SCISSORS
            if(userInput === "Scissors") {
                        
                    $("#userPhoto").attr("src", scissorsImg);

                        if (getCompAnswer === "Rock") {
                            $("#compPhoto").attr("src", rockImg);
                            $("#results").html("You lose");      
                        
                            
                        }
                        
                        if (getCompAnswer === "Paper") {
                            $("#compPhoto").attr("src", paperImg);
                            $("#results").html("You win");
                                
                            
                        }
                        
                        if (getCompAnswer === userInput) {
                            $("#compPhoto").attr("src", scissorsImg);
                            $("#results").html("Tie");
                            
                            
                        }
                                
            }
            // IF USER CHOOSES SCISSORS CLOSED
            
        });
   


  
});
