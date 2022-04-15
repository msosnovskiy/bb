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
    // this.container.classList.remove('blure');
  }

  _open(popup) {
    popup.classList.add(`${this.popupName}${this.modificatorName}`);


    // this._hideScroll();
    // this.container.classList.add('blure');
    // this.container.style.zIndex = 100;
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



  
  _hasScrollbar() { // проверка на боковой скролл
    return this.container.scrollHeight > this.container.clientHeight;
  }
  
  _getScrollbarSize() { // получение ширины скролла
    let outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.width = '100%';
    outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
    this.container.appendChild(outer);

    let widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = 'scroll';
    // add innerdiv
    let inner = document.createElement('div');
    inner.style.width = '100%';
    outer.appendChild(inner);
    let widthWithScroll = inner.offsetWidth;
    // remove divs
    outer.parentNode.removeChild(outer);
    return widthNoScroll - widthWithScroll;
  }

  _hideScroll() {
    this.container.classList.add('no-scroll');

    // запоминаем текущую прокрутку сверху
    this.scrollTop = window.pageYOffset; 

    this.container.style.position = 'fixed';
    if (this._hasScrollbar()) {
      // с учетом горизонтального скролла. Чтобы небыло рывка при открытии модального окна
      this.container.style.width = `calc(100% - ${this._getScrollbarSize()}px)`;
    } else {
      this.container.style.width = '100%';
    }
    this.container.style.top = -this.scrollTop + 'px';
    // console.log(`this.scrollTop = ${this.scrollTop}`);
    // console.log(`this.container.style.top = ${this.container.style.top}`);
  }

    _resetHideScroll() {
    this.container.classList.remove('no-scroll');
    this.container.style.position = '';
    this.container.style.width = '';
    this.container.style.top = '';
    window.scroll(0, this.scrollTop);
  }

}