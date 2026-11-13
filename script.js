(() => {
    "use strict";
    // Privacy and terms pages: start the table of contents collapsed on phones.
    const toc = document.querySelector("details.toc");
    if (toc && matchMedia("(max-width: 719px)").matches) toc.open = false;

    // Support button: the address is only assembled on click, so it isn't sitting in the page source.
    document.querySelectorAll("[data-mail]").forEach((a) => {
        a.addEventListener("click", (e) => {
            e.preventDefault();
            location.href = `mailto:${["saripo.raitis", "gmail.com"].join("@")}?subject=Sum%20Rush%20support`;
        });
    });

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
