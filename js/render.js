function renderCardsHtml(cards, languages) {
  let html = "";
  cards.map(
    (data, i) =>
      (html += `
              <div class='card' id='card${i}'>
              <h1 class="card_title">${data.title}</h1>
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

const renderForm = (value) => `<div class="formWrapper">
<form name="modalForm" class="wrapper-form">
   <input
     name="inputField"
     id="inputField"
     value="${value}"
     required
   />
<div class="select">
  <select id="select1" class="selectField" multiple>
   </select>
</div>
<div id="selectedItems1" class="selectSelected">
</div>
 
<button class="button" type="button" id="ButtonAktualisieren">
 Update
 </button>
 </form>
 </div>`;

const renderLanguages = (cards, languages) => {
  const filter = languages.filter((l) => l.projects_id === cards.projects_id);

  return `
    <h3 class="card_languages">
      ${filter.map((l) => " " + l.language_name)}
    </h3>
  `;
};

export { renderCardsHtml, renderForm, renderLanguages };
