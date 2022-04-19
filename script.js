//Declaring Initial Player's Health 
var player1Health=100;
var player2Health =100;

let roundCounter=0;


//Ungli
let lastname;
console.log(localStorage.getItem("lastname"));
let player1Score=0;
let player2Score=0;
//let player2Score=0;




//Executing onclick Function for Shooting
function shootBtn(){
    if(roundCounter!=0)
   { document.getElementById("p1FireScore").innerHTML=player1Health;
    document.getElementById("p2FireScore").innerHTML=player2Health;
}

    var player1Fire =    Math.floor(Math.random() * 5);
    var player2Fire =   Math.floor(Math.random() * 5);
     player1Health = player1Health-player2Fire;
     player2Health= player2Health-player1Fire;
      if(player1Health <= 0){
        document.getElementById("p2FireScore").innerHTML=0;
       
        roundCounter = roundCounter + 1 ;
        document.getElementById("grid-item-9").innerHTML = "Player 2 Won in Round"+ roundCounter+"!";
        player2Score = player2Score+1;
        player1Health=100;
        player2Health=100;
        
       

      }
      if(player2Health <=0){
        document.getElementById("p1FireScore").innerHTML=0;
      
        roundCounter = roundCounter + 1 ;
        document.getElementById("grid-item-9").innerHTML = "Player 1 Won in Round"+roundCounter+"!";
        player1Score = player1Score+1;
        player1Health=100;
        player2Health=100;
       
       

        
      }
      if(roundCounter==0)
     { document.getElementById("p1FireScore").innerHTML=player1Health;
    document.getElementById("p2FireScore").innerHTML=player2Health;
     }

      document.getElementById("rounds").innerHTML = "Round" + roundCounter + "/5";
      console.log("***")
      document.getElementById("grid-item-4").innerHTML=player1Score;
      document.getElementById("grid-item-8").innerHTML=player2Score;


      //Checking if anyone of the player has scored 3, if yes then terminating the game and announcing the result.
      if(player1Score==3&&player2Score==3){
       
        gameOver("Draw!")

      }


      if(player1Score==3){
       
        gameOver("Player 1 Won!")

      }

      if(player2Score==3){
        gameOver("Player 2 Won!")
       
      }
      
    }



function gameOver(playercomment){
  document.getElementById("grid-item-9").innerHTML = playercomment;
  document.getElementById("ShootBtn").disabled = true;
  document.getElementById("ShootBtn").innerHTML="Game Over";
  document.getElementById("ShootBtn").style.backgroundColor = "grey";
}

//Reset Button Function / Reload of location page

function resetBtn(){
    location.reload();
    localStorage.clear();

}




 