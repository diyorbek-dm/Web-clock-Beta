const hour = document.querySelector('.hour'),
  minutes = document.querySelector('.minutes'),
  seconds = document.querySelector('.seconds')

const start = document.querySelector('.start-btn'),
  stop = document.querySelector('.stop-btn'),
  reset = document.querySelector('.reset-btn'),
  output = document.querySelector('.box-stopwatch'),
  form = document.querySelector('.form')

let sec = 0
let min = 0
let hrs = 0
let interval

function check() {
  sec++

  if (sec >= 60) {
    sec = 0
    min++

    if (min < 10) {
      min = `0${min}`
    }
    if (min >= 60) {
      min = 0
      hrs++

      if (hrs < 10) {
        hrs = `0${hrs}`
      }
    }
    if (hrs === 24) {
      sec = 0
      min = 0
      hrs = 0
    }
  }

  if (min == 0) {
    min = `00`
  }

  if (hrs == 0) {
    hrs = `00`
  }

  if (sec < 10) {
    sec = `0${sec}`;
  }

  if (hrs == 24 && min == 60 && sec == 60) {
    output.classList.remove('output-active')

    hour.innerHTML = `${hrs} :&nbsp;`
    minutes.innerHTML = `${min} :&nbsp;`
    seconds.innerHTML = `${sec}&nbsp;`

    clearInterval(interval)
  }
}

start.addEventListener('click', () => {
  // Form
  document.querySelector('.form ').classList.add('active')

  start.classList.add('btn-active-start')
  stop.classList.add('active')
  reset.classList.add('active')

  interval = setInterval(() => {
    check()

    hour.innerHTML = `${hrs} :&nbsp;`
    minutes.innerHTML = `${min} :&nbsp;`
    seconds.innerHTML = `${sec}&nbsp;`
  }, 1000);
})

start.addEventListener('dblclick', () => {
  alert('Stopwatch already started!')
  alert('Restart site')
})

stop.addEventListener('click', () => {

  if (hrs == 0 && min == 0 && sec == 0) {
    hour.innerHTML = `00 :&nbsp;`
    minutes.innerHTML = `00 :&nbsp;`
    seconds.innerHTML = `00&nbsp;`
  } else {
    hour.innerHTML = `${hrs} :&nbsp;`
    minutes.innerHTML = `${min} :&nbsp;`
    seconds.innerHTML = `${sec}&nbsp;`
  }

  clearInterval(interval)
})

reset.addEventListener('click', () => {
  output.classList.remove('output-active')

  sec = 0
  min = 0
  hrs = 0

  reset.classList.remove('active')
  stop.classList.remove('active')

  hour.innerHTML = `00 :&nbsp;`
  minutes.innerHTML = `00 :&nbsp;`
  seconds.innerHTML = `00&nbsp;`

  clearInterval(interval)
})