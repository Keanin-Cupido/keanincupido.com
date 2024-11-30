import React, { memo } from 'react';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectCard = memo(({
	link,
	image,
	title,
	subtext,
	techUsedIcons,
	liveLink,
	githubLink,
}) => {
	// Memoize the trimmed text
	const trimmedSubText = React.useMemo(() => 
		subtext?.slice(0, 100) + (subtext?.length > 100 ? '...' : ''),
		[subtext]
	);

	return (
		<article
			className="group relative w-full min-h-[min(250px,350px)] px-4 pt-8 pb-4 lg:p-6 
				bg-black/10 rounded-xl flex flex-col lg:flex-row 
				items-start gap-6 overflow-hidden border border-gray-800/50
				transition-colors duration-200 hover:border-gray-700/70
				backdrop-blur-sm will-change-transform"
			role="article"
			aria-label={`Project: ${title}`}>
			{/* Content Section */}
			<div className="w-full lg:w-1/2 flex flex-col items-start gap-2 z-10">
				<Badge
					variant="secondary"
					className="hidden lg:flex text-xs tracking-wider rounded-full 
						px-4 py-1 bg-gray-800/70 text-gray-100">
					{techUsedIcons[0]}
				</Badge>

				<Link
					to={link}
					className="group/title w-full text-2xl md:text-xl 
						font-bold tracking-tight lg:pt-4 text-center lg:text-left 
						text-gray-100 hover:text-gray-400 transition-colors"
					aria-label={`View ${title} project details`}>
					<span>
						{title}
					</span>
				</Link>

				<p
					className="w-full max-w-[60vw] mx-auto text-xs sm:text-sm lg:text-base 
					text-gray-300 text-center lg:text-left">
					{trimmedSubText}
				</p>

				<div className="flex flex-wrap items-center justify-start mx-auto md:mx-0 gap-2">
					{techUsedIcons.slice(0, 4).map((icon, index) => (
						<Badge
							key={icon + index}
							variant="secondary"
							className="bg-gray-800/70 text-gray-100 px-3 py-1 
								text-xs font-medium transition-colors hover:bg-gray-700/70">
							{icon}
						</Badge>
					))}
				</div>

				<div className="flex items-center justify-start gap-6 pt-4">
					{liveLink && (
						<a
							href={liveLink}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 text-gray-100 
								font-semibold hover:text-gray-300 transition-colors"
							aria-label={`View live demo of ${title}`}>
							Live Demo
							<ArrowUpRight className="w-5 h-5" />
						</a>
					)}
					{githubLink && (
						<a
							href={githubLink}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 text-gray-100 
								font-semibold hover:text-gray-300 transition-colors"
							aria-label={`View ${title} source code on GitHub`}>
							GitHub
							<ArrowUpRight className="w-5 h-5" />
						</a>
					)}
				</div>
			</div>

			{/* Image Section */}
			<Link
				to={link}
				className="w-full h-full max-h-[200px] lg:w-1/2 aspect-video lg:aspect-square 
					overflow-hidden rounded-lg transition-transform duration-200 
					hover:scale-[1.01]"
				aria-label={`View ${title} project screenshot`}>
				<img
					src={image}
					alt={`Screenshot of ${title} project`}
					className="w-full object-cover object-left 
						transition-transform duration-200 hover:scale-[1.01]"
					loading="lazy"
					decoding="async"
				/>
			</Link>
		</article>
	);
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
