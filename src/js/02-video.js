import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const setTimeToLS = function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
    console.log(data.seconds);
};

player.on('timeupdate', throttle(setTimeToLS, 1000));
const currentTime = localStorage.getItem('videoplayer-current-time');
console.log(currentTime);

player.setCurrentTime(currentTime).then(function(seconds) {
}).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});
