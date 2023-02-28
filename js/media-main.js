const btn = document.querySelector('.btn-menu-burger')

// Global Time
const londonHour = document.querySelector('.london-hour'),
  londonMin = document.querySelector('.london-minute'),
  yourkHour = document.querySelector('.york-hour'),
  yourkMinute = document.querySelector('.york-minute'),
  tokyoHour = document.querySelector('.tokyo-hour'),
  tokyoMinute = document.querySelector('.tokyo-minute'),
  lonHour = document.querySelector('.lon-hour'),
  lonMin = document.querySelector('.lon-minute')

// Get Time
setInterval(() => {
  // London
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
    yorkHour = yorkData.getHours() - 10,
    yorkMinute = yorkData.getMinutes()

  // Hours - New York
  if (yorkHour < 10) {
    yourkHour.innerHTML = `0${yorkHour} :`
  } else {
    yourkHour.innerHTML = `${yorkHour} :`
  }

  // Minutes - New york
  if (yorkMinute < 10) {
    yourkHour.innerHTML = `0${yorkMinute}`
  } else {
    yourkMinute.innerHTML = `${yorkMinute}`
  }

  // Tokyo
  let tokyoData = new Date(),
    tHour = tokyoData.getHours() + 4,
    tMinute = tokyoData.getMinutes()

  // Hours - Tokyo
  if (tokyoHour < 10) {
    tokyoHour.innerHTML = `0${tHour} :`
  } else {
    tokyoHour.innerHTML = `${tHour} :`
  }

  // Minutes - Tokyo
  if (tokyoMinute < 10) {
    tokyoHour.innerHTML = `0${tMinute}`
  } else {
    tokyoMinute.innerHTML = `${tMinute}`
  }

  // London
  let lonData = new Date(),
    lHour = yorkData.getHours() - 5,
    lMinute = yorkData.getMinutes()

  // Hour - London
  if (lHour < 10) {
    lonHour.innerHTML = `0${lHour} :`
  } else {
    lonHour.innerHTML = `${lHour} :`
  }

  // Minute - London
  if(lMinute < 10) {
    lonMin.innerHTML = `0${lMinute}`
  } else {
    lonMin.innerHTML = `${lMinute}`
  }
}, 1000);

btn.addEventListener('click', () => {
  document.querySelector('.menu-container').classList.toggle('active')
})