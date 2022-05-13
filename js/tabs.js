import { addEvent } from "./utils/utils.js";

/**
 * Tabs zwischen Login und Register wechseln.
 * Die Funktion könnte um beliebig viele Tabs erweitert werden
 *
 * @param {String} tabName Der Name des Tabs (HTML ID), den es zu öffnen gilt
 */
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
