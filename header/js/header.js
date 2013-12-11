// ------------------------------------
// Skift header JavaScript library
// ------------------------------------

jQuery(document).ready(function() {

	// Mobile menu pulldown
	jQuery('#mobile-nav-container #logo-mobile a').click(function() {
		jQuery('#primary-nav, #product-nav').slideToggle();
		return false;
	});

});
