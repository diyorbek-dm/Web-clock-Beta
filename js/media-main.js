// World Time
const londonHour = document.querySelector('.london-hour'),
  londonMin = document.querySelector('.london-minute'),
  yorkHour = document.querySelector('.york-hour'),
  yorkMinute = document.querySelector('.york-minute'),
  tokyoHour = document.querySelector('.tokyo-hour'),
  tokyoMinute = document.querySelector('.tokyo-minute'),
  lonHour = document.querySelector('.lon-hour'),
  lonMin = document.querySelector('.lon-minute')

// Get Time
setInterval(() => {
  // Pekin
  let date = new Date(),
    hour = date.getHours() + 3,
    minute = date.getMinutes()

  // Hours - Pekin
  if (hour < 10) {
    londonHour.innerHTML = `0${hour} :`
  } else {
    londonHour.innerHTML = `${hour} :`
  }

  //  Minutes Pekin
  if (minute < 10) {
    londonMin.innerHTML = `0${minute}`
  } else {
    londonMin.innerHTML = `${minute}`
  }

  // New York
  let yorkData = new Date(),
    yHour = yorkData.getHours() + 24 - 10,
    yMinute = yorkData.getMinutes()

  // Hours - New York
  if (yHour < 10) {
    yorkHour.innerHTML = `0${yHour} :`
  } else {
    yorkHour.innerHTML = `${yHour} :`
  }

  // Minutes - New york
  if (yMinute < 10) {
    yorkMinute.innerHTML = `0${yMinute}`
  } else {
    yorkMinute.innerHTML = `${yMinute}`
  }

  // Tokyo
  let tokyoData = new Date(),
    tHour = tokyoData.getHours() + 4,
    tMinute = tokyoData.getMinutes()

  // Hours - Tokyo
  if (tHour < 10) {
    tokyoHour.innerHTML = `0${tHour} :`
  } else {
    tokyoHour.innerHTML = `${tHour} :`
  }

  // Minutes - Tokyo
  if (tMinute < 10) {
    tokyoMinute.innerHTML = `0${tMinute}`
  } else {
    tokyoMinute.innerHTML = `${tMinute}`
  }

  // London
  let lonData = new Date(),
    lHour = yorkData.getHours() + 24 - 5,
    lMinute = yorkData.getMinutes()

  // Hour - London
  if (lHour < 10) {
    lonHour.innerHTML = `0${lHour} :`
  } else {
    lonHour.innerHTML = `${lHour} :`
  }

  // Minute - London
  if (lMinute < 10) {
    lonMin.innerHTML = `0${lMinute}`
  } else {
    lonMin.innerHTML = `${lMinute}`
  }
}, 1000);

// Menu Burger
document.querySelector('.btn-menu-burger').addEventListener('click', () => {
  document.querySelector('.menu-container').classList.toggle('active')
})

// Menu Burger Swap
const bClock = document.querySelector('.m-clock'),
  bTimer = document.querySelector('.m-timer'),
  bStopwatch = document.querySelector('.m-stopwatch'),
  bContainer = document.querySelector('.menu-container')

// Displays
const mMain = document.querySelector('.display-main'),
  mTimer = document.querySelector('.display-timer'),
  mStopwatch = document.querySelector('.display-stopwatch')

// Media Nav Items
const iClock = document.querySelector('.media-item-clock'),
  iTimer = document.querySelector('.media-item-timer'),
  iStopwatch = document.querySelector('.media-item-stopwatch')


// Clock
bClock.onclick = () => {
  mMain.classList.add('active')
  bContainer.classList.remove('active')

  if (mMain.classList.contains('active')) {
    mMain.classList.remove('none')

    mTimer.classList.remove('active')
    mTimer.classList.add('none')

    mStopwatch.classList.remove('active')
    mStopwatch.classList.add('none')
  }


  iClock.classList.add('active')

  if (iClock.classList.contains('active')) {
    iClock.classList.remove('none')

    iTimer.classList.remove('active')
    iTimer.classList.add('none')

    iStopwatch.classList.remove('active')
    iStopwatch.classList.add('none')
  }
}

// Timer
bTimer.onclick = () => {
  mTimer.classList.add('active')
  bContainer.classList.remove('active')

  if (mTimer.classList.contains('active')) {
    mTimer.classList.remove('none')

    mMain.classList.remove('active')
    mMain.classList.add('none')

    mStopwatch.classList.remove('active')
    mStopwatch.classList.add('none')
  }


  iTimer.classList.add('active')

  if (iTimer.classList.contains('active')) {
    iTimer.classList.remove('none')

    iClock.classList.remove('active')
    iClock.classList.add('none')

    iStopwatch.classList.remove('active')
    iStopwatch.classList.add('none')
  }
}

// Stopwatch
bStopwatch.onclick = () => {
  mStopwatch.classList.add('active')
  bContainer.classList.remove('active')

  if (mStopwatch.classList.contains('active')) {
    mStopwatch.classList.remove('none')

    mMain.classList.remove('active')
    mMain.classList.add('none')

    mTimer.classList.remove('active')
    mTimer.classList.add('none')
  }


  iStopwatch.classList.add('active')

  if (iStopwatch.classList.contains('active')) {
    iStopwatch.classList.remove('none')

    iClock.classList.remove('active')
    iClock.classList.add('none')

    iTimer.classList.remove('active')
    iTimer.classList.add('none')
  }
}

// Beati

const btnStopwatch = document.querySelector('.btn-start-stopwatch')