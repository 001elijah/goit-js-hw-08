import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
localStorage.setItem("videoplayer-current-time", 0);

const timePoint = localStorage.getItem("videoplayer-current-time");

function continueFromCurrentTime() {
    player.setCurrentTime(timePoint).then(function(timePoint) {
        // timePoint = the actual time that the player seeked to
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;
    
            default:
                // some other error occurred
                break;
        }
    });
};

player.on('timeupdate', function() {
    player.getCurrentTime().then(function(seconds) {
        // seconds = the current playback position

        localStorage.setItem("videoplayer-current-time", seconds);

    }).catch(function(error) {
        // an error occurred
    });
});
window.onbeforeunload = continueFromCurrentTime;

// player.getVideoTitle().then(function(title) {
//     console.log('title:', title);
// });