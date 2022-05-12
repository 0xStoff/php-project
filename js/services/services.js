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

    const response = await fetch("../data/portfolio.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (data.picture_path) saveImage();

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

async function saveImage(
  files = document.getElementById("ProjectImage").files
) {
  if (files.length > 0) {
    let formData = new FormData();
    formData.append("file", files[0]);

    const response = await fetch("../data/relation.php", {
      method: "POST",
      body: formData,
    });

    console.log(response);
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
        "Content-Type": "multipart/form-data",
      },
      body: JSON.stringify(data),
    });

    if (data.picture_path)
      saveImage(document.getElementById("ProjectImageEdit").files);

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

  return !id
    ? {
        creation_date: document.getElementById(`ProjectDate`).value,
        description: document.getElementById("ProjectDescription").value,
        languages: languageIds,
        picture_path: document
          .getElementById("ProjectImage")
          .value.replace("C:\\fakepath\\", ""),
        title: document.getElementById("ProjectName").value,
        url: document.getElementById("ProjectUrl").value,
      }
    : {
        creation_date: document.getElementById("ProjectDateEdit").value,
        description: document.getElementById("ProjectDescriptionEdit").value,
        languages: languageIds,
        title: document.getElementById("ProjectNameEdit").value,
        picture_path: document
          .getElementById("ProjectImageEdit")
          .value.replace("C:\\fakepath\\", ""),
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
