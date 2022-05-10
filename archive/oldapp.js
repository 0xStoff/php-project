import { initialisiereFormular } from "./init.js";

async function ladeProject() {
  try {
    const response = await fetch("data/portfolio.php");
    const data = await response.json();

    if (response.ok) {
      // renderHtml(data);
      return data;
    }
  } catch (error) {
    console.error("Die Anfrage ergab einen Fehler", error);
    document.getElementById("tableData").innerHTML = "";
    document.getElementById("NoData").hidden = false;
    alert("Fehler beim Abrufen der Daten");
  }
}

function renderHtml(data) {
  let html = "";
  data.map((d) => {
    html += `
    <tr>
    <td>
    ${d.id}
    </td>
    <td>
    ${d.project_name}
    </td>
    <td>
    <a class='delete' data-attribute=${d.id} >löschen</a> 
    <a class='edit' data-attribute=${d.id} >editieren</a></td>
    </td>
    </tr>`;
    return html;
  });

  let elem = document.getElementById("tableData");
  elem.innerHTML = html;

  addListeners();

  // Datenstatus aktualisieren
  document.getElementById("NoData").hidden = data.length > 0 ? true : false;
}

function addListeners() {
  const deleteButtons = document.getElementsByClassName("delete");
  const editButtons = document.getElementsByClassName("delete");
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", (e) =>
      loescheProject(e.target.dataset.attribute)
    );
    editButtons[i].addEventListener("click", (e) =>
      loescheProject(e.target.dataset.attribute)
    );
  }
}

async function loescheProject(id) {
  const response = await fetch("data/portfolio.php?id=" + id, {
    method: "DELETE",
  });
  if (response.ok) {
    ladeProject();
  } else {
  }
}

async function speichereProject() {
  if (document.forms.ProjectForm.checkValidity()) {
    const name = document.getElementById("ProjectName").value;
    const data = {
      name: name,
    };

    const response = await fetch("data/portfolio.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      document.forms.ProjectForm.reset();
      ladeProject();
    } else {
      console.warn("Speichern schlug fehl");

      alert("Daten konnten nicht gespeichert werden");
    }
  }
}

function aktualisiereProject() {
  // Form validieren
  if (document.forms.projectForm.checkValidity()) {
    // console.log("Eingaben gültig");

    // Daten auslesen
    var id = document.getElementById("ProjectId").value;
    var name = document.getElementById("ProjectName").value;

    var data = {
      id: id,
      name: name,
    };
    // console.log("Eingabedaten", data);

    // Daten speichern
    fetch("data/portfolio.php", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      // console.log("Antwort empfangen", response);

      // Antwortstatus prüfen
      if (response.ok) {
        // console.log("Speichern war erfolgreich");

        // Korrekte Elemente einblenden
        document.getElementById("ProjectFormId").hidden = true;
        document.getElementById("ButtonSpeichern").hidden = false;
        document.getElementById("ButtonAktualisieren").hidden = true;

        // Formular leeren und projectliste neu laden
        document.forms.ProjectForm.reset();
        ladePortfolio();
      } else {
        console.warn("Speichern schlug fehl");

        // Warnung ausgeben
        alert("Daten konnten nicht gespeichert werden");
      }
    });
  } else {
    // console.log("Ungültige Eingabe");
  }
}

// initialisierung
ladeProject();
initialisiereFormular();
document
  .getElementById("ButtonSpeichern")
  .addEventListener("click", () => speichereProject());

// async function getData() {
//   try {
//     const response = await fetch("data/portfolio.php");
//     const data = await response.json();
//     if (response.ok) {
//       return data;
//     }
//   } catch (error) {
//     console.error("Die Anfrage ergab einen Fehler", error);
//   }
// }

// export { getData };
