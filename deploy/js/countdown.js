function Countdown(options) {
  var timer,
  instance = this,
  minutes = options.minutes || 0,
  seconds = options.seconds || 5,
  updateStatus = options.onUpdateStatus || function () {},
  counterEnd = options.onCounterEnd || function () {};

  function decrementCounter() {
    if (minutes === 0 && seconds === 0) {
        instance.stop();
        counterEnd();
    } else {
        if (seconds === 0){
            minutes--; seconds = 59;
        } else {
            seconds--;
        }
        updateStatus(minutes, seconds);
    }
    
  }

  this.start = function () {
    clearInterval(timer);
    timer = 0;
    minutes = options.minutes;
    seconds = options.seconds;
    updateStatus(minutes, seconds);
    timer = setInterval(decrementCounter, 1000);
  };

  this.stop = function () {
    clearInterval(timer);
    counterEnd();
  };
}

