var startstop   = document.getElementById("startstop"),
    seconds = 0,
    minutes = 0,
    hours = 0,
    counter;

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

startstop.onclick = function() {
  if (this.textContent === "Start") {
    this.textContent = "Stop";
    startCounter();
  } else {
    this.textContent = "Start";
    stopCounter();
  }
};

reset.onclick = function() {
  stopCounter();
  seconds = 0;
  minutes = 0;
  hours   = 0;
  hour.textContent = "00";
  minute.textContent = "00";
  second.textContent = "00";
};