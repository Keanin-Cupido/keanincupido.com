import React, { Suspense, memo } from 'react';
import { useImage } from 'react-image';
import { Link } from 'react-router-dom';
import { Separator } from './ui/separator';
import { scrollToTop } from '@/lib/scrollToTop';
import { personalInfo } from '../lib/data/data';
import LogoImage from './LogoImage';

const FooterImageComponent = memo(function FooterImageComponent() {
	const { src } = useImage({
		srcList: '/blob-scene-haikei.svg',
		loading: 'lazy',
	});

	return (
		<img
			src={src}
			alt=""
			role="presentation"
			loading="lazy"
			decoding="async"
			className="-z-10 absolute top-0 left-0 w-full h-full object-cover opacity-20 rounded-2xl"
		/>
	);
});

function SocialLink({ href, label }) {
	return (
		<Link
			to={href}
			target="_blank"
			rel="noopener noreferrer"
			className="mx-2 transition-opacity duration-200 hover:opacity-70 text-white hover:underline hover:underline-offset-4 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent rounded"
			aria-label={`Visit ${personalInfo.name}'s ${label} profile`}>
			{label}
		</Link>
	);
}

const Footer = memo(function Footer() {
	const currentYear = new Date().getFullYear();
	const socialLinks = [
		{ href: personalInfo.social.github, label: 'GitHub' },
		{ href: personalInfo.social.linkedin, label: 'LinkedIn' },
		{ href: personalInfo.social.twitter, label: 'Twitter' },
	];

	return (
		<footer
			className="relative min-h-[calc(30vh)] bg-gradient-to-b from-blue-900/10 to-blue-600/5 flex flex-col items-center justify-center gap-4 mx-4 mt-28 mb-12 py-12 rounded-2xl"
			aria-label="Footer">
			<LogoImage size="md" />
			<Suspense fallback={null}>
				<FooterImageComponent />
			</Suspense>

			<div className="container mx-auto px-4 text-center">
				<p aria-hidden="true" className="font-light opacity-75">
					&copy; {currentYear} {personalInfo.name}. All rights reserved.
				</p>
				<Separator className="max-w-[35%] mx-auto mt-4 bg-white/15" />
				<nav
					className="mt-4"
					aria-label="Social Media Links">
					{socialLinks.map(({ href, label }) => (
						<SocialLink key={label} href={href} label={label} />
					))}
				</nav>
			</div>

			<button
				onClick={scrollToTop}
				className="absolute animate-bounce duration-1000 hover:duration-300 text-[clamp(14px,1vw,16px)] hover:underline underline-offset-4 bottom-8 right-8 text-white/75 rounded-full hover:opacity-50 transition focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent p-2"
				aria-label="Back to top">
				↑ Back to top
			</button>
		</footer>
	);
});

export default Footer;
