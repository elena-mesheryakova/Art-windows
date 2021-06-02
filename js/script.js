$(document).ready(function () {
//burger-menu
	$('.menu-burger').click(function() {
        $('.menu').toggleClass('active');
        $('.menu-burger').toggleClass('active');
        $('.header__border').toggleClass('active');
        $('.header-top__item-info').toggleClass('active');
    });


//modal window
    $('.popup-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});


//mask input 
	$("#mask-phone").mask("+7(999) 999-9999");
	$(".phone-calc").mask("+7(999) 999-9999");

//slider-reviews 

	$('.reviews__slider').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		dots: false,		
		responsive: [
			{
			  breakpoint: 1145,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			  }
			},
			{
				breakpoint: 800,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1,
				}
			  },

		  ]
	});


//slider-sertificat
	$('.sertificat__slider').slick({
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		dots: false,
		responsive: [
			{
			  breakpoint: 1900,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
			  }
			},
			{
				breakpoint: 990,
				settings: {
				  slidesToShow: 3,
				  slidesToScroll: 3,
				}
			  },
			  {
				breakpoint: 790,
				settings: {
				  slidesToShow: 2,
				  slidesToScroll: 1,
				}
			  },
			  {
				breakpoint: 540,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1,
				}
			  },
			
			  
			
		  ]
	});

//VISUAL CALC

	$('.visual-calc__item').click(function(e){
		e.preventDefault();

		$('.visual-calc__item').removeClass('visual-calc__item--active');
		$('.visual-calc__block').removeClass('visual-calc__block--active');

		$(this).addClass('visual-calc__item--active');
		$($(this).attr('href')).addClass('visual-calc__block--active')

	});
	
	$('.visual-calc__item:first').click();


//CALC TYPE WINDOW=============
	$('.calculation__type-label').click(function() {
		$(this).toggleClass('active');
		
	  });
	  $('.calculation__type-label').click(function(e) {
	
		$('.calculation__type-label').removeClass('active');
		$(this).addClass('active');
	  });

	  $('.calculation__type-label:first').click();
});


AOS.init({disable: 'phone'});