document.addEventListener("DOMContentLoaded", function () {
  function esc(s) {
    if (!s && s !== 0) return "";
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  document
    .querySelectorAll(".progress-form input[type='number']")
    .forEach((num) => {
      if (num.closest(".number-spinner")) return;

      const wrapper = document.createElement("span");
      wrapper.className = "number-spinner";

      const outer = num.parentNode;
      outer.replaceChild(wrapper, num);
      wrapper.appendChild(num);

      const controls = document.createElement("span");
      controls.className = "spinner-controls";
      controls.innerHTML = `
      <button type="button" class="spinner-btn spinner-up" aria-label="Aumentar">▲</button>
      <button type="button" class="spinner-btn spinner-down" aria-label="Diminuir">▼</button>
    `;
      wrapper.appendChild(controls);

      const up = controls.querySelector(".spinner-up");
      const down = controls.querySelector(".spinner-down");

      up.addEventListener("click", () => {
        let step = parseFloat(num.step) || 1;
        let max = num.max !== "" ? parseFloat(num.max) : null;
        let val = parseFloat(num.value) || 0;
        let next = val + step;
        if (max !== null && next > max) next = max;
        num.value = next;
        num.dispatchEvent(new Event("input"));
      });

      down.addEventListener("click", () => {
        let step = parseFloat(num.step) || 1;
        let min = num.min !== "" ? parseFloat(num.min) : null;
        let val = parseFloat(num.value) || 0;
        let next = val - step;
        if (min !== null && next < min) next = min;
        num.value = next;
        num.dispatchEvent(new Event("input"));
      });
    });

  function showConfirm(message, timeout = 1400) {
    const el = document.createElement("div");
    el.className = "confirm-modal";
    el.textContent = message;
    document.body.appendChild(el);
    setTimeout(() => {
      $(el).fadeOut(200, function () {
        el.remove();
      });
    }, timeout);
  }

  function openRatingModal(onSubmit) {
    const modal = document.createElement("div");
    modal.className = "book-modal rating-modal";
    modal.innerHTML = `
      <div class="modal-content" role="dialog" aria-modal="true" aria-label="Avaliar progresso">
        <button class="close-modal" aria-label="Fechar">&times;</button>
        <div class="modal-inner modal-progress">
          </div>
          <div class="modal-details">
            <h2 class="title">Avalie seu progresso</h2>
            <div class="rating-stars" aria-hidden="false">
              <span class="star" data-value="1">★</span>
              <span class="star" data-value="2">★</span>
              <span class="star" data-value="3">★</span>
              <span class="star" data-value="4">★</span>
              <span class="star" data-value="5">★</span>
            </div>
            <textarea class="rating-textarea" placeholder="Deixe um comentário (opcional)"></textarea>
            <div class="rating-actions">
              <button class="btn btn-submit">Enviar avaliação</button>
              <button class="btn btn-cancel">Cancelar</button>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    document.body.classList.add("modal-open");

    const stars = modal.querySelectorAll(".rating-stars .star");
    let value = 0;
    stars.forEach((s) => {
      s.addEventListener("mouseenter", () => {
        const v = parseInt(s.dataset.value, 10);
        stars.forEach((x) =>
          x.classList.toggle("active", parseInt(x.dataset.value, 10) <= v)
        );
      });
      s.addEventListener("click", () => {
        value = parseInt(s.dataset.value, 10);
        stars.forEach((x) =>
          x.classList.toggle("active", parseInt(x.dataset.value, 10) <= value)
        );
      });
    });
    modal.querySelector(".close-modal").addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
    document.addEventListener("keydown", onKey);

    modal.querySelector(".btn-cancel").addEventListener("click", closeModal);

    modal.querySelector(".btn-submit").addEventListener("click", () => {
      const text = modal.querySelector(".rating-textarea").value.trim();
      closeModal();
      onSubmit({ rating: value, review: text });
    });

    function onKey(e) {
      if (e.key === "Escape") closeModal();
    }
    function closeModal() {
      modal.remove();
      document.body.classList.remove("modal-open");
      document.removeEventListener("keydown", onKey);
    }
  }

  const progressForm = document.querySelector(".progress-form");
  if (progressForm) {
    progressForm.addEventListener("submit", function (e) {
      e.preventDefault();
      openRatingModal(function (data) {
        console.log("Avaliação enviada:", data);
        showConfirm("Avaliação salva");
      });
    });
  }

  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
});
