const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
//song-check-like//
function buttonToggle(parent) {
    const buttonActive = parent.querySelector('.song-like__icon--empty');
    const buttonNotActive = parent.querySelector('.song-like__icon--fill');
    buttonNotActive.classList.toggle("hide");
    buttonActive.classList.toggle("hide");
};
const allItems = document.querySelector(".buttonCheck");
if ( allItems !== null) {
    allItems.addEventListener("click", (e) => {
        const targetIcon = e.target.closest(".song-like__icon");
        if (targetIcon) {
            const parent = targetIcon.closest(".song-group");
            buttonToggle(parent);
        }

    });
};

function buttonToggleModal(parent) {
    const buttonActive = parent.querySelector('.song-like__icon--empty');
    const buttonNotActive = parent.querySelector('.song-like__icon--fill');
    buttonNotActive.classList.toggle("hide");
    buttonActive.classList.toggle("hide");
};
const allItemsModal = document.querySelector(".modalCheck");
if ( allItemsModal !== null) {
    allItemsModal.addEventListener("click", (e) => {
        const targetIcon = e.target.closest(".song-like__icon");
        if (targetIcon) {
            const parent = targetIcon.closest(".song-group");
            buttonToggleModal(parent);
        }

    });
};
//song-check-start//
function startToggleModal(parent) {
    const startActive = parent.querySelector('.song-start__icon--start');
    const startNotActive = parent.querySelector('.song-start__icon--stop');
    startNotActive.classList.toggle("hide");
    startActive.classList.toggle("hide");
};
const allItemsStartModal = document.querySelector(".modalCheck");
if ( allItemsStartModal !== null) {
    allItemsStartModal.addEventListener("click", (e) => {
        const targetStart = e.target.closest(".song-start__icon");
        if (targetStart) {
            const parent = targetStart.closest(".song-group");
            startToggleModal(parent);
        }
    });
};

function startToggle(parent) {
    const startActive = parent.querySelector('.song-start__icon--start');
    const startNotActive = parent.querySelector('.song-start__icon--stop');
    startNotActive.classList.toggle("hide");
    startActive.classList.toggle("hide");
};
const allItemsStart = document.querySelector(".buttonCheck");
if ( allItemsStart !== null) {
    allItemsStart.addEventListener("click", (e) => {
        const targetStart = e.target.closest(".song-start__icon");
        if (targetStart) {
            const parent = targetStart.closest(".song-group");
            startToggle(parent);
        }
    });
};

function voteToggle(parent) {
    const voteActive = parent.querySelector('.song-vote__icon');
    const voteNotActive = parent.querySelector('.song-vote__icon--minus');
    voteActive.classList.toggle("song-vote__icon--hide");
    voteNotActive.classList.toggle("song-vote__icon--hide");
};

const allItemsVote = document.querySelector("body");
if (document.querySelector('body')) {
    allItemsVote.addEventListener("click", (e) => {
        const targetStart = e.target.closest(".song-vote__icon");
        if (targetStart) {
            const parent = targetStart.closest(".song-group");
            voteToggle(parent);
        }
    });
};
const inputSwitch = document.querySelector('.form-check-input');
const bodyTheme = document.querySelector('body')
inputSwitch.addEventListener("click", function () {
    bodyTheme.classList.toggle('dark-theme')
});
// let modalBtn = document.querySelector('.modal-live-bg--show');
// let modalIcon = document.querySelector('.modal-live__icon--active');
// let modalIconActive = document.querySelector('.modal-live__icon--hidden');
// if (document.querySelector('body')) {
//     modalBtn.addEventListener('click', function () {
//         modalIcon.classList.toggle('modal-live__icon--hide');
//         modalIconActive.classList.toggle('modal-live__icon--hide');
//     });
// };

// let menuBtn = document.querySelector('.menu-btn');
// let menu = document.querySelector('.mobile-nav');
// menuBtn.addEventListener('click', function () {
//     menuBtn.classList.toggle('active');
//     menu.classList.toggle('active');
// });;
const songTrack = document.querySelector('.player-wrapper')
const songDropdown = document.querySelector('.song-dropdown');
if (songTrack !== null) {
    songTrack.addEventListener("mouseenter", (e) => {
        songDropdown.classList.add('song-dropdown--show');
        songTrack.addEventListener("mouseleave",() =>{
            songDropdown.classList.remove('song-dropdown--show');
        });

    });
};
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
new Swiper('.swiperList', {
    slidesPerView: 12,
    direction: "vertical",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
});
function attentionToggle() {
    const trackAttention = document.querySelector('.attention-track');
    trackAttention.classList.toggle('attention-track--active')
}
const trackContainer = document.querySelectorAll('.song-info--blocked');
trackContainer.forEach(item => {
    item.addEventListener('mouseover', function(event) {
        event.stopPropagation();
         attentionToggle();
    })
})