
import Playlist from "./playlist.js"
import Song from "./Song.js"
import User from "./User.js"
const me = new User()
me.playlist.push(new Playlist('night', '#0001'))
const songs_data = [
    new Song('Save your tears', 'The Weeknd',new Audio('./songs/the-weeknd-save-your-tears-official-audio.mp3')),
    new Song('Ninjas', 'Rey Pila', new Audio('./songs/rey-pila-ninjas-official-audio.mp3')),
    new Song('Moth To A Flame', 'Swedish House Mafia, The Weeknd', new Audio('./songs/[YT2mp3.info] - Swedish House Mafia, The Weeknd - Moth To A Flame (Lyrics) (320kbps).mp3')),
    new Song('Because You Move Me', 'Tinlicker Helsloot',new Audio('./songs/tinlicker-helsloot-because-you-move-me.mp3')),
    new Song('Blinding Lights','The Weeknd',new Audio('./songs/the-weeknd-blinding-lights-official-audio.mp3')),
]
const songs_data2 = [
    new Song('After Dark','Mrkitty',new Audio('./songs/mrkitty-after-dark.mp3')),
    new Song('Last Thought','Sonny Fedora',new Audio('./songs/sonny-fodera-vintage-culture-last-thought-feat-mkla.mp3'))
]
me.playlist.push(new Playlist('prueba', '#0002'))
me.playlist[0].Songs = songs_data
me.playlist[1].Songs = songs_data2
const $ = selector => document.querySelector(selector)
let dash = $("#dash-content")
let menu_playlist = $('#playlist_home')
menu_playlist.addEventListener('click', renderList)


function renderList() {
    let listOfPlaylist = ""
    for (let item of me.playlist) {
        listOfPlaylist += `
            <div class="playlist-card" id="${item.name}">
                <div class="playlist-banner">
                </div>
                <div class="playlist-name">
                    <h3>${item.name}</h3>
                </div>
                <div class="play" id="playbtn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" fill="black" class="bi bi-play" viewBox="0 0 16 16">
                        <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
                    </svg>
                </div>
            </div>`
    }
    dash.innerHTML = `
    <div class="head-list">
        <div class="title">
            <h1>Playlist<p>🎧</p></h1>
        </div>
        <div class="playlist-list">
            ${listOfPlaylist}
        </div>
    </div>`
    let playlistBtn = document.querySelectorAll('.playlist-card')
    playlistBtn.forEach((a) => {
    a.addEventListener('click',renderMusicList)})
}

function renderMusicList(e) {
    console.log(e.target.id)
    let listOfMusic = ``
    var selectList
    for (let item of me.playlist) {
        if (item.name === e.target.id) {
            selectList = me.playlist.indexOf(item)
        }
    }
    console.log(selectList)
    const minutesDuretion = (duracion) => {
        let min = duracion / 60
        return min.toFixed(2)
    }
    for (let i of me.playlist[selectList].Songs) {
        console.log(i.audio.duration)
        listOfMusic += `
        <div class="song-card">
            <div class="song-banner"></div>
            <div class="song-name"><p>${i.name}</p></div>
            <div class="song-artist"><p>${i.artist}</p></div>
            <div class="song-duration">${minutesDuretion(i.audio.duration)}</div>
            <div class="play" id="playbtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" fill="black" class="bi bi-play" viewBox="0 0 16 16">
                    <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
                </svg>
            </div>
        </div>

        `
    }

dash.innerHTML = `
    <div class="music-list">
        <div class="head-playlist">
            <div class="back"></div>
            <div class="name"><p>magic</p></div>
        </div>
        <div class="songs-list">
            ${listOfMusic}
        </div>
    </div>

`
}


























/*
new Song(new Audio('./songs/ali-bakgor-in-a-dream.mp3'),
new Song(new Audio('./songs/tom-enzy-lissa-ice-cold.mp3'),
new Song(new Audio('./songs/daft-punk-instant-crush-lyrics-ft-julian-casablancas.mp3'),
new Song(new Audio('./songs/wateva-get-u-off-my-mind-feat-karl-killing-official-music-video.mp3'),
new Song(new Audio('./songs/midnight-city-m83-audio.mp3'),
new Song(new Audio('./songs/children-edit-mix.mp3'),
new Song(new Audio('./songs/regard-raye-secrets-lyric-video.mp3'),
new Song(new Audio('./songs/molcat-doma-molchat-doma-sudno-sudno.mp3'),
new Song(new Audio('./songs/dzp-jilax-formula.mp3'),
new Song(new Audio('./songs/rauw-alejandro-todo-de-ti.mp3'),
new Song(new Audio('./songs/titi-me-pregunto.mp3'),
new Song(new Audio('./songs/bad-bunny-efecto-la-letra-lyrics.mp3'),
new Song(new Audio('./songs/quevedo-bzrp-music-sessions-52.mp3'),
new Song(new Audio('./songs/bad-bunny-x-jhay-cortez-dakiti-letralyrics.mp3'),
new Song(new Audio('./songs/jhay-cortez-j-balvin-bad-bunny-no-me-conoce-remix-letralyrics.mp3'),
new Song(new Audio('./songs/bad-bunny-yonaguni.mp3'),
new Song(new Audio('./songs/sech-dalex-quizas-letra-ft-wisin-zion-justin-quiles-lenny-tavarez-feid-dimelo-flow.mp3'),
new Song(new Audio('./songs/rauw-alejandrochencho-corleone-ft-kevvo-bryant-myerslyanno-dalex-el-efecto-rmx-video-lyric.mp3'),
new Song(new Audio('./songs/nicky-jam-bzrp-music-sessions-41.mp3'),
new Song(new Audio('./songs/bad-bunny-me-porto-bonito-letralyrics.mp3'),
new Song(new Audio('./songs/bad-bunny-moscow-mule-la-letra-lyrics.mp3'),
new Song(new Audio('./songs/bad-bunny-despues-de-la-playa-letralyrics-un-verano-sin-ti.mp3'),
new Song(new Audio('./songs/bad-bunny-un-ratito-letralyrics-un-verano-sin-ti.mp3')
*/
