import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
  
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', `${data.seconds}`);
}

player.on('timeupdate', throttle(onPlay, 1000));

if (localStorage.getItem('videoplayer-current-time') === null) {
  player.setCurrentTime(`${localStorage.setItem('videoplayer-current-time', '0')}`);
} else {
  player.setCurrentTime(`${localStorage.getItem('videoplayer-current-time')}`);
}




