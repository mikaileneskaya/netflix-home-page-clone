const ileriBtns = document.querySelectorAll(".ileri");
const geriBtns = document.querySelectorAll(".geri");
const diziRows = document.querySelectorAll(".dizi-row");
const resimAdet = 8;

ileriBtns.forEach((ileriBtn, index) => {
  const geriBtn = geriBtns[index];
  const diziRow = diziRows[index];
  let currentPosition = 0;
  const resimGenislik = diziRow.querySelector("img").offsetWidth;
  const resimlerArasiBosluk = 1;

  ileriBtn.addEventListener("click", () => {
    currentPosition -= resimGenislik * 4;
    if (
      currentPosition <= -(resimGenislik * (resimAdet + resimlerArasiBosluk))
    ) {
      currentPosition = 0;
    }
    diziRow.style.transform = `translateX(${currentPosition}px)`;
  });

  geriBtn.addEventListener("click", () => {
    currentPosition += resimGenislik * 4;
    if (currentPosition > 0) {
      currentPosition = -(resimGenislik * (resimAdet + resimlerArasiBosluk));
    }
    diziRow.style.transform = `translateX(${currentPosition}px)`;
  });
});

const header = document.querySelector("header");
const headerLogo = document.querySelector(".header-logo");
const headerArama = document.querySelector(".arama-icon");
const input = document.querySelector("header input");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    if (window.innerWidth <= 500) {
      header.style.background = "rgb(0, 0, 0, 0.9)";
      header.style.padding = "20px 30px";
    } else if (window.innerWidth <= 800) {
      header.style.background = "rgb(0, 0, 0, 0.9)";
      header.style.padding = "20px 50px";
    } else if (window.innerWidth <= 1150 || window.innerWidth >= 1150) {
      header.style.background = "rgb(0, 0, 0, 0.9)";
      header.style.padding = "20px 100px";
    }
  }

  if (window.scrollY == 0) {
    if (window.innerWidth <= 1150) {
      header.style.background = "transparent";
      header.style.padding = "50px 30px 20px 30px";
    } else {
      header.style.background = "transparent";
      header.style.padding = "50px 50px 20px 50px";
    }
  }
});

let isInputVisible = false;

headerArama.addEventListener("click", () => {
  if (!isInputVisible) {
    input.style.display = "inline-block";
    isInputVisible = true;
  } else {
    input.style.display = "none";
    isInputVisible = false;
  }
});

function dahafazlabilgi() {
  alert(
    "Bu sayfa Mikail Enes Kaya tarafından tasarlanıp kodlanmıştır. Bu sayfada kullanılan tüm resimler ve videolar Netflix'e aittir. Herhangi bir ticari amaçla kullanılmamıştır. Bu sayfa sadece benim örnek proje olarak yaptığım bir sayfadır. Diziyi izlemek için Netflix'e yönlendiriliyorsunuz."
  );
}

document.addEventListener("DOMContentLoaded", function () {
  let video = document.getElementById("bg-video");
  let playButton = document.getElementById("playButton");
  let muteButton = document.querySelector(".sag i");
  let background = document.querySelector(".giris .resim-container");
  let izlebtn = document.querySelector(".izle-btn");
  video.muted = false;

  background.addEventListener("click", function () {
    video.play();
    playButton.style.display = "none";
    setTimeout(() => {
      background.style.background = "none";
    }, 1000);
    video.style.opacity = 1;
  });

  izlebtn.addEventListener("click", function () {
    video.play();
    playButton.style.display = "none";
    setTimeout(() => {
      background.style.background = "none";
    }, 1000);
    video.style.opacity = 1;
  });

  muteButton.addEventListener("click", function () {
    if (video.muted) {
      muteButton.classList = "fa-solid fa-volume-high";
      video.muted = false;
    } else {
      muteButton.classList = "fa-solid fa-volume-xmark";
      video.muted = true;
    }
  });
});

const hesabim = document.querySelector("header nav div a.hesabim");
const hesabimMenu = document.querySelector(
  "header nav .acilir-menu .acilir-menu-linkler"
);
let menuTimer;

hesabim.addEventListener("mouseenter", () => {
  clearTimeout(menuTimer);
  hesabimMenu.style.display = "block";
});

hesabim.addEventListener("mouseleave", () => {
  menuTimer = setTimeout(() => {
    hesabimMenu.style.display = "none";
  }, 500);
});

hesabimMenu.addEventListener("mouseenter", () => {
  clearTimeout(menuTimer);
});

hesabimMenu.addEventListener("mouseleave", () => {
  menuTimer = setTimeout(() => {
    hesabimMenu.style.display = "none";
  }, 200);
});
