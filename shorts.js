const shortsVideos = document.getElementById('shortsVideos');

// pause the video and unmute it by default
// myVideo1.pause();
shortsVideos.muted = false;

const shortsVideos = document.getElementById('shortsVideos');
const button = document.getElementById('play-pause-btn');

// Hide video controls
shortsVideos.controls = false;

// Add click event listener to play/pause button
button.addEventListener('click', function() {
  if (shortsVideos.paused) {
    // If video is paused, play it
    shortsVideos.play();
    

    button.textContent = 'Pause';
  } else {
    // If video is playing, pause it
    shortsVideos.pause();
    button.textContent = 'Play';
  }
});

function myFunction() {
  var x = document.getElementById("myframe");
  x.style.backgroundColor = "red";
}