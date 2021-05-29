// we pass in the classes we want access to as function param's
STAY_DOWN.states.run = (function (controller, player, GameState) {
  //
  // set the world size (everything in the game) to full canvas size
  const world_width = 480;
  const world_height = 480;

  // these are used to slow down the fall speed of the player
  const gravity = 1;
  const friction = 0.9;

  // set the ground thickness.
  const groundDepth = 40;

  // the update function is responsible for everything that happens in the game
  function update() {
    if (controller.getLeft()) player.moveLeft();
    if (controller.getRight()) player.moveRight();
    if (controller.getUp()) {
      player.jump();
    }
    // console.log(controller.left, controller.right);

    player.updatePosition(gravity, friction);

    if (collideTop(player, ground.top - groundDepth / 2)) {
      player.ground();
    }
  }

  // a render function
  function render() {
    // fill the canvas with a colour
    display.fillStyle = "#303840";
    display.fillRect(0, 0, world_width, world_height);
    // draw the ground
    display.strokeStyle = "#202830";
    display.beginPath();
    display.moveTo(0, ground.top);
    display.lineTo(world_width, ground.top);
    display.lineWidth = groundDepth;
    display.stroke();
    // draw the player
    display.fillStyle = player.color;
    display.fillRect(player.x, player.y, player.width, player.height);
  }

  return new GameState(update, render);
})(STAY_DOWN.controller, STAY_DOWN.player, STAY_DOWN.constructors.GameState);
