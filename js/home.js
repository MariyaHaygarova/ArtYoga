$(window).scroll(function(){
				if ($(this).scrollTop() > 100) {
					$('.scroll-top').fadeIn();
				} else {
					$('.scroll-top').fadeOut();
				}

				//Click event to scroll to top
			$('.scroll-top').click(function(){
				$('html, body').animate({scrollTop : 0},800);
				return false;
				});
			});
