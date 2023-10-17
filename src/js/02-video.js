const throttle = require('lodash.throttle');
import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const iframePlayer = new Player(iframe);
const LOCAL_KEY = "videoplayer-current-time";

iframePlayer.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
}


window.addEventListener("load", hendlerCurrentTime);

function hendlerCurrentTime() {
    try {
        const savedCurrentTime = localStorage.getItem(LOCAL_KEY);
        const parsedCurrentTime = JSON.parse(savedCurrentTime);
        iframePlayer.setCurrentTime(parsedCurrentTime.seconds);
    } catch ({message}) {
        console.log(message);
    }
}