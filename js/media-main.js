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

  hour = hour.toString().padStart(2, '0')
  minute = minute.toString().padStart(2, '0')

  londonHour.innerHTML = `${hour} :&nbsp;`
  londonMin.innerHTML = `${minute}`

  // New York
  let yorkData = new Date(),
    yHour = yorkData.getHours() - 10,
    yMinute = yorkData.getMinutes()

  yHour = yHour.toString().padStart(2, '0')
  yMinute = yMinute.toString().padStart(2, '0')

  yorkHour.innerHTML = `${yHour} :&nbsp;`
  yorkMinute.innerHTML = `${yMinute}`

  // Tokyo
  let tokyoData = new Date(),
    tHour = tokyoData.getHours() + 4,
    tMinute = tokyoData.getMinutes()

  tHour = tHour.toString().padStart(2, '0')
  tMinute = tMinute.toString().padStart(2, '0')

  tokyoHour.innerHTML = `${tHour} :&nbsp;`
  tokyoMinute.innerHTML = `${tMinute}`

  // London
  let lonData = new Date(),
    lHour = yorkData.getHours() - 5,
    lMinute = yorkData.getMinutes()

  lHour = lHour.toString().padStart(2, '0')
  lMinute = lMinute.toString().padStart(2, '0')

  lonHour.innerHTML = `${lHour} :&nbsp;`
  lonMin.innerHTML = `${lMinute}`

}, 1000);


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

// Menu Burger
const container = document.querySelector('.menu-container')
const menuBurgerBtn = document.querySelector('.btn-menu-burger')

// Mene Burger Swap
document.addEventListener('click', event => {
  const clickCon = event.composedPath().includes(container)
  const clickBur = event.composedPath().includes(menuBurgerBtn)

  if (clickBur) {
    container.classList.toggle('active')
  } else if (clickCon) {
    container.classList.add('active')

    if (bClock || bTimer || bStopwatch) {
      container.classList.remove('active')
    }
  } else {
    container.classList.remove('active')
  }
})


/* Tabs */

// Clock
bClock.onclick = () => {
  mMain.classList.add('active')

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