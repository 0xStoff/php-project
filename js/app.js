// apiService importieren
import apiService from "../js/services.js";
// funktion (logik) für das rendern der Cards (Projekte) importieren
import { renderCards } from "./card.js";
// funktion um ein click Event schneller zu deklarieren
import { addEvent } from "../utils/utils.js";
// funktionen für Liste (language list)
import { addToList, resetLanguagesList } from "./languages.js";

// Main Programm, wird beim Laden der Website ausgeführt
// lade projekte und alle languages vom endpoint
let { projects } = await apiService.ladeProject();
const languagesByProject = await apiService.getProjectLanguages();

// Loader ausblenden
const loader = document.getElementById("ripple");
loader.style.display = "none";

// Select List (links) und selectedItems (rechts) in variable
const selectBox = document.getElementById("select");
const selectedItems = document.getElementById("selectedItems");

// Event Listener zur Select Box hinzufügen
selectBox.addEventListener("click", (e) =>
  addToList(e, selectBox, selectedItems)
);

// Liste zurücksetzen, sodass keine Language in der Form ausgewählt ist
resetLanguagesList();

// render karten mit erhaltenen daten
renderCards(projects, languagesByProject);

// Event Listener für Einfügen neuer Karter
addEvent("ButtonSpeichern", async () => {
  // aktuellen Zustand der Projekte speichern
  let prevProjects = projects;
  // neues Projekt speichern und languages neu abfragen
  const { projects: loadedProjects } = await apiService.speichereProject();
  const languagesByProject = await apiService.getProjectLanguages();

  // language list zurücksetzen und neue karten rendern
  resetLanguagesList();
  renderCards(loadedProjects, languagesByProject);

  // frontend zurücksetzen falls null von apiService zurückgegeben
  if (!loadedProjects) renderCards(projects, languagesByProject);
  projects = prevProjects;
});

// Event Listener für Abbrechen Button (zum Formular zurücksetzen)
addEvent("FormularZuruecksetzen", () => {
  document.forms.ProjectForm.reset();
  resetLanguagesList();
});

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
