export const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    const MARGIN_DESKTOP = 100
    const MARGIN_MOBILE = 30

    if (section) {
      window.scrollTo({
        behavior: "smooth",
        top:
          section.getBoundingClientRect().top -
          document.body.getBoundingClientRect().top -
          (window.innerWidth >= 768 ? MARGIN_DESKTOP : MARGIN_MOBILE),
      });
    }
  };