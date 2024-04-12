import {
  buttonStart,
  buttonPause,
  buttonPlay,
  buttonReturn,
  buttonSettings,
  Modal,
  buttonSoundOn,
  buttonSoundOff
} from "./elements.js"

export default function({controls, settingsModal, timer, sound}) {

   const callUpdateTimerValues = () => {
    controls.updateTimerValues(settingsModal, timer)
   }



  buttonStart.addEventListener("click", () => {
    timer.startTimer()
    controls.start()
  }),

  buttonPause.addEventListener("click", () => {
    timer.hold()
    controls.pause()
  }),

  buttonPlay.addEventListener("click", () => {
    timer.countdown()
    timer.resumeBarTimer()
    controls.play()
  })

  buttonReturn.addEventListener("click", () => {
    controls.returnTimer()
    timer.reset()
    callUpdateTimerValues()
  })

  buttonSoundOn.addEventListener("click", () => {
    buttonSoundOn.classList.add("hide")
    buttonSoundOff.classList.remove("hide")
    sound.bgAudio.pause()
    sound.muteAll()
  })

  buttonSoundOff.addEventListener("click", () => {
    buttonSoundOff.classList.add("hide")
    buttonSoundOn.classList.remove("hide")
    sound.bgAudio.play()
    sound.unmuteAll()
  })

  buttonSettings.addEventListener("click", () => {
    controls.openModal()
    controls.returnTimer()
    timer.reset()
    callUpdateTimerValues()
  })

  Modal.btnClose.addEventListener("click", () => {
    controls.close()
  })

  window.addEventListener("keydown", (event) => {
    if(event.key == "Escape"){
      controls.close()
      controls.closeAbout()
    }
  })

  Modal.checkDarkMode.addEventListener("change", () =>{
    controls.darkMode()
  })

  Modal.newMinutes.addEventListener("input", function() {
    settingsModal.updateCurrentValues();
    settingsModal.checkMins();
    callUpdateTimerValues()
  });

  Modal.btnUpMins.addEventListener("click", () => {
    settingsModal.upMins()
    callUpdateTimerValues()
  })

  Modal.btnDownMins.addEventListener("click", () => {
    settingsModal.downMins()
    callUpdateTimerValues()
  })

  Modal.newSeconds.addEventListener("input", function() {
    settingsModal.updateCurrentValues();
    settingsModal.checkSeconds();
    callUpdateTimerValues()
  });

  Modal.btnUpSec.addEventListener("click", () => {
    settingsModal.upSeconds()
    callUpdateTimerValues()
  })

  Modal.btnDownSec.addEventListener("click", () => {
    settingsModal.downSeconds()
    callUpdateTimerValues()
  })

  Modal.pickerColor.addEventListener("input", () => {
    settingsModal.colorSelector()
  })

  Modal.resetColor.addEventListener("click", () => {
    settingsModal.colorReset()
  })

  Modal.btnAbout.addEventListener("click", () => {
    controls.openAbout()
  })

  Modal.btnCloseAbout.addEventListener("click", () => {
    controls.closeAbout()
  })
}