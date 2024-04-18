const carouselInner = document.querySelector('.carousel-inner');
const dotsContainer = document.querySelector('.dots');
let currentIndex = 0;

function showSlide(index) {
  const images = [
    'https://picsum.photos/600/400?random=1',
    'https://picsum.photos/600/400?random=2',
    'https://picsum.photos/600/400?random=3',
    'https://picsum.photos/600/400?random=4'
  ];

  carouselInner.innerHTML = `<img src="${images[index]}" alt="Slide ${index+1}">`;

  updateDots(index);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % 4;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + 4) % 4;
  showSlide(currentIndex);
}

function updateDots(index) {
  const dots = ['●', '●', '●', '●'];
  dots[index] = '○';

  dotsContainer.innerHTML = '';

  dots.forEach((dot, i) => {
    const dotElement = document.createElement('span');
    dotElement.innerHTML = dot;
    dotElement.addEventListener('click', () => {
      showSlide(i);
    });
    dotsContainer.appendChild(dotElement);
  });
}

showSlide(currentIndex);