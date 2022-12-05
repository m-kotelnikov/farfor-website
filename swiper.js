$(".slider-main_component").each(function(index) {
  const swiper = new Swiper($(this).find(".swiper")[0], {
    slidesPerView: 2,
    speed: 700,
    keyboard: true,
    // mousewheel: true,
    mousewheel: {
      forceToAxis: true,
    },
    spaceBetween: "2%"
  })
})
