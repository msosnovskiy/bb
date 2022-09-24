export default class Scroll {
  constructor(body) {
    this.body = body;
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

  _hideScroll = () => {
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
  }

  _resetHideScroll() {

    // this.body.classList.add('opacity_hide');

    // let closeAnim = setInterval(() => {
    //   this.body.classList.remove('no-scroll');
    //   this.body.style.position = '';
    //   this.body.style.width = '';
    //   this.body.style.top = '';
    //   this.body.classList.remove('opacity_hide');
    //   window.scroll(0, this.scrollTop);
    //   clearInterval(closeAnim);
    // }, 1250);

    this.body.classList.remove('no-scroll');
    this.body.style.position = '';
    this.body.style.width = '';
    this.body.style.top = '';
    window.scroll(0, this.scrollTop);
  }

  // _closeAnimation() {
  //   let closeAnim = setInterval(() => {
  //     this.container.classList.add('.opacity_hide');
  //     clearInterval(closeAnim);
  //   }, 1000);
  // }

}