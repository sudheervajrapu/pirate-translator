const userInput = document.querySelector("#input-text"),
  translatedOutput = document.querySelector("#output-text"),
  translateBtn = document.querySelector("#translate-btn");

translateBtn.addEventListener("click", translateToPirateSpeak);

function errorHandler(error) {
  console.log("Something went wrong. Please try again!!", error);
}

function constructURL(inputText) {
  const URL = "https://api.funtranslations.com/translate/pirate.json";
  return `${URL}?text=${inputText}`;
}

function translateToPirateSpeak() {
  fetch(constructURL(userInput.value))
    .then((response) => response.json())
    .then((data) => (translatedOutput.innerText = data.contents.translated))
    .catch(errorHandler);
}
