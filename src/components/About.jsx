import { Suspense } from 'react';
import { useImage } from 'react-image';
import { Button } from './ui/button';
import Heading from './Heading';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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
			width={300}
			height={30}
			className="absolute md:left-0 -bottom-3 w-full max-w-[200px] mx-auto md:mx-0 h-6 invert opacity-50"
		/>
	);
};

const AboutSection = ({ content }) => (
	<article className="w-full mx-auto flex flex-col items-center md:flex-row md:items-start justify-between gap-4">
		<div
			className={
				'w-full text-[clamp(18px,1.1vw,20px)] font-light text-center md:text-left'
			}>
			{content}
		</div>
	</article>
);

export default function About() {
	return (
		<section
			className="w-full mx-auto mt-responsive-container"
			aria-labelledby="about-heading">
			<div className="relative flex items-center justify-center mb-16">
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
				content={
					<p>
						In 2020, my curiosity led me to web development, starting with a basic HTML/CSS tutorial. What began as an interest soon became a passion, as I discovered the joy of turning code into interactive, visually engaging creations.<br /><br />
					</p>
				}
			/>

			<AboutSection
				content={
					<>
						<p>
						From a young age, I’ve been fascinated by the fusion of art and technology. My journey began with traditional creative outlets like sketching, digital art, and design, alongside an exploration of the rapidly advancing tech world. Growing up during the digital revolution, I watched basic tools evolve into sophisticated devices, deepening my appreciation for how technology enhances and reshapes human experiences.
						</p>
						<br />
						<p>
						This curiosity drove me to explore web development, where I learned key principles of web design, user experience, and the value of community-driven innovation. These early experiments in customization and optimization shaped my passion for building intuitive, performance-driven web applications.
						</p>
					</>
				}
			/>

			<div className="text-center md:text-left py-4 mt-4">
				<Link 
					to="/about" 
					className='font-medium transition-all duration-300 underline underline-offset-8 group'
					aria-label="Read More"
				>
					Read More 
					<ArrowRight className="inline ml-2 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
				</Link>
			</div>
		</section>
	);
}
