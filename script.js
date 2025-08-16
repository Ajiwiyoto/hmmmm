document.getElementById("play-button").addEventListener("click", function () {
  var audio = document.getElementById("audio");
  if (audio.paused) {
    audio.play();
    document.getElementById("play-button").innerHTML = "Jeda";
  } else {
    audio.pause();
    document.getElementById("play-button").innerHTML = "Putar";
  }
});
