const slidesContainer = document.querySelector('.slides-container');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

function showSlide(index) {
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });

  prevBtn.classList.toggle("hidden", index === 0);
  nextBtn.classList.toggle("hidden", index === slides.length - 1);
}

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    showSlide(currentIndex);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    showSlide(currentIndex);
  }
});

showSlide(currentIndex);
