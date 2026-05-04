document.addEventListener("DOMContentLoaded", function () {
  /**
   * Reading Progress Bar
   */
  const progressLine = document.querySelector("#scroll-progress");
  if (progressLine) {
    window.addEventListener("scroll", () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      progressLine.style.width = scrolled + "%";
    });
  }

  // Inicializa a biblioteca de animação AOS
  AOS.init({
    duration: 800, // Duração da animação em milissegundos
    once: true, // A animação acontece apenas uma vez
    disable: "mobile", // Desativa a animação em celulares para melhorar a performance
  });

  // Rastreamento de conversão no botão do Hero
  const heroBtn = document.querySelector(".btn-get-started");
  heroBtn?.addEventListener("click", () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "whatsapp_conversion",
      location: "hero_section",
    });
  });

  // --- INÍCIO DO CÓDIGO DO "TOAST" POP-UP (GRUPO LACAN) ---

  // Seleciona o elemento do Toast no HTML pelo ID
  const toastElement = document.getElementById("lacanToast");

  if (toastElement) {
    // 1. Cria a instância do Toast ANTES
    // Isso garante que o botão [data-bs-dismiss="toast"] funcione 100%
    const lacanToast = new bootstrap.Toast(toastElement, {
      autohide: false, // Garante que ele não se esconda sozinho
    });

    // 2. Atraso de 2 segundos para exibir
    setTimeout(() => {
      // 3. Usa o método .show() oficial do Bootstrap
      // Isso adiciona a classe .show e ativa nossa animação CSS
      lacanToast.show();
    }, 1000); // 2 segundos de atraso
  }

  // --- FIM DO CÓDIGO DO "TOAST" POP-UP (GRUPO LACAN) ---
  // Bloco Swiper para o Hero
  const heroSwiper = new Swiper(".hero-img .swiper", {
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
      el: ".hero-img .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".hero-img .swiper-button-next",
      prevEl: ".hero-img .swiper-button-prev",
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

      // Rastreamento de cliques em links de WhatsApp (se houver no menu ou âncoras)
      if (targetId.includes("wa.me")) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "whatsapp_click",
          location: "anchor_link",
        });
      }

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
  // --- LÓGICA DO BALÃO WHATSAPP ---
  const whatsappBubble = document.getElementById("whatsapp-bubble");
  const whatsappIcon = whatsappBubble?.querySelector(".whatsapp-icon-main");
  const closeBubble = whatsappBubble?.querySelector(".btn-close-bubble");

  if (whatsappBubble && whatsappIcon) {
    // Mostrar o balão automaticamente após 3 segundos
    setTimeout(() => {
      whatsappBubble.classList.add("active");
    }, 3000);

    // Toggle ao clicar no ícone
    whatsappIcon.addEventListener("click", () => {
      whatsappBubble.classList.toggle("active");
      
      // Rastreamento de abertura do balão
      if (whatsappBubble.classList.contains("active")) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "whatsapp_bubble_open"
        });
      }
    });

    // Rastreamento de clique no botão dentro do balão
    const whatsappBtn = whatsappBubble.querySelector(".whatsapp-btn");
    whatsappBtn?.addEventListener("click", () => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "whatsapp_conversion",
        location: "floating_bubble"
      });
    });

    // Fechar ao clicar no X
    closeBubble?.addEventListener("click", (e) => {
      e.stopPropagation();
      whatsappBubble.classList.remove("active");
    });
  }

  /**
   * Testimonials slider
   */
  new Swiper(".testimonials-slider", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: ".testimonials-slider .swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
}); // <-- FECHAMENTO DO DOMContentLoaded
