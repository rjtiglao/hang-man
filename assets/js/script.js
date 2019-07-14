
// Objects

// Call example 
// console.log(`I found my ${theCobWeb.biggestWeb.biggerWeb.smallerWeb.tinyWeb.items[3]}!`);

//VARIABLES
let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
let userGuess = [];
let artist = ["artist1", "artist2", "artist3"];
let compChoice;
let hangMan = [];
let counter = 0;
let start = 0;

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
      alert("Please start guessing!");
      start = start + 1;
      // Computer Choice
       let num = Math.floor(Math.random() * artist.length);
        compChoice = artist[num];
        // pushes artist name as separate characters into hangMan array
        for (var i = 0; i < compChoice.length; i++) {
            hangMan.push(compChoice.charAt(i));
        }
        let answer = document.createElement(`p`);
        
      } 

    
      if (keyCode !== `Enter` && start === 1) {
          alert(`Hidden Choice: ${compChoice}`);
          alert(`Hangman Array: ${hangMan}`)
        keyCode=keyCode.toUpperCase();
    // Most logic for game begins here
        for (i=0;i<alphabet.length;i++){
            if(alphabet[i] === keyCode){
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
// gameStart function(){
//     for(i=0;i<artist.length;i++){
//         console.log(artist[i])

//     }
// }

