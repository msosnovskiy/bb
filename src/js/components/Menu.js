export default class Menu {
  constructor(body, menu, button, burger, navigation, navigationLinks) {
    this.body = body;
    this.menu = menu;
    this.button = button;
    this.burger = burger;
    this.navigation = navigation;
    this.navigationLinks = navigationLinks;
  }

  _switch() {
    this.burger.classList.toggle('menu__icon_active');
    this.navigation.classList.toggle('header__navigation_opened');
    this.navigation.closest('.header__navigation_opened') ? this.button.textContent = 'Закрыть' : this.button.textContent = 'Меню';

    if (this.navigation.closest('.header__navigation_opened')) {
      this.body.classList.add('no-scroll');
      this._hideScroll();
    }
    else {
      this.body.classList.remove('no-scroll');
      this.body.style.position = '';
      this.body.style.width = '';
      this.body.style.top = '';
      window.scroll(0, this.scrollTop);
    }
    
  }

  setEventListener() {

    this.menu.addEventListener('click', () => {
      this._switch();
    })

    this.navigationLinks.forEach((link) => {
      link.addEventListener('click', () => {
        this._switch();
      })
    })
  }

  _hideScroll() {
    console.log('3');
    this.body.classList.add('no-scroll');

    this.scrollTop = window.pageYOffset; // запоминаем текущую прокрутку сверху
    this.body.style.position = 'fixed';
    if (this._hasScrollbar()) {
      // с учетом горизонтального скролла. Чтобы небыло рывка при открытии модального окна
      this.body.style.width = `calc(100% - ${this._getScrollbarSize()}px)`;
    } else {
      this.body.style.width = '100%';
    }
    this.body.style.top = -this.scrollTop + 'px';
  }

  _getScrollbarSize() { // получение ширины скролла
    console.log('2');
    let outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.width = '100px';
    outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
    this.body.appendChild(outer);

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

  _hasScrollbar() { // проверка на боковой скролл
    console.log('1');
    return this.body.scrollHeight > this.body.clientHeight;
  }

}