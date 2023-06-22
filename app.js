/*----- constants -----*/

const PICTURES = [
  {img1: "pictures/part1.png"}, 
  {img2: "pictures/part2.png"}, 
  {img3: "pictures/part3.png"}, 
  {img4: "pictures/part4.png"}, 
  {img5: "pictures/part5.png"}, 
  {img5: "pictures/part5.png"},
  {img6: "pictures/part6.png"},
  {imgDefault: "pics/hangmanRopeMain.jpeg"}]

  const countryList = ["CANADA", "UNITED STATES", "BRAZIL", "MEXICO", "ETHIOPIA", "SAUDI ARABIA", "ANDORRA", "ARMENIA", "NEPAL", "FIJI", "ESTONIA", "PARAGUAY", "ICELAND", "KENYA", "LEBANON", "BANGLADESH"];

/*----- state variables -----*/

let selectWord; //hidden word picked from movielist
let guessAllowed; //max 6 allowed
let wordLength; //length of 'selectword'
let hiddenWord = [];
let userGuess; //wrong guess being counted

/*----- cached elements  -----*/

const image = document.getElementById("hangMain");
const userInput = document.getElementById("blank-spaces");
const lettersToPick = document.getElementById("alphabets");
const newGameBtn = document.getElementById("new-game")


/*----- event listeners -----*/

lettersToPick.addEventListener('click', handleClicks);

/*----- functions -----*/

function buttonclick(){
  var pagebutton= document.getElementById("selfclick");
  pagebutton.click();
  }

function defImg(){
  image.src = PICTURES[0];
}


const alph = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alph.map((x) => String.fromCharCode(x));



function createButton() {

for (let i=0; i<alphabet.length; i++){
document.getElementById("alphabets").innerHTML += "<button>" + alphabet[i] + "</button>"
}}

createButton();

function randomWord(countryList) {
  return countryList[Math.floor(Math.random()*countryList.length)];
}

function handleClicks(evt){
  evt.preventDefault()
  
  if (evt.target.tagName !== "BUTTON") return
 
  selectWord.split("").forEach((letter, idx) => {

    if(evt.target.innerText === letter){
    hiddenWord[idx] = evt.target.innerText
  }
});
  
  if (!selectWord.includes(evt.target.innerText)){
  ++userGuess;
 
 }
 
  render();
  
  checkWinner();
  
}


function checkWinner(){
  let joinedWord = hiddenWord.join("");

  //if all blank spaces are filled -> then winning msg
  //if 6 guesses -> image changes till img 6 -> losing msg
  
  if(userGuess >= guessAllowed){
      message.innerText = "You Lost :(";
  }
  if(selectWord === joinedWord){
    message.innerText = "You Won!!!";
  }
}


function render() {
  userInput.innerHTML = "";
    for(let i=0; i<wordLength; i++){

    userInput.innerHTML += hiddenWord[i];
  }
  //picture updated with each wrong guess
  image.src = PICTURES[userGuess];
  
}


function init() {
  defImg();

  guessAllowed = 6;
  userGuess = 0;

  selectWord = randomWord(movieList);
  wordLength = selectWord.length;

  for(let i=0; i<wordLength; i++){
    hiddenWord[i] = "_"
  }
  render();
}

  init();


function blankSpaces() {
  selectWord = randomWord(countryList);
  wordLength = selectWord.length;

  for(let i=0; i<wordLength; i++){
    document.getElementById("blank-spaces").innerHTML += "_";
    let output = document.getElementById("blank-spaces").style.whiteSpace="75px";
  }
  
}
//randomWord.split((/[ ]+/));
blankSpaces();
console.log(selectWord, wordLength);

