export default function() {

  const finishTimer = new Audio("https://github.com/silvapedrodev/timerEdge/raw/main/assets/audio/alarmEnd.mp3")

  const bgAudio = new Audio("https://github.com/silvapedrodev/timerEdge/raw/main/assets/audio/bgAudio.mp3")
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