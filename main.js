const swiper = new Swiper('.swiper', {
    // Optional parameters
    
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,

  
    
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    breakpints: {
      992: {slidesPerView: 3},
      768: {slidesPerView: 2},
      480: {slidesPerView: 1},
    },
  });
  