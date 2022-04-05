export default class Popups {
  constructor(container, data, openingButtons, createPopup, popupName, closeButtonClass, modificatorName) {
    this.container = container;
    this.data = data;
    this.openingButtons = openingButtons;
    this.createPopup = createPopup;
    this.popupName = popupName;
    this.closeButtonClass = closeButtonClass;
    this.modificatorName = modificatorName;
    // this.currentPopupID = null;
  }

  _needOpened(currentID) {
    const currentPopup = this.container.querySelector(`.${this.popupName}${this.modificatorName}`);

    // если нет открытого попапа
    if (currentPopup === null) {
      return true;
    }
    // если ID целевого попапа равен уже открытому
    if (currentID === currentPopup.getAttribute('data-name')) {
      return false;
    }
    // если ID целевого попапа отличается от уже открытого
    else {
      this._close(currentPopup);
      return true;
    }
  }

  _close(popup) {
    popup.remove();
  }

  _open(popup) {
    popup.classList.add(`${this.popupName}${this.modificatorName}`);
  }

  setEventListeners() {
    this.openingButtons.forEach((button) => {
      button.addEventListener('click', (event) => {

        // проверяем, необходимо ли создавать попап по id в кнопке
        if (this._needOpened(event.target.id)) {

          this.data.forEach((item) => {
            if (item.id.toLowerCase() === event.target.id.toLowerCase()) {
              //создаем попап по Id в кнопке
              const popup = this.createPopup(item)._create()
              this.container.appendChild(popup);
              this._open(popup);
            }
            else return;
          });
        }
        else return;
      })
    })
  }

}