const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
const trackInfo = document.querySelectorAll(".tracks-info__title");
trackInfo.forEach(e => {
    console.log(e.clientWidth, e.scrollWidth);
    if (e.scrollWidth == e.clientWidth) {
        e.removeAttribute("data-bs-toggle");
    }
});
const updatesInfo = document.querySelectorAll('.updates-item__title')
updatesInfo.forEach(e => {
    console.log(e.clientWidth, e.scrollWidth);
    if (e.scrollWidth == e.clientWidth) {
        e.removeAttribute("data-bs-toggle");
    }
});
const foundBtn = document.querySelector('.search-dropdown__title');
const foundForm = document.querySelector(".search-form")
const foundInput = document.querySelector('.search-box__input');
const foundList = document.querySelector('.search-list');
const foundValid = document.querySelector(".search-validation");
const voteAll = document.querySelector(".song-sign");
const plus = document.querySelector(".song-sign__icon--plus")
const minus = document.querySelector(".song-sign__icon--minus")
const songContainer = document.querySelector(".song-container");
const soundRange = songContainer.querySelector(".list-dropdown");
const sound = songContainer.querySelector(".song-sound");
const soundOnButton = sound.querySelector('.song-sound__icon--off');
const soundOffButton = sound.querySelector('.song-sound__icon--on');
const musicContainer = document.querySelector('.music-grid');

function musicToggle(parent) {
    plus.classList.toggle("hide");
    minus.classList.toggle("hide");
};
musicContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("mask-block")) {
        const parent = e.target.closest(".song-sign");
        musicToggle(parent);

    }

});

//song-check-like//
foundBtn.addEventListener("click", e => {
    foundBtn.classList.toggle("search-dropdown__title--active");
    foundList.classList.toggle('hide');

});
foundList.addEventListener('click', elem => {
    for (let i = 0; i < foundList.children.length; i++) {
        foundList.children[i].classList.remove('search-item--active');
    }
    elem.target.classList.add('search-item--active');
    foundBtn.innerText = elem.target.textContent.trim();
    foundList.classList.add('hide');

    foundValid.classList.add("hide");
    foundValid.nextElementSibling.classList.add("hide");
});

foundInput.addEventListener("input", e => {
    console.log(foundValid.nextElementSibling);
    console.log(foundList.children[2]);
    if (foundList.children[2].classList.contains("search-item--active")) {
        foundValid.classList.remove("hide");
    } else {
        foundValid.nextElementSibling.classList.remove("hide");
    }
    foundInput.focus();

});
foundInput.addEventListener("blur", () => {
    foundValid.classList.add("hide");
    foundValid.nextElementSibling.classList.add("hide");

});

function buttonToggle(parent) {
    const buttonActive = parent.querySelector('.song-like__icon--empty');
    const buttonNotActive = parent.querySelector('.song-like__icon--fill');
    buttonNotActive.classList.toggle("hide");
    buttonActive.classList.toggle("hide");
};
const toggleSoundButtons = () => {
    soundOnButton.classList.toggle("hide");
    soundOffButton.classList.toggle("hide");
};

sound.addEventListener("mouseenter", () => {
    soundRange.classList.remove("hide");
    soundRange.children[0].focus();
});

soundRange.children[0].addEventListener("blur", () => {

    soundRange.classList.add("hide");


});

soundRange.children[0].addEventListener("change", (e) => {
    const value = e.target.value;
    if (value === "100" && soundOnButton.classList.contains("hide")) {
        toggleSoundButtons();
    } else if (value === "0" && soundOffButton.classList.contains("hide")) {
        toggleSoundButtons();
    }
});

sound.addEventListener("dblclick", () => {
    toggleSoundButtons();
    soundRange.children[0].value = soundOnButton.classList.contains("hide") ? "0" : "100";


});
const allItems = document.querySelectorAll(".song-like");
allItems.forEach(el => {
    el.addEventListener("click", (e) => {
        if (e.currentTarget.classList.contains("song-like")) {

            const parent = e.target.closest(".song-group");
            buttonToggle(parent);
        }


    });

})


function buttonToggleModal(parent) {
    const buttonActive = parent.querySelector('.song-like__icon--empty');
    const buttonNotActive = parent.querySelector('.song-like__icon--fill');
    buttonNotActive.classList.toggle("hide");
    buttonActive.classList.toggle("hide");
};
const allItemsModal = document.querySelector(".modalCheck");
if (allItemsModal !== null) {
    allItemsModal.addEventListener("click", (e) => {
        const targetIcon = e.target.closest(".song-like__icon");
        if (targetIcon) {
            const parent = targetIcon.closest(".song-group");
            buttonToggleModal(parent);
        }

    });
}
;


function startToggle(parent) {
    const startActive = parent.querySelector('.song-start__icon--start');
    const startNotActive = parent.querySelector('.song-start__icon--stop');
    startNotActive.classList.toggle("hide");
    startActive.classList.toggle("hide");
};
const allItemsStart = document.querySelectorAll(".song-start");
if (allItemsStart !== null) {
    allItemsStart.forEach(el => {

        el.addEventListener("click", (e) => {
            const targetStart = e.target.closest(".song-start");
            if (targetStart) {
                const parent = targetStart.closest(".song-group");
                startToggle(parent);
            }
        });
    })
}
;

function voteToggle(parent) {
    const voteActive = parent.querySelector('.song-sign__icon--plus');
    const voteNotActive = parent.querySelector('.song-sign__icon--minus');
    voteActive.classList.toggle("hide");
    voteNotActive.classList.toggle("hide");
};

const allItemsVote = document.querySelector(".song-dropdown");

allItemsVote.addEventListener("click", (e) => {
    if (e.target.classList.contains("mask-block")) {
        const parent = e.target.closest(".song-vote");


        voteToggle(parent);

    }

});


const inputSwitch = document.querySelector('.form-check-input');
const bodyTheme = document.querySelector('body')
inputSwitch.addEventListener("click", function () {
    bodyTheme.classList.toggle('dark-theme')
});

const songTrack = document.querySelector('.player-wrapper')
const songDropdown = document.querySelector('.song-dropdown');
if (songTrack !== null) {
    songTrack.addEventListener("mouseenter", (e) => {

        songDropdown.classList.add('song-dropdown--show');
        songTrack.addEventListener("mouseleave", () => {
            songDropdown.classList.remove('song-dropdown--show');
        })

    });
}
;

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
    item.addEventListener('mouseover', function (event) {
        event.stopPropagation();
        attentionToggle();
    })
})
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.mobile-nav');
menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
});
;