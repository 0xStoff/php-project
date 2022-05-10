export default class EventListener {
  addEvent(id, func) {
    const element = document.getElementById(id);
    if (element) element.addEventListener("click", func);
  }
}
