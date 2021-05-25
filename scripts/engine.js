/* fixed time step loop engine with pause function */

const engine = {
  update: undefined,
  render: undefined,

  accumulated_time: 0,
  current_time: 0,
  time_step: 1000 / 30,

  cycle(time_stamp) {
    window.requestAnimationFrame(this.startCycle);

    this.elapsed_time = time_stamp - this.current_time;
    this.accumulated_time += this.elapsed_time;
    this.current_time = time_stamp;

    while (this.accumulated_time >= this.time_step) {
      this.update();

      this.accumulated_time -= this.time_step;
    }

    this.accumulated_time;

    this.render();
  },

  start() {
    //   'this' refers to 'window' unless 'this' is bound to 'enegine'
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
