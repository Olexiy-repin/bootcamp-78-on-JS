const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};

const refs = {
  sections: document.querySelectorAll('.page-section'),
  targetSection: document.querySelector('.js-target-section'),
};

refs.sections.forEach(section => {
  const randomColor = getRandomColor();

  section.style.backgroundColor = randomColor;
});

const observerOptions = {
  root: null,
  rootMargin: '0px 0px 400px 0px',
  threshold: 1,
};

const observerCallback = entries => {
  if (entries[0].isIntersecting) {
    console.log('Observe');
  }
};

const observerInstance = new IntersectionObserver(observerCallback, observerOptions);

observerInstance.observe(refs.targetSection);
