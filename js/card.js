// apiService importieren
import apiService from "../js/services.js";
import { addEvent, fadeModal } from "../utils/utils.js";
import {
  addToList,
  createListElement,
  resetLanguagesList,
} from "./languages.js";
import { renderCardsHtml, renderForm, renderLanguages } from "./render.js";

let { languages: allLanguages } = await apiService.ladeProject();

// Klick auf Karte oder Edit Button verarbeiten
function handleClick(cards, languages, i, id) {
  //
  const { filterUnselected, selected } = filterProjects();

  // Konditionelles rendern von Text oder Inputs (für anzeige oder editieren)
  // i wird im Listener des Event Handlers übergeben und repräsentiert lediglich
  // den Index in einem For Loop. Da die Karten chronologisch im Memory gepspeichert sind,
  // kann man mithilfe des index die richtige Karte rendern (cards[i]).
  // wird der Funktion eine id übergeben (Platz im Backend), so sollen Inputs statt Text
  // angezeigt werden (Editiermodus)
  const html = !id
    ? `<h1>${cards[i].title}</h1>  
      <p class="card_title">${cards[i].description}</p>
      <img src="${cards[i].picture_path}"/></br>
      <a href="${cards[i].url}" class="card_title">${cards[i].url}</a> 
      ${renderLanguages(cards[i], languages)}`
    : renderForm(cards[i].title);

  // DOM Element manipulieren, Modal ausblenden
  document.getElementById("modalContent").innerHTML = html;
  fadeModal("in");

  // Event Listener zum Aktualisieren Button hinzufügen, falls im Editiermodus
  if (id) {
    const selectBox = document.getElementById("select1");
    const selectedItems = document.getElementById("selectedItems1");
    resetLanguagesList(filterUnselected, selectBox);

    // Event Listener zur Select Box hinzufügen
    selectBox.addEventListener("click", (e) =>
      addToList(e, selectBox, selectedItems)
    );

    selected.map((l) => {
      createListElement(
        l.language_id,
        selectBox,
        selectedItems,
        l.language_name
      );
    });

    addEvent("ButtonAktualisieren", async () => {
      let prevCards = cards;
      const { projects: loadedProjects } = await apiService.aktualisiereProject(
        id
      );
      const languagesByProject = await apiService.getProjectLanguages();
      // renderCards(loadedProjects, languagesByProject);
      // console.log(languagesByProject);
      // frontend ansicht zurücksetzen falls null von apiService zurückgegeben
      if (!loadedProjects) loadedProjects = prevCards;
      fadeModal("out");
      renderCards(loadedProjects, languagesByProject);
    });
  }

  // Algorithmen zur Filterung
  function filterProjects() {
    const selectedLanguages = languages.filter(
      (l) => l.projects_id == cards[i].projects_id
    );

    const selected = selectedLanguages.map((l) => ({
      language_id: l.language_id,
      language_name: l.language_name,
    }));

    const filterUnselected = allLanguages.filter(
      (ar) =>
        !selected.find(
          (rm) =>
            rm.language_id === ar.language_id &&
            ar.language_name === rm.language_name
        )
    );
    return { filterUnselected, selected };
  }
}

// Karte löschen (zuerst im Frontend und dann im Backend)
function deleteCard(cards, languages, i, id) {
  cards.splice(i, 1);
  renderCards(cards, languages);
  apiService.loescheProject(id);
}

// Rendern der Karten
// mappt durch alle Daten (cards) und gibt ein HTML-Element in Variable "html" zurück
// die Icons (img-Tag) beinhalten die id vom Backend als Daten-Attribut
function renderCards(cards, languages) {
  const html = renderCardsHtml(cards, languages);

  // HTML DOM manipulieren, anzeigen der Karten
  const wrapperElement = document.getElementById("wrapperCards");
  if (wrapperElement) wrapperElement.innerHTML = html;

  // Event listener hinzufügen für Card Klick, editieren und löschen
  for (let i = 0; i < cards.length; i++) {
    addEvent(`card${i}`, () => handleClick(cards, languages, i));
    addEvent(`delete${i}`, async (e) =>
      deleteCard(cards, languages, i, e.target.dataset.attribute)
    );
    addEvent(`edit${i}`, (e) =>
      handleClick(cards, languages, i, e.target.dataset.attribute)
    );
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
}

export { renderCards };
