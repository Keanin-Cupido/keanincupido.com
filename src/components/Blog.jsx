import { Suspense } from 'react';
import { useImage } from 'react-image';

// components
import Heading from './Heading';
import { Button } from './ui/button';
import BlogPostCard from './BlogPostCard';

// data
import { blogPosts } from '@/lib/data/data';

function ScribbleLine2() {
	const { src } = useImage({
		srcList: '/scribble_line5.png',
	});

	return (
		<img
			src={src}
			alt="scribble shapes"
			className="absolute -bottom-[12px] items-center w-full max-w-[350px] h-[40px] invert opacity-50"
		/>
	);
}

export default function Blog() {
	return (
		<section className="w-full mx-auto mt-responsive-container">
			<div className="relative flex items-center justify-center">
				<Heading
					headingTop="Writing"
					headingMiddle="Blogging"
					headingShortDesc="Read what I'm learning."
				/>

				<Suspense>
					<ScribbleLine2 />
				</Suspense>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-24">
				{blogPosts.map((post, index) => (
					<BlogPostCard
						key={index}
						title={post.title}
						excerpt={post.excerpt}
						date={post.date}
						tags={['React', 'Web Development']} // Example tags
						url={post.url}
					/>
				))}
			</div>

			<div className="text-center p-8 mt-12">
				<Button asChild variant="defaultGradient" size="md">
					<a href="/blog">All Posts</a>
				</Button>
			</div>
		</section>
	);
}
