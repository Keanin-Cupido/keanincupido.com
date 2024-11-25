import PropTypes from 'prop-types';

export default function Heading({
	headingMiddle = '',
	headingShortDesc = '',
}) {
	return (
		<div
			className="w-full relative mb-8 font-normal text-center md:text-left flex flex-col items-center md:items-start justify-start"
			aria-labelledby="heading-title">
			<h1
				id="heading-title"
				className="text-[clamp(24px,2vw,36px)] font-medium"
				tabIndex="0">
				{headingMiddle || null}
			</h1>
			<p
				className="w-full text-[clamp(16px,1vw,20px)] opacity-80 font-light tracking-wider"
				aria-describedby="heading-description">
				<span id="heading-description">{headingShortDesc || null}</span>
			</p>
		</div>
	);
}

Heading.propTypes = {
	headingMiddle: PropTypes.string.isRequired,
	headingShortDesc: PropTypes.string,
};
