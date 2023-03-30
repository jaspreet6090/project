
var currentVideo = null;

function playVideo(id) {
  var video = document.getElementById(id);
  if (currentVideo != null && currentVideo != video) {
    currentVideo.pause();
  }
  video.play();
  currentVideo = video;
}

function pauseVideo(id) {
  var video = document.getElementById(id);
  video.pause();
}
