import BlogPostCard from '@/components/BlogPostCard';
import PageHero from '@/components/PageHero';
import { blogPosts } from '@/lib/data/data';

export default function Blog() {
	return (
		<main>
			<PageHero pageName={'Blog'} pageSubText={'Read what I write.'} />

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 mt-24">
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
		</main>
	);
}
