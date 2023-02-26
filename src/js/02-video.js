import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";


function writeCurrentTime(time) {
    localStorage.setItem(LOCALSTORAGE_KEY, time);
};


player.on('timeupdate', function() {
    player.getCurrentTime().then(function(seconds) {
        // seconds = the current playback position
        writeCurrentTime(seconds);
    }).catch(function(error) {
        // an error occurred
    });
});

window.addEventListener('load', player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY) || 0).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;
    
        default:
            // some other error occurred
            break;
    }
}));