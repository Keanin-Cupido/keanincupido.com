import { Suspense, lazy } from 'react';
import Hero from '@/components/Hero';
import Loading from '@/components/ui/loading';

// Lazy load components for better initial page load
const Featured = lazy(() => import('@/components/Featured'));
const About = lazy(() => import('@/components/About'));
const Skills = lazy(() => import('@/components/Skills'));
const Contact = lazy(() => import('@/components/Contact'));

export default function Home() {
	return (
		<main 
			className="mx-auto px-4 scrollbar-hide"
			role="main"
			aria-label="Home page"
		>
			{/* Hero section is loaded immediately for fast LCP */}
			<Hero />

			{/* Wrap lazy-loaded components in Suspense */}
			<Suspense fallback={<Loading />}>
				<section className="space-y-32">
					<Featured />
					<About />
					<Skills buttonDisplay={true} />
					<Contact />
				</section>
			</Suspense>
		</main>
	);
}
