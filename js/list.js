// apiService importieren
import apiService from "./services/services.js";

// alle languages laden
let { languages: allLanguages } = await apiService.ladeProject();

// Element aus select Liste (links) entfernen und in die rechte Liste einfügen
const addToList = (e, selectBox, selectedItems) => {
  const select = document.getElementById("select");
  select.style.outline = "none";

  // nicht ausführen wenn nur auf box (ohne value) geklickt wird; verhindert leere Zeilen
  // in rechter Liste
  if (e.target.value) {
    // div Element für List item erstellen
    createListElement(
      e.target.dataset.attribute,
      selectBox,
      selectedItems,
      e.target.value
    );

    // selektiertes Item aus linker Liste entfernen
    selectBox.removeChild(e.target);
  }
};

// List element mit Löschen Icon erstellen (wird rechts zur Liste angefügt)
function createListElement(attribute, selectBox, selectedItems, value) {
  let listItem = document.createElement("div");
  // klasse für styling hinzufügen
  listItem.classList.add("listItem");
  // selektiertes Item als child hinzufügen
  listItem.appendChild(document.createTextNode(`${value}`));
  // value auf selektiertes Item setzen
  listItem.dataset.attribute = attribute;
  listItem.value = value;

  // img Element für Icon erstellen (Close Icon)
  let icon = document.createElement("img");
  // styling und src (url)
  icon.classList.add("iconList");
  icon.src = "./assets/close.svg";

  // icon zu ListItem hinzufügen
  listItem.appendChild(icon);

  // listItem zu selectedItems (rechte Liste) hinzufügen
  selectedItems.appendChild(listItem);

  // Element aus rechter Liste wieder entfernen und links wieder einfügen
  const removeFromList = () => {
    // option element erstellen
    let option = document.createElement("option");
    // text auf den div Wert setzen, den es zu entfernen gilt
    option.text = listItem.value;
    // option in linke Liste wieder einfügen
    selectBox.add(option);
    // kind aus rechter Liste wieder entfernen
    selectedItems.removeChild(listItem);
  };

  // Event Listener für entfernen Icon hinzufügen und wieder entfernen nach dem löschen
  icon.addEventListener("click", () => removeFromList());
  icon.removeEventListener("click", removeFromList);
}

// Language List zurücksetzen
// Standardmässig werden alle Languages mit dem wrapper Element des select-tags (auf Startseite) übergeben
// die Liste wird dabei auf den Anfangswert zurückgesetzt (links aller Inhalt, rechts kein Inhalt)
// werden der funktion languages übergeben, werden dementsprechend andere optionen angezeigt (notwendig für Editiermodus)
// da im Modal ein anderes Element wie auf der Startseite zu sehen ist, kann und muss auch der Wrapper übergeben werden
function resetLanguagesList(
  languages = allLanguages,
  wrapperElement = document.getElementById("select")
) {
  // durch languages mappen und für jede language ein option element zurückgeben
  let html = "";
  languages.map(
    (language, i) =>
      (html += `
      <option value="${language.language_name}" data-attribute=${language.language_id}>${language.language_name}</option>
          `)
  );
  // html einfügen, falls ein wrapper element vorhanden ist
  if (wrapperElement) wrapperElement.innerHTML = html;
}

export { addToList, createListElement, resetLanguagesList };