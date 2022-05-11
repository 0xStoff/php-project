import { showSnackbar, validiereInputs } from "../utils/validation.js";

// Projekte (Karten) laden und response als JSON zurückgeben
async function ladeProject() {
  const response = await fetch("../data/portfolio.php");

  if (response.ok) {
    return await response.json();
  }
  // Snackbar zeigen bei Fehler
  else {
    showSnackbar("Fehler beim Abrufen der Daten");
  }
}

// Karte löschen
async function loescheProject(id) {
  const response = await fetch("../data/portfolio.php?id=" + id, {
    method: "DELETE",
  });

  //Karten nach Löschvorgang neu laden
  if (response.ok) {
    ladeProject();
  }
  // Snackbar zeigen bei Fehler
  else {
    showSnackbar("Löschen fehlgeschlagen!");
  }
}

// neues Projekt (Karte) speichern
async function speichereProject() {
  // Form Validation

  if (document.forms.ProjectForm.checkValidity()) {
    const data = getInpuData();

    console.log(data);

    const response = await fetch("../data/portfolio.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // Form bei erfolgreicher Speicherung zurücksetzen
    if (response.ok) {
      document.forms.ProjectForm.reset();
      // Karten laden und zurückgeben
      return ladeProject();
    }
    // Snackbar zeigen bei Fehler
    else {
      showSnackbar("Daten konnten nicht gespeichert werden!");
    }
  }
  // Snackbar zeigen bei Fehler
  else {
    showSnackbar("Ungültige Eingabe.");
    validiereInputs();
  }
}

// Projekt (Karte) aktualisieren
async function aktualisiereProject(id) {
  // Form validieren
  if (document.forms.ModalForm.checkValidity()) {
    const data = getInpuData(id);

    const response = await fetch("../data/portfolio.php", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log(response);

    if (response.ok) {
      // Karten laden und zurückgeben
      return ladeProject();
    } else {
      // Snackbar zeigen bei Fehler
      showSnackbar("Speichern fehlgeschlagen.");
    }
  } else {
    // Snackbar zeigen bei Fehler
    showSnackbar("Ungültige Eingabe.");
    validiereInputs();
  }
}

async function getLanguageRelations() {
  const response = await fetch("../data/relation.php");

  if (response.ok) {
    return await response.json();
  }
  // Snackbar zeigen bei Fehler
  else {
    showSnackbar("Fehler beim Abrufen der Daten");
  }
}

function getInpuData(id) {
  const selectedItems = document.getElementsByClassName("listItem");

  let languageIds = [];
  for (let i = 0; i < selectedItems.length; i++) {
    languageIds = [...languageIds, selectedItems[i].dataset.attribute];
  }

  // input als objekt speichern
  return !id
    ? {
        creation_date: document.getElementById(`ProjectDate`).value,
        description: document.getElementById("ProjectDescription").value,
        languages: languageIds,
        picture_path: document.getElementById("ProjectImage").value,
        title: document.getElementById("ProjectName").value,
        url: document.getElementById("ProjectUrl").value,
      }
    : {
        creation_date: document.getElementById("ProjectDateEdit").value,
        description: document.getElementById("ProjectDescriptionEdit").value,
        languages: languageIds,
        title: document.getElementById("ProjectNameEdit").value,
        picture_path: document.getElementById("ProjectImageEdit").value,
        projects_id: id,
        url: document.getElementById("ProjectUrlEdit").value,
      };
}

export default {
  aktualisiereProject,
  getLanguageRelations,
  ladeProject,
  loescheProject,
  speichereProject,
};
