const hour = document.querySelector('.hour'),
  minutes = document.querySelector('.minutes'),
  seconds = document.querySelector('.seconds'),
  miliseconds = document.querySelector('.miliseconds')

const start = document.querySelector('.start-btn'),
  reset = document.querySelector('.reset-btn'),
  output = document.querySelector('.box-stopwatch')

// Vars
let mili = 0
let sec = 0
let min = 0
let hrs = 0
let interval

function go() {
  mili++

  mili = mili.toString().padStart(2, '0')
  sec = sec.toString().padStart(2, '0')
  min = min.toString().padStart(2, '0')
  hrs = hrs.toString().padStart(2, '0')

  hour.innerHTML = `${hrs} :&nbsp;`
  minutes.innerHTML = `${min} :&nbsp;`
  seconds.innerHTML = `${sec}`
  miliseconds.innerHTML = `.${mili}`

  if (mili >= 60) {
    mili = 0
    sec++
    if (sec >= 60) {
      sec = 0
      min++
    }
    if (min == 60) {
      min = 0
      hrs++
    }
    if (hrs == 24) {
      mili = 0
      sec = 0
      min = 0
      hrs = 0
    }
  }

  if (hrs == 24 && min == 60 && sec == 60) {
    hour.innerHTML = `${hrs} :&nbsp;`
    minutes.innerHTML = `${min} :&nbsp;`
    seconds.innerHTML = `${sec}`

    clearInterval(interval)
  }
}

start.addEventListener('click', () => {
  reset.classList.add('abb')

  if (start.innerHTML == 'Start') {
    start.innerHTML = 'Stop'
    interval = setInterval(() => go(), 16.09);
  } else if (start.innerHTML == 'Stop') {
    start.innerHTML = 'Start'
    clearInterval(interval)
  }
})

reset.addEventListener('click', () => {

  sec = 0
  min = 0
  hrs = 0
  mili = 0

  reset.classList.remove('abb')
  start.innerHTML = 'Start'

  hour.innerHTML = `00 :&nbsp;`
  minutes.innerHTML = `00 :&nbsp;`
  seconds.innerHTML = `00`
  miliseconds.innerHTML = `.00`

  clearInterval(interval)
})