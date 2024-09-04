const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');

const songs = [
    'DJ-RickoPillow',
    'Dj-Stay-To-Nigt',
    'Dj_Galau_Jadi_Hilang',
    'Dj-Life-My-Life'
];

let songIndex = 2;

loadSong(songs[songIndex]);

function loadSong(song) {
    title.innerText = song;
    audio.src = `https://raw.githubusercontent.com/LoliKillers/LoliKillers-Database/master/music/${song}.mp3`;
    cover.src = `https://raw.githubusercontent.com/LoliKillers/LoliKillers-Database/master/thumb/${song}.png`;
}

function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.far').classList.remove('fa-play');
    playBtn.querySelector('i.far').classList.add('fa-pause');
    audio.play();
}

function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.far').classList.add('fa-play');
    playBtn.querySelector('i.far').classList.remove('fa-pause');
    audio.pause();
}

function prevSong() {
    songIndex--;

    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

function updateProgress(e) {
    const {
        durTime,
        currTime
    } = e.srcElement;
    const progressPercent = (currTime / durTime) * 100;
    progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const durTime = audio.duration;
    audio.currentTime = (clickX / width) * durTime;
}

playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audio.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);
audio.addEventListener('ended', nextSong);
audio.addEventListener('timeupdate', DurTime);