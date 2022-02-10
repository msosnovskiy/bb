class Popup {
  constructor(container, openingButtons, popupName, closeButtonClass, modificatorName) {
    this.container = container;
    this.openingButtons = openingButtons;
    this.popupName = popupName;
    this.popup = this.container.querySelector(`.${popupName}`);
    this.closeButtonClass = closeButtonClass;
    this.closeButton = this.popup.querySelector(`.${this.closeButtonClass}`);
    this.modificatorName = modificatorName;
  }

  _open() {
    this.popup.classList.add(`${this.popupName}${this.modificatorName}`);
  }

  _close() {
    this.popup.classList.remove(`${this.popupName}${this.modificatorName}`);
  }

  _render() {

  }

  setEventListeners() {

    this.openingButtons.forEach((button) => {
      button.addEventListener('click', () => {
        this._open();
      })
    })

    this.closeButton.addEventListener('click', () => {
      this._close();
    })
  }
}