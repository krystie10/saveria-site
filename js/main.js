document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const drawer = document.querySelector(".nav-drawer");
  const closeBtn = document.querySelector(".nav-drawer__close");

  if (toggle && drawer) {
    toggle.addEventListener("click", () => drawer.classList.add("is-open"));
  }
  if (closeBtn && drawer) {
    closeBtn.addEventListener("click", () => drawer.classList.remove("is-open"));
  }
  drawer?.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => drawer.classList.remove("is-open"))
  );

  // Contact form: no backend wired up yet, so just confirm receipt in-page.
  const form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const note = document.querySelector("#form-status");
      if (note) {
        note.textContent =
          "Thanks; this form isn't wired to a live inbox yet. For now, please email info@saveriadesignstudio.com directly.";
      }
      form.reset();
    });
  }
});
