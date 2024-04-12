export default function() {

  const finishTimer = new Audio("../assets/audio/alarmEnd.mp3")

  const bgAudio = new Audio("../assets/audio/bgAudio.mp3")
  bgAudio.loop = true

  function timeEnd(){
    finishTimer.play()
  }

  function muteAll(){
    finishTimer.volume = 0;
    bgAudio.volume = 0;
  }

  function unmuteAll(){
    finishTimer.volume = 1;
    bgAudio.volume = 1;
  }

  return {
    timeEnd,
    unmuteAll,
    muteAll,
    bgAudio
  }
}