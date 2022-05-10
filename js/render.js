// In diesem Modul ist wenig Logik, es wird vor allem HTML von den Funktionen zurückgegeben

// HTML für Cards
function renderCardsHtml(cards, languages) {
  let html = "";
  // mappt durch alle Daten (cards) und gibt ein HTML-Element in Variable "html" zurück
  cards.map(
    (data, i) =>
      (html += `
              <div class='card' id='card${i}'>
              <h1 class="card_title">${data.title}</h1>
              <p class="card_title">${data.description}</p>
                 ${renderLanguages(data, languages)}
              </div>
              <div class='icon'>
                  <img data-attribute=${
                    data.projects_id
                  } id='delete${i}' src=./assets/delete.svg class='iconDelete' />
                   <img  data-attribute=${
                     data.projects_id
                   } id='edit${i}' src='./assets/edit.svg' class='iconEdit'/>
              </div>
              `)
  );

  return html;
}

// form rendern, welche im Modal angezeigt wird
const renderForm = (card) => `<div class="formWrapper">
 <form name="ModalForm" class="form">
   <input
     placeholder="Project Title"
     type="text"
     class="text textInput validity blur"
     id="ProjectNameEdit"
     name="ProjectNameEdit"
     value="${card.title}"
     required
   />
   <textarea
     id="ProjectDescriptionEdit"
     placeholder="Project Description"
     type="text"
     class="text textArea validity blur"
     required
   >${card.description}</textarea>
   <div class="inputWrapper">
     <input
     value=${card.url}
       id="ProjectUrlEdit"
       type="url"
       name="url"
       id="url"
       placeholder="https://github.com/project-name"
       pattern="https://.*"
       size="30"
       class="text textUrl validity blur"
       required
     />
     <input
        value=${card.creation_date}
        style="color:white"
       onfocus="!this.value ? this.style.color='rgba(255, 255, 255, 0.4)': this.style.color='#fff'"
       onblur="!this.value ? this.style.color='rgba(255, 255, 255, 0.4)': this.style.color='#fff'"
       id="ProjectDateEdit"
       type="date"
       class="text textDate validity blur"
       required
     />
   </div>
   <input
     onblur="this.checkValidity() && (this.style.outline='none')"
     id="ProjectImageEdit"
     class="text textImage validity"
     type="file"
     id="img"
     name="img"
     accept="image/*"
   />
   <div class="select">
   <select id="select1" class="selectField" multiple>
    </select>
    <div id="selectedItems1" class="selectSelected">
    </div>
    </div>
   <button class="button" type="button" id="ButtonAktualisieren">
   Update
   </button>
 </form>
</div>`;

// Languages rendern
const renderLanguages = (card, languages) => {
  // da alle languages als Relation in der Variable enthalten sind,
  // muss zuerst nach den gewünschten der Karte gefiltert werden
  const filter = languages.filter((l) => l.projects_id === card.projects_id);

  // html zurückgeben
  // durch die languages muss nochmals gemappt werden, da es ein Array ist
  return `
    <h3 class="card_languages">
      ${filter.map((l) => " " + l.language_name)}
    </h3>
  `;
};

// rendern eines Modals
const renderModal = (card, languages) => `<h1>${card.title}</h1>  
<p class="card_title">vom ${card.creation_date}</p>
<p class="card_title">${card.description}</p>
<img src="${card.picture_path}"/></br>
<a href="${card.url}" class="card_title">${card.url}</a> 
${renderLanguages(card, languages)}`;

export { renderCardsHtml, renderForm, renderModal };
