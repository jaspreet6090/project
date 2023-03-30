
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

function setupVideos() {
  for (const video of document.querySelectorAll('video')) {
    video.controls = false
    video.addEventListener('mouseover', () => { video.controls = 'controls' })
    video.addEventListener('mouseout', () => { video.controls = false })
  }
}
window.addEventListener('load', setupVideos, false)






const myVideo1 = document.getElementById('video1');

// pause the video and unmute it by default
myVideo1.pause();
myVideo1.muted = false;

// when the user hovers over the video, play it without sound
myVideo1.addEventListener('mouseover', () => {
  myVideo1.play();
  myVideo1.muted = false;
});

// when the user stops hovering over the video, pause it and mute it
myVideo1.addEventListener('mouseout', () => {
  myVideo1.pause();
  myVideo1.currentTime = 0;
  // myVideo1.muted = true;
});



const myVideo2 = document.getElementById('video2');

// pause the video and unmute it by default
myVideo2.pause();
myVideo2.muted = false;

// when the user hovers over the video, play it without sound
myVideo2.addEventListener('mouseover', () => {
  myVideo2.play();
  myVideo2.muted = false;
});

// when the user stops hovering over the video, pause it and unmute it
myVideo2.addEventListener('mouseout', () => {
  myVideo2.pause();
  myVideo2.currentTime = 0;
  myVideo2.muted = false;
});
const myVideo3 = document.getElementById('video3');

// pause the video and unmute it by default
myVideo3.pause();
myVideo3.muted = false;

// when the user hovers over the video, play it without sound
myVideo3.addEventListener('mouseover', () => {
  myVideo3.play();
  myVideo3.muted = false;
});

// when the user stops hovering over the video, pause it and unmute it
myVideo3.addEventListener('mouseout', () => {
  myVideo3.pause();
  myVideo3.currentTime = 0;
  myVideo3.muted = false;
});


const myVideo4 = document.getElementById('video4');

// pause the video and unmute it by default
myVideo4.pause();
myVideo4.muted = false;

// when the user hovers over the video, play it without sound
myVideo4.addEventListener('mouseover', () => {
  myVideo4.play();
  myVideo4.muted = false;
});

// when the user stops hovering over the video, pause it and unmute it
myVideo4.addEventListener('mouseout', () => {
  myVideo4.pause();
  myVideo4.currentTime = 0;
  myVideo4.muted = false;
});
const myVideo5 = document.getElementById('video5');

// pause the video and unmute it by default
myVideo5.pause();
myVideo5.muted = false;

// when the user hovers over the video, play it without sound
myVideo5.addEventListener('mouseover', () => {
  myVideo5.play();
  myVideo5.muted = false;
});

// when the user stops hovering over the video, pause it and unmute it
myVideo5.addEventListener('mouseout', () => {
  myVideo5.pause();
  myVideo5.currentTime = 0;
  myVideo5.muted = false;
});
