$(function () {

  if (window.matchMedia("(min-width: 1200px) ").matches) {
      //hb-menu
      $('.menu-btn').on('click', function () {
        $('.hb-menu').toggleClass('is-active');
      });
      //story-about-us
      $('.story-about-us-img-area1').hover(function () {
        // over
        $('.main-contents-img-shadow1').css('display', 'block');
      }, function () {
        // out
        $('.main-contents-img-shadow1').css('display', 'none');
      }
      );
      $('.story-about-us-img-area2').hover(function () {
        // over
        $('.main-contents-img-shadow2').css('display', 'block');
      }, function () {
        // out
        $('.main-contents-img-shadow2').css('display', 'none');
      }
      );
      $('.story-about-us-img-area3').hover(function () {
        // over
        $('.main-contents-img-shadow3').css('display', 'block');
      }, function () {
        // out
        $('.main-contents-img-shadow3').css('display', 'none');
      }
      );
      //some-of-our-work
      $('.some-of-our-work-img-box1').hover(
        function () {
          $('.some-of-our-work-img-hover1').css('display', 'block');
        }, function () {
          $('.some-of-our-work-img-hover1').css('display', 'none');
        }
      );
      $('.some-of-our-work-img-box2').hover(
        function () {
          $('.some-of-our-work-img-hover2').css('display', 'block');
        }, function () {
          $('.some-of-our-work-img-hover2').css('display', 'none');
        }
      );
      $('.some-of-our-work-img-box3').hover(
        function () {
          $('.some-of-our-work-img-hover3').css('display', 'block');
        }, function () {
          $('.some-of-our-work-img-hover3').css('display', 'none');
        }
      );
      $('.some-of-our-work-img-box4').hover(
        function () {
          $('.some-of-our-work-img-hover4').css('display', 'block');
        }, function () {
          $('.some-of-our-work-img-hover4').css('display', 'none');
        }
      );
      $('.some-of-our-work-img-box5').hover(
        function () {
          $('.some-of-our-work-img-hover5').css('display', 'block');
        }, function () {
          $('.some-of-our-work-img-hover5').css('display', 'none');
        }
      );
      $('.some-of-our-work-img-box6').hover(
        function () {
          $('.some-of-our-work-img-hover6').css('display', 'block');
        }, function () {
          $('.some-of-our-work-img-hover6').css('display', 'none');
        }
      );
      $('.some-of-our-work-img-box7').hover(
        function () {
          $('.some-of-our-work-img-hover7').css('display', 'block');
        }, function () {
          $('.some-of-our-work-img-hover7').css('display', 'none');
        }
      );
  }
  $('.what-we-do-title-area1').on("click", function () {
    $('.what-we-do-text2').slideUp();
    $('.what-we-do-text3').slideUp();
    $('.what-we-do-text1').slideToggle();
    $('.arrow-down1').toggleClass('is-none');
    $('.arrow-up1').toggleClass('is-none');
    if ($('.arrow-down2').hasClass('is-none')) {
      $('.arrow-down2').toggleClass('is-none');
      $('.arrow-up2').toggleClass('is-none');
    }
    if ($('.arrow-down3').hasClass('is-none')) {
      $('.arrow-down3').toggleClass('is-none');
      $('.arrow-up3').toggleClass('is-none');
    }
  });
  $('.what-we-do-title-area2').on("click", function () {
    $('.what-we-do-text1').slideUp();
    $('.what-we-do-text3').slideUp();
    $('.what-we-do-text2').slideToggle();
    $('.arrow-down2').toggleClass('is-none');
    $('.arrow-up2').toggleClass('is-none');
    if ($('.arrow-down1').hasClass('is-none')) {
      $('.arrow-down1').toggleClass('is-none');
      $('.arrow-up1').toggleClass('is-none');
    }
    if ($('.arrow-down3').hasClass('is-none')) {
      $('.arrow-down3').toggleClass('is-none');
      $('.arrow-up3').toggleClass('is-none');
    }
  });
  $('.what-we-do-title-area3').on("click", function () {
    $('.what-we-do-text1').slideUp();
    $('.what-we-do-text2').slideUp();
    $('.what-we-do-text3').slideToggle();
    $('.arrow-down3').toggleClass('is-none');
    $('.arrow-up3').toggleClass('is-none');
    if ($('.arrow-down1').hasClass('is-none')) {
      $('.arrow-down1').toggleClass('is-none');
      $('.arrow-up1').toggleClass('is-none');
    }
    if ($('.arrow-down2').hasClass('is-none')) {
      $('.arrow-down2').toggleClass('is-none');
      $('.arrow-up2').toggleClass('is-none');
    }
  });
  if (window.matchMedia("(min-width: 1200px) ").matches) {
      //people
      $('.people-img-area1').hover(
        function () {
          $('.people-shadow1').css('display', 'block');
        }, function () {
          $('.people-shadow1').css('display', 'none');
        }
      );
      $('.people-img-area2').hover(
        function () {
          $('.people-shadow2').css('display', 'block');
        }, function () {
          $('.people-shadow2').css('display', 'none');
        }
      );
      $('.people-img-area3').hover(
        function () {
          $('.people-shadow3').css('display', 'block');
        }, function () {
          $('.people-shadow3').css('display', 'none');
        }
      );
    }
});