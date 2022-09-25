export default class Popup {
  constructor(data, container, menu, scroll) {
    this.data = data;
    this.container = container;
    this.menu = menu;
    this.scroll = scroll;
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

  //проверка цены (textContent) на число и тире - – —
  _checkEmptyPrice(price) {
    if (Number(price) >= 0) {
      return true;
    }
    else {
      return false
    };
  }


  // Обновление итоговой стоимости выбранных услуг
  _updatePrice(action, price) {

    if (!this._checkEmptyPrice(price)) { price = 0; }

    action === 'addition' ? this.totalPrice = new Number(this.totalPrice) + new Number(price) : this.totalPrice = new Number(this.totalPrice) - new Number(price)

    if (this.totalPrice.toFixed(2) < 0 || this.totalPrice.toFixed(2) == 0) {
      this.totalPrice = 0;
      this.popupCost.classList.remove('popup__cost_active');
      this.popupCost.textContent = this.totalPrice;
      this.popupCostSale.textContent = '';
    }

    else {
      // this.popupCost.textContent = `${this.totalPrice.toFixed(2)} ${(this.totalPrice * 0.95).toFixed(2)}*`;
      this.popupCost.classList.add('popup__cost_active');
      this.popupCost.textContent = this.totalPrice.toFixed(2);
      this.popupCostSale.textContent = `${(this.totalPrice * 0.95).toFixed(2)}`;
    }

  }

  _setPriceListener(element, unit, counter, contentUnit, contentButton, object, contentCost) {
    element.addEventListener('click', (event) => {

      if (!element.closest('.popup__content-price_selected') && !object && this._checkEmptyPrice(element.textContent)) {
        element.classList.add('popup__content-price_selected');

        //условие для штушной услуги
        if (unit === true) {
          contentUnit.textContent = element.dataset.counter;
          contentUnit.classList.add('popup__content-subtitle-unit_opened');
        }

        if (!contentButton.closest('.popup__button_opened')) {
          contentButton.classList.add('popup__button_opened');
        }

        this._updatePrice('addition', element.textContent);
      }

      //условие не штушной услуги
      else if (object) {
        const selected = contentCost.querySelector('.popup__content-price_selected');
        if (selected === null && this._checkEmptyPrice(element.textContent)) {
          element.classList.add('popup__content-price_selected');

          //отключение остальных цен при выборе одной;
          const allPrices = contentCost.querySelectorAll('.popup__content-price');
          allPrices.forEach((item) => {
            if (!item.closest('.popup__content-price_selected')) {
              item.classList.add('popup__content-price_disabled');
            }
            else return;
          })

          if (!contentButton.closest('.popup__button_opened')) {
            contentButton.classList.add('popup__button_opened');
          }

          this._updatePrice('addition', element.textContent);
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

            this._updatePrice('addition', element.textContent);

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
      const disabledItems = contentItem.querySelectorAll('.popup__content-price_disabled');

      let sectionPrice = Number(0);

      selectedItems.forEach((item) => {


        item.classList.remove('popup__content-price_selected');

        if (item.textContent === '-' || item.textContent === '–' || item.textContent === '—') {
          sectionPrice = sectionPrice + (Number(0) * Number(item.dataset.counter));
        }

        else {
          sectionPrice = sectionPrice + (Number(item.textContent) * Number(item.dataset.counter));
        }

        item.setAttribute('data-counter', 1);
      })

      disabledItems.forEach((item) => {
        item.classList.remove('popup__content-price_disabled');
      })

      this._updatePrice('subtraction', sectionPrice.toFixed(2));


      contentButton.classList.remove('popup__button_opened');

      if (selectedCountItems.length !== 0) {
        selectedCountItems.forEach((item) => {
          item.classList.remove('popup__content-subtitle-unit_opened');
        })
      }

    })

    return contentItem;
  }

  // Создание блока с описанием для волос
  _createComment(data) {

    const comment = this._createElement('div', 'popup__comment');
    const commentHeader = this._createElement('div', 'popup__comment-header');
    const commentTitle = this._createElement('p', 'popup__comment-title', data.title);
    const commentDots = this._createElement('div', 'popup__comment-dots');
    const commentWrapper = this._createElement('div', 'popup__comment-wrapper');

    comment.appendChild(commentHeader);
    commentHeader.appendChild(commentTitle);
    commentHeader.appendChild(commentDots);
    commentHeader.appendChild(commentWrapper);

    data.description.forEach((item) => {
      const commentText = this._createElement('p', 'popup__comment-text', item.title);
      commentWrapper.appendChild(commentText);
    })

    data.description.forEach((item) => {
      const description = this._createElement('div', 'popup__description');
      const descriptionTitle = this._createElement('p', 'popup__description-title', item.title);
      const descriptionText = this._createElement('p', 'popup__description-text', item.text);
      description.appendChild(descriptionTitle);
      description.appendChild(descriptionText);
      comment.appendChild(description);
    })

    return comment;

  }


  // Создание попапа
  _create() {
    const popup = this._createElement('div', 'popup');
    popup.setAttribute('data-name', this.data.id);

    const popupHeader = this._createElement('div', 'popup__header');
    popupHeader.classList.add('color_border');
    const popupName = this._createElement('h3', 'popup__name', this.data.name);
    const popupWrapper = this._createElement('div', 'popup__wrapper');
    const popupCost = this._createElement('p', 'popup__cost', this.totalPrice);
    const popupCostSale = this._createElement('p', 'popup__cost-sale');

    const popupButton = this._createElement('button', 'popup__button');
    popupButton.classList.add('popup__button_opened');
    popupButton.setAttribute('aria-label', 'Закрыть');
    const popupContent = this._createElement('div', 'popup__content');

    // Создание каждого блока услуги в попапе
    this.data.service.forEach((item) => {
      popupContent.appendChild(this._createItem(item));
    })

    // Условие для добавления описания расчета цены для волос
    if (this.data.comment != undefined) {
      popupContent.prepend(this._createComment(this.data.comment));
      popupContent.appendChild(this._createElement('p', 'popup__exception-text', this.data.comment.exception));
    }

    const popupFooter = this._createElement('p', 'popup__footer', 'Итоговая цена указана с учетом ');
    const popupLink = this._createElement('a', 'popup__link', 'скидки\xa0по\xa0карте');
    popupLink.setAttribute('href', '#clients');

    popup.appendChild(popupHeader);
    popupHeader.appendChild(popupName);
    popupHeader.appendChild(popupWrapper);
    popupWrapper.appendChild(popupCost);
    popupWrapper.appendChild(popupCostSale);
    popupWrapper.appendChild(popupButton);
    popup.appendChild(popupContent);
    popupFooter.appendChild(popupLink);
    popup.appendChild(popupFooter);

    popupButton.addEventListener('click', () => {
      this.menu.classList.remove('menu_closed');
      this.scroll._resetHideScroll();
      popup.remove();
      return;
    }, false);

    popupLink.addEventListener('click', () => {
      this.menu.classList.remove('menu_closed');
      this.scroll._resetHideScroll();
      popup.remove();
      return;
    }, false);

    this.popupCost = popupCost;
    this.popupCostSale = popupCostSale;

    return popup;
  }

}