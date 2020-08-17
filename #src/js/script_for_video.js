$(document).ready(function ($) {
    "use strict";
    
    /* activate pause for lightbulb video if scrolled out of viewport */
	$(window).scroll(function() {
		$('video').each(function(){
			if ($(this).is(":in-viewport( 400 )")) {
				$(this)[0].play();
			} else {
				$(this)[0].pause();
			}
		});
	});
});