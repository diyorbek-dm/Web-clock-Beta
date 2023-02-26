// All Tabs
const itemList = document.querySelectorAll('.item-list')

// Nav > Menu Burger Tabs
const home = document.querySelector('.home'),
  globalTime = document.querySelector('.global-time'),
  timer = document.querySelector('.timer'),
  stopWatch = document.querySelector('.stopwatch'),
  theme = document.querySelector('.theme')

// Displays
const dMain = document.querySelector('.display-main'),
  dGlobalTimer = document.querySelector('.display-global-time'),
  dTimer = document.querySelector('.display-timer'),
  dStopwatch = document.querySelector('.display-stopwatch'),
  dTheme = document.querySelector('.display-theme')

// Home
home.onclick = () => {
  dMain.classList.add('active')

  if (dMain.classList.contains('active')) {
    dMain.classList.remove('none')

    dGlobalTimer.classList.remove('active')
    dGlobalTimer.classList.add('none')

    dTimer.classList.remove('active')
    dTimer.classList.add('none')

    dStopwatch.classList.remove('active')
    dStopwatch.classList.add('none')

    dTheme.classList.remove('active')
    dTheme.classList.add('none')
  }
}

// Global Time
globalTime.onclick = () => {
  dGlobalTimer.classList.add('active')

  if (dGlobalTimer.classList.contains('active')) {
    dGlobalTimer.classList.remove('none')

    dMain.classList.remove('active')
    dMain.classList.add('none')

    dTimer.classList.remove('active')
    dTimer.classList.add('none')

    dStopwatch.classList.remove('active')
    dStopwatch.classList.add('none')

    dTheme.classList.remove('active')
    dTheme.classList.add('none')
  }
}

// Timer
timer.onclick = () => {
  dTimer.classList.add('active')

  if (dTimer.classList.contains('active')) {
    dTimer.classList.remove('none')

    dMain.classList.remove('active')
    dMain.classList.add('none')

    dGlobalTimer.classList.remove('active')
    dGlobalTimer.classList.add('none')

    dStopwatch.classList.remove('active')
    dStopwatch.classList.add('none')

    dTheme.classList.remove('active')
    dTheme.classList.add('none')
  }
}

// Stopwatch
stopWatch.onclick = () => {
  dStopwatch.classList.add('active')

  if (dStopwatch.classList.contains('active')) {
    dStopwatch.classList.remove('none')

    dMain.classList.remove('active')
    dMain.classList.add('none')

    dGlobalTimer.classList.remove('active')
    dGlobalTimer.classList.add('none')

    dTimer.classList.remove('active')
    dTimer.classList.add('none')

    dTheme.classList.remove('active')
    dTheme.classList.add('none')
  }
}

// Theme
theme.onclick = () => {
  dTheme.classList.add('active')

  if (dTheme.classList.contains('active')) {
    dTheme.classList.remove('none')

    dMain.classList.remove('active')
    dMain.classList.add('none')

    dGlobalTimer.classList.remove('active')
    dGlobalTimer.classList.add('none')

    dTimer.classList.remove('active')
    dTimer.classList.add('none')

    dStopwatch.classList.remove('active')
    dStopwatch.classList.add('none')
  }
}



/* Main Clock */
const mHour = document.querySelector('.m-hour'),
  mMinute = document.querySelector('.m-minute'),
  mSecond = document.querySelector('.m-second')

setInterval(() => {
  let date = new Date(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds()

  if (hour < 10) {
    mHour.innerHTML = `0${hour}`
  } else {
    mHour.innerHTML = `${hour}`
  }

  if (minute < 10) {
    mMinute.innerHTML = `0${minute}`
  } else {
    mMinute.innerHTML = `${minute}`
  }

  if (second < 10) {
    mSecond.innerHTML = `0${second}`
  } else {
    mSecond.innerHTML = `${second}`
  }
})