// audio element
let audio = document.getElementById("audio");
let audio_img = document.getElementById("audio-img");
audio.volume = 0.2;

let audio_index = 1;

sound();

function sound() {
  if (audio_index == 0) {
    audio_index++;
    audio.muted = true;
    audio_img.src = "images/audio-mute.png";
    audio.pause();
  }
  else if (audio_index == 1) {
    audio_index--;
    audio.muted = false;
    audio_img.src = "images/audio-unmute.png";
    audio.play();
  }
}