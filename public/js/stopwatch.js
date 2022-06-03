//starting times
var startstop   = document.getElementById("startstop"),
    seconds = 0,
    minutes = 0,
    hours = 0,
    counter;

//function for accurate timer
function buildCounter() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }
  // if number is less than 10 display 0 & number
  second.textContent = (seconds < 10 ? "0" + seconds.toString(): seconds);
  minute.textContent = (minutes < 10 ? "0" + minutes.toString(): minutes);
  hour.textContent = (hours < 10 ? "0" + hours.toString(): hours);
}

//start timer function
function startCounter() {
  clearTimeout(counter);
  counter = setInterval(buildCounter, 1000);
  return false;
}

//pause timer function
function stopCounter() {
  clearTimeout(counter);
  return false;
}

//when start button clicked display stop and vice versa
startstop.onclick = function() {
  if (this.textContent === "Start") {
    this.textContent = "Stop";
    startCounter();
  } else {
    this.textContent = "Start";
    stopCounter();
  }
};

//function to reset back to 0
reset.onclick = function() {
  stopCounter();
  seconds = 0;
  minutes = 0;
  hours   = 0;
  hour.textContent = "00";
  minute.textContent = "00";
  second.textContent = "00";
};