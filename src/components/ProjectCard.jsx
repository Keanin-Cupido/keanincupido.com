import React from 'react';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectCard = ({
	link,
	image,
	title,
	subtext,
	techUsedIcons,
	liveLink,
	githubLink,
}) => {
	const trimmedSubText =
		subtext?.slice(0, 100) + (subtext?.length > 100 ? '...' : '');

	return (
		<article
			className="group relative w-full min-h-[min(400px,70vh)] p-4 lg:p-6 
				bg-black/10 rounded-xl flex flex-col-reverse lg:flex-row 
				items-center gap-6 overflow-hidden border border-gray-800/30
				transition-all duration-300 hover:border-gray-700/50
				backdrop-blur-sm hover:backdrop-blur-md"
			role="article"
			aria-label={`Project: ${title}`}>
			{/* Content Section */}
			<div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-4 z-10">
				<Badge
					variant="secondary"
					className="hidden lg:flex capitalize text-sm tracking-wider rounded-full 
						px-4 py-1 bg-gray-800/70 text-gray-100">
					{techUsedIcons[0]}
				</Badge>

				<Link
					to={link}
					className="group/title w-full text-2xl sm:text-3xl lg:text-4xl 
						font-bold tracking-tight lg:pt-4 text-center lg:text-left 
						text-gray-100 transition-colors"
					aria-label={`View ${title} project details`}>
					<span
						className="bg-gradient-to-r from-gray-100 to-gray-100 
						bg-[length:0px_2px] bg-left-bottom bg-no-repeat 
						transition-[background-size] duration-300 
						group-hover/title:bg-[length:100%_2px]">
						{title}
					</span>
				</Link>

				<p
					className="w-full text-base sm:text-lg lg:text-xl 
					text-gray-300 text-center lg:text-left">
					{trimmedSubText}
				</p>

				<div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
					{techUsedIcons.map((icon, index) => (
						<Badge
							key={index}
							variant="secondary"
							className="capitalize bg-gray-800/70 text-gray-100 px-3 py-1 
								text-sm font-medium transition-colors hover:bg-gray-700/70">
							{icon}
						</Badge>
					))}
				</div>

				<div className="flex items-center justify-center lg:justify-start gap-6 pt-4">
					{liveLink && (
						<a
							href={liveLink}
							target="_blank"
							rel="noopener noreferrer"
							className="group/link flex items-center gap-2 text-gray-100 
								font-semibold transition-colors hover:text-gray-300"
							aria-label={`View live demo of ${title}`}>
							Live Demo
							<ArrowUpRight
								className="w-5 h-5 transition-transform 
								group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
							/>
						</a>
					)}
					{githubLink && (
						<a
							href={githubLink}
							target="_blank"
							rel="noopener noreferrer"
							className="group/link flex items-center gap-2 text-gray-100 
								font-semibold transition-colors hover:text-gray-300"
							aria-label={`View ${title} source code on GitHub`}>
							GitHub
							<ArrowUpRight
								className="w-5 h-5 transition-transform 
								group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
							/>
						</a>
					)}
				</div>
			</div>

			{/* Image Section */}
			<Link
				to={link}
				className="w-full lg:w-1/2 aspect-video lg:aspect-square 
					overflow-hidden rounded-lg transition-transform duration-500 
					group-hover:scale-[1.02]"
				aria-label={`View ${title} project screenshot`}>
				<img
					src={image}
					alt={`Screenshot of ${title} project`}
					className="w-full h-full object-cover object-center 
						transition-transform duration-500 group-hover:scale-105"
					loading="lazy"
				/>
			</Link>
		</article>
	);
};

export default ProjectCard;
