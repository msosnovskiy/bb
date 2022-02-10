class Popup {
  constructor(data) {
    this.data = data;
    this.totalPrice = Number(0);
  }

  _createElement(tag, className, text) {
    const element = document.createElement(tag);
    element.classList.add(className);
    if (text !== undefined) {
      element.textContent = text;
      return element
    }
    else return element;
  }

  _createCost(text, cost) {
    const element = this._createElement('div', 'popup__content-cost');
    const name = this._createElement('p', 'popup__content-subtitle', text);
    const dots = this._createElement('div', 'popup__content-dots');
    const price = this._createElement('p', 'popup__content-price', cost);
    element.appendChild(name);
    element.appendChild(dots);
    element.appendChild(price);

    price.addEventListener('click', () => {
      if (price.closest('.popup__content-price_selected')) {
        price.classList.remove('popup__content-price_selected');
        this.totalPrice = this.totalPrice - Number(cost);
      }
      else {
        price.classList.add('popup__content-price_selected');
        this.totalPrice = this.totalPrice + Number(cost);
      }
      this._updatePrice();
    })

    return element
  }

  _createItem(data) {
    const item = this._createElement('div', 'popup__content-item');
    const title = this._createElement('h4', 'popup__content-title', data.name);
    item.appendChild(title);
    data.item.forEach((i) => {
      item.appendChild(this._createCost(i.name, i.price));
    })

    return item;
  }

  _updatePrice() {
    const cost = document.querySelector('.popup__cost');
    if (this.totalPrice.toFixed(2) < 0 || this.totalPrice.toFixed(2) == 0.00) {
      this.totalPrice = 0;
      cost.textContent = this.totalPrice;
    }
    else {
      cost.textContent = this.totalPrice.toFixed(2);
    }
  }

  _create() {
    const popup = this._createElement('div', 'popup');

    const popupHeader = this._createElement('div', 'popup__header');
    const popupName = this._createElement('h3', 'popup__name', this.data.name);
    const popupWrapper = this._createElement('div', 'popup__wrapper');
    const popupCost = this._createElement('p', 'popup__cost', this.totalPrice);
    const popupButton = this._createElement('button', 'popup__button');
    popupButton.setAttribute('aria-label', 'Закрыть')
    const popupContent = this._createElement('div', 'popup__content');
    this.data.service.forEach((item) => {
      popupContent.appendChild(this._createItem(item));
    })
    const popupFooter = this._createElement('p', 'popup__footer', '*Цены указаны с учетом ');
    const popupLink = this._createElement('a', 'popup__link', 'скидки по карте');
    popupLink.setAttribute('href', '#clients');

    popup.appendChild(popupHeader);
    popupHeader.appendChild(popupName);
    popupHeader.appendChild(popupWrapper);
    popupWrapper.appendChild(popupCost);
    popupWrapper.appendChild(popupButton);
    popup.appendChild(popupContent);
    popupFooter.appendChild(popupLink);
    popup.appendChild(popupFooter);

    popupButton.addEventListener('click', () => {
      popup.remove();
    })
    
    popupLink.addEventListener('click', () => {
      popup.remove();
    })

    return popup;
  }

}