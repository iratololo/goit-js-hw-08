const throttle = require('lodash.throttle');
import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const iframePlayer = new Player(iframe);

iframePlayer.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data));
}


window.addEventListener("load", hendlerCurrentTime);

function hendlerCurrentTime() {
    const savedCurrentTime = localStorage.getItem("videoplayer-current-time");
        const parsedCurrentTime = JSON.parse(savedCurrentTime) ?? {seconds:0};
    iframePlayer.setCurrentTime(parsedCurrentTime.seconds);
    // try {
    //     const savedCurrentTime = localStorage.getItem("videoplayer-current-time");
    //     const parsedCurrentTime = JSON.parse(savedCurrentTime);
    //     iframePlayer.setCurrentTime(parsedCurrentTime.seconds);
    // } catch (error) {
    //     console.log(error);
    // }
}