// apiService importieren
import apiService from "../js/services.js";
import Card from "./card.js";

// const card = new Card();
// card.addEvent("icon", () => fadeModal("out"));

// Click Event Listener hinzufügen, ID und Funktion als Parameter
// um dauerndes wiederholen von document.getElement... und addEventListener zu vermeiden
function addEvent(id, func) {
  const element = document.getElementById(id);
  if (element) element.addEventListener("click", func);
}

// Modal ein- resp. ausblenden (mithilfe CSS Klassen)
function fadeModal(fade) {
  const modal = document.getElementById("modal");
  if (fade === "in") {
    modal.classList.add("fadeIn");
    modal.classList.replace("fadeOut", "fadeIn");
  } else {
    modal.classList.replace("fadeIn", "fadeOut");

    // Das Entfernen der Klassen nach der Animation verhindert ein Flickern
    // des Modals beim verändern der Fenstergrösse
    setTimeout(() => {
      modal.classList.remove("fadeOut");
      modal.classList.remove("fadeIn");
    }, 500);
  }
}

// Klick auf Karte oder Edit Button verarbeiten
function handleClick(i, id) {
  // Konditionelles rendern von Text oder Inputs (für anzeige oder editieren)
  // i wird im Listener des Event Handlers übergeben und repräsentiert lediglich
  // den Index in einem For Loop. Da die Karten chronologisch im Memory gepspeichert sind,
  // kann man mithilfe des index die richtige Karte rendern (cards[i]).
  // wird der Funktion eine id übergeben (Platz im Backend), so sollen Inputs statt Text
  // angezeigt werden (Editiermodus)
  const html = !id
    ? `<h1>${cards[i].project_name}</h1>`
    : `<form name='modalForm' class="wrapper-form">
  <input name="inputField" id='inputField' value='${cards[i].project_name}' required  />
  <button class="button" type="button" id="ButtonAktualisieren">Update</button></form>`;

  // DOM Element manipulieren, Modal ausblenden
  document.getElementById("modalContent").innerHTML = html;
  fadeModal("in");

  // Event Listener zum Aktualisieren Button hinzufügen, falls im Editiermodus
  if (id) {
    addEvent("ButtonAktualisieren", async () => {
      let prevCards = cards;
      cards = await apiService.aktualisiereProject(id);
      // frontend ansicht zurücksetzen falls null von apiService zurückgegeben
      if (!cards) cards = prevCards;
      fadeModal("out");
      loadCards();
    });
  }
}

// Karte löschen (zuerst im Frontend und dann im Backend)
async function deleteCard(i, e) {
  cards.splice(i, 1);
  loadCards();
  apiService.loescheProject(e);
}

// Laden der Karten
// mappt durch alle Daten (cards) und gibt ein HTML-Element in Variable "html" zurück
// die Icons (img-Tag) beinhalten die id vom Backend als Daten-Attribut
async function loadCards() {
  let html = "";
  cards.map(
    (data, i) =>
      (html += `
          <div class='card' id='card${i}'>
              <h1>${data.project_name}</h1>     
          </div>
          <div class='iconWrapper'>
              <img data-attribute=${data.id} id='delete${i}' src=./assets/delete.svg class='deleteIcon' />
               <img  data-attribute=${data.id} id='edit${i}' src='./assets/edit.svg' class='editIcon'/>
          </div>
          `)
  );

  // HTML DOM manipulieren, anzeigen der Karten
  const wrapperElement = document.getElementById("wrapperCards");
  if (wrapperElement) wrapperElement.innerHTML = html;

  // Event listener hinzufügen für Card Klick, editieren und löschen
  for (let i = 0; i < cards.length; i++) {
    addEvent(`card${i}`, () => handleClick(i));
    addEvent(`delete${i}`, async (e) =>
      deleteCard(i, e.target.dataset.attribute)
    );
    addEvent(`edit${i}`, (e) => handleClick(i, e.target.dataset.attribute));
  }
}

// Tab wechseln (zwischen Login und Register)
function openTab(tabName) {
  let tabs = document.getElementsByClassName("tab");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}

// Main Programm, wird beim Laden der Website ausgeführt
// speichere daten aus server in variable cards
let cards = await apiService.ladeProject();
// lade karten mit erhaltenen daten
loadCards();

// Event Listener für Einfügen neuer Karter
addEvent("ButtonSpeichern", async () => {
  let prevCards = cards;
  cards = await apiService.speichereProject();
  // frontend zurücksetzen falls null von apiService zurückgegeben
  if (!cards) cards = prevCards;
  loadCards();
});

// Event Listener für Close Icon im Modal
addEvent("icon", () => fadeModal("out"));

// Event Listener für Login und Register Tabs
addEvent("loginButton", () => openTab("Login"));
addEvent("registerButton", () => openTab("Register"));
