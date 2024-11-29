// components
import PageHero from '@/components/PageHero';
import { useState } from 'react';
import { projects } from '@/lib/data/data'; // Import projects data
import ProjectCard from '@/components/ProjectCard'; // Import ProjectCard component
import { AnimatedSection } from '@/components/ui/animated-section';

export default function Portfolio() {
	const [activeFilter, setActiveFilter] = useState('all');

	const filterCategories = [
		{ title: 'All', value: 'all' },
		{ title: 'React', value: 'react' },
		{ title: 'Astro.js', value: 'astrojs' },
		{ title: 'Next.js', value: 'nextjs' },
		{ title: 'Svelte', value: 'svelte' },
		{ title: 'Miscellaneous', value: 'miscellaneous' },
	];

	const filteredProjects = projects.filter(
		(project) =>
			activeFilter === 'all' || project.category === activeFilter,
	);

	return (
		<main className="min-h-screen">
			<AnimatedSection animation="fade-up">
				<PageHero
					pageName={'Portfolio'}
					pageSubText={'Explore my projects by technology'}
				/>
			</AnimatedSection>

			{/* Filter Buttons */}
			<AnimatedSection animation="fade-up">
				<div
					className="flex flex-wrap justify-center gap-3 px-4 mt-12"
					role="tablist">
					{filterCategories.map((category) => (
						<button
							key={category.value}
							onClick={() => setActiveFilter(category.value)}
							className={`px-4 py-2 rounded-full transition-all ${
								activeFilter === category.value
									? 'bg-blue-600 text-white'
									: 'hover:bg-blue-800'
							}`}
							role="tab"
							aria-selected={activeFilter === category.value}
							aria-controls="projects-grid">
							{category.title}
						</button>
					))}
				</div>
			</AnimatedSection>

			{/* Projects Grid */}
			<AnimatedSection animation="fade-up">
				<div
					id="projects-grid"
					className="container mx-auto grid grid-cols-1 gap-6 p-4 mt-12 mb-16"
					role="tabpanel">
					{filteredProjects.length > 0 ? (
						filteredProjects.map((project) => (
							<ProjectCard
								key={project.title}
								link={project.projectInfo}
								image={project.image}
								title={project.title}
								subtext={project.description}
								techUsedIcons={project.technologies}
								liveLink={project.demoUrl}
								githubLink={project.sourceUrl}
							/>
						))
					) : (
						<p className="col-span-full text-center text-gray-500 dark:text-gray-400">
							No projects found for this category.
						</p>
					)}
				</div>
			</AnimatedSection>
		</main>
	);
}
