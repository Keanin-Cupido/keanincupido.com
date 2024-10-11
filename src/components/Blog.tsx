import React from 'react';
import { blogPosts } from '@/data/portfolio';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Blog: React.FC = () => {
	return (
		<section id="blog" className="py-20">
			<div className="mx-auto px-4">
				<h2 className="text-3xl font-bold mb-8 text-center md:text-left">
					Latest Blog Posts
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{blogPosts.map((post) => (
						<Card key={post.title}>
							<CardHeader>
								<CardTitle>{post.title}</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="mb-2">{post.excerpt}</p>
								<p className="text-sm text-muted-foreground">
									{post.date}
								</p>
							</CardContent>
							<CardFooter>
								<Button asChild>
									<a href={post.url}>Read More</a>
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default Blog;
