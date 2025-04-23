// JavaScript personalizado para o site de portfólio do psicanalista

document.addEventListener("DOMContentLoaded", function () {
  // Ativar botão de voltar ao topo
  const backToTopButton = document.querySelector(".back-to-top");

  if (backToTopButton) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        backToTopButton.classList.add("active");
      } else {
        backToTopButton.classList.remove("active");
      }
    });

    // Scroll suave ao clicar no botão de voltar ao topo
    backToTopButton.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // Adicionar classe 'scrolled' ao navbar quando a página é rolada
  const navbar = document.querySelector(".navbar");

  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

  // Scroll suave para links de âncora
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");

      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Simulação de envio do formulário de contato
  const contactForm = document.querySelector(".php-email-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Ocultar mensagens anteriores
      this.querySelector(".loading").style.display = "block";
      this.querySelector(".error-message").style.display = "none";
      this.querySelector(".sent-message").style.display = "none";

      // Simulação de envio (em um site real, aqui seria feita uma requisição AJAX)
      setTimeout(() => {
        this.querySelector(".loading").style.display = "none";
        this.querySelector(".sent-message").style.display = "block";

        // Limpar campos do formulário
        this.reset();
      }, 1500);
    });
  }
});
// Funcionalidade para expandir/recolher texto
const expandButtons = document.querySelectorAll(".btn-expand-text");

if (expandButtons.length > 0) {
  expandButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const expandableText = this.closest(".expandable-text");
      const expandedContent = expandableText.querySelector(".text-expanded");

      if (expandedContent.style.display === "none") {
        expandedContent.style.display = "block";
        this.textContent = "Ler menos";
      } else {
        expandedContent.style.display = "none";
        this.textContent = "Ler mais";
      }
    });
  });
}
