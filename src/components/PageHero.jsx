export default function PageHero({ pageName, pageSubText }) {
	return (
		<header className="mt-24">
			<div
				className="w-full mx-auto relative mb-[clamp(32px,5vh,64px)] font-normal text-center flex flex-col items-center justify-center"
				aria-labelledby="heading-title">
				<h1
					id="heading-title"
					className="text-[clamp(42px,6vw,96px)] font-medium"
					tabIndex="0">
					{pageName}
				</h1>
				<p
					className="mx-auto w-full max-w-[600px] text-[clamp(18px,1.35vw,26px)] mt-[clamp(0.75em,1em,1.5em)] opacity-80 font-light tracking-wider"
					aria-describedby="heading-description">
					<span id="heading-description">{pageSubText}</span>
				</p>
			</div>
		</header>
	);
}
