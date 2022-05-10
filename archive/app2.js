import apiService from "../js/services.js";

const addEvent = (id, func) => {
  document.getElementById(id).addEventListener("click", func);
};

const initEventListeners = () => {
  for (let i = 0; i < cards.length; i++) {
    addEvent(`card${i}`, () => handleCardClick(i));
    addEvent(`delete${i}`, (e) => {
      deleteCard(i);
      apiService.loescheProject(e.target.dataset.attribute);
    });
    addEvent(`edit${i}`, (e) => handleEditClick(i, e.target.dataset.attribute));
  }
};

const loadCards = () => {
  let html = "";
  cards.map(
    (data, i) =>
      (html += `
                <div class='card' id='card${i}'>
                    <h1>${data.project_name}</h1>     
                </div>
                <div class='iconWrapper'>
                    <img data-attribute=${data.id} id='delete${i}' src=./assets/delete.svg class='deleteIcon' />
                     <img  data-attribute=${data.id}   id='edit${i}' src='./assets/edit.svg' class='editIcon'/>
                </div>
                `)
  );

  document.getElementById("wrapperCards").innerHTML = html;

  initEventListeners();
};

const handleCardClick = (i) => {
  const html = `<h1>${cards[i].project_name}</h1>`;

  document.getElementById("modalContent").innerHTML = html;
  modal.classList.add("fadeIn");
  modal.classList.replace("fadeOut", "fadeIn");
};

const handleCloseModal = () => {
  modal.classList.replace("fadeIn", "fadeOut");
};

const handleEditClick = (i, id) => {
  const input = `<form name='modalForm' class="wrapper-form">
            <input name="inputField" id='inputField' value='${cards[i].project_name}'  />
            <button class="button button-primary" type="button" id="FormularZuruecksetzen">Abbrechen</button>
            <button class="button" type="button" id="ButtonAktualisieren">Update</button></form>`;

  document.getElementById("modalContent").innerHTML = input;

  addEvent("ButtonAktualisieren", async () => {
    cards = await apiService.aktualisiereProject(id);
    handleCloseModal();
    loadCards();
  });

  modal.classList.add("fadeIn");
  modal.classList.replace("fadeOut", "fadeIn");
};

const deleteCard = (i) => {
  cards.splice(i, 1);
  loadCards();
};

let cards = await apiService.ladeProject();
loadCards();

document
  .getElementById("ButtonSpeichern")
  .addEventListener("click", async () => {
    cards = await apiService.speichereProject();
    loadCards();
  });

const modal = document.getElementById("modal");

document
  .getElementById(`icon`)
  .addEventListener("click", () => handleCloseModal());
