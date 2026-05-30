let kacmaSayisi = 0;

const btn = document.getElementById("kacanBtn");

btn.addEventListener("mouseover", kacir);

btn.addEventListener("touchstart", function (e) {
  e.preventDefault();
  kacir();
});

btn.addEventListener("click", eminMisin);

function kacir() {
  if (kacmaSayisi < 4) {
    const x = Math.random() * 180 - 90;
    const y = Math.random() * 160 - 80;

    btn.style.transform = `translate(${x}px, ${y}px)`;
    kacmaSayisi++;
  }
}

function eminMisin() {
  document.getElementById("giris").style.opacity = "0";

  setTimeout(() => {
    document.getElementById("giris").style.display = "none";
    document.getElementById("eminlik").style.display = "flex";
  }, 900);
}

function surpriziAc() {
  document.getElementById("eminlik").style.display = "none";
  document.getElementById("surpriz").style.display = "block";

  const muzik = document.getElementById("muzik");

  muzik.play().catch(() => {
    console.log("Müzik tarayıcı tarafından engellendi.");
  });

  setInterval(kalpYagdir, 650);

  setTimeout(() => {
    document.getElementById("zarfPopup").style.display = "flex";
  }, 8000);
}

function zarfiAc() {
  document.getElementById("zarfPopup").style.display = "none";
  document.getElementById("mektupPopup").style.display = "flex";
}

function mektubuKapat() {
  document.getElementById("mektupPopup").style.display = "none";
}

function kalpYagdir() {
  const kalpAlani = document.getElementById("kalpAlani");

  for (let i = 0; i < 7; i++) {
    const kalp = document.createElement("div");

    kalp.className = "kalp";
    kalp.innerHTML = Math.random() > 0.5 ? "❤️" : "💕";

    const solMu = Math.random() > 0.5;

    if (window.innerWidth > 700) {
      kalp.style.left = solMu
        ? Math.random() * 18 + "vw"
        : Math.random() * 18 + 82 + "vw";
    } else {
      kalp.style.left = solMu
        ? Math.random() * 7 + "vw"
        : Math.random() * 7 + 93 + "vw";
    }

    kalp.style.fontSize = Math.random() * 22 + 18 + "px";
    kalp.style.animationDuration = Math.random() * 2 + 4 + "s";

    kalpAlani.appendChild(kalp);

    setTimeout(() => {
      kalp.remove();
    }, 6500);
  }
}
