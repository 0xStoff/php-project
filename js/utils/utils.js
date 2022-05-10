// apiService importieren
import apiService from "../services/services.js";

/**
 * Click Event Listener hinzufügen,
 * um dauerndes wiederholen von document.getElement... und addEventListener zu vermeiden
 *
 * @param {String} id id des HTML-Elements
 * @param {Function} func funktion die im click listener ausgeführt werden soll
 * @returns gibt das HTML element zurück
 */
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

// alle languages laden und in alias speichern
let { languages: allLanguages } = await apiService.ladeProject();

/**
 * Algorithmen zur Filterung für die Language Liste
 * Im Editiermodus sollen die Languages richtig in den Listen angezeigt werden
 * Dazu müssen die selektierten resp. unselektierten Languages aus den Daten gelesen
 * und zurückgegeben werden.
 *
 * @param {Array} languages Relationen zwischen Languages und Projekten
 * @param {Array} card daten der ausgewählten Karte
 * @returns gibt zwei Arrays zurück mit den selektierten resp. unselektierten Listeinträgen
 */
function filterProjects(languages, card) {
  // selektierte Languages des Projekts
  // gleicht die Relation zu Languages mit Projektdaten ab und filtert nach diesen
  // alle Languages des Projekts in variable speichern
  const selectedLanguages = languages.filter(
    (l) => l.projects_id == card.projects_id
  );

  // durch alle Languages des Projekts mappen, um die Datenstruktur anzupassen
  // durch die Relation (inner join der tabelle) haben wir die Projekt ID, welche wir hier rausfiltern
  const selected = selectedLanguages.map((l) => ({
    language_id: l.language_id,
    language_name: l.language_name,
  }));

  // unselektierte Languages des Projekts suchen
  // zuerst filtern durch alle Languages
  const filterUnselected = allLanguages.filter(
    // language übergeben
    (language) =>
      // im selected array nach übereinstimmungen suchen (mittels find funktion)
      selected.find(
        (selected) =>
          // abgleichen von allen Languages mit selektierten Languages des Projekts
          // ungleiche zurückgeben, um in variable zu speichern
          selected.language_id !== language.language_id &&
          language.language_name !== selected.language_name
      )
  );
  return { filterUnselected, selected };
}
export { addEvent, fadeModal, filterProjects };
