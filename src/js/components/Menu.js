export default  class Menu {
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
    this.body.classList.toggle('no-scroll');
    this.navigation.classList.toggle('header__navigation_opened');
    this.navigation.closest('.header__navigation_opened') ? this.button.textContent = 'Закрыть' : this.button.textContent = 'Меню';
    this.navigation.closest('.header__navigation_opened') ? this.button.textContent = 'Закрыть' : this.button.textContent = 'Меню';
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

}