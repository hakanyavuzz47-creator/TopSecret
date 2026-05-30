function ac() {
  document.getElementById("giris").style.display = "none";
  document.getElementById("surpriz").style.display = "block";

  const muzik = document.getElementById("muzik");
  muzik.play();

  kalpYagdir();
}

function kalpYagdir() {
  for (let i = 0; i < 55; i++) {
    const kalp = document.createElement("div");
    kalp.className = "kalp";
    kalp.innerHTML = Math.random() > 0.5 ? "❤️" : "🎉";
    kalp.style.left = Math.random() * 100 + "vw";
    kalp.style.fontSize = Math.random() * 24 + 18 + "px";
    kalp.style.animationDuration = Math.random() * 2 + 2.5 + "s";
    document.body.appendChild(kalp);

    setTimeout(() => {
      kalp.remove();
    }, 5000);
  }
}
