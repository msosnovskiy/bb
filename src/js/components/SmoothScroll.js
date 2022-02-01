class SmoothScroll {
  constructor(container) {
    this.container = container;
    this.links = this.container.querySelectorAll('a[href*="#"]');
  }

  _getLinkId(element) {
    return element.getAttribute('href').substr(1);
  }

  // определяет текущее положение скрола
  _currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (this.container.documentElement && this.container.documentElement.scrollTop)
      return this.container.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (this.container.body.scrollTop) return this.container.body.scrollTop;
    return 0;
  }

  // определяет положение элемента
  _elmYPosition(eID) {
    let elm = this.container.querySelector(`#${eID}`);
    let y = elm.offsetTop;
    let node = elm;
    while (node.offsetParent && node.offsetParent != this.container.body) {
      node = node.offsetParent;
      y += node.offsetTop;
    } return y;
  }

  // скролл к якорю
  _smoothScroll(eID) {
    let startY = this._currentYPosition();
    let stopY = this._elmYPosition(eID);
    let distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
      scrollTo(0, stopY); return;
    }
    let speed = Math.round(distance / 150);
    if (speed >= 20) speed = 20;
    let step = Math.round(distance / 25);
    let leapY = stopY > startY ? startY + step : startY - step;
    let timer = 0;
    if (stopY > startY) {
      for (let i = startY; i < stopY; i += step) {
        setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
        leapY += step; if (leapY > stopY) leapY = stopY; timer++;
      } return;
    }
    for (let i = startY; i > stopY; i -= step) {
      setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
      leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }
  }

  setEventListener() {
    this.links.forEach((link) => {
      link.addEventListener('click', (event) => {
        this._smoothScroll(this._getLinkId(event.target))
      })
    })
  }

}