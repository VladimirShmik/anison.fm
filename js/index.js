function buttonToggle(parent) {
    const buttonActive = parent.querySelector('.song-like__icon--fill');
    const buttonNotActive = parent.querySelector('.song-like__icon');
    buttonNotActive.classList.toggle("song-like__icon--hide");
    buttonActive.classList.toggle("song-like__icon--hide");
}

const allItems = document.querySelector("body");
if (document.querySelector('body')) {
    allItems.addEventListener("click", (e) => {

        const targetIcon = e.target.closest(".song-like__icon");
        if (targetIcon) {
            const parent = targetIcon.closest(".song-item");
            buttonToggle(parent);
        }

    });
}
;

function startToggle(parent) {
    const startActive = parent.querySelector('.song-start__icon');
    const startNotActive = parent.querySelector('.song-start__icon--stop');
    startNotActive.classList.toggle("song-start__icon--hide");
    startActive.classList.toggle("song-start__icon--hide");
}

const allItemsStart = document.querySelector("body");
if (document.querySelector('body')) {
    allItemsStart.addEventListener("click", (e) => {
        const targetStart = e.target.closest(".song-start__icon");
        if (targetStart) {
            const parent = targetStart.closest(".song-item");
            startToggle(parent);
        }
    });
};
function voteToggle(parent) {
    const voteActive = parent.querySelector('.song-vote__icon');
    const voteNotActive = parent.querySelector('.song-vote__icon--minus');
    voteActive.classList.toggle("song-vote__icon--hide");
    voteNotActive.classList.toggle("song-vote__icon--hide");
}

const allItemsVote = document.querySelector("body");
if (document.querySelector('body')) {
    allItemsVote.addEventListener("click", (e) => {
        const targetStart = e.target.closest(".song-vote__icon");
        if (targetStart) {
            const parent = targetStart.closest(".song-item");
            voteToggle(parent);
        }
    });
};
let modalBtn = document.querySelector('.modal-live-bg--show');
let modalIcon = document.querySelector('.modal-live__icon--active');
let modalIconActive = document.querySelector('.modal-live__icon--hidden');
if (document.querySelector('body')) {
    modalBtn.addEventListener('click', function () {
        modalIcon.classList.toggle('modal-live__icon--hide');
        modalIconActive.classList.toggle('modal-live__icon--hide');
    });
};
const inputSwitch = document.querySelector('.form-check-input');
const bodyTheme = document.querySelector('body')
inputSwitch.addEventListener("click", function () {
    bodyTheme.classList.toggle('dark-theme')
});
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.mobile-nav');
menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
});
const form = document.querySelector(".login-form");
if (form) {
    function togglePasswordType(input, button) {
        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
        input.setAttribute('type', type);
        button.classList.toggle('input-group-icon--active');
    }

    form.addEventListener('click', function ({target}) {
        if (target.classList.contains('form-password-btn')) {
            const container = target.closest('.form-password')
            const input = container.querySelector('.form-password-input')
            togglePasswordType(input, target)
        }
    });
}
$(".simple-select").select2({
    Search: false,
    templateResult: formatState,
    templateSelection: formatState
});

function formatState(opt) {
    if (!opt.id) {
        return opt.text.toUpperCase();
    }

    var optimage = $(opt.element).attr('data-image');
    if (!optimage) {
        return opt.text.toUpperCase();
    } else {
        var $opt = $(
            '<span class="select-item"><img src="' + optimage + '" width="30px" /> ' + opt.text.toUpperCase() + '</span>'
        );
        return $opt;
    }
};