import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import { projects } from '@/lib/data/data';
import { AnimatedSection } from '@/components/ui/animated-section';

export default function ProjectInfo() {
	const [projectData, setProjectData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const location = useLocation();

	useEffect(() => {
		const fetchProject = () => {
			setIsLoading(true);
			const project = projects.find(
				(p) => p.projectInfo === location.pathname,
			);
			setProjectData(project || null);
			setIsLoading(false);
		};

		fetchProject();
	}, [location.pathname]);

	if (isLoading) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary" />
			</div>
		);
	}

	if (!projectData) {
		return (
			<div className="min-h-screen flex flex-col items-center justify-center gap-4">
				<h1 className="text-2xl font-bold">Project Not Found</h1>
				<Link
					to="/portfolio"
					className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
					Return to Portfolio
				</Link>
			</div>
		);
	}

	return (
		<main className="container mx-auto px-4 py-8">
			<AnimatedSection animation="fade-up">
				<PageHero
					pageName={projectData.title}
					pageSubText={projectData.description}
				/>
			</AnimatedSection>

			{/* Technologies */}
			<AnimatedSection animation="fade-up">
				<section
					className="flex flex-wrap items-center justify-center gap-4 mb-12"
					aria-label="Technologies used in the project">
					{projectData.technologies.map((tech) => (
						<div
							key={tech}
							className="px-4 py-2 bg-zinc-600/25 rounded-full"
							aria-label={`Technology: ${tech}`}>
							<span className="text-sm font-medium">{tech}</span>
						</div>
					))}
				</section>
			</AnimatedSection>

			<section className="space-y-8">
				<AnimatedSection animation="fade-up">
					<div className="relative mx-auto w-1/2 aspect-video">
						<img
							src={projectData.image}
							alt={`Screenshot of ${projectData.title}`}
							className="rounded-lg shadow-lg object-cover"
							loading="lazy"
						/>
					</div>
				</AnimatedSection>

				<AnimatedSection animation="fade-up">
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						{projectData.demoUrl && (
							<a
								href={projectData.demoUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
								aria-label={`View live demo of ${projectData.title}`}>
								Live Demo
							</a>
						)}
						{projectData.sourceUrl && (
							<a
								href={projectData.sourceUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
								aria-label={`View source code of ${projectData.title}`}>
								Source Code
							</a>
						)}
					</div>
				</AnimatedSection>

				<AnimatedSection animation="fade-up">
					<div className="prose dark:prose-invert max-w-none">
						<h2 className="text-xl font-semibold mb-4">
							Project Category
						</h2>
						<p className="text-gray-600 dark:text-gray-300">
							{projectData.category}
						</p>
						{projectData.projectInfo && (
							<>
								<h2 className="text-xl font-semibold mb-4">
									Project Details
								</h2>
								<p className="text-gray-600 dark:text-gray-300">
									{projectData.projectInfo}
								</p>
							</>
						)}
					</div>
				</AnimatedSection>
			</section>
		</main>
	);
}
