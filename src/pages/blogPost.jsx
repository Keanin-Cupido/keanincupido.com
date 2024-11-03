import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

// styles
import style from '@/styles/markdown-styles.module.css';

// posts
import { posts } from '@/lib/data/posts';

const BlogPost = () => {
	const { filename } = useParams();

	let [postData, setPostData] = useState({
		title: '',
		date: '',
		tags: [],
		article: '',
	});
	let location = useLocation();

	useEffect(() => {
		const foundPost = posts.find((post) => post.url === location.pathname);
		if (foundPost) {
			setPostData(foundPost);
		}
	}, [location.pathname]);

	const [markdownContent, setMarkdownContent] = useState('');

	useEffect(() => {
		fetch(`/posts/${filename}.md`)
			.then((response) => response.text())
			.then((text) => setMarkdownContent(text));
	}, []);

	return (
		<article
			className="w-full max-w-[90%] mx-auto p-4 my-12"
			role="article"
			aria-labelledby="post-title">
			<h1
				id="post-title"
				className="text-[clamp(32px,5vw,48px)] font-bold mb-4"
				aria-level="1">
				{postData.title}
			</h1>
			<p
				className="text-gray-300 mb-4 text-center text-[clamp(18px,2vw,20px)]"
				aria-label="Published date">
				{postData.date}
			</p>
			<div
				className="w-full flex items-center justify-center flex-wrap mb-4"
				aria-label="Post tags">
				{postData.tags.map((tag, index) => (
					<div
						key={index}
						className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-[clamp(16px,1.5vw,18px)] mr-2 mb-2"
						role="note"
						aria-label={`Tag: ${tag}`}>
						{tag}
					</div>
				))}
			</div>
			<div className="prose mt-12" aria-label="Post content">
				<ReactMarkdown className={style.reactMarkDown}>
					{markdownContent}
				</ReactMarkdown>
			</div>
		</article>
	);
};

export default BlogPost;
