

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  CirculeProgrss,
  sound,
  returnControls
}) {

  let timerTimeOut
  let min = Number(minutesDisplay.textContent)
  let sec = Number(secondsDisplay.textContent)
  let setTime = 0
  let timerLoop
  let resume = 0;
  let ElapsedTimePause = 0;
  let remainingTimer

  resetBar()


  function updateBarProgress(newMinutes, newSeconds){
    CirculeProgrss.circuleMinutes = newMinutes 
    CirculeProgrss.circuleSeconds = newSeconds 
  }

  function startProgressBar(){
    const currentMinutes = Number(CirculeProgrss.circuleMinutes * 60000)
    const currentSeconds = Number(CirculeProgrss.circuleSeconds * 1000)
    setTime = currentMinutes + currentSeconds
    CirculeProgrss.start = Date.now()
    CirculeProgrss.futureTime = CirculeProgrss.start + setTime
  
    timerLoop = setInterval(progressTimer)
  }

  function resetBar(){
    minutesDisplay.style.color = "var(--timerColor)"
    secondsDisplay.style.color = "var(--timerColor)"

    CirculeProgrss.circuleProgressBar[2].style.display = 'none'
    CirculeProgrss.circuleProgressBar[0].style.transform = 'rotate(180deg)'
    CirculeProgrss.circuleProgressBar[1].style.transform = `rotate(360deg)`

    CirculeProgrss.circuleProgressBar[0].style.backgroundColor = 'var(--bg-circule)'
    CirculeProgrss.circuleProgressBar[1].style.backgroundColor = 'var(--bg-circule)'
  }

  function reset(){
    updateDisplay(min, 0)
    clearTimeout(timerTimeOut)
    clearInterval(timerLoop)
    resetBar()
  } 

  function updateDisplay(newMinuts, seconds) {
    newMinuts = newMinuts === undefined ? minutes : newMinuts
    seconds = seconds === undefined ? 0 : seconds

    minutesDisplay.textContent = String(newMinuts).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function countdown() {
    timerTimeOut = setTimeout(() => {
      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)
      let Finished = minutes <= 0 && seconds <= 1
       
      if(Finished){
        returnControls()
        updateDisplay(min, sec)
        clearInterval(timerLoop)
        sound.timeEnd()
        resetBar()
      return
      }

      if(seconds <= 0){
        seconds = 60
        --minutes
      }

      updateDisplay(minutes, String(seconds - 1))
    
      countdown()
    }, 1000)
  }
  
  function hold() {
    clearTimeout(timerTimeOut)
    pauseBarTimer()
  }

  function pauseBarTimer(){
    clearInterval(timerLoop);
    resume = Date.now();
  }

  function resumeBarTimer(){
    const agora = Date.now();
    ElapsedTimePause = agora - resume;
    CirculeProgrss.futureTime += ElapsedTimePause;
    timerLoop = setInterval(progressTimer);
  }

  function update(newMinutes, newSeconds){
    min = newMinutes
    sec = newSeconds
  }

  function progressTimer() {
    const currentTime = Date.now()
    remainingTimer = CirculeProgrss.futureTime - currentTime
    const angle = (remainingTimer / setTime) * 360

    if(angle > 180){
      CirculeProgrss.circuleProgressBar[2].style.display = 'none'
      CirculeProgrss.circuleProgressBar[0].style.transform = 'rotate(180deg)'
      CirculeProgrss.circuleProgressBar[1].style.transform = `rotate(${angle}deg)`
    } else {
      CirculeProgrss.circuleProgressBar[2].style.display = 'block'
      CirculeProgrss.circuleProgressBar[0].style.transform = `rotate(${angle}deg)`
      CirculeProgrss.circuleProgressBar[1].style.transform = `rotate(${angle}deg)`
    }

    if(remainingTimer <= 4000){
      CirculeProgrss.circuleProgressBar[0].style.backgroundColor = 'var(--tt-regressive)'
      CirculeProgrss.circuleProgressBar[1].style.backgroundColor = 'var(--tt-regressive)'
      secondsDisplay.style.color = "var(--tt-regressive)"
      minutesDisplay.style.color = "var(--tt-regressive)"
    }

    if(remainingTimer <= 0){
      clearInterval(timerLoop)
    }

  }

  function startTimer() {
    startProgressBar()
    countdown()
  }

  return {
    countdown,
    reset,
    updateDisplay,
    hold,
    progressTimer,
    startTimer,
    updateBarProgress,
    resumeBarTimer,
    update
  }
}