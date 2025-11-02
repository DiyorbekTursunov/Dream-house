  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      document.querySelectorAll(".minifyImg").forEach((e) => {
        const t = e.getAttribute("data-src");
        if (!t) return;
        const n = new Image();
        (n.src = t),
          (n.onload = () => {
            (e.src = t), e.classList.remove("blur-up");
          }),
          (n.onerror = () => {
            console.warn("Rasm yuklanmadi:", t);
          });
      });
    }, 1e3);
  });
let timeLeft = 120;
const timerEl = document.getElementById("timer"),
  interval = setInterval(() => {
    const e = Math.floor(timeLeft / 60),
      t = timeLeft % 60;
    (timerEl.textContent =
      String(e).padStart(2, "0") + ":" + String(t).padStart(2, "0")),
      timeLeft <= 0 && clearInterval(interval),
      timeLeft--;
  }, 1e3);
