document.addEventListener("DOMContentLoaded", () => {
  // Select the audio element
  const audio = document.querySelector("audio");
  const toggleButton = document.querySelector(".toggle");

  let initialClick = true; // Variable to track if it's the first click

  const toggleAudio = () => {
    if (initialClick) {
      audio.play();
      initialClick = false;
      document.removeEventListener("click", toggleAudio);
    } else {
      if (audio.paused) {
        audio.play();
        console.log("Playing");
      } else {
        audio.pause();
        updateButton();
        toggleButton.console.log("Not playing");
      }
    }
    updateButton();
  };

  function updateButton() {
    const icon = audio.paused
      ? `<i class="fas fa-play"></i>`
      : `<i class="fas fa-pause"></i>`;
    toggleButton.innerHTML = icon;
    toggleButton.style.backgroundColor = audio.paused ? "#1fc416" : "red";
  }

  toggleButton.addEventListener("click", toggleAudio);
  document.addEventListener("click", toggleAudio);
});
