/* 

Define an anonymous function to wrap the game
code in. This is an Immediately Invoked Function Exression

This isolates the initial search for
variables to this container.

if the variable can't be found in here, only then
will the global scope be searched.

We still have acces to the gloabal scope but the global
scope does not have access to any variable in this wrapper.
The global scope has no way of calling and anonymous function!

*/

// the IIFE wrapper:
(() => {
  /* =============== app code start =============== */

  // variable to hold frequently accessed DOM element
  // this should help with game speed / performance
  let document_element = document.documentElement;

  // get the canvas & set alpha  channel to false
  // we only have RGB channels when we do this
  let display = document
    .getElementById("canvas")
    .getContext("2d", { alpha: false });

  // a render function
  function render() {
    // render something!
    display.fillStyle = "#330";
    display.fillRect(30, 30, 50, 50);
  }

  // a loop function to call the render function
  function cycle() {
    // use requestAnimationFrame to refresh the browser
    // window every time the browser is ready to redraw
    window.requestAnimationFrame(cycle);

    render();
  }

  // set the width of the canvas with a 16px gap at each side
  // this is the initial browser window size. We need to add
  // an event listener to watch the browser window in order for it to re-size dynamically
  display.canvas.width = document_element.clientWidth - 32;
  display.canvas.height = document_element.clientHeight - 32;

  // wait fort he ideal time to call our first draw
  window.requestAnimationFrame(cycle);

  /* =============== app code end =============== */
})();
