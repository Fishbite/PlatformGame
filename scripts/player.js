/* this is the player class but not an ES6 class!!!! */
const Player = function (x, y) {
  this.color = "#555";

  this.move_force = 1;

  this.velocity_x = 0;
  this.velocity_y = 0;

  Rectangle2D.call(this, x, y, 32, 32);
};

Player.prototype = {
  // move functions
  moveLeft() {
    this.velocity_x -= this.move_force;
  },
  moveRight() {
    this.velocity_x += this.move_force;
  },

  updatePosition(gravity, friction) {
    this.velocity_y += gravity;
    this.velocity_y *= friction;

    this.x += this.velocity_x;
    this.y += this.velocity_y;
  },
};

Object.assign(Player.prototype, Rectangle2D.prototype);
