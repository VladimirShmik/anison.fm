const buttonToggleLike = document.querySelector('.song-like');
const buttonNotActive = document.querySelector('.song-like__icon');
const buttonActive = document.querySelector('.song-like__icon--fill');
function buttonToggle(){
    buttonNotActive.classList.toggle('song-like__icon--hide');
};
buttonToggleLike.addEventListener("click", buttonToggle);