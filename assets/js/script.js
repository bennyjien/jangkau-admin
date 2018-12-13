/* This file contains main script for website
 * Style related scripts is located in style.js
 */
/* global document */

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

// jQuery(document).ready(function($) {
// 	$('.js-select2').select2({ width: '100%' });
// });
