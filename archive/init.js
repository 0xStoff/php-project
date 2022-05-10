function initialisiereFormular() {
  // Formular zurücksetzen, der Browser merkt sich teilweise alte Werte
  document.forms.ProjectForm.reset();

  // Korrekte Elemente einblenden
  document.getElementById("ProjectFormId").hidden = true;
  document.getElementById("ButtonSpeichern").hidden = false;
  document
    .getElementById("FormularZuruecksetzen")
    .addEventListener("click", () => formularZuruecksetzen());

  // document.getElementById("ButtonAktualisieren").hidden = true;
}

function zeigeInitialisierungsfehler() {
  // ausblenden
  document.getElementById("ProjectEingabe").hidden = true;
  document.getElementById("ProjectTabelle").hidden = true;
  // einblenden
  document.getElementById("Initialisierungsfehler").hidden = false;
}

function formularZuruecksetzen() {
  document.forms.ProjectForm.reset();

  // Korrekte Elemente einblenden
  document.getElementById("ProjectFormId").hidden = true;
  document.getElementById("ButtonSpeichern").hidden = false;
  document.getElementById("ButtonAktualisieren").hidden = true;
}

export { initialisiereFormular };
