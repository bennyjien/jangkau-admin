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
