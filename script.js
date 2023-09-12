const initSmoothScroll = () => {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  const scrollToSection = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
};

initSmoothScroll();

const initScrollAnimation = () => {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const halfWindow = window.innerHeight * 0.6;

    const animateScroll = () => {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - halfWindow < 0;
        if (isSectionVisible) section.classList.add("ativo");
      });
    };

    animateScroll();

    window.addEventListener("scroll", animateScroll);
  }
};

initScrollAnimation();
