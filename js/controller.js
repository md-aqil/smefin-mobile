
 $( ".tabs" ).tabs();
 
// var galleryThumbs = new Swiper('.gallery-thumbs', {
//   effect: 'coverflow',
//       grabCursor: true,
//       centeredSlides: true,
//       slidesPerView: 'auto',
//   spaceBetween: 10,
//       coverflowEffect: {
//         rotate: 0,
//         stretch: 0,
//         depth: 40,
//         modifier: 6,
//         slideShadows : false,
//       },
//   });
var swiper = new Swiper('.swiper-container.swiper-pagination', {
 
});
  
var testimonial = new Swiper('.swiper-container.testimonial', {
  loop:true,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    
  },

  });


$( function() {
  $( "input[type='radio']" ).checkboxradio({
    icon: false
  });
} );

$('a.page').click(function(){
  $(this).parent('li').addClass('active').siblings('li').removeClass('active');
  $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top
  }, 1000);
  return false;
});

$('body').scrollspy({ target: '#navbar-example2' });



var text = $('.tl-parent .btn-link').click(function() {
  if ($(this).text() === text) {
    $(this).text("View Less");
  } else {
    $(this).text(text);
  }
  $(this).parents('.tl-parent').toggleClass('this-active');
  $(this).parents('.tl-parent').find('.table-list-accrodian').slideToggle();
}).text();



$( function() {
  $( ".accordion" ).accordion({
    icon: false,
    // collapsible: true,
    // active: false,
    animate: false
  });

  
} );


$(document).ready(function() {
  $('ul#filter a').click(function() {
    $(this).parent('li').addClass('active').siblings().removeClass('active');
    var filterName = $(this).text().toLowerCase().replace(' ', '-');

    if (filterName == "all") {
      $('ul#portfolio li.hidden').fadeIn('slow').removeClass('hidden');
    } 
    else {
      $('ul#portfolio li').each(function() { 
        if(!$(this).hasClass(filterName)){
 $(this).fadeOut('normal').addClass('hidden');              
        }
else {
  $(this).fadeIn('normal').removeClass('hidden');
}
      })
    }
   return(false); 
  })

});

$('[slider]').each(function() {
  var container = $(this);
  var element = container.find('[handler]');
  
  var controlsContainer = container.find('[controls]');
  element.slider({
    min: parseInt(element.attr("min") || 0),
    max: parseInt(element.attr('max') || 0),
    value: parseInt(element.attr('value')),
    range: "min",
    slide: function(e, ui) {
      console.log("slided");
      var control = controlsContainer.find('[value="'+ ui.value +'"]');
      control.addClass("active").siblings().removeClass("active");
    }
  });
  element.slider("value", 1);
  controlsContainer.find('[value]').click(function() {
    var control = $(this);
    console.log("value", $(this).attr("value"));
    element.slider("value", $(this).attr("value"));
    control.addClass("active").siblings().removeClass("active");
  });
});
ScrollOut({
  cssProps: {
    visibleY: true,
    viewportY: true
  },
});


$(window).scroll(function(){
  var sticky = $('.sticky-header'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});

// menu

(function($){
  
  $(".menu-icon").on("click", function(){
    	$(this).toggleClass("open");
    	$(".container").toggleClass("nav-open");
    	$("nav ul li").toggleClass("animate");
  });
  
})(jQuery);

var swiper = new Swiper('.swiper-container.top-brand', {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  loop:true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

$('.navbar-toggler').click(function() {
  $(this).toggleClass('nav-cross')
})
