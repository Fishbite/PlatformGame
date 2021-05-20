/* this is the player class but not an ES6 class!!!! */
const Player = function (x, y) {
  this.color = "#555";

  this.velocity_x = 0;
  this.velocity_y = 0;

  Rectangle2D.call(this, x, y, 32, 32);
};

Player.prototype = {};

Object.assign(Player.prototype, Rectangle2D.prototype);
