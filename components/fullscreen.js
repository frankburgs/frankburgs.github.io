var toggleBtn = document.getElementById("btnToggleFullScreen")

function toggleFullScreen() { // Fullscreen toggle
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      toggleBtn.innerHTML = contractScreenIcon;
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      toggleBtn.innerHTML = fullScreenIcon;
    }
  }