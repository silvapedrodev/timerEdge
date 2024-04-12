import Controls from "./controls.js"
import Events from "./events.js"
import SettingsModal from "./modalCard.js"
import Sounds from "./sounds.js"
import Timer from "./timer.js"

import {
  buttonStart,
  buttonPlay,
  buttonPause,
  buttonReturn,
  minutesDisplay,
  Modal,
  CirculeProgrss,
  secondsDisplay
} from "./elements.js"

const settingsModal = SettingsModal(Modal)
const sound = Sounds()

const controls = Controls({
  buttonStart,
  buttonPlay,
  buttonPause,
  Modal,
  buttonReturn,
})

const timer = Timer({
  Modal,
  CirculeProgrss,
  minutesDisplay,
  secondsDisplay,
  sound,
  returnControls: controls.returnTimer
})

Events({controls, settingsModal, timer, sound})