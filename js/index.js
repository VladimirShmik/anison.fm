const buttonToggleLike = document.querySelector('.song-like');
const buttonNotActive = document.querySelector('.song-like__icon');
const buttonActive = document.querySelector('.song-like__icon--fill');
function buttonToggle(){
    buttonNotActive.classList.toggle('song-like__icon--hide');
};
buttonToggleLike.addEventListener("click", buttonToggle);
const buttonToggleStart = document.querySelector('.song-start');
const buttonStart = document.querySelector('.song-start__icon');
const buttonStop = document.querySelector('.song-like__icon--stop');
function buttonToggle(){
    buttonStart.classList.toggle('song-like__icon--hide');
};
buttonToggleLike.addEventListener("click", buttonToggle);
$(".simple-select").select2({
    Search: false,
    templateResult: formatState,
    templateSelection: formatState
});

function formatState (opt) {
    if (!opt.id) {
        return opt.text.toUpperCase();
    }

    var optimage = $(opt.element).attr('data-image');
    if(!optimage){
        return opt.text.toUpperCase();
    } else {
        var $opt = $(
            '<span class="select-item"><img src="' + optimage + '" width="30px" /> ' + opt.text.toUpperCase() + '</span>'
        );
        return $opt;
    }
};