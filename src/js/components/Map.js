export default  class Map {
  constructor(ymap, classPrompt) {
    this.ymap = ymap;
    this.classPrompt = classPrompt;
  }

  setEventListener() {
    this.ymap.addEventListener('touchmove', (event) => {
      if (this.ymap.contains(event.target) && (event.targetTouches.length < 2)) {
        this.ymap.classList.add(this.classPrompt);
      }
    }, { passive: true });

    this.ymap.addEventListener('touchend', (event) => {
      if (this.ymap.contains(event.target)) {
        this.ymap.classList.remove(this.classPrompt);
      }
    });
  }
}