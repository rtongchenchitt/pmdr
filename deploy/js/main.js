function Countdown(options) {
  var timer,
  instance = this,
  minutes = options.minutes || 0,
  seconds = options.seconds || 5,
  output = options.output || null,
  updateStatus = options.onUpdateStatus || function () {},
  counterEnd = options.onCounterEnd || function () {};

  function decrementCounter() {
    updateStatus(minutes, seconds);
    if (minutes === 0 && seconds === 0) {
      counterEnd();
      instance.stop();
    } else if (seconds === 0){
        minutes--;
        seconds = 59;
    } else {
        seconds--;
    }
  }

  this.start = function () {
    clearInterval(timer);
    timer = 0;
    seconds = options.seconds;
    timer = setInterval(decrementCounter, 1000);
  };

  this.stop = function () {
    clearInterval(timer);
  };
}

function terminateCounter(counter){
    $("#counter").text("Ready to start!");
    counter.stop();
    toggleButton($("#stopButton"), $("#startButton"));
}
        
function toggleButton(elementToHide, elementToShow){
    elementToHide.hide();
    elementToShow.show();
}