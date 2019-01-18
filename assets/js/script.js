/* This file contains main script for website
 * Style related scripts is located in style.js
 */
/* global document jQuery */

// init Choices
const $choice = document.querySelectorAll('.js-choice');
if ($choice.length) {
	$choice.forEach(element => {
		if (!(element.offsetHeight === 0 && element.offsetWidth === 0)) {
			new Choices(element, {
				shouldSort: false
			});
		}
	});
}

// initialize Fine Uploader
var $uploader = document.querySelectorAll('.js-uploader');

if ($uploader.length) {
	$uploader.forEach(el => {
		new qq.FineUploader({
			element: el
		});
	})
}

jQuery(document).ready(function($) {

	// initialize magnificPopup
	$('.js-popup-link').magnificPopup({
		type: 'inline',
		mainClass: 'mfp-animation',
		removalDelay: 200
	});

});
