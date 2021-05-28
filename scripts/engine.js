/* fixed time step loop engine with pause function */

const engine = {
  running: false,
  raf_handle: undefined, // requestAnimationFrame (raf)

  update: undefined,
  render: undefined,

  // fixed time step start
  accumulated_time: 0,
  current_time: 0,
  time_step: 1000 / 60, //frames / second
  // fixed time step end

  cycle(time_stamp) {
    this.raf_handle = window.requestAnimationFrame(this.startCycle);
    // fixed time step start
    this.elapsed_time = time_stamp - this.current_time;
    this.accumulated_time += this.elapsed_time;
    this.current_time = time_stamp;

    let updated = false;

    if (this.accumulated_time > 60) this.accumulated_time = this.time_step; // prevent accumulated time getting too big on slow computers

    while (this.accumulated_time >= this.time_step) {
      this.update();

      updated = true;

      this.accumulated_time -= this.time_step;
    }

    if (updated) this.render();
    // fixed time step end

    this.render();
  },

  start() {
    //   'this' refers to 'window' unless 'this' is bound to 'enegine'
    this.running = true;
    this.raf_handle = window.requestAnimationFrame(this.startCycle);
  },

  stop() {
    this.running = false;
    window.cancelAnimationFrame(this.raf_handle);
  },

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
