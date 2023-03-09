const buttonOpen = document.getElementById('menuButtonOpen');
const menu = document.getElementById('menu');

buttonOpen.addEventListener('click', () => {
  if (buttonOpen.classList.toString().includes('disabled')) {
    menu.classList.add('visible');
    menu.classList.remove('hidden');
    buttonOpen.classList.add('active');
    buttonOpen.classList.remove('disabled');
    document.body.style.overflowY = 'hidden';

    return;
  }

  menu.classList.add('hidden');
  menu.classList.remove('visible');
  buttonOpen.classList.remove('active');
  buttonOpen.classList.add('disabled');
  document.body.style.overflowY = 'scroll';
});

AOS.init();
const swiper = new Swiper('.mySwiper', {
  centeredSlides: true,
  noSwiping: true,
  noSwipingClass: 'swiper-slide',
  effect: 'fade',
  fadeEffect: { crossFade: true },
  speed: 3000,
  autoplay: {
    delay: 3500,
    disableOnInteraction: true,
  },
});
