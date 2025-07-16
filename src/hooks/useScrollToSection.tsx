export const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        behavior: "smooth",
        top:
          section.getBoundingClientRect().top -
          document.body.getBoundingClientRect().top -
          30,
      });
    }
  };