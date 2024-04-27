
/***************************************************
Navigation Toggle and Spinning Text Effect
***************************************************/


const str = "CREATIVE WEB DEVELOPER PORTFOLIO";
const text = document.getElementById("text");
window.onload = () => {
  for (let i = 0; i < str.length; i++) {
    let span = document.createElement("span");
    span.innerHTML = str[i];
    text.appendChild(span);
    span.style.transform = `rotate(${11 * i}deg)`;
  }
};

const strMobile = "CREATIVE WEB DEVELOPER PORTFOLIO";
const textMobile = document.getElementById("text-mobile");
window.onload = () => {
  for (let i = 0; i < str.length; i++) {
    let span = document.createElement("span");
    span.innerHTML = str[i];
    text.appendChild(span);
    span.style.transform = `rotate(${11 * i}deg)`;
  }
};

/***************************************************
Hero Flip Text Effect
***************************************************/
document.querySelectorAll('.flip-text').forEach(flipText => {
  const textContent = flipText.textContent.trim();
  flipText.textContent = '';

  textContent.split('').forEach(char => {
    const letterSpan = document.createElement('span');
    letterSpan.classList.add('letter');
    letterSpan.textContent = char;
    flipText.appendChild(letterSpan);
  });

  const letters = flipText.querySelectorAll('.letter');
  let hoverTimeouts = [];

  letters.forEach((letter, index) => {
    letter.addEventListener('mouseover', () => handleMouseOver(index));
    letter.addEventListener('mouseout', () => handleMouseOut(index));
  });

  function handleMouseOver(index) {
    clearTimeout(hoverTimeouts[index]);
    letters[index].classList.add('animating');
  }

  function handleMouseOut(index) {
    hoverTimeouts[index] = setTimeout(() => {
      letters[index].classList.remove('animating');
    }, 400);
  }
});


/***************************************************
Work Cards Slider
***************************************************/
const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');
const cardWidth = 500;

cards.forEach((card) => {
  const clone = card.cloneNode(true);
  carousel.appendChild(clone);
});

cards.forEach((card) => {
    const clone = card.cloneNode(true);
    carousel.appendChild(clone);
  });
cards.forEach((card) => {
    const clone = card.cloneNode(true);
    carousel.appendChild(clone);
  });

let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = null;

carousel.addEventListener('mousedown', (e) => {
  if (!isDragging) {
    isDragging = true;
    startPosition = e.clientX;
    prevTranslate = currentTranslate;
    cancelAnimationFrame(animationID);
    carousel.style.transition = 'none';
    carousel.querySelectorAll('img').forEach(img => img.style.pointerEvents = 'none');
  }
});

carousel.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const currentPosition = e.clientX;
    currentTranslate = prevTranslate + currentPosition - startPosition;
    carousel.style.transform = `translateX(${currentTranslate}px)`;
  }
});

carousel.addEventListener('mouseup', () => {
  if (isDragging) {
    isDragging = false;
    carousel.style.transition = 'transform 0.5s ease';
    carousel.querySelectorAll('img').forEach(img => img.style.pointerEvents = 'auto');
  }
});

carousel.addEventListener('mouseleave', () => {
  if (isDragging) {
    isDragging = false;
    carousel.style.transition = 'transform 0.5s ease';
    carousel.querySelectorAll('img').forEach(img => img.style.pointerEvents = 'auto');
  }
});
const sensitivity = 1.7; // Adjust this value to increase or decrease dragging power

carousel.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const currentPosition = e.clientX;
    currentTranslate = prevTranslate + (currentPosition - startPosition) * sensitivity;
    carousel.style.transform = `translateX(${currentTranslate}px)`;
  }
});



function animate() {
  carousel.style.transform = `translateX(${currentTranslate}px)`;
  animationID = requestAnimationFrame(animate);
}

animate();
