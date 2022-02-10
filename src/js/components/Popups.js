class Popups {
  constructor(container, data, openingButtons, createPopup, popupName, closeButtonClass, modificatorName) {
    this.container = container;
    this.data = data;
    this.openingButtons = openingButtons;
    this.createPopup = createPopup;
    this.popupName = popupName;
    this.closeButtonClass = closeButtonClass;
    this.modificatorName = modificatorName;
    // this.popup = this.container.querySelector(`.${popupName}`);
    // this.closeButton = this.popup.querySelector(`.${this.closeButtonClass}`);
  }

  _open(popup) {
    popup.classList.add(`${this.popupName}${this.modificatorName}`);
  }

  // _close() {
  // this.popup.classList.remove(`${this.popupName}${this.modificatorName}`);
  // }

  _render() {
    const popup = this.popup(this.data)._create();
    return popup;
  }

  setEventListeners() {

    this.openingButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const popup = this.createPopup(this.data)._create()
        this.container.appendChild(popup);
        this._open(popup);
      })
    })
  }
}