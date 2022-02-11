class Popup {
  constructor(data) {
    this.data = data;
    this.totalPrice = Number(0);
  }

  // создание элемента по тегу и классу + добавление текста
  _createElement(tag, className, text) {
    const element = document.createElement(tag);
    element.classList.add(className);
    if (text !== undefined) {
      element.textContent = text;
      return element
    }
    else return element;
  }

  // Создание блока услуг
  _createItem(data) {
    const contentItem = this._createElement('div', 'popup__content-item');
    const contentWrapper = this._createElement('div', 'popup__content-wrapper');
    const contentTitle = this._createElement('h4', 'popup__content-title', data.name);
    const contentButton = this._createElement('button', 'popup__content-button');
    contentButton.setAttribute('aria-label', 'Закрыть');
    contentWrapper.appendChild(contentTitle);
    contentWrapper.appendChild(contentButton);
    contentItem.appendChild(contentWrapper);

    data.item.forEach((i) => {
      const contentCost = this._createElement('div', 'popup__content-cost');
      const contentSubtitle = this._createElement('p', 'popup__content-subtitle', i.name);
      const contentDots = this._createElement('div', 'popup__content-dots');
      const contentPrice = this._createElement('p', 'popup__content-price', i.price);

      // Проверка на штучный элемент
      if (i.unit) {
        const contentUnit = this._createElement('p', 'popup__content-subtitle-unit');
        contentUnit.addEventListener('click', () => {
          // contentUnit.textContent = 
        })

        contentCost.appendChild(contentSubtitle);
        contentCost.appendChild(contentUnit);
        contentCost.appendChild(contentDots);
        contentCost.appendChild(contentPrice);
      }
      else {
        contentCost.appendChild(contentSubtitle);
        contentCost.appendChild(contentDots);
        contentCost.appendChild(contentPrice);
      }


      // Обновление цены при выборе услуги
      contentPrice.addEventListener('click', () => {
        if (!contentPrice.closest('.popup__content-price_selected')) {
          contentPrice.classList.add('popup__content-price_selected');
          if (!contentButton.closest('.popup__content-button_opened')) {
            contentButton.classList.add('popup__content-button_opened');
            console.log('открытие кнопки');
          }
          this.totalPrice = this.totalPrice + Number(i.price);
          this._updatePrice();
        }
        else {
          return
        }
      })

      contentItem.appendChild(contentCost);
    })

    //Удаление всех услуг и цены при нажатии на крестик в секции
    contentButton.addEventListener('click', () => {
      const selectedItem = contentItem.querySelectorAll('.popup__content-price_selected');
      let blockPrice = Number(0);
      selectedItem.forEach((item) => {
        item.classList.remove('popup__content-price_selected');
        blockPrice = blockPrice + Number(item.textContent);
      })
      this.totalPrice = this.totalPrice - blockPrice.toFixed(2);
      this._updatePrice();
      contentButton.classList.remove('popup__content-button_opened');
    })

    return contentItem;
  }

  // Обновление итоговой стоимости выбранных услуг
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

  // Создание попапа
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