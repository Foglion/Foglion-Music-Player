const audio = document.getElementById('audio');
const playBtn = document.getElementById('play-btn');

// 播放/暂停
function togglePlay() {
    if (audio.paused) {
        audio.play();
        playBtn.classList.replace('fa-play', 'fa-pause');
    } else {
        audio.pause();
        playBtn.classList.replace('fa-pause', 'fa-play');
    }
}

// 调整音量
function setVolume(value) {
    audio.volume = value;
}
