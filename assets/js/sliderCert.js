const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slider img");
    const navButtons = document.querySelectorAll(".slider-nav a");
    let currentIndex = 0;
    const delay = 10000;

    function goToSlide(index) {
      slider.scrollTo({
        left: index * slider.clientWidth,
        behavior: "smooth",
      });

      navButtons.forEach((btn, i) => {
        btn.classList.toggle("active", i === index);
      });
      currentIndex = index;
    }

    navButtons.forEach((btn, i) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        goToSlide(i);
      });
    });

    setInterval(() => {
      let nextIndex = currentIndex + 1;
      if (nextIndex >= slides.length) {
        nextIndex = 0;
      }
      goToSlide(nextIndex);
    }, delay);

    slider.addEventListener("scroll", () => {
      const index = Math.round(slider.scrollLeft / slider.clientWidth);
      navButtons.forEach((btn, i) => {
        btn.classList.toggle("active", i === index);
      });
      currentIndex = index;
    });