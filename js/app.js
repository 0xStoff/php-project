// apiService importieren
import apiService from "../js/services.js";

import { renderCards } from "./card.js";
import { addEvent } from "../utils/utils.js";
import { addToList, resetLanguagesList } from "./languages.js";

// Main Programm, wird beim Laden der Website ausgeführt
// speichere daten aus server in variable cards

let { projects } = await apiService.ladeProject();
const languagesByProject = await apiService.getProjectLanguages();

const loader = document.getElementById("ripple");
loader.style.display = "none";

// Select List (links) und selectedItems (rechts) in variable
const selectBox = document.getElementById("select");
const selectedItems = document.getElementById("selectedItems");
// Event Listener zur Select Box hinzufügen
selectBox.addEventListener("click", (e) =>
  addToList(e, selectBox, selectedItems)
);

resetLanguagesList();

// render karten mit erhaltenen daten
renderCards(projects, languagesByProject);
// Event Listener für Einfügen neuer Karter
addEvent("ButtonSpeichern", async () => {
  let prevProjects = projects;

  const { projects: loadedProjects } = await apiService.speichereProject();
  const languagesByProject = await apiService.getProjectLanguages();
  resetLanguagesList();
  renderCards(loadedProjects, languagesByProject);

  // frontend zurücksetzen falls null von apiService zurückgegeben
  if (!loadedProjects) renderCards(projects, languagesByProject);
  projects = prevProjects;
});

addEvent("FormularZuruecksetzen", () => {
  document.forms.ProjectForm.reset();
  resetLanguagesList();
});

// creation_date: document.getElementById("ProjectDate").value,
// description: document.getElementById("ProjectDescription").value,
// languages: languageIds,
// title: document.getElementById("ProjectName").value,
// url: document.getElementById("ProjectUrl").value,
// picture_path: document.getElementById("ProjectImage").value,

const formElements = document.getElementsByClassName("blur");

for (let i = 0; i < formElements.length; i++) {
  formElements[i].addEventListener("blur", (e) =>
    !formElements[i].checkValidity()
      ? (formElements[i].style.outline = "1px solid #ff8080")
      : (formElements[i].style.outline = "none")
  );
}
