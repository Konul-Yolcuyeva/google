const title = document.getElementById('title')
const artist = document.getElementById('artist')
//query selector metodu hem id, hem class a gore sece bilirik.
//  
const music = document.querySelector('audio')
// DOM vasitesi elementleri secek
//

const progressContainer = document.getElementById('progress-container')
const progress = document.getElementById('progress')
const currentTimeEl = document.getElementById('current-time')
const durationEl = document.getElementById('duration')

const prevBtn = document.getElementById('prev')
const playBtn = document.getElementById('play')
const nextBtn = document.getElementById('next')

//OBJECT

// const data = [{
//     seriyaNomresi: 123454,
//     surname: 'Yolcuyeva',
//     name: 'Konul',
//     isMarried: true, 
//     age: 27
// }  {
//     seriyaNomresi: 44444,
//     surname: 'Aliyeva',
//     name: 'Seadet',
//     isMarried: false, 
//     age: 17 
// } ]


const songs = [
    {
        name: 'addic',
        displayName: 'Addic',
        artist: 'Adele'
    },
    {
        name: 'can',
        displayName: 'Can',
        artist: 'Cingiz'
    },
    {
        name: 'deli',
        displayName: 'Deli',
        artist: 'Elcin'
    },
    {
        name: 'gun',
        displayName: 'Gun',
        artist: 'Yalcin'
    },
]


let isPlaying = false


function playSong() {
    isPlaying = true
    playBtn.classList.replace('fa-play', 'fa-pause')
    music.play()

}

function pauseSong() {
    isPlaying = false
    playBtn.classList.replace('fa-pause', 'fa-play')
    music.pause()
}

//Arasdirma    
/*
klikleme zamani bir callback ise dusur:


function usaqlariSalamla (name) {
    document.write("salam"+" "+name)
}




 */
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()))


//FAKE database yuklenmesi
// PARAMETRLI FUNKSIYALAR
// moterize icerisinde yazilana nisbi ad deyirler


//asagidaki funksiyanin yaradilma meshelesi

function loadSong(song) {
    title.textContent = song.displayName
    artist.textContent = song.artist


    music.src = music / S().mp3
}