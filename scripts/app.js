const STAY_DOWN = {
  constructors: {},
  states: {},
};

STAY_DOWN.initialize = function () {
  this.player = new this.constructors.player(100, 100);
  this.controller.activate();

  this.states.run.update();
};

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
// (() => {
//   /* =============== app code start =============== */

//   // variable to hold frequently accessed DOM element
//   // this should help with game speed / performance
//   let document_element = document.documentElement;

//   // get the canvas & set alpha  channel to false
//   // we only have RGB channels when we do this
//   let display = document
//     .getElementById("canvas")
//     .getContext("2d", { alpha: false });

//   let player = new Player(100, 100);

//   let ground = {
//     top: world_height - 32,
//   };

//   function collideTop(rectangle, top) {
//     if (rectangle.getBottom() > top) {
//       rectangle.setBottom(top);

//       return true;
//     }
//     return false;
//   }

//   // a loop function to call the render function
//   // replaced with engine.js
//   // function cycle() {
//   //   // use requestAnimationFrame to refresh the browser
//   //   // window every time the browser is ready to redraw
//   //   window.requestAnimationFrame(cycle);

//   //   update();

//   //   render();
//   // }

//   // set the width of the canvas with a 16px gap at each side
//   // this is the initial browser window size. We need to add
//   // an event listener to watch the browser window in order for it to re-size dynamically
//   display.canvas.width = world_width;
//   display.canvas.height = world_height;

//   // wait for the ideal time to call our first draw
//   // now  taken care of by engine.js
//   // window.requestAnimationFrame(cycle);

//   engine.setup(update, render);
//   engine.start();

//   /* =============== app code end =============== */
// })();
