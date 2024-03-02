import { Playlist } from "./dependecies.mjs";

function playSong() {
    var playerDisplay = document.getElementById("playerDisplay");
    var nuevoReproductor = new Audio("src/songs/" + Playlist.getPlaying() + ".mp3");
    var elementoExistente = playerDisplay.querySelector('Audio');
    if (elementoExistente) {
        playerDisplay.replaceChild(nuevoReproductor, elementoExistente);
    } else {
        playerDisplay.appendChild(nuevoReproductor);
    }
    nuevoReproductor.play();
}

let play = document.getElementById("playButton")
play.addEventListener("click",function(){ 
    playSong()
})

let playNext = document.getElementById("nextButton")
playNext.addEventListener("click",function(){
    let cont=Playlist.getPlaying()
    cont++   
    Playlist.setPlaying(cont)
    console.log(Playlist.getPlaying()) 
    if(cont == Playlist.size()){
        Playlist.setPlaying(0)
    }
    playSong()
})
let playPrevious = document.getElementById("prevButton")
playPrevious.addEventListener("click",function(){
    let position=Playlist.getPlaying()
    position--
    if(position<0){
        position=Playlist.size()-1
    }
    Playlist.setPlaying(position)
    playSong()
})



    
