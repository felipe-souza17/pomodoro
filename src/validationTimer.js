/* Create variables */
let nextButtonElement = document.getElementById('nextButton')
let workTimeElement = document.getElementById('workTime')
let breakTimeElement = document.getElementById('breakTime')
let sessionTimeElement = document.getElementById('sessionTime')

/* Validate Pomodoro */
const validatePomodoro = function () {
  if (validateTimer() && validateBreak() && validateSessions()) {
    console.log('Tudo Certo!')
    localStorage.setItem('workTimer', workTimeElement.value)
    localStorage.setItem('breakTimes', breakTimeElement.value)
    localStorage.setItem('sessionsTimer', sessionTimeElement.value)
    nextPage.href = 'pages/pomodoro.html'
    return true
  }
  console.log('Tudo errado!')
  return false
}

/* Validate Work Timer */
const validateTimer = function () {
  if (isNaN(workTimeElement.value)) {
    workTimeElement.style.border = '3px solid #E35454'
    return false
  }
  if (workTimeElement.value < 5 || workTimeElement.value > 60) {
    workTimeElement.style.border = '3px solid #E35454'
    return false
  }
  workTimeElement.style.border = '3px solid #219653'
  return true
}

/* Validate Break Times */
const validateBreak = function () {
  if (isNaN(breakTimeElement.value)) {
    breakTimeElement.style.border = '3px solid #E35454'
    return false
  }
  if (breakTimeElement.value < 5 || breakTimeElement.value > 30) {
    breakTimeElement.style.border = '3px solid #E35454'
    return false
  }
  breakTimeElement.style.border = '3px solid #219653'
  return true
}

/* Validate Sessions */
const validateSessions = function () {
  if (isNaN(sessionTimeElement.value)) {
    sessionTimeElement.style.border = '3px solid #E35454'
    return false
  }
  if (sessionTimeElement.value < 1 || sessionTimeElement.value > 5) {
    sessionTimeElement.style.border = '3px solid #E35454'
    return false
  }
  sessionTimeElement.style.border = '3px solid #219653'
  return true
}
