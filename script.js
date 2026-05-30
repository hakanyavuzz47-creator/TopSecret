let kacmaSayisi = 0;
const btn = document.getElementById("kacanBtn");

btn.addEventListener("mouseover", kacir);
btn.addEventListener("touchstart", kacir);

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

  document.getElementById("muzik").play();

  setInterval(kalpYagdir, 900);
}

function kalpYagdir() {
  for (let i = 0; i < 8; i++) {
    const kalp = document.createElement("div");
    kalp.className = "kalp";
    kalp.innerHTML = Math.random() > 0.5 ? "❤️" : "🎉";
    kalp.style.left = Math.random() * 100 + "vw";
    kalp.style.fontSize = Math.random() * 24 + 18 + "px";
    kalp.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(kalp);

    setTimeout(() => kalp.remove(), 5000);
  }
}
