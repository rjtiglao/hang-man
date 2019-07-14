// Objects

// Call example 
// console.log(`I found my ${theCobWeb.biggestWeb.biggerWeb.smallerWeb.tinyWeb.items[3]}!`);

let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
let userGuess = [];
let artist = ["artist1", "artist2", "artist3"];

let counter = 0;
let start = 0;

let handler = [];

    window.addEventListener("keyup",    handler); 
    // window.addEventListener("keydown",  handler); 
    // window.addEventListener("keypress", handler);

    document.addEventListener("keyup", keyDownTextField);
    
    function keyDownTextField(e) {

    var keyCode = e.key;
    console.log(keyCode);
    console.log(start);

    /// GAME STARTS AT ENTER
      if(keyCode === 'Enter' && start === 0) {
      alert("Please start guessing!");
      start = start + 1;
      } 
      if (keyCode !== `Enter` && start === 1) {
        handler.push(keyCode);
        keyCode=keyCode.toUpperCase();
        for (i=0;i<alphabet.length;i++){
            if(alphabet[i] === keyCode){
                console.log("True");
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
