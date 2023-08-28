const form = document.getElementById('multi-step-form');
const steps = form.querySelectorAll('.step');
const prevButtons = form.querySelectorAll('.prev-step');
const nextButtons = form.querySelectorAll('.next-step');
const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');

let currentStep = 0;
let currentActive = 1;

function showStep(stepIndex) {
  steps.forEach((step, index) => {
    step.style.display = index === stepIndex ? 'block' : 'none';
  });
}

function updateProgress() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('actived');
    } else {
      circle.classList.remove('actived');
    }
  });

  const actives = document.querySelectorAll('.actived');
  progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
}

function nextStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    currentActive++;
    showStep(currentStep);
    updateProgress();
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    currentActive--;
    showStep(currentStep);
    updateProgress();
  }
}

function scrollToTop(params) {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

nextButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    nextStep();
    scrollToTop();
  });
});

prevButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    prevStep();
    scrollToTop();
  });
});

showStep(currentStep);
updateProgress();
