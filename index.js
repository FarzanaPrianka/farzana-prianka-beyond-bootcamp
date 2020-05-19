const letsPlayButton = document.querySelector('.letsPlay');
const keyboard = document.querySelector('.keyboard');


let wordCollection = ['humayun', "nazma", "alee", 'prianka', 'rusho', 'robin', 'rashed', 'rishan', 'rihan', 'nupur'];




//when user clicks on lets play button
// letsPlayButton.addEventListener('click', letPlayTheGame);


// function letPlayTheGame() {
//     console.log("Lets play the game");
// }

//generates keyboard
function generateKeyboard() {

    //string gets split into an array
    //map through the array
    //return a li for each array element(letter)

    let letters = "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => {
        return (`<li class=letter ${letter}>${letter}</li>`);
    });

    console.log(letters.join(""));

    //join the array element
    return letters.join("");

}

keyboard.innerHTML = generateKeyboard();

