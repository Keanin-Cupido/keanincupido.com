import PropTypes from 'prop-types';

export default function Heading({
	headingTop = '',
	headingMiddle = '',
	headingShortDesc = '',
}) {
	return (
		<div
			className="w-full mx-auto relative mb-[clamp(32px,5vh,64px)] font-normal text-center flex flex-col items-center justify-center"
			aria-labelledby="heading-title">
			<div className="mb-[clamp(16px,3vw,24px)]">
				<div
					className="inline-flex text-base text-[clamp(16px,0.75vw,24px)] text-primary tracking-wider"
					aria-hidden="true">
					<span>{headingTop || null}</span>
				</div>
			</div>
			<h1
				id="heading-title"
				className="text-[clamp(48px,6vw,180px)] font-medium"
				tabIndex="0">
				{headingMiddle || null}
			</h1>
			<p
				className="mx-auto w-full max-w-[400px] text-[clamp(18px,1.5vw,28px)] mt-[clamp(0.75em,1em,1.5em)] opacity-80 font-light tracking-wider"
				aria-describedby="heading-description">
				<span id="heading-description">{headingShortDesc || null}</span>
			</p>
		</div>
	);
}

Heading.propTypes = {
	headingTop: PropTypes.string,
	headingMiddle: PropTypes.string.isRequired,
	headingShortDesc: PropTypes.string,
};
