// All Tabs
const itemList = document.querySelectorAll('.item-list')

// Nav > Menu Burger Tabs
const home = document.querySelector('.home'),
  timer = document.querySelector('.timer'),
  stopWatch = document.querySelector('.stopwatch')

// Displays
const dMain = document.querySelector('.display-main'),
  dTimer = document.querySelector('.display-timer'),
  dStopwatch = document.querySelector('.display-stopwatch')


// Home
home.onclick = () => {
  dMain.classList.add('active')

  if (dMain.classList.contains('active')) {
    dMain.classList.remove('none')

    dTimer.classList.remove('active')
    dTimer.classList.add('none')

    dStopwatch.classList.remove('active')
    dStopwatch.classList.add('none')
  }
}

// Timer
timer.onclick = () => {
  dTimer.classList.add('active')

  if (dTimer.classList.contains('active')) {
    dTimer.classList.remove('none')

    dMain.classList.remove('active')
    dMain.classList.add('none')

    dStopwatch.classList.remove('active')
    dStopwatch.classList.add('none')
  }
}

// Stopwatch
stopWatch.onclick = () => {
  dStopwatch.classList.add('active')

  if (dStopwatch.classList.contains('active')) {
    dStopwatch.classList.remove('none')

    dMain.classList.remove('active')
    dMain.classList.add('none')

    dTimer.classList.remove('active')
    dTimer.classList.add('none')
  }
}

/* Main Clock */
const mHour = document.querySelector('.m-hour'),
  mMinute = document.querySelector('.m-minute'),
  mSecond = document.querySelector('.m-second'),
  mAP = document.querySelector('.m-ap'),
  mWDay = document.querySelector('.m-w-day'),
  mMonth = document.querySelector('.m-month'),
  mDay = document.querySelector('.m-day'),
  mYear = document.querySelector('.m-year')

const am = 'AM', pm = 'PM'

const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

setInterval(() => {
  let date = new Date(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds(),
    year = date.getFullYear(),
    wDay = date.getDay(),
    day = date.getDate(),
    month = date.getMonth() + 1

  switch (hour) {
    case 0:
      mAP.innerHTML = `${pm}`
      break;
    case 1:
      mAP.innerHTML = `${pm}`
      break;
    case 2:
      mAP.innerHTML = `${pm}`
      break;
    case 3:
      mAP.innerHTML = `${pm}`
      break;
    case 4:
      mAP.innerHTML = `${pm}`
      break;
    case 5:
      mAP.innerHTML = `${pm}`
      break;
    case 6:
      mAP.innerHTML = `${am}`
      break;
    case 7:
      mAP.innerHTML = `${am}`
      break;
    case 8:
      mAP.innerHTML = `${am}`
      break;
    case 9:
      mAP.innerHTML = `${am}`
      break;
    case 10:
      mAP.innerHTML = `${am}`
      break;
    case 11:
      mAP.innerHTML = `${am}`
      break;
    case 12:
      mAP.innerHTML = `${am}`
      break;
    case 13:
      mAP.innerHTML = `${pm}`
      break;
    case 14:
      mAP.innerHTML = `${pm}`
      break;
    case 15:
      mAP.innerHTML = `${pm}`
      break;
    case 16:
      mAP.innerHTML = `${pm}`
      break;
    case 17:
      mAP.innerHTML = `${pm}`
      break;
    case 18:
      mAP.innerHTML = `${pm}`
      break;
    case 19:
      mAP.innerHTML = `${am}`
      break;
    case 20:
      mAP.innerHTML = `${am}`
      break;
    case 21:
      mAP.innerHTML = `${am}`
      break;
    case 22:
      mAP.innerHTML = `${am}`
      break;
    case 23:
      mAP.innerHTML = `${am}`
      break;

    default:
      break;
  }

  if (hour < 10) {
    mHour.innerHTML = `0${hour} :&nbsp;`
  } else {
    mHour.innerHTML = `${hour} :&nbsp;`
  }

  if (minute < 10) {
    mMinute.innerHTML = `0${minute} :&nbsp;`
  } else {
    mMinute.innerHTML = `${minute} :&nbsp;`
  }

  if (second < 10) {
    mSecond.innerHTML = `0${second}&nbsp;`
  } else {
    mSecond.innerHTML = `${second}&nbsp;`
  }

  if(month < 10) {
    mMonth.innerHTML = `0${month}.`
  } else {
    mMonth.innerHTML = `${month}.`
  }

  if(day < 10) {
    mDay.innerHTML = `0${day}.`
  } else {
    mDay.innerHTML = `${day}.`
  }

  mWDay.innerHTML = `${week[wDay]} &nbsp;`
  mYear.innerHTML = `${year}`
})