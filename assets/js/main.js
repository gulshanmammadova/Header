$(document).ready(function () {
  $(".slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".single-item").slick({
    autoplay: true,
    arrows: false,
    infinite: true,
    autoplaySpeed: 2000,
  });
});
