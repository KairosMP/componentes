const slides = document.querySelectorAll('.info_card');
const pageButtons = document.querySelectorAll('.page_btn');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

let currentIndex = 0;
let slideInterval;

const setActiveSlide = (index) => {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');

  pageButtons.forEach(button => button.classList.remove('active'));
  pageButtons[index].classList.add('active');
};

const goToSlide = (index) => {
  currentIndex = index;
  setActiveSlide(currentIndex);
};

const changeSlide = (index) => {
  currentIndex = (index + slides.length) % slides.length;
  setActiveSlide(currentIndex);
};

const startSlideInterval = () => {
  if (window.innerWidth > 768) {
    slideInterval = setInterval(() => {
      changeSlide(currentIndex + 1);
    }, 5000);
  }
};

const resetSlideInterval = () => {
  if (window.innerWidth > 768) {
    clearInterval(slideInterval);
    startSlideInterval();
  }
};

arrowLeft.addEventListener('click', () => {
  changeSlide(currentIndex - 1);
  resetSlideInterval();
});

arrowRight.addEventListener('click', () => {
  changeSlide(currentIndex + 1);
  resetSlideInterval();
});

pageButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    goToSlide(index);
    resetSlideInterval();
  });
});

slides.forEach(slide => {
  slide.addEventListener('mouseenter', () => {
    if (window.innerWidth > 768) {
      clearInterval(slideInterval);
    }
  });
  slide.addEventListener('mouseleave', () => {
    if (window.innerWidth > 768) {
      startSlideInterval();
    }
  });
});

window.addEventListener('resize', () => {
  resetSlideInterval();
  setActiveSlide(currentIndex);
});

setActiveSlide(currentIndex);
startSlideInterval();
