import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);

const updateTime = () => {
  if (!localStorage.getItem('videoplayer-current-time')) {
    player.getCurrentTime().then(function (time) {
      localStorage.setItem('videoplayer-current-time', time);
    });
  } else {
    player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
  }
};

player.on('timeupdate', throttle(updateTime, 1000));

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

//console.log(localStorage.getItem('videoplayer-current-time'));
