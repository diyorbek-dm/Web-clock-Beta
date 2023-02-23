// Buttons
const timerStart = document.querySelector('.timer-start'),
  timerPause = document.querySelector('.timer-pause'),
  timerDelete = document.querySelector('.timer-delete')

// Button
const tStart = document.querySelector('.timer-start')

// Interval
let inTimer

timerStart.addEventListener('dblclick', () => {
  alert('Timer already started!')
  alert('Restart site')
})

// Start
timerStart.addEventListener('click', () => {

  // * Input
  let uSec = document.querySelector('.timer-seconds').value,
    uMin = document.querySelector('.timer-minutes').value,
    uHour = document.querySelector('.timer-hours').value

  // * User's time to number
  let s = parseInt(uSec)
  let m = parseInt(uMin)
  let h = parseInt(uHour)

  // * Output
  const outSec = document.querySelector('.timer-second'),
    outMin = document.querySelector('.timer-minute'),
    outHour = document.querySelector('.timer-hour')

  // * Ckech empty / Check correct time
  if (uSec == '' && uMin == '' && uHour == '') {
    clearInterval(inTimer)
    timerStart.style = 'background-color: #8B2E2E; box-shadow: 0px 4px 10px 0.5px #8B2E2E;'
  } else if (s > 60 || s < 0 || m > 60 || m < 0 || h > 24 || h < 0) {
    inTimer = clearInterval(inTimer)
    alert('Please, enter correct time!')
    timerStart.style = 'background-color: #8B2E2E; box-shadow: 0px 4px 10px 0.5px #8B2E2E;'
  } else if (tStart.innerHTML == 'Start') {
    tStart.innerHTML = 'Clear'

    timerStart.style = 'background-color: #8A4444;'
    startStopwatch()
  } else if (tStart.innerHTML == 'Clear') {
    tStart.innerHTML = 'Start'

    timerStart.style = 'background-color: #464C55;'
    clearStopwatch()
  }

  // * Start Stopwatch
  function startStopwatch() {

    // * Check input empty value
    if (uMin == '') {
      m = 0
    }
    if (uHour == '') {
      h = 0
    }
    if (uSec == '') {
      s = 0
    }

    // * Timer Interval
    inTimer = setInterval(() => {
      // Beauti
      const beauti = document.querySelectorAll('.output-colon')
      beauti.forEach(elem => {
        elem.style = 'animation: opacity 1.7s linear infinite;'
      })

      // ** Main code
      if (s != 0) {
        s--
      } else if (s == 0 && m != 0) {
        s = 59
        m--
      } else if (m == 0 && h != 0) {
        m = 60
        h--
      } else if (m != 0 && s == 0) {
        s = 0
        m--
        if (h != 0 && m == 0) {
          h--
        }
      } else if (s == 0 && m == 0 && h == 0) {
        clearInterval(inTimer)

        // * Done box
        const doneBox = document.querySelector('.timer-done')
        const timerBox = document.querySelector('.timer-box')

        timerBox.classList.remove('active')
        timerBox.classList.add('none')

        doneBox.classList.remove('none')
        doneBox.classList.add('active')

        // * Audio
        let audio = document.querySelector('.audio')
        audio.play()

        // Done btn Close
        document.querySelector('.done-btn').addEventListener('click', () => {
          timerBox.classList.remove('none')
          timerBox.classList.add('active')

          doneBox.classList.remove('active')
          doneBox.classList.add('none')

          audio.pause()
        })

        // * Delete Beauti
        beauti.forEach(elem => {
          elem.style = 'animation: none;'
        })

        // * None btn - Stop / Delete
        tPause.classList.remove('active-btn')
        tPause.classList.add('none')

        tDelete.classList.remove('active-btn')
        tDelete.classList.add('none')

        tStart.classList.remove('none')
        tStart.classList.add('active-btn')

        timerStart.style = 'background-color: #464C55;'
      }

      // * Output
      outSec.innerHTML = s.toString().padStart(2, '0')
      outMin.innerHTML = m.toString().padStart(2, '0')
      outHour.innerHTML = h.toString().padStart(2, '0')
    }, 1000)
  }

  // * Clear Stopwatch
  function clearStopwatch() {
    s = 0
    m = 0
    h = 0

    outSec.innerHTML = s.toString().padStart(2, '0')
    outMin.innerHTML = m.toString().padStart(2, '0')
    outHour.innerHTML = h.toString().padStart(2, '0')

    clearInterval(inTimer)
  }
})

// Pause
timerPause.addEventListener('click', () => {
  // clearInterval(inTimer)
  // tStart.classList.remove('none')
  // tStart.classList.add('active-btn')

  // tPause.classList.remove('active-btn')
  // tPause.classList.add('none')

  // tDelete.classList.remove('active-btn')
  // tDelete.classList.add('none')

  // timerStart.style = 'background-color: #464C55;'
})

// Delete
timerDelete.addEventListener('click', () => {
  uHour.innerHTML = `00`
  uSec.innerHTML = `00`
  uMin.innerHTML = `00`

  uSec.value = `00`
  uMin.value = `00`
  uHour.value = `00`

  clearInterval(inTimer)
})