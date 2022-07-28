export default class Popups {
  constructor(container, data, openingButtons, createPopup, popupName, closeButtonClass, modificatorName, scroll, menu) {
    this.container = container;
    this.data = data;
    this.openingButtons = openingButtons;
    this.createPopup = createPopup;
    this.popupName = popupName;
    this.closeButtonClass = closeButtonClass;
    this.modificatorName = modificatorName;
    this.scroll = scroll;
    this.menu = menu;
    this.popup = undefined;
    this.button = undefined;
  }

  _open(popup) {
    popup.classList.add(`${this.popupName}${this.modificatorName}`);
  }

  _checkPopupIsOpened() {
    const popup = document.querySelector('.popup');
    if (popup != null) {
      return true;
    }
    else return false;
  }

  setEventListeners() {
    this.openingButtons.forEach((button) => {
      button.addEventListener('click', (event) => {

        const buttonId = event.target.id.toLowerCase();
        const actualData = this.data.find(data => data.id === buttonId);

        //создаем попап по Id в кнопке
        this.popup = this.createPopup(actualData, this.container, this.menu, this.scroll)._create();
        this.button = button;
        this.container.appendChild(this.popup);
        this._open(this.popup);
        this.scroll._hideScroll();
        this.menu.classList.add('menu_closed');
      })
    });

    // закрытие попапа при клике вне попапа
    this.container.addEventListener('click', (event) => {
      if (this.popup != undefined && event.target != this.button) {

        // проверка на таргет и то, что попап еще открыт
        if (!this.popup.contains(event.target) && this._checkPopupIsOpened()) {
          this.menu.classList.remove('menu_closed');
          this.scroll._resetHideScroll();
          this.popup.remove();
          this.popup = undefined;
          this.button = undefined;
        }
        else return;
      }
      else return;
    }, false);

  }

}