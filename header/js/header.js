// ------------------------------------
// Skift header JavaScript library
// ------------------------------------

jQuery(document).ready(function() {

	// Mobile menu pulldown
	jQuery('#mobile-nav-container #logo-mobile a').click(function() {
		jQuery('#primary-nav, #product-nav').slideToggle();
		return false;
	});

	// Resets any jQuery styling with desktop layout
	enquire.register("screen and (min-width:960px)", function() {
		jQuery('#primary-nav, #product-nav').attr('style','');
	});

});
