import { addEvent } from "../utils/utils.js";

// Tab wechseln (zwischen Login und Register)
function openTab(tabName) {
  let tabs = document.getElementsByClassName("tab");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}

// Event Listener für Login und Register Tabs
addEvent("loginButton", () => openTab("Login"));
addEvent("registerButton", () => openTab("Register"));
