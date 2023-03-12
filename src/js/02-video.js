const throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);
// currentTimePlayer = 0;

function onPlay() {
  console.log('played the video!');

  player.getCurrentTime().then(function (time) {
    console.log('videoplayer-current-time:', time);
    localStorage.setItem('videoplayer-current-time', time);
    localStorage.getItem('videoplayer-current-time');
  });
  setTimeout(onPlay, 1000);
}

player.on('play', onPlay);

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
