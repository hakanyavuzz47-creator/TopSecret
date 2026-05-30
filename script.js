function surpriz() {
  const muzik = document.getElementById("muzik");
  muzik.play();

  for (let i = 0; i < 40; i++) {
    const kalp = document.createElement("div");
    kalp.innerHTML = "❤️";
    kalp.style.position = "fixed";
    kalp.style.left = Math.random() * 100 + "vw";
    kalp.style.top = "-30px";
    kalp.style.fontSize = Math.random() * 25 + 20 + "px";
    kalp.style.animation = "dus 3s linear forwards";
    document.body.appendChild(kalp);

    setTimeout(() => {
      kalp.remove();
    }, 3000);
  }
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes dus {
  to {
    transform: translateY(110vh) rotate(360deg);
    opacity: 0;
  }
}`;
document.head.appendChild(style);
