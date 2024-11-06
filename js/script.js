function keyPressEvent(event) {
  const playerPress = event.key;

  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText.toLowerCase();

  if (playerPress === currentAlphabet) {
    // update score
    let currentScore = getValueById("score");
    currentScore += 1;
    setTextById("score", currentScore);
  } else {
    // update life
    let currentLife = getValueById("life");
    currentLife -= 1;
    setTextById("life", currentLife);

    if (currentLife === 0) {
      ShowScore();
    }
  }
  removeBgColor(currentAlphabet);

  ContinueGame();
}

document.addEventListener("keyup", keyPressEvent);
function ContinueGame() {
  const alphabet = getRandomAlphabet();
  const currentAlphabet = document.getElementById("current-alphabet");
  currentAlphabet.innerText = alphabet;
  setBgColor(alphabet);
}

function Play() {
  HideElementById("home-screen");
  ShowElementById("play-ground");
  ContinueGame();
}

function ShowScore() {
  HideElementById("play-ground");
  ShowElementById("score-section");
  //

  const score = getValueById("score");
  setTextById("show-score", score);
}
