// Code developed using tutorial: https://freshman.tech/pomodoro-timer/

// Sets time for timing modes
const timer = {
    pomodoro: 25,
    break: 5,
    breakInterval: 4
};

let interval;

//start timer when clicked
const mainButton = document.getElementById('js-btn');
mainButton.addEventListener('click', () => {
  const { action } = mainButton.dataset;
  if (action === 'start') {
    startTimer();
  } else {
      stopTimer();
  }
});

// Makes mode buttons functional
const modeButtons = document.querySelector('#js-mode-buttons');
modeButtons.addEventListener('click', handleMode);

// Which mode is clicked
function handleMode(event){
    const { mode } = event.target.dataset;
//if no mode selected return nothing
    if(!mode) return;

    switchMode(mode);
    stopTimer();
}

function switchMode(mode) {
//whichever mode is selected
    timer.mode = mode;
//update remaining time
    timer.remainingTime = {
        total: timer[mode] * 60,
        minutes: timer[mode],
        seconds: 0,
    };

    document
     .querySelectorAll('button[data-mode')
     .forEach(e => e.classList.remove('active'));
     document.querySelector(`[data-mode="${mode}"]`).classList.add('active');
        document.body.style.backgroundColor = `var(--${mode})`;

  updateClock();
}

//calculate and display remaining time
function getRemainingTime(endTime) {
    const currentTime = Date.parse(new Date());
    const difference = endTime - currentTime;
  
    const total = Number.parseInt(difference / 1000, 10);
    const minutes = Number.parseInt((total / 60) % 60, 10);
    const seconds = Number.parseInt(total % 60, 10);
  
    return {
      total,
      minutes,
      seconds,
    };
  }

function startTimer() {
    let { total } = timer.remainingTime;
    const endTime = Date.parse(new Date()) + total * 1000;
// change button to stop when activated
    mainButton.dataset.action = 'stop';
    mainButton.textContent = 'stop';
    mainButton.classList.add('active');
  
    interval = setInterval(function() {
      timer.remainingTime = getRemainingTime(endTime);
      updateClock();
  
      total = timer.remainingTime.total;
      if (total <= 0) {
        clearInterval(interval);
      }
    }, 1000);
  }

 function stopTimer() {
     clearInterval(interval);

     mainButton.dataset.action = 'start';
     mainButton.textContent = 'start';
     mainButton.classList.remove('active');
 }

function updateClock(){
    const { remainingTime } = timer;
    //displays 0 when necessary 
    const minutes = `${remainingTime.minutes}`.padStart(2, '0');
    const seconds = `${remainingTime.seconds}`.padStart(2, '0');

    const min = document.getElementById('js-minutes');
    const sec = document.getElementById('js-seconds');

    min.textContent = minutes;
    sec.textContent = seconds;
}

document.addEventListener('DOMContentLoaded', () => {
    switchMode('pomodoro');
  });