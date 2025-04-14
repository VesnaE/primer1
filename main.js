const swiper = new Swiper('.mySwiper', {
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

  const swiperCat = new Swiper('.slider-cat', {
    // Optional parameters
    
   
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,

  
    
  
    // pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
    // And if we need scrollbar
    breakpints: {
      992: {slidesPerView: 4},
      768: {slidesPerView: 2},
      480: {slidesPerView: 1},
    },
  });
 