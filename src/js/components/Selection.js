class Selection {
  constructor(items, itemName, headerName, contentName, buttonName, modificatorName) {
    this.items = items;
    this.itemName = itemName;
    this.headerName = headerName;
    this.contentName = contentName;
    this.buttonName = buttonName;
    this.modificatorName = modificatorName;
  }

  // Проервка блока на состояние по умолчанию открыт/закрыт
  _itsOpened(item) {
    if (item.closest(`.${this.itemName}${this.modificatorName}`)) {
      return true;
    }
    else return false;
  }

  // Переключение блока
  _switch(item) {

    const header = item.querySelector(`.${this.headerName}`);
    const content = item.querySelector(`.${this.contentName}`);
    const button = item.querySelector(`.${this.buttonName}`);

    if (this._itsOpened(item)) {
      item.classList.remove(`${this.itemName}${this.modificatorName}`);
      header.classList.remove(`${this.headerName}${this.modificatorName}`);
      content.classList.remove(`${this.contentName}${this.modificatorName}`);
      button.classList.remove(`${this.buttonName}${this.modificatorName}`);
    }
    else {
      item.classList.add(`${this.itemName}${this.modificatorName}`);
      header.classList.add(`${this.headerName}${this.modificatorName}`);
      content.classList.add(`${this.contentName}${this.modificatorName}`);
      button.classList.add(`${this.buttonName}${this.modificatorName}`);
    }
  }

  setEventListeners() {
    this.items.forEach((item) => {
      const target = item.querySelector(`.${this.headerName}`);
      target.addEventListener('click', () => {
        // console.log(e.currentTarget);
        this._switch(item);
      })
    })
  }
}