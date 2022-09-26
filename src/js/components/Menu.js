export default class Menu {
  constructor(body, menu, button, burger, navigation, navigationLinks, scroll) {
    this.body = body;
    this.menu = menu;
    this.button = button;
    this.burger = burger;
    this.navigation = navigation;
    this.navigationLinks = navigationLinks;
    this.scroll = scroll;
    this.onlineButton = this.navigation.querySelector('.header__button');
  }

   _switch() {
    this.navigation.classList.toggle('menu__navigation_opened');
    this.burger.classList.toggle('menu__icon_active');

    this.navigation.closest('.menu__navigation_opened') ? this.button.textContent = 'Закрыть' : this.button.textContent = 'Меню';
    this.navigation.closest('.menu__navigation_opened') ? this.scroll._hideScroll() : this.scroll._resetHideScroll();

    // if (this.navigation.closest('.menu__navigation_opened')) {
    //   this.button.textContent = 'Закрыть';
    //   this.scroll._hideScroll();
    // }
    // else {
    //   this.button.textContent = 'Меню';
    //   this.scroll._resetHideScroll();
    // }
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

    this.onlineButton.addEventListener('click', () => {
      this._switch();
    })
  }

}