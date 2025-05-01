
 
  const slider = document.getElementById('slider');
const startBtn = document.querySelector('.explore-slider-button');
const modal = document.getElementById('modal');
const closeModal = document.querySelector('.explore-slider-modal-close');
const caseInfo = document.getElementById('explore-slider-modal-case-info');

const slides = Array.from(slider.children);
const slideWidth = 810;
let currentIndex = 0;
let isSpinning = false;
let spinInterval;
let spinSpeed = 100;

startBtn.addEventListener('click', startSpinning);

function startSpinning() {
  if (isSpinning) return;
  isSpinning = true;
  currentIndex = 0;
  slider.style.transition = 'none';
  slider.style.transform = `translateX(0px)`;

  spinInterval = setInterval(() => {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }
    slider.style.transition = 'transform 0.1s linear';
    slider.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
  }, spinSpeed);

  setTimeout(() => {
    stopSpinning();
  }, 2500);
}

function stopSpinning() {
  clearInterval(spinInterval);
  const randomIndex = Math.floor(Math.random() * slides.length);
  slider.style.transition = 'transform 0.5s ease';
  slider.style.transform = `translateX(${-slideWidth * randomIndex}px)`;

  setTimeout(() => {
    showModal(randomIndex);
    isSpinning = false;
  }, 600);
}

function showModal(index) {
  modal.style.display = 'flex';
  caseInfo.textContent = `Ви відкрили: ${slides[index].textContent}`;
}

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});
