# Portfólio Profissional - Tauana Pavanelli Psicanalista

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

Este é o código-fonte do site de portfólio profissional para a psicanalista Tauana Pavanelli. O projeto consiste em uma landing page estática e moderna, projetada para apresentar seus serviços, formação e informações de contato de forma clara e elegante.

## 🔗 Link para o Site

O site está no ar e pode ser acessado em: **[https://www.tauanapavanelli.com](https://www.tauanapavanelli.com)**

## 📸 Visualização

![Screenshot do site](httpso://i.imgur.com/u7fLdK0.png)

## ✨ Funcionalidades

- **Totalmente Responsivo:** Design que se adapta perfeitamente a desktops, tablets e celulares.
- **Menu de Navegação Moderno:** Menu fixo no topo com efeito de transparência ("Glassmorphism") ao rolar a página.
- **Scrollspy:** O link do menu correspondente à seção visível na tela fica ativo automaticamente.
- **Animações de Entrada:** Elementos surgem suavemente na tela conforme o usuário rola a página, utilizando a biblioteca AOS (Animate On Scroll).
- **Carrossel Interativo:** Slider de imagens moderno e fluido na seção principal, implementado com SwiperJS.
- **Interatividade:** Efeitos de `hover` em botões e cards de serviço para uma melhor experiência do usuário.
- **Texto Expansível:** Seção "Sobre Mim" com um botão "Saiba mais" para mostrar e esconder um bloco de texto detalhado.
- **Cache-Busting Manual:** Implementação de versionamento (`?v=1.0`) nos arquivos CSS e JS para garantir que os usuários sempre vejam a versão mais recente do site.
- **Integração:** Scripts do Google Analytics e Google Tag Manager para monitoramento de tráfego.

## 🛠️ Tecnologias Utilizadas

- **Frontend:** HTML5, CSS3, JavaScript (ES6)
- **Frameworks e Bibliotecas:**
  - [Bootstrap 5](https://getbootstrap.com/): Para a estrutura de layout e componentes responsivos.
  - [SwiperJS](https://swiperjs.com/): Para o carrossel de imagens da seção Hero.
  - [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/): Para as animações de rolagem.
  - [Font Awesome](https://fontawesome.com/): Para os ícones.
  - [Google Fonts](https://fonts.google.com/): Para as fontes personalizadas (Raleway e Nunito Sans).

## 🚀 Como Executar o Projeto

Este é um projeto puramente estático (frontend), então não há necessidade de um servidor complexo ou processo de compilação.

1.  Faça o download ou clone este repositório para o seu computador.
2.  Navegue até a pasta onde os arquivos foram salvos.
3.  Abra o arquivo `index.html` diretamente no seu navegador de preferência (Google Chrome, Firefox, etc.).

## 📂 Estrutura de Arquivos

A estrutura do projeto está organizada da seguinte forma:

```
/
├── css/
│   └── style.css        # Folha de estilos principal
├── img/
│   ├── profile1.png
│   ├── hero-img.jpg
│   └── ... (outras imagens)
├── js/
│   └── main.js          # Script principal com todas as funcionalidades
├── .htaccess            # Arquivo de configuração para URLs amigáveis (Apache)
├── index.html           # Página principal
├── contact.html         # Página de contato
└── README.md            # Este arquivo
```

## 🎨 Customização

- **Cores:** As cores principais do site são definidas como variáveis CSS no topo do arquivo `css/style.css`, dentro do seletor `:root`. Para alterar a paleta de cores do site, basta modificar esses valores.
- **Fontes:** As fontes (Raleway e Nunito Sans) são importadas do Google Fonts diretamente nos arquivos `index.html` e `contact.html` e aplicadas no `style.css`.
- **Conteúdo:** Todo o conteúdo de texto e as referências de imagens podem ser editados diretamente nos arquivos `.html`.
- **Cache:** Ao fazer alterações nos arquivos `style.css` ou `main.js`, lembre-se de atualizar o número da versão nos links dentro dos arquivos `.html` (ex: de `style.css?v=1.0` para `style.css?v=1.1`) para forçar a atualização no navegador dos visitantes.

## ✒️ Autor

Desenvolvido por **Alessandro Tostes** ([tostesdev.com](https://tostesdev.com/)).

---
