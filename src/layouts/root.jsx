import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

// components
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Root() {
	const [showBackToTop, setShowBackToTop] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setShowBackToTop(window.scrollY > 300);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<React.Fragment>
			<a id="top"></a>
			
			<svg
				className="w-full pointer-events-none left-0 bottom-0 fixed opacity-50 inset-0 z-40"
				width="100%"
				height="100%"
				aria-hidden="true">
				<defs>
					<radialGradient
						id="blueGradient"
						cx="50%"
						cy="50%"
						r="50%"
						fx="50%"
						fy="50%">
						<stop
							offset="0%"
							style={{
								stopColor: 'rgba(77, 130, 255, 0.45)',
								stopOpacity: 1,
							}}
						/>
						<stop
							offset="25%"
							style={{
								stopColor: 'rgba(77, 130, 255, 0.35)',
								stopOpacity: 1,
							}}
						/>
						<stop
							offset="50%"
							style={{
								stopColor: 'rgba(77, 130, 255, 0.2)',
								stopOpacity: 1,
							}}
						/>
						<stop
							offset="75%"
							style={{
								stopColor: 'rgba(77, 130, 255, 0.1)',
								stopOpacity: 1,
							}}
						/>
						<stop
							offset="100%"
							style={{
								stopColor: 'rgba(77, 130, 255, 0)',
								stopOpacity: 1,
							}}
						/>
					</radialGradient>
				</defs>
				<circle cx="50%" cy="0%" r="100%" fill="url(#blueGradient)" />
			</svg>

			{/* Main Content */}
			<main className="relative w-full max-w-[1024px] container mx-auto" role="main">
				<Header />
				<section
					className="w-full mx-auto my-2 z-100"
					aria-labelledby="main-content">
					<h2 id="main-content" className="sr-only">
						Main Content
					</h2>
					<Outlet />
				</section>
				<Footer />
			</main>

			{/* Back to Top Button */}
			<button
				onClick={scrollToTop}
				aria-label="Back to top"
				className={`fixed bottom-8 right-8 p-2 bg-primary/20 hover:bg-primary/10 border border-white/15 text-white rounded-lg shadow-lg transition-all duration-300 z-50 ${
					showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
				}`}
			>
				<ArrowUp className="h-4 w-4 opacity-80" />
			</button>
		</React.Fragment>
	);
}
