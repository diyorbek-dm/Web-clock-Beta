// Buttons
const timerStart = document.querySelector('.timer-start'),
  timerPause = document.querySelector('.timer-pause'),
  timerDelete = document.querySelector('.timer-delete')

// Button
const tStart = document.querySelector('.timer-start')

// Interval
let inTimer

// Start
timerStart.addEventListener('click', () => {
  // Beauti
  const beauti = document.querySelectorAll('.output-colon')

  // * Empty Inputs
  const emptyText = document.querySelector('.empty-value'),
    inputsBorder = document.querySelectorAll('.input')

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
    timerStart.classList.add('error')
    emptyText.classList.add('active')
    emptyText.innerHTML = 'Please, write time!'

    // Border All
    inputsBorder.forEach(elem => {
      elem.classList.add('empty')
    })
  } else if (s > 60 || s < 0 || m > 60 || m < 0 || h > 24 || h < 0) {
    inTimer = clearInterval(inTimer)

    // Empty
    emptyText.classList.add('active')
    emptyText.innerHTML = 'Please, write correct time!'
    timerStart.classList.add('error')

    // Border All
    inputsBorder.forEach(elem => {
      elem.classList.add('empty')
      elem.value = ''
    })

  } else if (tStart.innerHTML == 'Start') {
    tStart.innerHTML = 'Clear'

    // Empty
    emptyText.classList.remove('active')
    emptyText.innerHTML = ''
    timerStart.classList.remove('error')

    // Border All
    inputsBorder.forEach(elem => {
      elem.classList.remove('empty')
    })

    beauti.forEach(elem => {
      elem.style = 'animation: opacity 1.7s linear infinite;'
    })

    timerStart.classList.add('clear')
    startStopwatch()
  } else if (tStart.innerHTML == 'Clear') {
    tStart.innerHTML = 'Start'

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

      // ** Main code
      if (s != 0) {
        s--
      } else if (s == 0 && m != 0) {
        s = 59
        m--
      } else if (m == 0 && h != 0) {
        m = 59
        s = 59
        h--
      } else if (m != 0 && s == 0) {
        s = 0
        m--
        if (h != 0 && m == 0) {
          h--
        }
      } else if (s == 0 && m == 0 && h == 0) {
        clearInterval(inTimer)

        inputsBorder.forEach(elem => {
          elem.value = ''
        })

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

        timerStart.classList.remove('clear')
        timerStart.classList.remove('error')
        timerStart.innerHTML = 'Start'
      }

      // * Output
      outSec.innerHTML = s.toString().padStart(2, '0')
      outMin.innerHTML = m.toString().padStart(2, '0')
      outHour.innerHTML = h.toString().padStart(2, '0')
    }, 1000)
  }

  // * Clear Stopwatch
  function clearStopwatch() {
    clearInterval(inTimer)
    timerStart.classList.remove('clear')
    timerStart.classList.remove('error')

    s = 0
    m = 0
    h = 0

    // * Delete Beauti
    beauti.forEach(elem => {
      elem.style = 'animation: none;'
    })

    inputsBorder.forEach(elem => {
      elem.value = ''
    })

    outSec.innerHTML = '00'
    outMin.innerHTML = '00'
    outHour.innerHTML = '00'
  }
})