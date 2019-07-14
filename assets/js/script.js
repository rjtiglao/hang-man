
// Objects

// Call example 
// console.log(`I found my ${theCobWeb.biggestWeb.biggerWeb.smallerWeb.tinyWeb.items[3]}!`);

//VARIABLES
let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
let userGuess = [];
let artist = ["Kaskade", "Tiesto", "Skrillex", "Afrojack"];
let compChoice;
let hangMan = [];
let start = 0;
let guessCount = 0;
let lose = 5;
let winCounter = 0;
let win = 0;



// FUNCTIONS
//found function - runs if a letter matches
let found = function(e){
    let x = 0;
    for(i=0;i<hangMan.length;i++){
        let upper = hangMan[i].toUpperCase();
            if(upper === e){
                x++
                winCounter++
                alert(`${upper} === ${e}`)
                let par = document.createElement(`p`);
                par.append(e);
                let removeGuess = document.getElementById(e + "2");
                removeGuess.replaceWith(par);
                
                
                if(win === winCounter){
                    alert(`User has Won the game`);
                    document.location.reload(true);
                }  
            }
        }
        if(x>0){
            let audio = new Audio(`./assets/media/ding.mp3`);
            audio.play();
            return true
        }
        else{
            return false
        }
     }

// displays the users guess 
let addGuess = function(e) {
    let button = document.createElement(`div`);
    button.className = "class letter-button letter letter-button-color";
    button.id = `${e}`
    button.append(e);
    document.getElementById("guessed").appendChild(button);
}
//loads available letters to guess
window.onload = function(){
    for(i=0;i<alphabet.length;i++){
    let button = document.createElement(`div`);
    button.className = "class letter-button letter letter-button-color";
    button.id = `${alphabet[i]}`
    button.append(alphabet[i]);
    document.getElementById("buttons").appendChild(button);
    };
}


// initiates code on event keypress
document.addEventListener("keyup", keyDownTextField);
function keyDownTextField(e) {
    var keyCode = e.key;
    console.log(keyCode);
    console.log(start);

    /// GAME STARTS AFTER ENTER
      if(keyCode === 'Enter' && start === 0) {
      alert("Let the game begin!");
      let audio = new Audio(`./assets/media/sun-moon2.m4a`);
    audio.play();
      start = start + 1;
      // Computer Choice
       let num = Math.floor(Math.random() * artist.length);
        compChoice = artist[num];
        // pushes artist name as separate characters into hangMan array
        for (var i = 0; i < compChoice.length; i++) {
            hangMan.push(compChoice.charAt(i));
        }
        win = hangMan.length;
        // display character guess with hidden characters
        for(i=0;i<hangMan.length;i++){
            let par = document.createElement(`p`);
            let hang = hangMan[i];
            par.className = "class letter-buttonA letterA letter-button-colorA";
            par.id = hang.toUpperCase() + "2";
            par.append("_");
            document.getElementById("target").appendChild(par);
        };
      } 

// USER IS SELECTING LETTERS
      if (keyCode !== `Enter` && start === 1) {
        keyCode=keyCode.toUpperCase();
    // Most logic for game begins here
        for (i=0;i<alphabet.length;i++){
            if(alphabet[i] === keyCode){
                addGuess(keyCode);
                
                // runs each guess through the found function
                let func = found(keyCode);
                console.log(`This is a test after func: ${func}`);
                /// return of function goes through win/loss logic
                if(func === false){
                    guessCount++
                    console.log(`gustCount is now ${guessCount}`);
                    if(guessCount === lose){
                        alert(`User has lost the game`);
                        document.location.reload(true);
                    }
                }

                // Removes alphabet element from the letters left available on the left display
                let removeGuess = document.getElementById(keyCode);
                removeGuess.remove();
                console.log("True");

                // Transferrs key value from alphabet array to userGuess array
                alphabet.splice(i, 1);
                userGuess.push(keyCode);
            }
        }

        console.log(alphabet);
        console.log(userGuess);
      }
    }