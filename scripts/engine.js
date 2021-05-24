/* fixed time step loop engine with pause function */

const engine = {
  update: undefined,
  render: undefined,

  cycle(time_stamp) {
    window.requestAnimationFrame(this.startCycle);
    this.update();
    this.render();
  },

  start() {
    //   'this' refers to 'window' unless this is bound to 'enegine'
    window.requestAnimationFrame(this.startCycle);
  },

  stop() {},

  setup(update, render) {
    this.update = update;
    this.render = render;
  },
};

// function to bind 'this' to engine
(function () {
  this.startCycle = (time_stamp) => {
    this.cycle(time_stamp);
  };
}.call(engine));
