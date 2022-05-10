// apiService importieren
import apiService from "./services/services.js";
// funktion um ein click Event schneller zu deklarieren
// modal ausblenden
import { addEvent, fadeModal, filterProjects } from "./utils/utils.js";
// funktionen für Liste (language list)
import { addToList, createListElement, resetLanguagesList } from "./list.js";
// funktionen die sich auf das Rendern von HTML beziehen
import { renderCardsHtml, renderForm, renderModal } from "./render.js";
import { inputValidation } from "./utils/validation.js";
//XXXXXXXX
/**
 * Klick auf Karte oder Edit Button verarbeiten
 * Modal dementsprechend anzeigen
 *
 * @param {Array} cards alle Karten resp. Projekte
 * @param {Array} i Zählervariable, repräsentiert Index der Karte im Memory
 * @param {Array} languages Relationen zwischen Languages und Projekten
 * @param {Int} id einzigartige ID, die das Projekt in der DB repräsentiert
 */
function handleClick(cards, card, languages, id) {
  // Modal einblenden
  fadeModal("in");

  // Konditionelles rendern von Text im Modal oder Inputs für Editieren
  // i wird im Listener des Event Handlers übergeben und repräsentiert
  // den Index in einem For Loop. Da die Karten chronologisch im Memory gepspeichert sind,
  // kann man mithilfe des index die richtige Karte rendern (cards[i]).
  // wird der Funktion eine id übergeben (Platz im Backend), so sollen Inputs statt Text
  // angezeigt werden (Editiermodus)
  const html = !id ? renderModal(card, languages) : renderForm(card);

  // DOM Element manipulieren und Modal richtig anzeigen (Editiermodus oder Anzeigemodus)
  document.getElementById("modalContent").innerHTML = html;

  //  falls im Editiermodus
  if (id) showEditMode(id, cards, card, languages);
}

/**
 * Editiermodus anzeigen
 * Dementsprechend werden Inputs angezeigt, auch wird die Liste mit den
 * Languages generiert und dynamisch angezeigt
 *
 * @param {Int} id  einzigartige ID, die das Projekt in der DB repräsentiert
 * @param {*} card Karte resp. Projekt, dass im Editiermodus geöffnet werden soll
 * @param {*} languages Relationen zwischen Languages und Projekten
 */
function showEditMode(id, cards, card, languages) {
  // validation zu inputfeldern hinzufügen
  inputValidation();
  // variabeln filterUnselected und selected aus funktion ziehen
  // repräsentieren die gewählten/ungewählten Languages des geklickten Projekts
  const { filterUnselected, selected } = filterProjects(languages, card);

  // Listen für Languages in variabeln speichern
  const selectBox = document.getElementById("select1");
  const selectedItems = document.getElementById("selectedItems1");

  // Language Liste mit Daten des Projekts abgleichen und anzeigen
  resetLanguagesList(filterUnselected, selectBox);

  // Event Listener zur Select Box hinzufügen (linke Liste)
  selectBox.addEventListener("click", (e) =>
    addToList(e, selectBox, selectedItems)
  );

  // durch selektierte languages mappen (rechte Liste) und für jedes element ein Listelement zurückgeben (anzeige)
  selected.map((l) => {
    createListElement(l.language_id, selectBox, selectedItems, l.language_name);
  });

  // Event Listener zum Aktualisieren Button hinzufügen
  addEvent("ButtonAktualisieren", async () => {
    let prevCards = cards;
    // apiService fürs aktualisieren aufrufen
    const { projects: loadedProjects } = await apiService.aktualisiereProject(
      id
    );
    // languages vom apiService abrufen
    const languagesByProject = await apiService.getLanguageRelations();

    // frontend ansicht zurücksetzen falls null von apiService zurückgegeben
    if (!loadedProjects) loadedProjects = prevCards;
    // Modal ausblenden
    fadeModal("out");
    // Karten neu rendern
    renderCards(loadedProjects, languagesByProject);
  });
}

/**
 * Karte resp. Projekt wird zuerst im Frontend und dann im Backend gelöscht
 * @param {Array} cards alle Karten resp. Projekte
 * @param {Array} languages Relationen zwischen Languages und Projekten
 * @param {Int} id einzigartige ID, die das Projekt in der DB repräsentiert
 *
 */
async function deleteCard(cards, languages, id) {
  const remainingCards = cards.filter((c) => c.projects_id != id);
  renderCards(remainingCards, languages);
  await apiService.loescheProject(id);
}

/**
 * Rendern der Karten und hinzufügen von Event-Listener zu Icons (Click, Edit, Delete)
 * weitere Event-Listener, um Modal bei Keydown (Escape-Taste) zu verlassen
 *
 * @param {Array} cards Zu rendernde Karten/Projekte
 * @param {Array} languages Relationen zwischen Projekten und Languages
 */

function renderCards(cards, languages) {
  // HTML rendern und in variable speichern
  const html = renderCardsHtml(cards, languages);

  // HTML DOM manipulieren, anzeigen der Karten
  const wrapperElement = document.getElementById("wrapperCards");
  if (wrapperElement) wrapperElement.innerHTML = html;

  // Event listener hinzufügen für Card Klick, editieren und löschen
  for (let i = 0; i < cards.length; i++) {
    addEvent(`card${i}`, () => handleClick(cards[i], languages));
    addEvent(`delete${i}`, async (e) =>
      deleteCard(cards, languages, e.target.dataset.attribute)
    );
    addEvent(`edit${i}`, (e) =>
      handleClick(cards, cards[i], languages, e.target.dataset.attribute)
    );
  }
}
// Event Listener für Close Icon im Modal
addEvent("icon", () => {
  fadeModal("out");
});

// Event Listener für Keydown (um Modal mit ESC zu schliessen)
// prüft ob Escape betätigt wurde und führt fadeModal aus
document.addEventListener(
  "keydown",
  (event) => event.key === "Escape" && fadeModal("out")
);

export { renderCards };
