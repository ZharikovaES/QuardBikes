// dynamic adaptive

new DynamicAdapt("max").init();

// header menu on mobiles

// slider of header

const swiperHeader = new Swiper(".slider-header", {
    direction: "vertical",
    pagination: {
      el: ".pagination-header .swiper-pagination",
      clickable: true,
    },
  });

// slider of gallery

const swiperGallery = new Swiper(".slider-gallery", {
    pagination: {
      el: ".pagination-gallery .swiper-pagination",
      clickable: true,
    },
  });
