document.addEventListener("DOMContentLoaded", function () {
  // Inicializa a biblioteca de animação AOS
  AOS.init({
    duration: 800, // Duração da animação em milissegundos
    once: true, // A animação acontece apenas uma vez
  });
  // Bloco Swiper
  const swiper = new Swiper(".swiper", {
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // --- INÍCIO DO CÓDIGO SCROLLSPY CORRIGIDO ---

  function updateActiveLinkOnScroll() {
    const navbarHeight = 100; // Offset para o menu
    let currentSectionId = "";

    // Encontra a seção que está atualmente na tela
    document.querySelectorAll("section[id]").forEach((section) => {
      if (window.scrollY >= section.offsetTop - navbarHeight) {
        currentSectionId = section.getAttribute("id");
      }
    });

    // Ativa o link correspondente
    document.querySelectorAll(".navbar-nav a").forEach((link) => {
      link.classList.remove("active");
      // O href do link deve conter o ID da seção atual
      if (link.getAttribute("href").includes(currentSectionId)) {
        // Checagem para não ativar o "Início" (index.html) quando em outra seção
        if (currentSectionId) {
          link.classList.add("active");
        }
      }
    });

    // Lógica para garantir que o "Início" fique ativo no topo
    const homeLink = document.querySelector('.navbar-nav a[href="index.html"]');
    if (window.scrollY < 500) {
      // Se estiver perto do topo
      document
        .querySelectorAll(".navbar-nav a")
        .forEach((link) => link.classList.remove("active"));
      if (homeLink) homeLink.classList.add("active");
    }
  }

  window.addEventListener("scroll", updateActiveLinkOnScroll);
  window.addEventListener("load", updateActiveLinkOnScroll);

  // --- FIM DO CÓDIGO SCROLLSPY CORRIGIDO ---

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

  // Funcionalidade para expandir/recolher texto
  const expandButtons = document.querySelectorAll(".btn-expand-text");

  if (expandButtons.length > 0) {
    expandButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const expandableText = this.closest(".expandable-text");
        const expandedContent = expandableText.querySelector(".text-expanded");

        if (expandedContent.style.display === "none") {
          expandedContent.style.display = "block";
          this.textContent = "Minimizar";
        } else {
          expandedContent.style.display = "none";
          this.textContent = "Saiba mais";
        }
      });
    });
  }
}); // <-- FECHAMENTO DO DOMContentLoaded
