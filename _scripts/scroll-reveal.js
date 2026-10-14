/*
  Gently reveal section content as it enters the viewport.
  Elements remain fully visible when JavaScript, IntersectionObserver,
  or motion is disabled.
*/

(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const addReveal = (element, index, kind = "content") => {
    if (!element || element.hasAttribute("data-scroll-reveal")) return;

    element.dataset.scrollReveal = "";
    element.dataset.revealKind = kind;
    element.style.setProperty("--reveal-delay", `${Math.min(index * 70, 280)}ms`);
  };

  const revealSection = (section) => {
    let index = 0;
    const next = (element, kind) => addReveal(element, index++, kind);

    [...section.children].forEach((child) => {
      // Long publication lists can exceed the observer's visible-area threshold.
      if (child.classList.contains("apa-publications")) return;

      if (child.classList.contains("feature")) {
        next(child.querySelector(".feature-image"), "image");
        next(child.querySelector(".feature-text"));
        return;
      }

      if (child.classList.contains("latest-news")) {
        next(child.querySelector("h2"));
        child.querySelectorAll(".latest-news-card").forEach((card) => next(card, "image"));
        next(child.querySelector(".latest-news-more"));
        return;
      }

      if (child.classList.contains("portrait-wrapper")) {
        next(child.querySelector(".portrait"), "image");
        return;
      }

      if (child.classList.contains("alumni-grid")) {
        [...child.children].forEach((card) => next(card, "image"));
        return;
      }

      if (child.classList.contains("cols") || child.classList.contains("grid")) {
        [...child.children].forEach((item) => next(item, "image"));
        return;
      }

      if (
        child.matches(
          "h1, h2, h3, h4, p, div, a, article, .card, .citation, .portrait, .post-excerpt, .search-box, .search-info, .tags"
        )
      ) {
        next(child);
      }
    });
  };

  const initialise = () => {
    if (
      reduceMotion.matches ||
      document.body.dataset.layout === "post" ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    document.querySelectorAll("main > section").forEach(revealSection);

    const targets = document.querySelectorAll("[data-scroll-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10%", threshold: 0.12 }
    );

    targets.forEach((target) => observer.observe(target));
  };

  document.addEventListener("DOMContentLoaded", initialise);
})();
