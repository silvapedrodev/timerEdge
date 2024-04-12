
export default function Controls({
  buttonStart,
  buttonPause,
  buttonPlay,
  Modal,
  buttonReturn
}) {
  
  function start() {
    buttonStart.classList.add("hide")
    buttonPause.classList.remove("hide")
    buttonReturn.classList.remove("hide")
  }
  
  function pause() {
    buttonPlay.classList.remove("hide")
    buttonPause.classList.add("hide")
  }
  
  function play() {
    buttonPlay.classList.add("hide")
    buttonPause.classList.remove("hide")
  }
  
  function returnTimer() {
    buttonPause.classList.add("hide")
    buttonReturn.classList.add("hide")
    buttonPlay.classList.add("hide")
    buttonStart.classList.remove("hide")
  }

  function openModal() {
    Modal.card.classList.add("open")
  }

  function close() {
    Modal.card.classList.remove("open")
  }

  function updateTimerValues(settingsModal, timer) {
    const newMinutes = settingsModal.getMinuts();
    const newSeconds = settingsModal.getSecs();
    timer.updateDisplay(newMinutes, newSeconds);
    timer.updateBarProgress(newMinutes, newSeconds)
    timer.update(newMinutes, newSeconds)
  }

  function darkMode() {
    const $html = document.querySelector("html")
    $html.classList.toggle("darkMode")
  }

  function openAbout() {
    Modal.aboutModal.classList.toggle("show")
    Modal.cardOne.classList.toggle("hide")
  }

  function closeAbout() {
    Modal.aboutModal.classList.remove("show")
    Modal.cardOne.classList.remove("hide")
  }


  return {
    start,
    pause,
    play,
    openModal,
    close,
    returnTimer,
    updateTimerValues,
    darkMode,
    openAbout,
    closeAbout
  }
}