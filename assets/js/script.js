document.addEventListener("DOMContentLoaded", () => {
  // Select the audio element
  const audio = document.querySelector("audio");
  const stopPlaying = document.querySelector("#stop");
  const startPlaying = document.querySelector("#start");

  const playAudio = () => {
    audio.play();
    // Remove the event listener to prevent multiple plays
    document.removeEventListener("click", playAudio);
  };

  const stopAudio = () => {
    audio.pause();
    audio.currentTime = 0;
  };

  document.addEventListener("click", playAudio);
  stopPlaying.addEventListener("click", stopAudio);
  startPlaying.addEventListener("click", playAudio);
});
