import React from 'react';
import { Outlet } from 'react-router-dom';

// components
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Root() {
	return (
		<React.Fragment>
			<a id="top"></a>

			{/* Background Filters */}
			<svg
				className="w-full pointer-events-none fixed top-0 isolate z-50 opacity-70 mix-blend-soft-light"
				width="100%"
				height="100%"
				aria-hidden="true">
				<filter id="noise" className="w-full h-full">
					<feTurbulence
						type="fractalNoise"
						baseFrequency="0.80"
						numOctaves="4"
						stitchTiles="stitch"></feTurbulence>
				</filter>
				<rect width="100%" height="100%" filter="url(#noise)"></rect>
			</svg>
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
			<main className="w-full container mx-auto" role="main">
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
		</React.Fragment>
	);
}
