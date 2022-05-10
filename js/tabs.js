import { addEvent } from "./utils/utils.js";

// Tab wechseln (zwischen Login und Register)
function openTab(tabName) {
  // Alle Tabs in variable speichern
  let tabs = document.getElementsByClassName("tab");
  // durch tabs loopen und alle ausblenden
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }
  // geklickten Tab anzeigen
  document.getElementById(tabName).style.display = "block";
}

// Event Listener für Login und Register Tabs
addEvent("loginButton", () => openTab("Login"));
addEvent("registerButton", () => openTab("Register"));
