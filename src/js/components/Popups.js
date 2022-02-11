class Popups {
  constructor(container, data, openingButtons, createPopup, popupName, closeButtonClass, modificatorName) {
    this.container = container;
    this.data = data;
    this.openingButtons = openingButtons;
    this.createPopup = createPopup;
    this.popupName = popupName;
    this.closeButtonClass = closeButtonClass;
    this.modificatorName = modificatorName;
  }

  _open(popup) {
    popup.classList.add(`${this.popupName}${this.modificatorName}`);
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