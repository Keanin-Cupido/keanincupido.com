import { Suspense } from 'react';
import { useImage } from 'react-image';
import { Button } from './ui/button';
import Heading from './Heading';

const ScribbleLine = () => {
	const { src } = useImage({
		srcList: '/scribble_line2.png',
		loading: 'lazy',
	});

	return (
		<img
			src={src}
			alt=""
			role="presentation"
			width={350}
			height={40}
			className="absolute -bottom-3 w-full max-w-[350px] h-10 invert opacity-50"
		/>
	);
};

const AboutSection = ({ title, content, isReversed }) => (
	<article
		className={`w-full mx-auto flex flex-col items-center md:flex-row${
			isReversed ? '-reverse' : ''
		} md:items-start justify-between gap-4 pt-24`}>
		<h3
			className={`w-3/4 text-[clamp(32px,4vw,64px)] font-bold text-center md:text-${
				isReversed ? 'right' : 'left'
			}`}>
			{title}
		</h3>
		<div
			className={`w-3/4 text-[clamp(16px,1.15vw,24px)] font-medium text-center md:text-${
				isReversed ? 'right' : 'left'
			} space-y-6`}>
			{content}
		</div>
	</article>
);

export default function About() {
	return (
		<section
			className="w-full mx-auto mt-responsive-container"
			aria-labelledby="about-heading">
			<div className="relative flex items-center justify-center">
				<Heading
					headingTop="Me"
					headingMiddle="About Keanin"
					headingShortDesc="Learn a little more about me."
					id="about-heading"
				/>
				<Suspense fallback={<div className="h-10" />}>
					<ScribbleLine />
				</Suspense>
			</div>

			<AboutSection
				title="From Curiosity to Craft..."
				content={
					<p>
						In{' '}
						<span className="underline underline-offset-2">
							2020
						</span>
						, I embarked on my journey into web development, sparked
						by curiosity and a desire to create. What began with a
						simple HTML/CSS tutorial quickly evolved into{' '}
						<span className="underline underline-offset-2">
							an all-consuming passion
						</span>
						. The ability to transform lines of code into visually
						stunning, interactive experiences captivated me
						completely. I found my true calling in frontend
						development, where I could blend analytical
						problem-solving with creative design, turning complex
						ideas into elegant, user-friendly interfaces that make a
						real impact.
					</p>
				}
			/>

			<AboutSection
				title="Origins & Inspiration..."
				content={
					<>
						<p>
							From my earliest memories, I've been captivated by
							the intersection of{' '}
							<span className="underline underline-offset-2">
								art and technology
							</span>
							. My journey began with traditional creative
							pursuits—sketching, digital art, and design—while
							simultaneously exploring the ever-evolving world of
							technology. Growing up during the digital
							revolution, I witnessed firsthand the transformation
							from basic devices to today's sophisticated devices,
							sparking a deep appreciation for how technology can
							enhance and transform human experiences.
						</p>
						<p>
							This curiosity led me to experiment with web
							development, teaching me valuable lessons about web
							design, user experience, and the importance of
							community-driven development. These early
							experiences with customization and optimization laid
							the foundation for my current passion in creating
							intuitive, performance-focused web applications.
						</p>
					</>
				}
				isReversed
			/>

			<div className="text-center p-8 mt-12">
				<Button
					asChild
					variant="defaultGradient"
					size="md"
					aria-label="Read more about me">
					<a href="/about">Read More</a>
				</Button>
			</div>
		</section>
	);
}
