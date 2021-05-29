STAY_DOWN.controller = (function (window) {
  let left = false;
  let right = false;
  let up = false;
  let p = false;

  function keyDownUp(e) {
    e.preventDefault();

    // console.log(e.keyCode);

    let state = e.type == "keydown";

    switch (e.keyCode) {
      case 37:
        left = state;
        console.log("Left");
        break;
      case 38:
        up = state;
        console.log("Up");
        break;
      case 39:
        right = state;
        console.log("right");
        break;
      case 80:
        p = !state; //sloppy method makes you release the 'p' key in oreder to pause :o(
    }
  }

  return {
    getLeft() {
      return left;
    },
    getRight() {
      return right;
    },
    getUp() {
      return up;
    },
    getP() {
      return p;
    },

    activate() {
      // event listeners
      window.addEventListener("keydown", keyDownUp);
      window.addEventListener("keyup", keyDownUp);
    },
  };
})(window);
