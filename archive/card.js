// export default class Person {
//   constructor(firstName, lastName) {
//     this._firstName = firstName;
//     this._lastName = lastName;
//   }
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
//   get firstName() {
//     return this._firstName;
//   }
//   get lastName() {
//     return this._lastName;
//   }
//   sayHi() {
//     return `Hi, ${this.firstName} ${this.lastName}`;
//   }
//   set firstName(firstName) {
//     this._firstName = firstName;
//   }
//   set lastName(lastName) {
//     this._lastName = lastName;
//   }
// }

// Click Event Listener hinzufügen, ID und Funktion als Parameter
// um dauerndes wiederholen von document.getElement... und addEventListener zu vermeiden

import EventListener from "./event.js";

export default class Card extends EventListener {
  constructor(id, func) {
    super();
    this._id = id;
    this._func = func;
  }
  get id() {
    return this._id;
  }
  set id(id) {
    this._id = id;
  }
}
