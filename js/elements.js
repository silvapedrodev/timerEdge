const buttonStart = document.querySelector(".start")
const buttonPlay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")
const buttonReturn = document.querySelector(".return")
const buttonSoundOn = document.querySelector(".sound-on")
const buttonSoundOff = document.querySelector(".sound-off")
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
const buttonSettings = document.querySelector(".preferences")

const Modal = {

  card: document.querySelector(".modal-wrapper"),
  btnClose: document.querySelector(".close"),

  checkDarkMode: document.querySelector(".darkMode"),

  newMinutes: document.querySelector("#newMinutes"),
  btnUpMins: document.querySelector("#upMins"),
  btnDownMins: document.querySelector("#downMins"),

  newSeconds: document.querySelector("#newSeconds"),
  btnUpSec: document.querySelector("#upSec"),
  btnDownSec: document.querySelector("#downSec"),

  pickerColor : document.querySelector(".pickerColor"),
  resetColor: document.querySelector("#resetColor"),

  cardOne: document.querySelector(".modal:nth-child(1)"),
  btnCloseAbout: document.querySelector(".aboutPopUp .close"),
  btnAbout: document.querySelector(".btnAbout"),
  aboutModal: document.querySelector(".aboutPopUp")
}

const CirculeProgrss = {
  circuleProgressBar: document.querySelectorAll(".semicircles"),
  
  start: 0,
  circuleMinutes: 25,
  circuleSeconds: 0,
  futureTime: 0,
  remainingTime: 0
}

export {
  buttonStart,
  buttonPlay,
  buttonPause,
  buttonReturn,
  buttonSettings,
  Modal,
  buttonSoundOn,
  buttonSoundOff,
  minutesDisplay,
  secondsDisplay,
  CirculeProgrss
}