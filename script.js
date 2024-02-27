//Navigation bar
const mainNav = document.getElementById("menu");
const navBarOpen = document.getElementById("navbar-open");
const navBarClose = document.getElementById("navbar-close");
const menuLinks = document.querySelectorAll("#menu a");

let isNavOpen = false;

function openNav() {
    mainNav.style.width = "320px";
    navBarClose.style.display = "flex";
    navBarOpen.style.display = "none";
    isNavOpen = true;
}

function closeNav() {
    mainNav.style.width = "0";
    navBarOpen.style.display = "flex";
    navBarClose.style.display = "none";
    isNavOpen = false;
}

navBarOpen.addEventListener("click", function () {
    closeModal();
    openNav();
});

navBarClose.addEventListener("click", function () {
    closeNav();
});

menuLinks.forEach(link => {
    link.addEventListener("click", function () {
        if (isNavOpen) {
            closeNav();
        }
    });
})

window.addEventListener("click", function (event) {
    if (isNavOpen) {
        if (!event.target.closest("#menu") && !event.target.closest("#navbar-open")) {
            closeNav();
        }
    }
});

//Resizing the screen
window.addEventListener("resize", function (event) {
    if (window.innerWidth >= 1024) {
        navBarClose.style.display = "none";
        navBarOpen.style.display = "none";
        mainNav.style.width = "100%";
    } else {
        navBarOpen.style.display = "flex";
        mainNav.style.width = "0";
    }
})

//Modal window
const modal = document.getElementById("modal");
const btnRegister = document.getElementById("register");
const closeModalBtn = document.getElementsByClassName("modal__close")[0];
let nameInput = document.getElementById("name");
let modalTitleName = document.getElementsByClassName("modal__title-name")[0];
const overlay = document.getElementById("overlay");

function closeModal() {
    modal.style.display = "none";
    overlay.style.display = "none";
}

function openModal() {
    modal.style.display = "block";
    overlay.style.display = "block";
    nameInput.focus();
}

btnRegister.onclick = function () {
    openModal();
}

closeModalBtn.onclick = function () {
    closeModal();
}

window.onclick = function (event) {
    if (event.target === modal) {
        closeModal();
    }
}

document.addEventListener("keydown", function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

nameInput.addEventListener('input', function () {
    modalTitleName.textContent = this.value;
});
