var p1button = document.querySelector("#p1");
var p2button = document.getElementById("p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var resetbutton = document.getElementById("reset");
var numinput = document.querySelector("input");
var inputdisplay = document.querySelector("p span");

var p1score = 0;
var p2score = 0;
var gameOver = false; 
var winningscore = 5;

p1button.addEventListener("click", function(){
    if(!gameOver){
        p1score++;
        if(p1score === winningscore){
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.textContent = p1score;
    }
  
});
p2button.addEventListener("click", function(){
    if(!gameOver){
        p2score++;
        if(p2score === winningscore){
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.textContent = p2score;
    }
});

function reset(){
    p1score = 0;
    p2score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner")
    p2Display.classList.remove("winner")
    gameOver = false;
}

resetbutton.addEventListener("click", function(){
    reset()
})

numinput.addEventListener("change", function(){
    inputdisplay.textContent = numinput.value;
    winningscore = Number(numinput.value);
    reset();
})