/* This file contains main script for website
 * Style related scripts is located in style.js
 */
/* global document jQuery Chart camelCase Choices qq */

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
	});
}

// chart
const chart = document.querySelectorAll('.js-chart');

const chartColor = [
	'#ff4d4f',
	'#ff7a45',
	'#ffa940',
	'#ffc53d',
	'#ffec3d',
	'#bae637',
	'#73d13d',
	'#36cfc9',
	'#40a9ff',
	'#597ef7',
	'#9254de',
	'#f759ab'
];

const barScale = {
	xAxes: [{
		gridLines: {
			display: false
		}
	}],
	yAxes: [{
		ticks: {
			beginAtZero: true
		},
	}]
};

chart.forEach(el => {
	const label = [],
		value = [];

	const elementId = el.id,
		id = camelCase(elementId);

	fetch(`${id}.json`)
		.then(blob => blob.json())
		.then(data => {
			label.push(...data.label);
			value.push(...data.value);

			const $id = document.querySelector(`#${elementId}`),
				type = $id.dataset.chartType || 'doughnut';

			$id.getContext('2d');

			const chartConfig = {
				type: type,
				data: {
					labels: label,
					datasets: [{
						backgroundColor: chartColor,
						borderWidth: 0,
						data: value
					}]
				},
				options: {
					legend: {
						display: type === 'doughnut' ? true : false,
						position: type === 'doughnut' ? 'right' : 'top',
						labels: {
							boxWidth: 11,
							fontSize: 11
						}
					},
					scales: type === 'bar' ? barScale : 0
				}
			};

			new Chart($id, chartConfig);
		})
	;
});

jQuery(document).ready(function($) {

	// initialize magnificPopup
	$('.js-popup-link').magnificPopup({
		type: 'inline',
		mainClass: 'mfp-animation',
		removalDelay: 200
	});

});
