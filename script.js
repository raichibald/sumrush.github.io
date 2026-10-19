(() => {
    "use strict";
    // Gallery arrows (the row also scrolls and snaps by touch or trackpad without this).
    const track = document.querySelector(".gallery-track");
    if (!track) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const step = () => Math.max(track.clientWidth * 0.7, 240);
    const go = (dir) => track.scrollBy({ left: dir * step(), behavior: reduce ? "auto" : "smooth" });
    const prev = document.getElementById("g-prev");
    const next = document.getElementById("g-next");
    if (prev) prev.addEventListener("click", () => go(-1));
    if (next) next.addEventListener("click", () => go(1));
})();
