import { showSnackbar, validiereInputs } from "../utils/validation.js";

/**
 * Projekte (Karten) laden oder Fehlermeldung in Snackbar
 * @returns JSON response des GET endpoints für Projekte
 */
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

/**
 * Karte löschen oder Fehlermeldung in Snackbar
 * @param {Int} id id des zu löschenden Objektes
 */
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

/**
 *  neues Projekt (Karte) speichern
 *  Validationsprüfung und Fehlermeldung in Snackbar
 * @returns  JSON response des GET endpoints für Projekte
 */
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

    // Bild speichern, wenn File gefunden
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

/**
 * Projekt (Karte) aktualisieren
 *
 * @param {Int} id  id des Objektes, dessen Datensätze aktualisiert werden müssen
 * @returns  JSON response des GET endpoints für Projekte
 */
async function aktualisiereProject(id) {
  // Alle Projekte laden
  const { projects } = await ladeProject();
  // Form validieren
  if (document.forms.ModalForm.checkValidity()) {
    // Values der Inputdaten in Variable data speichern
    const data = getInpuData(id);

    // Falls kein neues Bild ausgewählt wurde
    if (!data.picture_path) {
      // Erklärung zu dieser Funktion: Input type File kann aus Sicherheitsgründen kein Value tragen,
      // weshalb im Editiermodus standardmässig kein Bild gewählt ist. Damit das aktuelle
      // Bild nicht mit einem leeren Datensatz überschrieben wird, falls man es nicht ändern möchte,
      // müssen wir den aktuellen Pfad aus der Datenbank lesen und neu setzen

      // Suche das aktuelle (geöffnete) Projekt in der Variable projects (alle Projekte)
      const currentProject = projects.find(
        (p) => p.projects_id === data.projects_id
      );
      // name des aktuellen Bildes in unseres data-Variable schreiben
      data.picture_path = currentProject.picture_path;
    } else {
      // Falls ein neues Bild ausgewählt wurde, wollen wir dieses auf dem Server speichern
      saveImage(document.getElementById("modalForm"));
    }

    const response = await fetch("../data/portfolio.php", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

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

/**
 * Relationen zwischen Languages und Projekten laden
 * @returns JSON response des GET endpoints für Relationen
 */
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

/**
 *  Daten aus den Inputfeldern ziehen und in ein Objekt verpacken,
 *  um diese an den Server schicken zu können
 *
 * @param {Int} id  id des Objektes
 * @returns Objekt mit allen Values der Inputfelder
 */
function getInpuData(id) {
  // selektiere Languages in Variable speichern
  const selectedItems = document.getElementsByClassName("listItem");

  // Alle Datenattribute der selektieren Languages in einem Array
  // namens languagesIds speichern
  //(da wir jeweils die ID der Language als data-attribute dem HTML ELement übergeben haben)
  let languageIds = [];
  for (let i = 0; i < selectedItems.length; i++) {
    languageIds = [...languageIds, selectedItems[i].dataset.attribute];
  }

  // falls eine ID der funktion übergeben, soll ein anderes Objekt zurückgegeben werden
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

/**
 * Bild auf dem Server speichern (Endpoint dazu aufrufen)
 * @param {HTMLElement} form HTML Form, welche das Image-File enthält, dass man hochladen will
 * @returns Status des Speichervorgangs
 */
async function saveImage(form = document.getElementById("projectForm")) {
  try {
    const response = await fetch("../../php-project/data/relation.php", {
      method: "POST",
      body: new FormData(form),
    });

    return response;
  } catch (error) {
    console.error(error);
    showSnackbar("Fehler beim Hochladen des Bildes.");
  }
}

export default {
  aktualisiereProject,
  getLanguageRelations,
  ladeProject,
  loescheProject,
  speichereProject,
};
