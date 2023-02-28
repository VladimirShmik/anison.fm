const buttonToggleLike = document.querySelector('.song-like');

function buttonToggle(parent){
    const buttonActive = parent.querySelector('.song-like__icon--fill');
    const buttonNotActive = parent.querySelector('.song-like__icon');
    buttonNotActive.classList.toggle("song-like__icon--hide");
    buttonActive.classList.toggle("song-like__icon--hide");
}

const allItems = document.querySelector(".song-grid");
allItems.addEventListener("click", (e) =>{
    const targetIcon = e.target.closest(".song-like__icon");
    if (targetIcon) {
        const parent = targetIcon.closest(".song-item");
        buttonToggle(parent);
    }
});

const buttonToggleStart = document.querySelector('.song-start');

function startToggle(parent){
    const startActive = parent.querySelector('.song-start__icon--stop');
    const startNotActive = parent.querySelector('.song-start__icon');
     startNotActive.classList.toggle("song-start__icon--hide");
     startActive.classList.toggle("song-start__icon--hide");
}

const allItemsStart = document.querySelector(".song-grid");
allItemsStart.addEventListener("click", (e) =>{
    const targetStart = e.target.closest(".song-start__icon");
    if (targetStart) {
        const parent = targetStart.closest(".song-item");
        startToggle(parent);
    }
});
 const inputSwitch = document.querySelector('.form-check-input');
 const bodyTheme =document.querySelector('body')
 inputSwitch.addEventListener("click" , function (){
     bodyTheme.classList.toggle('dark-theme')
 })

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