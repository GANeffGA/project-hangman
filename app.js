 /*----- constants -----*/

 const PICTURES = [
    {img1: "/pics/hangman1.jpeg"}, 
    {img2: "pics/hangman2.jpeg"}, 
    {img3: "pics/hangman3.jpeg"}, 
    {img4: "pics/hangman4.jpeg"}, 
    {img5: "pics/hangman5.jpeg"}, 
    {img6: "pics/hangman6.jpeg"},
    {imgDefault: "pics/hangmanRopeMain.jpeg"}]
  
    const countryList = ["CANADA", "UNITED STATES", "BRAZIL", "MEXICO", "ETHIOPIA", "SAUDI ARABIA", "ANDORRA", "ARMENIA", "NEPAL", "FIJI", "ESTONIA", "PARAGUAY", "ICELAND", "KENYA", "LEBANON", "BANGLADESH"];

  /*----- state variables -----*/

  let win; //winning msg
  let loss;  //losing msg
  //let selectedWord; //hidden word picked
  let guessedletter; //letters picked from the array/alphabets
  let incorrectGuess; //max 5 allowed, 6th is counted as loss
  let wordLength; //length of spaces in 'word'

  /*----- cached elements  -----*/

  const image = document.getElementById("hangMain");
  const userInput = document.getElementById("blank-spaces");
  const lettersToPick = document.getElementById("alphabets");
  const newGameBtn = document.getElementById("new-game")


  /*----- event listeners -----*/


  /*----- functions -----*/

  function defImg(){
    image.src = PICTURES[6].imgDefault;
  }

defImg();

  const alph = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alph.map((x) => String.fromCharCode(x));
  console.log(alphabet)



function createButton() {
  
  for (let i=0; i<alphabet.length; i++){
  document.getElementById("alphabets").innerHTML += "<button>" + alphabet[i] + "</button>"
}}

createButton();

function randomWord(movieList) {
    return movieList[Math.floor(Math.random()*movieList.length)];
  }


function blankSpaces() {
    selectWord = randomWord(movieList);
    wordLength = selectWord.length;

    for(let i=0; i<wordLength; i++){
      document.getElementById("blank-spaces").innerHTML += "_";
      let output = document.getElementById("blank-spaces").style.whiteSpace="75px";
    }
    
  }
  //randomWord.split((/[ ]+/));
  blankSpaces();
  console.log(selectWord, wordLength);