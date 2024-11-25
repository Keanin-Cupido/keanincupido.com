export default function PageHero({ pageName, pageSubText }) {
	return (
		<header className="mt-24">
			<div
				className="w-full relative mb-8 mx-4 font-normal text-left flex flex-col items-start justify-start"
				aria-labelledby="heading-title">
				<h1
					id="heading-title"
					className="text-[clamp(28px,2.5vw,36px)] font-medium"
					tabIndex="0">
					{pageName}
				</h1>
				<p
					className="w-full text-[clamp(18px,1.15vw,24px)] opacity-80 font-light tracking-wider"
					aria-describedby="heading-description">
					<span id="heading-description">{pageSubText}</span>
				</p>
			</div>
		</header>
	);
}
