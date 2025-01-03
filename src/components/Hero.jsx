import React, { Suspense } from 'react';
import { useImage } from 'react-image';
import { personalInfo } from '@/lib/data/data';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { FlipWords } from './ui/flip-words';
import LoadingSpinner from '@/components/ui/loading';

const HeroImage = () => {
	const { src } = useImage({
		srcList: '/sw_haikei.svg',
		loading: <LoadingSpinner />,
	});

	return (
		<img
			src={src}
			alt="Decorative background shapes"
			className="-z-10 absolute inset-0 w-full h-full object-cover opacity-20 rounded-2xl"
			loading="lazy"
			decoding="async"
			aria-hidden="true"
		/>
	);
};

const ScribbleLine = () => {
	const { src } = useImage({
		srcList: '/scribble_line.png',
		loading: <LoadingSpinner />,
	});

	return (
		<img
			src={src}
			alt=""
			className="absolute -bottom-[6px] w-[200px] h-[10px] invert opacity-30"
			loading="lazy"
			decoding="async"
			aria-hidden="true"
		/>
	);
};

export default function Hero() {
	const technologies = ['React.', 'Astro.js.', 'Next.js.', 'Svelte.'];

	return (
		<section
			className="relative flex min-h-[calc(45vh)] border border-blue-600/40 flex-col items-center justify-center py-20 mt-2 mb-4 bg-gradient-to-b from-blue-600/5 to-blue-900/0 rounded-2xl"
			aria-labelledby="hero-heading">
			<Suspense fallback={<LoadingSpinner />}>
				<HeroImage />
			</Suspense>

			<div className="flex h-full flex-col items-center justify-center px-4 mx-auto text-center">
				<img
					src="/keanincupido.svg"
					alt={`${personalInfo.name}'s avatar`}
					className="w-16 h-16 mb-4 rounded-lg"
					width="64"
					height="64"
					loading="lazy"
					decoding="async"
				/>

				<h1
					id="hero-heading"
					className="text-[clamp(32px,2vw,48px)] font-bold mb-2">
					{personalInfo.name}
				</h1>

				{/* <h2 className="relative flex items-center justify-center text-[clamp(16px,1vw,24px)] text-muted-foreground mb-6 -mt-2">
					<span className="relative z-10">{personalInfo.title}</span>
					<Suspense fallback={<LoadingSpinner />}>
						<ScribbleLine />
					</Suspense>
				</h2> */}

				<h3 className="relative flex items-center justify-center text-[clamp(16px,1vw,20px)] text-muted-foreground mb-6">
					<span className="relative z-10 flex items-center justify-center gap-2 mb-1"> <p className='w-1 h-1 rounded-full bg-blue-500'></p>Cape Town, South Africa</span>
					<Suspense fallback={<LoadingSpinner />}>
						<ScribbleLine />
					</Suspense>
				</h3>

				<p className="text-[clamp(16px,1.1vw,24px)] mb-8 max-w-[clamp(300px,75vw,600px)] mx-auto">
					<span className="underline underline-offset-4 opacity-90">
					{personalInfo.title}
					</span>{' '}
					creating sleek UIs with
					<FlipWords
						className="text-white opacity-90 font-bold"
						words={technologies}
					/>
					<br />
					Leveraging modern web technologies to create efficient, scalable applications that address real-world challenges.
				</p>

				<Button asChild variant="defaultGradient" size="default">
					<a href="/contact">Contact</a>
				</Button>
			</div>

			<div className="absolute bottom-8 z-10">
				<a
					href="#featured"
					className="text-white/75 hover:text-white transition-colors duration-600 animate-pulse"
					aria-label="Scroll to featured projects">
					<ArrowDown size={16} />
				</a>
			</div>
		</section>
	);
}
