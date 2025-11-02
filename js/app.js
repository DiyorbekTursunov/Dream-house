(() => {
  const e = document.querySelector(".timer");
  if (!e) return;
  const t = e.textContent.trim();
  let n = 120;
  const l = t.match(/^(\d{1,2}):(\d{2})$/);
  function o(e) {
    return (
      String(Math.floor(e / 60)).padStart(1, "0") +
      ":" +
      String(e % 60).padStart(2, "0")
    );
  }
  l && (n = 60 * parseInt(l[1], 10) + parseInt(l[2], 10)),
    (e.textContent = o(n));
  const i = setInterval(() => {
    n--, n < 0 ? clearInterval(i) : (e.textContent = o(n));
  }, 1e3);
})();
