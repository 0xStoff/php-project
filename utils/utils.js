// Click Event Listener hinzufügen, ID und Funktion als Parameter
// um dauerndes wiederholen von document.getElement... und addEventListener zu vermeiden
export function addEvent(id, func) {
  const element = document.getElementById(id);
  if (element) element.addEventListener("click", func);
}

// Modal ein- resp. ausblenden (mithilfe CSS Klassen)
export function fadeModal(fade) {
  const modal = document.getElementById("modal");
  if (fade === "in") {
    modal.classList.add("fadeIn");
    modal.classList.replace("fadeOut", "fadeIn");
  } else {
    modal.classList.replace("fadeIn", "fadeOut");

    // Das Entfernen der Klassen nach der Animation verhindert ein Flickern
    // des Modals beim verändern der Fenstergrösse
    setTimeout(() => {
      modal.classList.remove("fadeOut");
      modal.classList.remove("fadeIn");
    }, 500);
  }
}
