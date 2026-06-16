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

  // Rastreamento de conversão nos botões do Hero
  const heroBtns = document.querySelectorAll(".btn-get-started");
  heroBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "whatsapp_conversion",
        location: "hero_section",
      });
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
  // Swiper instances for Ribeirão Preto and Jaboticabal
  let ribeiraoSwiper = null;
  let jaboticabalSwiper = null;

  const swiperRibeiraoEl = document.querySelector(".swiper-ribeirao");
  if (swiperRibeiraoEl) {
    ribeiraoSwiper = new Swiper(".swiper-ribeirao", {
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
        el: ".swiper-ribeirao .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-ribeirao .swiper-button-next",
        prevEl: ".swiper-ribeirao .swiper-button-prev",
      },
    });
  }

  const swiperJaboticabalEl = document.querySelector(".swiper-jaboticabal");
  if (swiperJaboticabalEl) {
    jaboticabalSwiper = new Swiper(".swiper-jaboticabal", {
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
        el: ".swiper-jaboticabal .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-jaboticabal .swiper-button-next",
        prevEl: ".swiper-jaboticabal .swiper-button-prev",
      },
    });
  }

  /**
   * Helper function to apply the location visibility and links dynamically
   */
  function applyLocationChange(selectedLoc) {
    // Handle index.html elements
    const rowRibeirao = document.getElementById("row-ribeirao");
    const rowJaboticabal = document.getElementById("row-jaboticabal");

    if (rowRibeirao && rowJaboticabal) {
      if (selectedLoc === "ribeirao") {
        rowJaboticabal.classList.add("d-none-custom");
        rowRibeirao.classList.remove("d-none-custom");
        rowRibeirao.classList.add("animate-fade");
        if (ribeiraoSwiper) {
          ribeiraoSwiper.update();
          ribeiraoSwiper.autoplay.start();
        }
        if (jaboticabalSwiper) jaboticabalSwiper.autoplay.stop();
      } else {
        rowRibeirao.classList.add("d-none-custom");
        rowJaboticabal.classList.remove("d-none-custom");
        rowJaboticabal.classList.add("animate-fade");
        if (jaboticabalSwiper) {
          jaboticabalSwiper.update();
          jaboticabalSwiper.autoplay.start();
        }
        if (ribeiraoSwiper) ribeiraoSwiper.autoplay.stop();
      }
    }

    // Handle contact.html elements
    const addrRibeirao = document.getElementById("contact-address-ribeirao");
    const addrJaboticabal = document.getElementById("contact-address-jaboticabal");
    const welcomeRibeirao = document.getElementById("welcome-text-ribeirao");
    const welcomeJaboticabal = document.getElementById("welcome-text-jaboticabal");
    const mapRibeirao = document.getElementById("map-ribeirao");
    const mapJaboticabal = document.getElementById("map-jaboticabal");
    const whatsappBtn = document.getElementById("contact-whatsapp-btn");
    const hoursLink = document.querySelector("#hours-text strong a");

    if (selectedLoc === "ribeirao") {
      if (addrRibeirao) addrRibeirao.classList.remove("d-none-custom");
      if (addrJaboticabal) addrJaboticabal.classList.add("d-none-custom");

      if (welcomeRibeirao) welcomeRibeirao.classList.remove("d-none-custom");
      if (welcomeJaboticabal) welcomeJaboticabal.classList.add("d-none-custom");

      if (mapRibeirao) mapRibeirao.classList.remove("d-none-custom");
      if (mapJaboticabal) mapJaboticabal.classList.add("d-none-custom");

      if (whatsappBtn) {
        whatsappBtn.href = "https://wa.me/5516996300387?text=Olá,%20visitei%20o%20seu%20site,%20gostaria%20de%20agendar%20uma%20primeira%20sessão%20em%20Ribeirão%20Preto!";
      }
      if (hoursLink) {
        hoursLink.href = "https://wa.me/5516996300387?text=Olá,%20visitei%20o%20seu%20site,%20gostaria%20de%20agendar%20uma%20primeira%20sessão%20em%20Ribeirão%20Preto!";
      }
    } else {
      if (addrRibeirao) addrRibeirao.classList.add("d-none-custom");
      if (addrJaboticabal) addrJaboticabal.classList.remove("d-none-custom");

      if (welcomeRibeirao) welcomeRibeirao.classList.add("d-none-custom");
      if (welcomeJaboticabal) welcomeJaboticabal.classList.remove("d-none-custom");

      if (mapRibeirao) mapRibeirao.classList.add("d-none-custom");
      if (mapJaboticabal) mapJaboticabal.classList.remove("d-none-custom");

      if (whatsappBtn) {
        whatsappBtn.href = "https://wa.me/5516996300387?text=Olá,%20visitei%20o%20seu%20site,%20gostaria%20de%20agendar%20uma%20primeira%20sessão%20em%20Jaboticabal!";
      }
      if (hoursLink) {
        hoursLink.href = "https://wa.me/5516996300387?text=Olá,%20visitei%20o%20seu%20site,%20gostaria%20de%20agendar%20uma%20primeira%20sessão%20em%20Jaboticabal!";
      }
    }

    // Handle floating WhatsApp bubble button (present on all pages)
    const bubbleWhatsappBtn = document.querySelector(".whatsapp-bubble .whatsapp-btn");
    if (bubbleWhatsappBtn) {
      if (selectedLoc === "ribeirao") {
        bubbleWhatsappBtn.href = "https://wa.me/5516996300387?text=Olá,%20visitei%20o%20seu%20site,%20gostaria%20de%20agendar%20uma%20primeira%20sessão%20em%20Ribeirão%20Preto!";
      } else {
        bubbleWhatsappBtn.href = "https://wa.me/5516996300387?text=Olá,%20visitei%20o%20seu%20site,%20gostaria%20de%20agendar%20uma%20primeira%20sessão%20em%20Jaboticabal!";
      }
    }
  }

  /**
   * Location Switcher Logic
   */
  function initLocationSwitchers() {
    const switchers = document.querySelectorAll(".location-switcher");

    switchers.forEach((switcher) => {
      const buttons = switcher.querySelectorAll(".btn-location");
      const slider = switcher.querySelector(".switcher-slider");

      function updateSliderPosition(activeBtn) {
        if (!activeBtn || !slider) return;
        slider.style.width = activeBtn.offsetWidth + "px";
        slider.style.left = activeBtn.offsetLeft + "px";
      }

      // Check URL parameters and hash first for shared links
      const urlParams = new URLSearchParams(window.location.search);
      let initialLoc = urlParams.get("location") || urlParams.get("loc") || window.location.hash.replace("#", "").toLowerCase();

      // Normalize parameters
      if (initialLoc === "ribeiraopreto" || initialLoc === "ribeirao-preto") {
        initialLoc = "ribeirao";
      }

      // If initialLoc is valid, save to localStorage to persist preference
      if (initialLoc === "ribeirao" || initialLoc === "jaboticabal") {
        localStorage.setItem("selected_location", initialLoc);
      }

      // Initialize switcher based on saved localStorage preference
      const savedLoc = localStorage.getItem("selected_location") || "ribeirao";
      const defaultActiveBtn = switcher.querySelector(".btn-location.active");
      const targetBtn = switcher.querySelector(`.btn-location[data-location="${savedLoc}"]`);

      if (targetBtn) {
        if (defaultActiveBtn && defaultActiveBtn !== targetBtn) {
          defaultActiveBtn.classList.remove("active");
          targetBtn.classList.add("active");
        }

        // Apply state changes immediately for the saved location
        applyLocationChange(savedLoc);

        // Wait a tiny bit for layout rendering to get correct dimensions
        setTimeout(() => updateSliderPosition(targetBtn), 150);
      }

      // Listen for window resize to recalculate slider position
      window.addEventListener("resize", () => {
        const currentActive = switcher.querySelector(".btn-location.active");
        if (currentActive) updateSliderPosition(currentActive);
      });

      buttons.forEach((btn) => {
        btn.addEventListener("click", function () {
          if (this.classList.contains("active")) return;

          // Toggle active classes on buttons
          buttons.forEach((b) => b.classList.remove("active"));
          this.classList.add("active");
          updateSliderPosition(this);

          const selectedLoc = this.getAttribute("data-location");

          // Save preference to localStorage
          localStorage.setItem("selected_location", selectedLoc);

          // Apply DOM modifications
          applyLocationChange(selectedLoc);
        });
      });
    });
  }

  initLocationSwitchers();

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
        const expandableContainer = expandableText.querySelector(".expandable-text-container");

        if (expandableContainer) {
          const isExpanded = expandableContainer.classList.toggle("expanded");
          this.textContent = isExpanded ? "Minimizar" : "Saiba mais";
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

    // Fechar ao clicar fora do balão
    document.addEventListener("click", (e) => {
      if (whatsappBubble.classList.contains("active") && !whatsappBubble.contains(e.target)) {
        whatsappBubble.classList.remove("active");
      }
    });
  }

  // --- INÍCIO DO ENVIO ASSÍNCRONO DO FORMULÁRIO DE CONTATO (WEB3FORMS) ---
  const contactForm = document.getElementById("contact-form");
  const formFeedback = document.getElementById("form-feedback");

  if (contactForm && formFeedback) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Configura feedback visual para estado de carregamento
      formFeedback.className = "form-response-message loading";
      formFeedback.style.display = "block";
      formFeedback.style.opacity = "1";
      formFeedback.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i> Enviando sua mensagem... Por favor, aguarde.';
      
      const formData = new FormData(contactForm);
      const json = JSON.stringify(Object.fromEntries(formData));

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: json
      })
        .then(async (response) => {
          let res = await response.json();
          if (response.status == 200) {
            formFeedback.className = "form-response-message success";
            formFeedback.innerHTML = '<i class="fas fa-check-circle me-2"></i> Mensagem enviada com sucesso! Entrarei em contato em breve.';
            contactForm.reset();
          } else {
            console.error("Erro no envio do formulário:", res);
            formFeedback.className = "form-response-message error";
            formFeedback.innerHTML = `<i class="fas fa-exclamation-circle me-2"></i> Ocorreu um problema: ${res.message || "Erro desconhecido"}`;
          }
        })
        .catch((error) => {
          console.error("Erro de conexão no formulário:", error);
          formFeedback.className = "form-response-message error";
          formFeedback.innerHTML = '<i class="fas fa-exclamation-circle me-2"></i> Não foi possível enviar a mensagem. Verifique sua conexão de rede.';
        })
        .then(() => {
          // Oculta a mensagem de feedback suavemente após 8 segundos
          setTimeout(() => {
            formFeedback.style.transition = "opacity 0.5s ease";
            formFeedback.style.opacity = "0";
            setTimeout(() => {
              formFeedback.style.display = "none";
              formFeedback.style.opacity = "1";
              formFeedback.style.transition = ""; // Limpa a transição inline
            }, 500);
          }, 8000);
        });
    });
  }
  // --- FIM DO ENVIO ASSÍNCRONO DO FORMULÁRIO DE CONTATO ---

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
