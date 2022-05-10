// Click Event Listener hinzufügen, ID und Funktion als Parameter
// um dauerndes wiederholen von document.getElement... und addEventListener zu vermeiden
function addEvent(id, func) {
  const element = document.getElementById(id);
  if (element) element.addEventListener("click", func);
  return element;
}

// Modal ein- resp. ausblenden (mithilfe CSS Klassen)
function fadeModal(fade) {
  const modal = document.getElementById("modal");

  if (fade === "in") {
    document.body.style.overflow = "hidden";
    modal.classList.add("fadeIn");
    modal.classList.replace("fadeOut", "fadeIn");
  } else {
    document.body.style.overflow = "scroll";
    modal.classList.replace("fadeIn", "fadeOut");

    // Das Entfernen der Klassen nach der Animation verhindert ein Flickern
    // des Modals beim verändern der Fenstergrösse
    setTimeout(() => {
      modal.classList.remove("fadeOut");
      modal.classList.remove("fadeIn");
    }, 500);
  }
}

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

export { addEvent, fadeModal, inputValidation };
