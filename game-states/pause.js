STAY_DOWN.states.pause = (function (GameState) {
  function update() {
    console.log("paused");
  }

  function render() {}

  return new GameState(update, render);
})(STAY_DOWN.constructors.GameState);
