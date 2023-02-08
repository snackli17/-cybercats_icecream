var swiperGallary = new Swiper('.mySwiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiperReviews = new Swiper('.newSwiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
