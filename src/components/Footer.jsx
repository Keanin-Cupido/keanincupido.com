import React, { Suspense } from 'react';
import { useImage } from 'react-image';
import { Link } from 'react-router-dom';
import { Separator } from './ui/separator';

// utils
import { scrollToTop } from '@/lib/scrollToTop';

// data
import { personalInfo } from '../lib/data/data';

// images
import LogoImage from './LogoImage';

function FooterImageComponent() {
	const { src } = useImage({
		srcList: '/blob-scene-haikei.svg',
	});

	return (
		<img
			src={src}
			alt="footer shapes"
			className="-z-10 absolute top-0 left-0 w-full h-full object-cover opacity-35 rounded-2xl"
		/>
	);
}

export default function Footer() {
	return (
		<footer
			className="min-h-[calc(60vh-8.5rem)] relative bg-gradient-to-b from-blue-900/10 to-blue-600/5 flex flex-col items-center justify-center gap-4 mx-4 mt-28 mb-12 py-16 rounded-2xl"
			aria-label="Footer">
			<LogoImage size="md" />
			<Suspense>
				<FooterImageComponent />
			</Suspense>

			<div className="container mx-auto px-4 text-center">
				<p aria-hidden="true" className="font-light opacity-75">
					&copy; {new Date().getFullYear()} {personalInfo.name}. All
					rights reserved.
				</p>
				<Separator className="max-w-[35%] mx-auto mt-4 bg-white/15" />
				<div
					className="mt-4"
					role="navigation"
					aria-label="Social Media Links">
					<Link
						to={personalInfo.social.github}
						target="_blank"
						rel="noopener noreferrer"
						className="mx-2 hover:opacity-70 text-white hover:underline hover:underline-offset-4"
						aria-label={`Visit ${personalInfo.name}'s GitHub profile`}>
						GitHub
					</Link>
					<Link
						to={personalInfo.social.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						className="mx-2 hover:opacity-70 text-white hover:underline hover:underline-offset-4"
						aria-label={`Visit ${personalInfo.name}'s LinkedIn profile`}>
						LinkedIn
					</Link>
					<Link
						to={personalInfo.social.twitter}
						target="_blank"
						rel="noopener noreferrer"
						className="mx-2 hover:opacity-70 text-white hover:underline hover:underline-offset-4"
						aria-label={`Visit ${personalInfo.name}'s Twitter profile`}>
						Twitter
					</Link>
				</div>
			</div>

			{/* Back to Top Button */}
			<a
				href="#"
				onClick={scrollToTop}
				className="absolute animate-pulse text-[clamp(14px,1vw,16px)] hover:underline underline-offset-4 bottom-8 right-8 text-white/75 rounded-full hover:opacity-50 transition"
				aria-label="Back to top">
				↑ Back to top
			</a>
		</footer>
	);
}
