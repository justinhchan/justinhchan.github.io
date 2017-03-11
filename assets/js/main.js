(function($) {

	$(function() {

		var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

		// Disable animations until the page has loaded
		$body.addClass('is-loading');

		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-loading');
			}, 150);
		});

		// Scrolly.
		$('.scrolly')
		.scrolly({
			speed: 1500,
			offset: $header.outerHeight()
		});

		// Header.
		$window.on('resize', function() { $window.trigger('scroll'); });

		$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });



	});

})(jQuery);
