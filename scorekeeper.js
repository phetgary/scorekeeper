var p1button = document.querySelector("#p1");
var p2button = document.getElementById("p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");

var p1score = 0;
var p2score = 0;
var gameOver = false; 
var winningscore = 5;

p1button.addEventListener("click", function(){
    if(!gameOver){
        p1score++;
        if(p1score === winningscore){
            gameOver = true;
        }
        p1Display.textContent = p1score;
    }
  
});
p2button.addEventListener("click", function(){
    if(!gameOver){
        p2score++;
        if(p2Score === winningscore){
            gameOver = true;
        }
        p2Display.textContent = p2score;
    }
});