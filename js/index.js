const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
const trackInfo = document.querySelectorAll(".tracks-info__title");
trackInfo.forEach(e => {
    if (e.scrollWidth == e.clientWidth) {
        e.removeAttribute("data-bs-toggle");
    }
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
    slidesPerView: 'auto',
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
document.querySelectorAll('.tabs-navbar').forEach(n => {
    const vocal = new Swiper(n.querySelector('.swiperList'), {
        slidesPerView: 13,
        direction: "vertical",
        navigation: {
            nextEl: n.querySelector('.swiper-button-next'),
            prevEl: n.querySelector('.swiper-button-prev'),
        },
        scrollbar: {
            el: n.querySelector('.swiper-scrollbar'),
            hide: true,
        },
    });
});
const updatesInfo = document.querySelectorAll('.updates-item__title')
updatesInfo.forEach(e => {
    if (e.scrollWidth == e.clientWidth) {
        e.removeAttribute("data-bs-toggle");
    }
});


//search//
const foundBtn = document.querySelector('.search-dropdown__title');
const foundInput = document.querySelector('.search-box__input');
const foundList = document.querySelector('.search-list');
const foundValid = document.querySelector(".search-validation");


foundBtn.addEventListener("click", e => {
    foundBtn.classList.toggle("search-dropdown__title--active");
    foundList.classList.toggle('search-list--active');

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

//sound//
const songContainer = document.querySelector(".song-container");
const soundRange = songContainer.querySelector(".list-dropdown");
const sound = songContainer.querySelector(".song-sound");
const soundOnButton = sound.querySelector('.song-sound__icon--off');
const soundOffButton = sound.querySelector('.song-sound__icon--on');

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

function buttonToggleModal(parent) {
    const buttonActive = parent.querySelector('.song-like__icon--empty');
    const buttonNotActive = parent.querySelector('.song-like__icon--fill');
    buttonNotActive.classList.toggle("hide");
    buttonActive.classList.toggle("hide");
};


//input-switch//
const inputSwitch = document.querySelector('.form-check-input');
const bodyTheme = document.querySelector('body')

inputSwitch.addEventListener("click", function () {
    bodyTheme.classList.toggle('dark-theme')
});

//song-track//
const songTrack = document.querySelector('.player-wrapper')
const songDropdown = document.querySelector('.song-dropdown');
const songItem = document.querySelector('.player-item')
 if (songTrack !== null) {
     songTrack.addEventListener("mouseenter", (e) => {
         songItem.classList.add('player-item--border');
         songDropdown.classList.add('song-dropdown--show');
         songTrack.addEventListener("mouseleave", () => {
             songDropdown.classList.remove('song-dropdown--show');
             songItem.classList.remove('player-item--border');
         })

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




function attentionAdd(item) {
    const trackAttention = item.parentElement.parentElement.parentElement.parentElement.querySelector('.attention-track');
    trackAttention.classList.add('attention-track--active')
}
function attentionHide(item) {
    const trackAttention = item.parentElement.parentElement.parentElement.parentElement.querySelector('.attention-track');
    trackAttention.classList.remove('attention-track--active')
}

const trackContainer = document.querySelectorAll('.song-info--blocked');
trackContainer.forEach(item => {
    item.addEventListener('mouseover', function (event) {
        attentionAdd(item);
    })
    item.addEventListener('mouseout', function (event) {
        attentionHide(item);
    })
})

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.mobile-nav');
const menuClose = document.querySelector('.btn-close')
const menuBody = document.querySelector('body');
menuBtn.addEventListener('click', function () {
    menu.classList.add('active');
    menuBody.classList.add('hidden');
});
menuClose.addEventListener('click', function () {
    menu.classList.remove('active');
    menuBody.classList.remove('hidden');
});

const artistText = document.querySelector('.artist-info__text');
const artistBtn = document.querySelector('.artist-info__btn');
if(artistBtn !== null){
    artistBtn.addEventListener('click', function () {
        artistText.classList.toggle('artist-info__text--active');
    });
}


/**
 * song-group btns
 * song-start
 * song-sign
 * song-like
 */

const
    btnSongStart = document.querySelectorAll('.song-start'),
    btnSongSign = document.querySelectorAll('.song-sign'),
    btnSongLike = document.querySelectorAll('.song-like');

addEventSongBtn(btnSongStart)
addEventSongBtn(btnSongSign)
addEventSongBtn(btnSongLike)

function addEventSongBtn(btns) {
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            toogleSongBtnClass(btn)
        })
    })
}

function toogleSongBtnClass(btn) {
    const
        btnStartStart = btn.querySelector('.song-start__icon--start'),
        btnStartEnd = btn.querySelector('.song-start__icon--stop'),
        btnLikeStart = btn.querySelector('.song-like__icon--empty'),
        btnLikeEnd = btn.querySelector('.song-like__icon--fill'),
        btnSignStart = btn.querySelector('.song-sign__icon--plus'),
        btnSignEnd = btn.querySelector('.song-sign__icon--minus');

    if (btnStartStart) {
        btnStartStart.classList.toggle("hide")
        btnStartEnd.classList.toggle("hide")
    }
    if (btnLikeStart) {
        btnLikeStart.classList.toggle("hide")
        btnLikeEnd.classList.toggle("hide")
    }
    if (btnSignStart) {
        btnSignStart.classList.toggle("hide")
        btnSignEnd.classList.toggle("hide")
    }
}


document.querySelectorAll(".tracks-item--blocked > .tracks-heading").forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    })
});
const modalLiveBtn = document.querySelector('.modal-live-bg--show');
const modalLiveStart = document.querySelector('.modal-live__icon--active');
const modalLiveStop = document.querySelector('.modal-live__icon--hidden');
if(modalLiveBtn !== null){
    console.log(modalLiveBtn)
    modalLiveBtn.addEventListener('click', function () {
        modalLiveStart.classList.toggle('hide');
        modalLiveStop.classList.toggle('hide');
    });
}