let gameResultEle = document.getElementById("gameResult");
let userInputEle = document.getElementById("userInput");
let randomValue = Math.ceil(Math.random()*100);
function checkGuess(){
    let value = parseInt(userInputEle.value);
    if(value > randomValue){
        gameResultEle.textContent = "Too high! pls try again";
        gameResultEle.style.backgroundColor = "red";
    }
    else if (value < randomValue){
        gameResultEle.textContent = "Too low ! pls try again";
        gameResultEle.style.backgroundColor = "red";
    }
    else if (value === randomValue){
        gameResultEle.textContent ="You did it !";
        gameResultEle.style.backgroundColor = "green";
    }
    else{
        gameResultEle.textContent = "Enter the value";
        gameResultEle.style.backgroundColor = "blue";
    }
}
