const storySwiper = new Swiper('.swiper-container', {
  direction: 'vertical',       // Instagram Story ની જેમ ઉપર-નીચે સ્વાઇપ
  loop: false,
  speed: 500,
  mousewheel: true,
  keyboard: { enabled: true },

  // ઓટોમેટિક આગળ વધે (દરેક સ્લાઇડ 4 સેકંડ) + યુઝર જાતે સ્વાઇપ પણ કરી શકે
  autoplay: {
    delay: 4000,
    disableOnInteraction: false, // યુઝર સ્વાઇપ કરે પછી પણ autoplay ચાલુ રહે
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
