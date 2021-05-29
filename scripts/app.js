/* 

Define an anonymous function to wrap the game
code in. This is an Immediately Invoked Function Exression

This isolates the initial search for
variables to this container.

if the variable can't be found in here, only then
will the global scope be searched.

We still have access to the global scope but the global
scope does not have access to any variable in this wrapper.
The global scope has no way of calling and anonymous function!

*/

// the IIFE wrapper:
(() => {
  /* =============== app code start =============== */

  // set the world size (everything in the game) to full canvas size
  const world_width = 480;
  const world_height = 480;

  // these are used to slow down the fall speed of the player
  const gravity = 1;
  const friction = 0.9;

  // set the ground thickness.
  const groundDepth = 40;

  // variable to hold frequently accessed DOM element
  // this should help with game speed / performance
  let document_element = document.documentElement;

  // get the canvas & set alpha  channel to false
  // we only have RGB channels when we do this
  let display = document
    .getElementById("canvas")
    .getContext("2d", { alpha: false });

  let player = new Player(100, 100);

  let ground = {
    top: world_height - 32,
  };

  function collideTop(rectangle, top) {
    if (rectangle.getBottom() > top) {
      rectangle.setBottom(top);

      return true;
    }
    return false;
  }

  // the update function is responsible for everything that happens in the game

  function update() {
    if (controller.left) player.moveLeft();
    if (controller.right) player.moveRight();
    if (controller.up) {
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

  // a loop function to call the render function
  // replaced with engine.js
  // function cycle() {
  //   // use requestAnimationFrame to refresh the browser
  //   // window every time the browser is ready to redraw
  //   window.requestAnimationFrame(cycle);

  //   update();

  //   render();
  // }

  function keyDownUp(e) {
    e.preventDefault();

    // console.log(e.keyCode);

    let state = e.type == "keydown";

    switch (e.keyCode) {
      case 37:
        controller.left = state;
        console.log("Left");
        break;
      case 38:
        controller.up = state;
        console.log("Up");
        break;
      case 39:
        controller.right = state;
        console.log("right");
        break;
      case 80:
        controller.p = !state; //sloppy method makes you release the 'p' key in oreder to pause :o(
    }
    if (controller.p) {
      console.log('"p" pressed');
      controller.p = false;
      if (engine.running) engine.stop();
      else engine.start();
    }
  }

  // set the width of the canvas with a 16px gap at each side
  // this is the initial browser window size. We need to add
  // an event listener to watch the browser window in order for it to re-size dynamically
  display.canvas.width = world_width;
  display.canvas.height = world_height;

  // event listeners
  window.addEventListener("keydown", keyDownUp);

  window.addEventListener("keyup", keyDownUp);

  // wait for the ideal time to call our first draw
  // now  taken care of by engine.js
  // window.requestAnimationFrame(cycle);

  engine.setup(update, render);
  engine.start();

  /* =============== app code end =============== */
})();
