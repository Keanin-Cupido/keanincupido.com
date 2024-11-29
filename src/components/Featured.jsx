import React, { Suspense } from 'react';
import { useImage } from 'react-image';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import { Separator } from './ui/separator';
import Heading from './Heading';
import { projects } from '@/lib/data/data';
import LoadingSpinner from '@/components/ui/loading';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/animated-section';

const FeaturedProject = ({ img, title, subtitle, tech, link }) => {
	const { src, isLoading } = useImage({
		srcList: img,
		useSuspense: false,
	});

	return (
		<Link
			to={link}
			className="group relative w-full mx-auto overflow-hidden rounded-lg"
			aria-label={`View ${title} project details`}
		>
			{/* Image Container */}
			{isLoading ? (
				<LoadingSpinner className="absolute inset-0 m-auto" />
			) : (
				<img
					src={src}
					alt={`${title} - ${subtitle}`}
					className="w-3/4 mx-auto h-[40vh] object-cover object-top pt-8 transition duration-500 
						group-hover:scale-95 rounded-lg"
				/>
			)}

			{/* Overlay - Hidden by default, shown on hover */}
			<div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/30 group-hover:opacity-100 transition-all duration-500 rounded-lg
				flex flex-col justify-end p-6 text-white">
				
				<div className="transform translate-y-4 group-hover:translate-y-0 
					transition-transform duration-300 space-y-4 p-4">
					<h2 className="text-3xl md:text-2xl font-bold">{title}</h2>
					<p className="text-lg md:text-base text-gray-200">{subtitle}</p>
					
					<Separator className="w-4/5 my-4 bg-white/20" />
					
					<ul className="flex flex-wrap gap-2">
						{tech.map((item, index) => (
							<li key={index} 
								className="px-3 py-1 text-xs md:text-sm rounded-full bg-white/10 text-gray-100">
								{item}
							</li>
						))}
					</ul>
				</div>
			</div>
		</Link>
	);
};

export default function Featured() {
	const [featuredProject, ...otherProjects] = projects;

	return (
		<section 
			className="container mx-auto py-8 space-y-16"
			aria-labelledby="featured-heading"
			id="featured"
		>
			<Heading
				headingMiddle="Featured"
				headingShortDesc="A great portfolio allows the work to speak for itself."
				id="featured-heading"
			/>

			<Suspense fallback={<LoadingSpinner className="mx-auto" />}>
				<FeaturedProject
					img={featuredProject.image}
					title={featuredProject.title}
					subtitle={featuredProject.description}
					tech={featuredProject.technologies}
					link={featuredProject.projectInfo}
				/>
			</Suspense>

			<section className="space-y-8" aria-labelledby="more-projects">
				<h2 
					id="more-projects"
					className="text-3xl md:text-2xl text-center md:text-left font-medium"
				>
					More
				</h2>

				<div className="grid grid-cols-1 gap-8">
					{otherProjects.map((project) => (
						<AnimatedSection key={project.title} animation="fade-left">
							<ProjectCard
								{...project}
								link={project.projectInfo}
								image={project.image}
								subtext={project.description}
								techUsedIcons={project.technologies}
							/>
						</AnimatedSection>
					))}
				</div>

				<div className="text-center md:text-left">
					<Link 
						to="/portfolio" 
						className='font-medium transition-all duration-300 underline underline-offset-8 group'
						aria-label="View all projects"
					>
						View All Projects 
						<ArrowRight className="inline ml-2 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
					</Link>
				</div>
			</section>
		</section>
	);
}
