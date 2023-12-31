class Clock {
    constructor({ template }) {
      this.template = template;
    }
  
    render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
  }
  class ExtendedClock extends Clock {
    constructor(template, precision = 1000) {
       super(template);

       this._precision = precision;
    }

    set precision(valueNew) {
       this._precision = valueNew;
    }
    get precision() {
       return this._precision;
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this._precision);
    }
 }
 
 let myClock = new ExtendedClock('h:m:s', 2000);

 myClock.start();
 myClock.stop();