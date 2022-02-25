export default  class Glitch {
  constructor(prazeArray, phraze, interval) {
    this.prazeArray = prazeArray;
    this.phraze = phraze;
    this.interval = interval;
    this.counter = 0;
  }

  _slideText(item, index, arrayLength) {
    //если фраза состоит более чем из одного слова
    if (item.split(' ').length > 1) {
      let text = item.split(' ').join('<br>');
      this.phraze.innerHTML = text;
      //Добавляем анимацию последнему слову
      if (index === arrayLength - 1) {
        this.phraze.classList.add('company__title_glitch');
        let spanFirst = document.createElement('span');
        spanFirst.classList.add('company__title_span')
        let spanSecond = document.createElement('span');
        spanSecond.classList.add('company__title_span')
        this.phraze.prepend(spanFirst);
        this.phraze.prepend(spanSecond);
        spanFirst.innerHTML = text;
        spanSecond.innerHTML = text;

      }
    }
    //если фраза состоит из одного слова то просто меняем текст
    else this.phraze.textContent = item;
  }

  run() {
    setInterval(() => {
      if (this.prazeArray[this.counter] != undefined) {
        this._slideText(this.prazeArray[this.counter], this.counter, this.prazeArray.length);
        this.counter++;
      }
      // Приостанавливаем выполнение функции если массив пуст
      else {
        clearInterval(this);
      }
    }, this.interval);
  }

}