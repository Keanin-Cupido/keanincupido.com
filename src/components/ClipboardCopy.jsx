import { Children } from 'react';

export default function ClipboardCopy({ children, copyMessage }) {
	$(function () {
		var clipboard = new ClipboardJS('#copy');

		clipboard.on('success', function (e) {
			// Change button text to "Copied"
			$('#copy').text(copyMessage || 'Copied!');

			// Reset button text to "Copy" after 2 seconds
			setTimeout(function () {
				$('#copy').text('keanin16@gmail.com');
			}, 2000);
		});
	});

	return (
		<>
			{Children.map(children, (child, index) => (
				<div key={index} className="block">
					{child}
				</div>
			))}
		</>
	);
}
