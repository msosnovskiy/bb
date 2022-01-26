class Selection {
  constructor(items, itemName, headerName, contentName, buttonName, modificatorName) {
    this.items = items;
    this.itemName = itemName;
    this.headerName = headerName;
    this.contentName = contentName;
    this.buttonName = buttonName;
    this.modificatorName = modificatorName;
  }

  setEventListeners() {
    this.items.forEach((item) => {
      const target = item.querySelector(`.${this.headerName}`);
      const header = item.querySelector(`.${this.headerName}`);
      const content = item.querySelector(`.${this.contentName}`);
      const button = item.querySelector(`.${this.buttonName}`);
      target.addEventListener('click', () => {
        item.classList.toggle(`${this.itemName}${this.modificatorName}`);
        header.classList.toggle(`${this.headerName}${this.modificatorName}`);
        content.classList.toggle(`${this.contentName}${this.modificatorName}`);
        button.classList.toggle(`${this.buttonName}${this.modificatorName}`);
      })
    })
  }
}