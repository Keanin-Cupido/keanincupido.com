import React from 'react';
import { blogPosts } from '../lib/data/data'; // Importing blog posts data
import { Link } from 'react-router-dom';

const BlogPostCard = ({ title, excerpt, date, tags, url }) => {
	return (
		<div className="bg-blue-600/35 shadow-md rounded-lg p-6 w-full flex flex-col items-start justify-between min-h-[275px]">
			<header className="flex flex-col items-start justify-start gap-2">
				<Link to={`blog/${url}`}>
					<h2 className="text-[clamp(20px,2vw,24px)] font-bold hover:underline underline-offset-4">
						{title}
					</h2>
				</Link>
				<p className="text-gray-300 text-[clamp(18px,1.5vw,20px)]">
					{excerpt}
				</p>
				<div className="flex flex-wrap mt-2">
					{tags.map((tag, index) => (
						<span
							key={index}
							className="bg-blue-200 text-blue-800 text-[clamp(16px,0.9vw,18px)] font-semibold mr-2 px-2.5 py-0.5 rounded">
							{tag}
						</span>
					))}
				</div>
			</header>
			<p className="text-gray-400 text-[clamp(14px,1vw,16px)] mt-4">
				{date}
			</p>
		</div>
	);
};

export default BlogPostCard;
