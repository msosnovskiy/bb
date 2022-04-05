export default class Popup {
  constructor(data) {
    this.data = data;
    this.totalPrice = 0;
  }

  // создание элемента по тегу и классу + добавление текста
  _createElement(tag, className, text) {
    const element = document.createElement(tag);
    element.classList.add(className);
    if (text !== undefined) {
      element.textContent = text;
      return element;
    }
    else return element;
  }

  _setPriceListener(element, unit, counter, contentUnit, contentButton, object, contentCost) {
    element.addEventListener('click', (event) => {

      if (!element.closest('.popup__content-price_selected') && !object) {
        element.classList.add('popup__content-price_selected');

        //условие для штушной услуги
        if (unit === true) {
          contentUnit.textContent = element.dataset.counter;
          contentUnit.classList.add('popup__content-subtitle-unit_opened');
        }

        if (!contentButton.closest('.popup__button_opened')) {
          contentButton.classList.add('popup__button_opened');
        }

        this.totalPrice = new Number(this.totalPrice) + new Number(element.textContent);
        this._updatePrice();
      }

      else if (object) {
        const selected = contentCost.querySelector('.popup__content-price_selected');
        if (selected === null) {
          element.classList.add('popup__content-price_selected');

          if (!contentButton.closest('.popup__button_opened')) {
            contentButton.classList.add('popup__button_opened');
          }

          this.totalPrice = new Number(this.totalPrice) + new Number(element.textContent);
          this._updatePrice();
        }

        else return;
      }

      else {
        if (unit === true) {
          let n = element.dataset.counter;
          if (n < counter) {
            n++;
            contentUnit.textContent = n;
            element.setAttribute('data-counter', n);
            this.totalPrice = new Number(this.totalPrice) + new Number(element.textContent);
            this._updatePrice();
          }
          else return;
        }
      }
    })
  }

  _setContentPriceData(price) {
    const contentPrice = this._createElement('p', 'popup__content-price', price);
    contentPrice.setAttribute('data-counter', 1);
    return contentPrice;
  }

  // Создание блока услуг content-item
  _createItem(data) {
    const contentItem = this._createElement('div', 'popup__content-item');
    const contentWrapper = this._createElement('div', 'popup__content-wrapper');
    const contentTitle = this._createElement('h4', 'popup__content-title', data.name);
    const contentButton = this._createElement('button', 'popup__button');
    contentButton.setAttribute('aria-label', 'Очистить');
    contentWrapper.appendChild(contentTitle);
    contentWrapper.appendChild(contentButton);
    contentItem.appendChild(contentWrapper);

    data.item.forEach((i) => {
      const contentCost = this._createElement('div', 'popup__content-cost');
      const contentSubtitle = this._createElement('p', 'popup__content-subtitle', i.name);
      const contentDots = this._createElement('div', 'popup__content-dots');
      const contentUnit = this._createElement('p', 'popup__content-subtitle-unit');

      // Проверка на штучный элемент
      if (i.unit === true) {
        contentCost.appendChild(contentSubtitle);
        contentCost.appendChild(contentUnit);
        contentCost.appendChild(contentDots);
        const contentPrice = this._setContentPriceData(i.price);
        this._setPriceListener(contentPrice, i.unit, i.counter, contentUnit, contentButton)
        contentCost.appendChild(contentPrice);
      }

      else {
        contentCost.appendChild(contentSubtitle);
        contentCost.appendChild(contentDots);

        // проверка на несколько цен
        if (typeof i.price === 'object') {
          for (let price of i.price) {
            const contentPrice = this._setContentPriceData(price);
            contentCost.appendChild(contentPrice);
            this._setPriceListener(contentPrice, i.unit, i.counter, contentUnit, contentButton, true, contentCost);
          }
        }

        else {
          const contentPrice = this._setContentPriceData(i.price);
          contentCost.appendChild(contentPrice);
          this._setPriceListener(contentPrice, i.unit, i.counter, contentUnit, contentButton);
        }
      }

      contentItem.appendChild(contentCost);
    })

    //Удаление всех услуг и цены при нажатии на крестик в секции
    contentButton.addEventListener('click', () => {

      const selectedCountItems = contentItem.querySelectorAll('.popup__content-subtitle-unit_opened');
      const selectedItems = contentItem.querySelectorAll('.popup__content-price_selected');

      let sectionPrice = Number(0);

      selectedItems.forEach((item) => {
        item.classList.remove('popup__content-price_selected');
        sectionPrice = sectionPrice + (Number(item.textContent) * Number(item.dataset.counter));
        item.setAttribute('data-counter', 1);
      })

      this.totalPrice = Number(this.totalPrice) - Number(sectionPrice.toFixed(2));
      this._updatePrice();
      contentButton.classList.remove('popup__button_opened');

      if (selectedCountItems.length !== 0) {
        selectedCountItems.forEach((item) => {
          item.classList.remove('popup__content-subtitle-unit_opened');
        })
      }

    })

    return contentItem;
  }


  // Обновление итоговой стоимости выбранных услуг
  _updatePrice() {

    if (this.totalPrice.toFixed(2) < 0 || this.totalPrice.toFixed(2) == 0) {
      this.totalPrice = 0;
      this.popupCost.textContent = this.totalPrice;
    }

    else {
      this.popupCost.textContent = this.totalPrice.toFixed(2);
    }

  }

  // Создание попапа
  _create() {
    const popup = this._createElement('div', 'popup');
    popup.setAttribute('data-name', this.data.id);

    const popupHeader = this._createElement('div', 'popup__header');
    const popupName = this._createElement('h3', 'popup__name', this.data.name);
    const popupWrapper = this._createElement('div', 'popup__wrapper');
    const popupCost = this._createElement('p', 'popup__cost', this.totalPrice);

    const popupButton = this._createElement('button', 'popup__button');
    popupButton.classList.add('popup__button_opened');
    popupButton.setAttribute('aria-label', 'Закрыть');
    const popupContent = this._createElement('div', 'popup__content');

    this.data.service.forEach((item) => {
      popupContent.appendChild(this._createItem(item));
    })

    const popupFooter = this._createElement('p', 'popup__footer', '*Цены указаны с учетом ');
    const popupLink = this._createElement('a', 'popup__link', 'скидки\xa0по\xa0карте');
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

    this.popupCost = popupCost;

    return popup;
  }
}