function HideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function ShowElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function getRandomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabet = alphabetString.split("");

  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  const target = alphabet[index];
  return target;
}

function getValueById(elementId) {
  const Element = document.getElementById(elementId);
  const text = Element.innerText;
  let value = parseFloat(text);
  return value;
}

function setTextById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function setBgColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-amber-500");
}

function removeBgColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-amber-500");
}
