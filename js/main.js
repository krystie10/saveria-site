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

  // Contact form: submits to Formspree, which emails the studio inbox directly.
  const form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const note = document.querySelector("#form-status");
      const submitBtn = form.querySelector('button[type="submit"]');

      if (submitBtn) submitBtn.disabled = true;
      if (note) note.textContent = "Sending...";

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" },
        });

        if (response.ok) {
          if (note) note.textContent = "Thank you. Your message has been sent; we'll follow up shortly.";
          form.reset();
        } else {
          if (note) note.textContent = "Something went wrong. Please email info@saveriadesignstudio.com directly.";
        }
      } catch (err) {
        if (note) note.textContent = "Something went wrong. Please email info@saveriadesignstudio.com directly.";
      } finally {
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  }
});
