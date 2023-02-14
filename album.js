let content = document.querySelector(`.content`);
let playlist = document.querySelector(`.playlist`);
let search = new URLSearchParams(window.location.search);



let a = search.get(`i`);
let trackId = 56;
let idishnic = 4;
let zero = 0;



content.innerHTML +=`
<div class="card">
            <img src="assets/${albums[a].img}.jpg">
        </div>
        <div class="text2">
          <h2>${albums[a].title}</h2>
          <p>${albums[a].description}</p>
          <p><i>Альбом выпущен в ${albums[a].year} году</i></p>
        </div>
`;
for (let i = 0;i<albums[a].tracks.length;i++){
    playlist.innerHTML += `
    <div class="elem">
    <img class="btn1" src="assets/98690.png">
    <h3>${albums[a].tracks[i]}</h3>
    <audio class="audio" src="music/${albums[a].src[i]}.mp3"></audio>
    <div class="progress">
      <div class="progress-bar" role="progressbar"  aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div class="elemp"><p class="time">${albums[a].time[i]}</p></div>
  </div>    
`;
}
let elems = document.querySelectorAll(`.elem`);
let playButtons = document.querySelectorAll(`.btn1`);
let mode = 'stop';
let audio = document.querySelectorAll(`.audio`);
let time = document.querySelectorAll(`.time`);
let bars = document.querySelectorAll(`.progress-bar`);

function updateProgress() {
  let audio = document.querySelectorAll(`.audio`);
  let time1 = Math.floor(audio[idishnic].currentTime/60);
  if (audio[idishnic].currentTime - (time1 * 60)< 10) {
    zero = `0`;
  }
  else{
    zero = ``;
  }
  time[idishnic].innerHTML = `0${time1}:${zero}${Math.floor(audio[idishnic].currentTime/1) - (time1 * 60)}/${albums[a].time[idishnic]}`;
  bars[idishnic].style.width = `${(audio[idishnic].currentTime/audio[idishnic].duration) * 300}px`;
  if (mode == `play`) {
      requestAnimationFrame(updateProgress);
  } 
}


for (let i = 0;i<playButtons.length;i++) {
    
    elems[i].addEventListener(`click`, function(){
        if (mode == 'stop') {
        mode = 'play';
        playButtons[i].src = "assets/images.png";
        audio[i].play();
        idishnic = i;
        updateProgress();
        }
        else{
          if (trackId == i) {
            mode = 'stop';
            audio[i].pause();
            playButtons[i].src = "assets/98690.png";
          }
          else{
            audio[trackId].pause();
            playButtons[trackId].src = "assets/98690.png";
            audio[i].play();
            playButtons[i].src = "assets/images.png";
            idishnic = i;
            updateProgress();
          }
        }
        trackId = i;
    }) ;
    
}
