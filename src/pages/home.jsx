import { Suspense, lazy } from 'react';
import Hero from '@/components/Hero';
import Loading from '@/components/ui/loading';
import { AnimatedSection } from '@/components/ui/animated-section';

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
				<section className="space-y-8">
					<Featured />
					
					<AnimatedSection animation="fade-up">
						<About />
					</AnimatedSection>
					
					<AnimatedSection animation="fade-up">
						<Skills buttonDisplay={true} />
					</AnimatedSection>
					
					<AnimatedSection animation="fade-up">
						<Contact />
					</AnimatedSection>
				</section>
			</Suspense>
		</main>
	);
}
