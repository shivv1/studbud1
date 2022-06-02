// Attempt 1

// const music = document.querySelector("audio");
// const play = document.querySelector("play");

// play.addEventListener('click', () => {
//     music.play();
//     play.classList.replace("fa-play", "fa-pause");
// });

// Attempt 2

// var c = 0;
// var songs = ["/music/moon.mp3", "/music/bluemoon.mp3", "/music/lovely.mp3"];
// var a = document.getElementById("au");
// a.addEventListener('ended', function(){
//   document.getElementById("au").src=songs[c];
//   a.load();
//   console.log(c);
//   c++;
//   if(c>=songs.length){
//       c=0;
//   }
// });

// Attempt 3

// const playPause = document.querySelector(".play-pause");
// const back = document.querySelector(".back");
// const next = document.querySelector(".next");
// const songName = document.querySelector(".song-name");
// const audio = document.querySelector(".audio");
// const cover = document.querySelector(".cover");

// let playImg = "./public/images/play.png";
// let pauseImg = "/public/images/pause.png";

// playPause.src = playImg;
// let isPlaying = true;

// // Music by Eric Godlow Beats on Youtube (Free to use for non-commercial use) https://www.youtube.com/c/EricGodlowBeats
// const trackList = [
//     {
//         name: "Moon",
//         source: "/public/music/moon.mp3",
//         cover: "/public/images/moon.png"
//     },
//     {
//         name: "Lovely",
//         source: "/public/music/lovely.mp3",
//         cover: "/public/images/lovely.png"
//     },
//     {
//         name: "Blue Moon",
//         source: "/public/music/bluemoon.mp3",
//         cover: "/public/images/bluemoon.png"
//     }
// ];

// let songIndex = 0;
// loadMusic(songList[songIndex]);

// function loadMusic() {
//     cover.src = trackList[songIndex].cover;
//     songName.src = trackList[songIndex].name;
//     audio.src = trackList[songIndex].source;
// }

// function playSong() {
//     playPause.src = pauseImg;
//     audio.play();
// }

// function pauseSong() {
//     playPause.src = playImg;
//     audio.pause();
// }

// function nextSong() {
//     songIndex++;
//     if (songIndex > trackList.length - 1) {
//         songIndex = 0;
//     }
//     loadMusic(trackList[songIndex]);
//     playSong();
// }

// function lastSong() {
//     songIndex--;
//     if (songIndex < 0) {
//         songIndex = trackList.length - 1;
//     }
//     loadMusic(trackList[songIndex]);
//     playSong();
// }

// function playingSong() {
//     isPlaying = !isPlaying;
//     isPlaying ? pauseSong() : playSong();
// }

// playPause.addEventListener("click", playingSong);
// back.addEventListener("click", backPlay);
// next.addEventListener("click", nextPlay);

