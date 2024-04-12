export default function SettingsModal(Modal) {
  let currentMins = Number(Modal.newMinutes.value)
  let currentSecs = Number(Modal.newSeconds.value)
  
  const minValue = 0
  const maxValue = 59
  const maxMins = 99


  function formatValue(value) {
    return value.toString().padStart(2, "0");
  }

  function checkMins() {
    if(currentMins >= 100){
      Modal.newMinutes.value = formatValue(maxMins)
      currentMins = maxMins
    } else if (currentMins <= 0){
      Modal.newMinutes.value = formatValue(minValue)
      currentSecs = minValue
    } else {
      Modal.newMinutes.value = formatValue(currentMins)
    }
  }

  function checkSeconds() {
    if(currentSecs >= 60){
      Modal.newSeconds.value = formatValue(maxValue)
      currentSecs = maxValue
    } else if (currentSecs <= 0){
      Modal.newSeconds.value = formatValue(minValue)
      currentSecs = minValue
    } else {
      Modal.newSeconds.value = formatValue(currentSecs)
    }
  }

  function upMins() {
    if(currentMins < 99){
      currentMins++
      Modal.newMinutes.value = formatValue(currentMins)
    }
  }

  function downMins() {
    if(currentMins > 0){
      currentMins--
      Modal.newMinutes.value = formatValue(currentMins)
    }
  }

  function upSeconds() {
    if(currentSecs < 59){
      currentSecs++
      Modal.newSeconds.value = formatValue(currentSecs)
    }
  }

  function downSeconds() {
    if(currentSecs > 0){
      currentSecs--
      Modal.newSeconds.value = formatValue(currentSecs)
    }
  }

  function updateCurrentValues() {
    currentMins = Number(Modal.newMinutes.value);
    currentSecs = Number(Modal.newSeconds.value);
  }

  function getMinuts() {
    let newMinutes = Modal.newMinutes.value
    return newMinutes
  }

  function getSecs() {
    let seconds = Modal.newSeconds.value
    return seconds
  }

  function colorSelector() {
    const colorValue = Modal.pickerColor.value

    document.documentElement.style.setProperty("--baseColor", colorValue);
  }

  function colorReset() {
    const resetVelue = 11
    Modal.pickerColor.value = resetVelue
    document.documentElement.style.setProperty("--baseColor", resetVelue);
  }


  return {
    upMins,
    downMins,
    upSeconds,
    downSeconds,
    checkMins,
    checkSeconds,
    updateCurrentValues,
    getMinuts,
    getSecs,
    colorSelector,
    colorReset
  }
}