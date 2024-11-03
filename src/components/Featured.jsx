import React, { Suspense } from 'react';
import { useImage } from 'react-image';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import { Separator } from './ui/separator';
import Heading from './Heading';
import { projects } from '@/lib/data/data';
import LoadingSpinner from '@/components/ui/loading';

const FeaturedProject = ({ img, title, subtitle, tech, link }) => {
	const { src, isLoading } = useImage({
		srcList: img,
		useSuspense: false,
	});

	return (
		<Link
			to={link}
			className="group flex flex-col items-center gap-4 transition-all"
			aria-label={`View ${title} project details`}>
			<div className="relative w-full h-[75vh] aspect-video">
				{isLoading ? (
					<LoadingSpinner className="absolute inset-0 m-auto" />
				) : (
					<img
						src={src}
						alt={`${title} - ${subtitle}`}
						className="w-full h-full max-w-[clamp(300px,100%,1000px)] mx-auto object-cover rounded-lg shadow-xl transition 
                     duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl"
					/>
				)}
			</div>

			<div className="flex flex-col items-center text-center gap-2 mt-6 
                    md:opacity-0 md:transform md:translate-y-2
                    transition-all duration-300 
                    group-hover:opacity-100 group-hover:translate-y-0">
				<h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
				<h3 className="text-xl md:text-2xl text-muted-foreground">{subtitle}</h3>
				
				<Separator className="w-4/5 my-4" />
				
				<ul className="flex flex-wrap justify-center gap-4 text-lg">
					{tech.map((item, index) => (
						<li key={index} className="text-muted-foreground">
							{item}
						</li>
					))}
				</ul>
			</div>
		</Link>
	);
};

export default function Featured() {
	const [featuredProject, ...otherProjects] = projects;

	return (
		<section 
			className="container mx-auto px-4 py-16 space-y-16"
			aria-labelledby="featured-heading"
			id="featured"
		>
			<Heading
				headingTop="Main Project"
				headingMiddle="Featured"
				headingShortDesc="A great portfolio allows the work to speak for itself. Here are some of the best."
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
					className="text-4xl md:text-5xl font-medium"
				>
					More
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{otherProjects.map((project) => (
						<ProjectCard
							key={project.title}
							{...project}
							link={project.projectInfo}
							image={project.image}
							subtext={project.description}
							techUsedIcons={project.technologies}
						/>
					))}
				</div>
			</section>

			<div className="text-center">
				<Button 
					asChild 
					variant="defaultGradient" 
					size="lg"
					className="font-medium"
				>
					<Link to="/portfolio">View All Projects</Link>
				</Button>
			</div>
		</section>
	);
}
