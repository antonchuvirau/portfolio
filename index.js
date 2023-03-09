const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 4500,
  effect: 'fade',
  allowTouchMove: !1,
  autoplay: {
    delay: 4000,
  },
  fadeEffect: {
    crossFade: true,
  },
});

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
