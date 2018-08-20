$(document).ready(function(){
  var link = $('.main-nav__toggle');
  var link_active = $('.blockmenu_active');
  var menu = $('.blockmenu');
  var close = $('.blockmenu-close');


  link.click(function(){
    // link.toggleClass('menu-link_active');
    // menu.toggleClass('blockmenu_active');
    menu.addClass('blockmenu_active');
    link.css('display', 'none');
  });
  close.click(function(){
    menu.removeClass('blockmenu_active');
  });
  close.click(function(){
    // menu.toggleClass('blockmenu');
    link.css('display', 'block');
});

});

// $('.mobile-menu-close').on('click', function(){
    //             // $('.mobile-menu-block').fadeOut();
    //             $('.mobile-menu-block').css('display', 'none');
    //             // $('.page-header').removeClass('mobile-menu-block');
    //   });



// $(document).ready(function(){
//   var link = $('.menu-link');
//   var link_active = $('.menu-link_active');
//   var menu = $('.menu');

//   link.click(function(){
//     link.toggleClass('menu-link_active');
//     menu.toggleClass('menu_active');
//   });
//   link_active.click(function(){
//     link.removeClass('menu-link_active');
//   });


// });

// $(document).ready(function () {

//   var carousel = $("#waterwheel-carousel").waterwheelCarousel({
//     separation: 330,
//     separationMultiplier: 1,
//     horizonOffsetMultiplier: 0,
//     sizeMultiplier: 1,
//     speed: 500,
//     startingItem: 1,
//     opacityMultiplier: 0
//   });

//    $('.slider1-move-left').bind('click', function() {
//    carousel.prev();
//    return false
//  });

//  $('.slider1-move-right').bind('click', function() {
//    carousel.next();
//    return false;
//  });

//  var carousel2 = $("#waterwheel-carousel-center").waterwheelCarousel({
//     separation: 330,
//     separationMultiplier: 3,
//     horizonOffsetMultiplier: 1,
//     sizeMultiplier: 0.6,
//     speed: 300
//   });

//     $('.slider2-move-left').bind('click', function() {
//    carousel2.prev();
//    return false
//  });

//  $('.slider2-move-right').bind('click', function() {
//    carousel2.next();
//    return false;
//  });
 
// // slide
//   function scrollLink() {
//     $(function(){
//             $(".scrolllink").click(function(){
//                     var _href = $(this).attr("href");
//                     $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
//                     return false;
//             });
//     });
//   }


// // media
  // var doc_w = $(document).width();
  // if ( doc_w <= 1199 ) {

    // $('.navigation-block__button').on('click', function(){
    //   $('.page-header').append('<div class="mobile-menu-block">'
    //     + '<div class="mobile-menu">'
    //     + '<a class="navigation__items-link mobile-item" href="#">About</a>'
    //     + '<a class="navigation__items-link mobile-item" href="#">Gallery</a>'
    //     + '<a class="navigation__items-link mobile-item scrolllink" href="#">Link</a>'
    //     + '<a class="navigation__items-link mobile-item scrolllink" href="#">Photo</a>'
    //     + '<a class="navigation__items-link mobile-item scrolllink" href="#">Contact</a>'
    //     + '</div>'
    //     + '<div class="mobile-menu-close"></div>'
    //     + '</div>')});

    //   $('.mobile-item').on('click', function(){
    //     $('.mobile-menu-block').css('display', 'none');
    //   });

    //   $('.mobile-menu-close').on('click', function(){
    //             // $('.mobile-menu-block').fadeOut();
    //             $('.mobile-menu-block').css('display', 'none');
    //             // $('.page-header').removeClass('mobile-menu-block');
    //   });

//     });

// }

  // click on .navigation-block__button
  
  // var blockmenu = $('<div class="blockmenu">'
  //                 + '<div class="blockmenu-close"></div>'
  //                 + '<a class="navigation__items-link blockmenu-item scrolllink" href="#about">About</a>'
  //                 + '<a class="navigation__items-link blockmenu-item scrolllink" href="#gallery">Gallery</a>'
  //                 + '<a class="navigation__items-link blockmenu-item scrolllink" href="#link">Link</a>'
  //                 + '<a class="navigation__items-link blockmenu-item scrolllink" href="#photo">Photo</a>'
  //                 + '<a class="navigation__items-link blockmenu-item scrolllink" href="#contact">Contact</a>'
  //                 + '</div>');
  
  // $('.navigation-block__button').on('click', function(){
   
  //   console.log('click');
  //   $('.page-header').append(blockmenu);

  //   $('.blockmenu').animate({
  //           right: '0'
  //       }, 200);

  //   $('.blockmenu-close').on('click', function(){
  //     $('.blockmenu').animate({
  //           right: '-100px'
  //       }, 200);
  //   });

  //     $('.mobile-menu-close').on('click', function(){
  //               $('.mobile-menu-block').fadeOut();
                
  //     });


    // $('.blockmenu-item').on('click', function(){
    //   $('.blockmenu').animate({
    //         right: '-30%'
    //     }, 200);
    // });

  //   $(document).mouseup(function (e) {
  //       if ($('.blockmenu').has(e.target).length === 0){
  //         $('.blockmenu').animate({
  //         right: '-30%'
  //         }, 200);
  //       }
  //     });

  // scrollLink();

  // });
      
// });



  // var link = document.querySelector(".main-nav__toggle");
  // var popup = document.querySelector(".side-menu");
  // var close = popup.querySelector(".log-out");

  // link.addEventListener("click", function(event) {
  //       event.preventDefault();
  // if (popup.classList.contains("side-menu-show")) {
  //   popup.classList.remove("side-menu-show");

  // } else {
  //   popup.classList.add("side-menu-show");
    
  // }

  // });

  //   close.addEventListener("click", function(event) {
  //     event.preventDefault();
  //     popup.classList.remove("side-menu-show");
  //     popupMenu.classList.remove("main-nav-show");
  //     popupBody.classList.remove("cards-show");
  //   });

  // window.addEventListener("keydown", function(event) {
  //   if (event.keyCode === 27) {
  //     if (popup.classList.contains("side-menu-show")) {
  //       popup.classList.remove("side-menu-show");
  //       popupMenu.classList.remove("main-nav-show");
  //       popupBody.classList.remove("cards-show");
  //     }
  //   }
  // });



