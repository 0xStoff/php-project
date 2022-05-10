// Snackbar mit übergebenem Parameter (als String) anzeigen
function showSnackbar(errorMessage) {
  let snackbar = document.getElementById("snackbar");
  snackbar.innerHTML = errorMessage;
  snackbar.className = "show";
  // 3s lang anzeigen, dann wieder ausblenden
  setTimeout(function () {
    snackbar.className = snackbar.className.replace("show", "");
  }, 3000);
}

function validiereInputs() {
  const inputs = document.getElementsByClassName("validity");
  const select = document.getElementById("select");
  const selected = document.getElementById("selectedItems");

  selected.childElementCount == 0
    ? (select.style.outline = "1px solid #ff8080")
    : (select.style.outline = "none");

  for (let i = 0; i < inputs.length; i++) {
    !inputs[i].checkValidity()
      ? (inputs[i].style.outline = "1px solid #ff8080")
      : (inputs[i].style.outline = "none");
  }
}

// inputs on blur validieren
function inputValidation() {
  // Validation von Inputfeldern on Blur
  // speichere elemente mit klasse blur in variable
  const formElements = document.getElementsByClassName("blur");

  // loop durch alle form-elemente
  for (let i = 0; i < formElements.length; i++) {
    // event listener (on blur, beim verlassen des feldes) hinzufügen
    formElements[i].addEventListener("blur", () =>
      // validität checken und konditionelles styling (rote outline wenn invalid)
      !formElements[i].checkValidity()
        ? (formElements[i].style.outline = "1px solid #ff8080")
        : (formElements[i].style.outline = "none")
    );
  }
}

export { inputValidation, showSnackbar, validiereInputs };
