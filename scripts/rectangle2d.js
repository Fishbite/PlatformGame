STAY_DOWN.constructors.Rectangle2D = (function () {
  /* this is the rectangle class but not an ES6 class!!!! */
  const Rectangle2D = function (x, y, width, height) {
    this.x = x; // create property x and set it to x
    this.y = y;
    this.width = width;
    this.height = height;
  };

  Rectangle2D.prototype = {
    getBottom() {
      return this.y + this.height;
    },
    setBottom(y) {
      this.y = y - this.height;
    },
  };
  return Rectangle2D;
})();
