const buttonToggleLike = document.querySelector('.song-like');
const buttonNotActive = document.querySelector('.song-like__icon');
const buttonActive = document.querySelector('.song-like__icon--fill');
function buttonToggle(){
    buttonNotActive.classList.toggle("song-like__icon--hide");
    buttonActive.classList.toggle("song-like__icon--fill");
};

buttonToggleLike.addEventListener("click", buttonToggle);

const hoverContainer = document.querySelector('.player-wrapper');
const playerDropdown = document.querySelector('.song-dropdown');
function hoverToggle(){
    playerDropdown.classList.toggle('song-dropdown--show');
};
hoverContainer.addEventListener("click", hoverToggle);

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