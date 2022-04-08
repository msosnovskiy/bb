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
    this.navigation.closest('.header__navigation_opened') ? this._hideScroll() : this._resetHideScroll();
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

  _hasScrollbar() { // проверка на боковой скролл
    return this.body.scrollHeight > this.body.clientHeight;
  }
  
  _getScrollbarSize() { // получение ширины скролла
    let outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.width = '100%';
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

  _hideScroll() {
    this.body.classList.add('no-scroll');

    // запоминаем текущую прокрутку сверху
    this.scrollTop = window.pageYOffset; 
    this.body.style.position = 'fixed';
    if (this._hasScrollbar()) {
      // с учетом горизонтального скролла. Чтобы небыло рывка при открытии модального окна
      this.body.style.width = `calc(100% - ${this._getScrollbarSize()}px)`;
    } else {
      this.body.style.width = '100%';
    }
    this.body.style.top = -this.scrollTop + 'px';
    console.log(`this.scrollTop = ${this.scrollTop}`);
    console.log(`this.body.style.top = ${this.body.style.top}`);
  }

    _resetHideScroll() {
    this.body.classList.remove('no-scroll');
    this.body.style.position = '';
    this.body.style.width = '';
    this.body.style.top = '';
    window.scroll(0, this.scrollTop);
  }

}